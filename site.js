(() => {
  // Keep film previews visible while the original stills are uploaded.
  const useYouTubeThumbnailIfMissing = (image, id) => {
    if (!image || !id) return;
    const fallback = () => {
      if (image.dataset.thumbnailFallback) return;
      image.dataset.thumbnailFallback = 'youtube';
      image.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    };
    image.addEventListener('error', fallback);
    if (image.complete && image.naturalWidth === 0) fallback();
  };
  useYouTubeThumbnailIfMissing(document.querySelector('.hero-video'), 'MDRBGM2c8nE');
  document.querySelectorAll('.has-hover-video').forEach(media => {
    useYouTubeThumbnailIfMissing(media.querySelector('img'), media.querySelector('[data-hover-youtube]')?.dataset.hoverYoutube);
  });

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !navigator.connection?.saveData && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const previews = [...document.querySelectorAll('[data-hover-youtube]')];
    const stop = frame => {
      frame.removeAttribute('src');
      frame.parentElement.classList.remove('is-playing');
    };
    previews.forEach(frame => {
      const media = frame.parentElement;
      media.addEventListener('pointerenter', () => {
        previews.forEach(other => { if (other !== frame) stop(other); });
        if (!frame.hasAttribute('src')) {
          const id = frame.dataset.hoverYoutube;
          frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${id}&rel=0`;
        }
      });
      media.addEventListener('pointerleave', () => stop(frame));
      frame.addEventListener('load', () => {
        if (frame.hasAttribute('src') && media.matches(':hover')) media.classList.add('is-playing');
      });
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (!entry.isIntersecting) stop(entry.target); });
    }, { threshold: 0.05 });
    previews.forEach(frame => observer.observe(frame));
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) previews.forEach(stop);
    });
  }

  // Keep visible compound words intact without preventing sentences from wrapping.
  // This runs after deferred project content is rendered on the detail pages.
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.design-cover img, .image-button img, .seamless-image img').forEach(image => {
      const showPending = () => {
        const holder = image.parentElement;
        if (holder.classList.contains('asset-pending')) return;
        holder.classList.add('asset-pending');
        if (holder.tagName === 'BUTTON') {
          holder.disabled = true;
          holder.setAttribute('aria-label', `Image upload pending: ${image.alt}`);
        }
      };
      image.addEventListener('error', showPending);
      if (image.complete && image.naturalWidth === 0) showPending();
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.includes('-') || node.parentElement?.closest('script, style, noscript, template, textarea, .keep-together, [contenteditable]')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    const compoundWord = /[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)+/gu;
    textNodes.forEach(node => {
      const matches = [...node.nodeValue.matchAll(compoundWord)];
      if (!matches.length) return;
      const fragment = document.createDocumentFragment();
      let start = 0;
      matches.forEach(match => {
        fragment.append(document.createTextNode(node.nodeValue.slice(start, match.index)));
        const word = document.createElement('span');
        word.className = 'keep-together';
        word.textContent = match[0];
        fragment.append(word);
        start = match.index + match[0].length;
      });
      fragment.append(document.createTextNode(node.nodeValue.slice(start)));
      node.replaceWith(fragment);
    });
  }, { once: true });
})();

