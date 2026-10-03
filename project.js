(() => {
  const A = path => `assets/${path}`;
  const P = path => `assets/previews/${path.replace(/\.[^.]+$/, '')}.webp`;
  const projects = [
    {
      id: 'gwangalli', number: '01', title: 'Gwangalli Beach', type: 'Cinematic Promotional Film', ratio: '16:9',
      summary: 'A cinematic promotional film showcasing Gwangalli Beach in Busan, South Korea.',
      heading: 'Busan, through the lens of Gwangalli.',
      description: 'A travel and promotional film developed, filmed and edited by Julia Bae. The film moves between the beach, the city and the moments that give Gwangalli its atmosphere. Related café cards are presented alongside the film as a separate visual project.',
      credit: 'Filmed, conceptualized, and edited by Julia Bae.',
      youtubeId: 'MDRBGM2c8nE', poster: 'gwangalli.jpg',
      role: 'Concept Development, Filming, Video Editing, Color Grading, Music Editing',
      tools: ['Video Editing: Adobe Premiere Pro', 'Related Café Cards: Adobe Photoshop, MiriCanvas'],
      extra: 'gwangalli'
    },
    {
      id: 'bebe-bakery', number: '02', title: 'BEBE BAKERY', type: 'Original Brand / AI Commercial', ratio: '16:9',
      summary: 'An original almond protein cake brand, developed from product concept to AI commercial.',
      heading: 'A brand built from the first idea.',
      description: 'I developed the product and brand concept, logo and packaging for six flavors, and product detail pages. Created in both Korean and English. That visual world became the foundation for an AI-assisted commercial, which I directed and edited.',
      credit: 'Conceptualized, designed, directed, and edited by Julia Bae.',
      youtubeId: 'HcP7eMdzmfw', poster: 'bebe.jpg',
      role: 'Concept Development, Product Design, Package Design, AI Art Direction, Video Editing, Color Grading, Sound Design, Music Editing',
      tools: ['Video Editing: Adobe Premiere Pro', 'Brand, Packaging & Product Detail Page Design: MiriCanvas'],
      extra: 'bebe'
    },
    {
      id: 'forest-coffee', number: '03', title: 'Where Nature Becomes Coffee', type: 'Cinematic Brand Film', ratio: '16:9',
      summary: 'A nature-inspired coffee concept told through atmosphere, rhythm and sensory detail.',
      heading: 'A sensory story in motion.',
      description: 'Nature and coffee meet in a cinematic brand film shaped through visual storytelling, color grading, music editing and the pacing of the final cut.',
      youtubeId: 'tjpV0x8p31o', poster: 'forest.jpg',
      role: 'Storytelling, Video Editing, Color Grading, Music Editing',
      tools: ['Adobe Premiere Pro']
    },
    {
      id: 'microplastics-psa', number: '07A', title: 'Microplastics / Public Service Poster', type: 'Personal Project',
      summary: 'A self-initiated public service poster about microplastics and ocean pollution.',
      heading: 'A visual warning about what we leave behind.',
      description: 'I developed the idea and message, directed an AI-generated image and edited the composition in Photoshop. This is a personal concept, not a commissioned or published campaign.',
      role: 'Concept Development, AI Image Direction, Image Editing, Poster Design',
      tools: ['Adobe Photoshop', 'AI Image Generation'], extra: 'psa'
    },
    {
      id: 'node-museum', number: '07B', title: 'Node Contemporary Museum', type: 'Personal Web / UI Design',
      summary: 'A bilingual web interface for a fictional contemporary museum.',
      heading: 'An imagined space, built for the screen.',
      description: 'A self-initiated web and UI concept for a fictional museum. Created in both Korean and English, the layouts show the same visual system across two languages. This is not a commissioned or live museum website.',
      role: 'Web / UI Design, Bilingual Content Layout', tools: ['Figma'], extra: 'node'
    },
    {
      id: 'bobae-packaging', number: '08A', title: 'Bobae Trading / French Fries Packaging', type: 'Commercial Work',
      summary: 'Three produced French fries bag designs, supported by original product photography.',
      heading: 'Packaging made for a real product.',
      description: 'For Bobae Trading, I photographed the product and designed three French fries bags in Illustrator. The designs were produced and are still used on products sold today.',
      role: 'Product Photography, Packaging Design', tools: ['Adobe Illustrator'], extra: 'bobae-packaging'
    },
    {
      id: 'bobae-posters', number: '08B', title: 'Bobae Trading / Promotional Posters', type: 'Commercial Work',
      summary: 'Photography-led promotional designs used for actual company events and products.',
      heading: 'Promotional work for a working business.',
      description: 'I photographed the featured products, retouched the images and designed promotional posters for actual company use. The original Korean copy and layouts remain intact.',
      role: 'Photography, Image Retouching, Promotional Poster Design',
      tools: ['Adobe Photoshop', 'MiriCanvas'], extra: 'bobae-posters'
    },
    {
      id: 'bigone', number: '09', title: 'BIG ONE / E-commerce Brand', type: 'Founder-led Commercial Work',
      summary: 'An independently founded Naver Smart Store, from brand and product photography to sales content.',
      heading: 'From the first product to the storefront.',
      description: 'I founded and operated BIG ONE as a Naver Smart Store. I developed the brand, photographed and retouched products, designed the e-commerce pages and sold the products myself. These are materials used in actual sales, not a speculative concept.',
      role: 'Brand Development, Product Photography, Image Retouching, E-commerce Content Design, Store Operation and Sales',
      tools: ['Adobe Photoshop', 'MiriCanvas'], extra: 'bigone'
    },
    {
      id: 'emoticons', number: '10A', title: 'KakaoTalk Emoticon Concepts', type: 'Personal Project',
      summary: 'Two complete 32-piece emoticon sheets, hand drawn in Procreate.',
      heading: 'Everyday character stories, drawn by hand.',
      description: 'I drew two character sets in Procreate: Today, the Wall-Climbing Squirrel and The Ordinary Campus Life of Glasses Rabbit. Their original artwork and Korean lettering are preserved. No release or approval is claimed.',
      role: 'Character Illustration, Emoticon Design', tools: ['Procreate'], extra: 'emoticons'
    },
    {
      id: 'cake-illustration', number: '10B', title: 'Café Cake Illustration', type: 'Real Store Use',
      summary: 'A cake illustration drawn in Procreate and displayed at a café where I worked.',
      heading: 'An illustration made for a real café.',
      description: 'While working at a café, I drew this cake illustration in Procreate. The finished artwork was displayed at the café. No display photograph was supplied, so only the original illustration is shown.',
      role: 'Illustration', tools: ['Procreate'], extra: 'cake'
    },
    {
      id: 'round-lab', number: '04', title: 'ROUND LAB | Korean Skincare Commercial', type: 'Personal Portfolio Commercial', ratio: '16:9',
      summary: 'A self-initiated product film for ROUND LAB Pine Tree Cica Deep Pore Clay Pack Cleanser 150ml.',
      heading: 'Product filming, extended by motion.',
      description: 'I filmed the product directly and built the commercial around that footage, bringing in selective AI-assisted visuals and motion graphics where they served the visual direction. This is an independent portfolio piece, not an official brand commission or collaboration.',
      credit: 'Conceptualized, filmed, directed, and edited by Julia Bae.',
      youtubeId: 'r_XAeO5DwEg', poster: 'round-lab.png',
      role: 'Concept Development, Visual Direction, Product Filming, AI-assisted Visual Production, Motion Graphics, Video Editing, Color Grading, Sound Design, Music Editing',
      tools: ['Video Editing: Adobe Premiere Pro']
    },
    {
      id: 'bb-bagel', number: '05', title: 'BB BAGEL', type: 'Personal Portfolio / Original Brand + AI Short Film', ratio: '9:16',
      summary: 'A rice-based vegan bagel brand brought from hand drawn identity to an AI-assisted short film.',
      heading: 'One Bite of Comfort.',
      description: 'Warm · Healthy · Comforting guides this self-initiated rice-based vegan bagel brand. I drew its logo, lettering and symbol by hand. The symbol echoes a bitten bagel opening its mouth; closed eyes express ease and comfort. The brand visuals then informed the direction of the AI short film. The designs below are visualizations and mockups, not photographs of a produced storefront or packaging.',
      credit: 'Conceptualized, designed, directed, and edited by Julia Bae.',
      youtubeId: 'BdpYAQRbu0A', poster: 'bb-bagel-crescent.jpg',
      role: 'Concept Development, Brand Identity Design, Direction, AI-assisted Visual Production, Video Editing, Sound Design',
      tools: ['Logo & Hand Lettering: Procreate', 'Business Cards: Procreate, Adobe Photoshop, Adobe Illustrator', 'Brand Concept Sheet: MiriCanvas', 'BB BAGEL 5 & 6: Adobe Illustrator, Adobe Photoshop', 'Video Editing: Adobe Premiere Pro'],
      extra: 'bagel'
    },
    {
      id: 'wish', number: '06', title: 'Wish', nativeTitle: '바람', type: 'Youth AI Shorts Festival Entry / AI Short Film', ratio: '9:16',
      summary: 'A story-led AI-assisted short film submitted to the Youth AI Shorts Festival.',
      heading: 'A story shaped for a short screen.',
      description: 'Wish (바람) brings together concept and story development, AI-assisted video production and editing in a vertical short film made for the Youth AI Shorts Festival.',
      youtubeId: 'm16UybQu5jQ', poster: 'wish.png',
      role: 'Concept Development, Story Development, AI-assisted Video Production, Video Editing',
      tools: ['Adobe Premiere Pro']
    }
  ];

  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const asset = (src, caption, note = '', classes = '') => `<figure class="asset-card ${classes}"><button class="image-button" type="button" data-open-image="${A(src)}" data-caption="${escape(caption)}" aria-label="Expand ${escape(caption)}"><img src="${P(src)}" alt="${escape(caption)}" ${/^design\/10-(squirrel|rabbit)\.png$/.test(src) ? 'width="766" height="1600"' : ''} loading="lazy" decoding="async"></button><figcaption><strong>${escape(caption)}</strong>${note ? `<span>${escape(note)}</span>` : ''}</figcaption></figure>`;
  const seamless = (src, caption) => `<button class="seamless-image" type="button" data-open-image="${A(src)}" data-caption="${escape(caption)}" aria-label="Expand ${escape(caption)}"><img src="${A(src)}" alt="${escape(caption)}" loading="lazy" decoding="async"></button>`;
  const section = (title, note, body, extra = '') => `<section class="project-section ${extra}"><div class="project-section-header"><h2>${title}</h2><p>${note}</p></div>${body}</section>`;
  const bigoneExt = {shrimp: {2:'gif',9:'gif',10:'gif',12:'gif',15:'gif',21:'jpg'}, octopus:{2:'gif',16:'gif',21:'gif'}, webfoot:{2:'gif',18:'gif',19:'png'}, cuttlefish:{2:'gif',17:'png'}};
  const bigoneProducts = [['shrimp','Shrimp',22],['octopus','Octopus',22],['webfoot','Webfoot Octopus',19],['cuttlefish','Cuttlefish',17]];

  function extraContent(project) {
    if (project.extra === 'gwangalli') {
      const cards = Array.from({length: 10}, (_, i) => asset(`gwangalli-card-${String(i + 1).padStart(2, '0')}.png`, `Gwangalli café card ${String(i + 1).padStart(2, '0')}`)).join('');
      return section('Related café cards', 'A related visual project presented alongside the film. Original Korean text and design are preserved.', `<div class="asset-grid gwangalli-card-grid">${cards}</div>`, 'project-media-narrow');
    }
    if (project.extra === 'bebe') {
      return section('English Version', 'Created in both Korean and English. The original English product page is shown first, in reading order. Select an image to enlarge.', `<div class="seamless-stack">${seamless('bebe-detail-v2-03.png', 'BEBE BAKERY English product page, first part')}${seamless('bebe-detail-v2-04.png', 'BEBE BAKERY English product page, second part')}</div>`, 'long-page-section')
        + section('Korean Version', 'The matching original Korean product page, in reading order.', `<div class="seamless-stack">${seamless('bebe-detail-v2-01.png', 'BEBE BAKERY Korean product page, first part')}${seamless('bebe-detail-v2-02.png', 'BEBE BAKERY Korean product page, second part')}</div>`, 'long-page-section');
    }
    if (project.extra === 'bagel') {
      const cards = `<div class="asset-grid">${asset('bb-card-front.jpg', 'Business card · Front', 'Procreate · Photoshop · Illustrator')}${asset('bb-card-back.jpg', 'Business card · Back', 'Procreate · Photoshop · Illustrator')}</div>`;
      const visuals = Array.from({length: 6}, (_, i) => asset(`bb-visual-${String(i + 1).padStart(2, '0')}.${i === 0 ? 'jpg' : 'png'}`, `BB BAGEL ${i + 1}`, i >= 4 ? 'Brand visualization · Illustrator · Photoshop' : 'Brand visualization / mockup', i >= 4 ? 'bb-visual-portrait' : 'bb-visual-landscape')).join('');
      return section('Business cards', 'Front and back, in that order.', cards, 'bb-art-section')
        + section('Brand visualizations', 'BB BAGEL 1–6, in the supplied order. These visuals are presented as concepts and mockups.', `<div class="asset-grid bb-visual-grid">${visuals}</div>`, 'bb-art-section');
    }
    if (project.extra === 'psa') return '';
    if (project.extra === 'node') return section('Korean Version', 'Created in both Korean and English. The original English version is shown above; this is the matching Korean UI design.', `<div class="seamless-stack design-long">${seamless('design/07-node-kr.png', 'Node Contemporary Museum Korean web design')}</div>`, 'long-page-section');
    if (project.extra === 'bobae-packaging') return section('Related product photography', 'Original photography supporting the produced package designs.', `<div class="asset-grid">${asset('design/08-bobae-02.jpg', 'French fries product photograph in promotional layout', 'Related original photography', 'full')}</div>`, 'project-media-narrow');
    if (project.extra === 'bobae-posters') return section('More promotional posters', 'Actual company use. The original photographs, Korean copy and designs are preserved.', `<div class="asset-grid">${Array.from({length:8}, (_,i) => asset(`design/08-bobae-${String(i+4).padStart(2,'0')}.jpg`, `Bobae Trading promotional design ${String(i+2).padStart(2,'0')}`)).join('')}</div>`);
    if (project.extra === 'bigone') {
      const products = bigoneProducts.map(([slug,title,last]) => {
        const images = Array.from({length:last+1}, (_,i) => {
          const stem = `bigone/${slug}/${String(i).padStart(2,'0')}`;
          const source = i === last ? `${stem}-site-20261003.png` : `${stem}.${bigoneExt[slug][i] || 'jpg'}`;
          return seamless(`${source}?v=20261003`, `${title} e-commerce detail content ${i}`);
        }).join('');
        return section(title, 'Original e-commerce content in its supplied numerical order. Select any image to enlarge.', `<div class="seamless-stack">${images}</div>`, 'long-page-section product-stack');
      }).join('');
      const banners = Array.from({length:4}, (_,i) => asset(`bigone/banner/${String(i+1).padStart(2,'0')}.jpg`, `BIG ONE banner ${i+1}`)).join('');
      const instagram = Array.from({length:5}, (_,i) => asset(`bigone/instagram/${String(i+2).padStart(2,'0')}.jpg`, `BIG ONE Instagram design ${i+2}`)).join('');
      return products + section('Banners', 'Campaign banners, separate from the product detail pages.', `<div class="asset-grid banner-grid">${banners}</div>`) + section('Instagram designs', 'Promotional graphics used for the store.', `<div class="asset-grid">${instagram}</div>`);
    }
    if (project.extra === 'emoticons') return '';
    if (project.extra === 'cake') return '';
    return '';
  }

  function featuredArtwork(project) {
    const featured = {
      psa: asset('design/07-microplastics-psa.png', 'Microplastics public service poster', 'Personal concept · AI image + Photoshop', 'full'),
      node: `<div class="seamless-stack design-long">${seamless('design/07-node-en.png', 'Node Contemporary Museum English web design')}</div><p class="featured-caption">English Version · Created in both Korean and English · Select to enlarge</p>`,
      'bobae-packaging': asset('design/08-bobae-01.png', 'Three French fries package designs', 'Produced packaging · Adobe Illustrator', 'full'),
      'bobae-posters': asset('design/08-bobae-03.jpg', 'Bobae Trading promotional design 01', 'Original company work', 'full'),
      bigone: asset('bigone/instagram/01.jpg', 'BIG ONE Instagram design 1', 'Store promotion', 'full'),
      emoticons: `<div class="emoticon-pair">${asset('design/10-squirrel.png', 'Today, the Wall-Climbing Squirrel', '32 original emoticons · Procreate')}${asset('design/10-rabbit.png', 'The Ordinary Campus Life of Glasses Rabbit', '32 original emoticons · Procreate')}</div>`,
      cake: asset('design/10-cake.jpg', 'Café cake illustration', 'Original Procreate artwork', 'full')
    };
    return `<div class="project-featured-art">${featured[project.extra] || ''}</div>`;
  }

  const params = new URLSearchParams(location.search);
  const project = projects.find(item => item.id === params.get('id'));
  const root = document.getElementById('project-content');
  if (!project) {
    root.innerHTML = `<section class="project-shell"><div class="project-heading"><p class="eyebrow">PROJECT NOT FOUND</p><h1>Nothing here.</h1><p class="project-summary">Choose a project from the selected work collection.</p><a class="pill-button" href="index.html#work">BACK TO WORK ↗</a></div></section>`;
    return;
  }
  document.title = `${project.title} — Julia Bae`;
  const orderedIds = ['gwangalli','bebe-bakery','forest-coffee','round-lab','bb-bagel','wish','microplastics-psa','node-museum','bobae-packaging','bobae-posters','bigone','emoticons','cake-illustration'];
  const index = orderedIds.indexOf(project.id);
  const previous = projects.find(item => item.id === orderedIds[(index + orderedIds.length - 1) % orderedIds.length]);
  const next = projects.find(item => item.id === orderedIds[(index + 1) % orderedIds.length]);
  const isBagel = project.id === 'bb-bagel';
  const isVertical = project.ratio === '9:16';
  const video = project.youtubeId ? `<div class="project-video-block"><div class="project-video-area${isVertical ? ' is-vertical' : ''}"><button class="youtube-poster" type="button" data-youtube-embed="${project.youtubeId}" aria-label="Play ${escape(project.title)} film"><img src="${A(project.poster)}" alt=""><span class="youtube-play" aria-hidden="true">▶</span></button><iframe class="project-video ${isVertical ? 'vertical' : ''}" title="${escape(project.title)} film on YouTube" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><p class="video-hint">Press play to watch with sound, or <a href="https://www.youtube.com/watch?v=${project.youtubeId}" target="_blank" rel="noopener noreferrer">watch on YouTube ↗</a>.</p></div>` : '';
  const info = `<div class="project-grid"><div class="project-intro-text"><h2>${escape(project.heading)}</h2><p>${escape(project.description)}</p>${project.credit ? `<p class="project-credit">${escape(project.credit)}</p>` : ''}</div><dl class="project-meta"><div><dt>PROJECT TYPE</dt><dd>${escape(project.type)}</dd></div>${project.ratio ? `<div><dt>FORMAT</dt><dd>${escape(project.ratio)}</dd></div>` : ''}<div><dt>MY ROLE</dt><dd>${escape(project.role)}</dd></div><div><dt>TOOLS</dt><dd><ul>${project.tools.map(tool => `<li>${escape(tool)}</li>`).join('')}</ul></dd></div></dl></div>`;
  const bagelConcept = section('Brand concept', 'Warm · Healthy · Comforting. Slogan: One Bite of Comfort.', `<div class="asset-grid">${asset('bb-concept.png', 'BB BAGEL brand concept sheet', 'MiriCanvas', 'full')}</div>`, 'bb-concept-first');
  const heading = `<div class="project-heading"><div class="project-heading-top"><span class="project-counter">PROJECT / ${project.number}</span><span class="project-type">${escape(project.type)}${project.ratio ? ` · ${escape(project.ratio)}` : ''}</span></div><h1>${escape(project.title)}${project.nativeTitle ? `<span class="title-secondary">Original Korean title: ${escape(project.nativeTitle)}</span>` : ''}</h1><p class="project-summary">${escape(project.summary)}</p></div>`;
  const lead = isVertical ? `<div class="project-vertical-layout">${video}<div class="project-vertical-copy">${heading}${info}</div></div>` : `${heading}${project.youtubeId ? video : featuredArtwork(project)}${info}`;
  root.innerHTML = `<div class="project-shell">${lead}${isBagel ? bagelConcept : ''}${extraContent(project)}<nav class="project-nav" aria-label="Project navigation"><a href="project.html?id=${previous.id}">← PREVIOUS<span>${escape(previous.title)}</span></a><a href="index.html#work">ALL WORK ↑</a><a href="project.html?id=${next.id}">NEXT →<span>${escape(next.title)}</span></a></nav></div>`;

  document.querySelectorAll('[data-youtube-embed]').forEach(button => {
    const poster = button.querySelector('img');
    const fallback = () => {
      if (poster.dataset.thumbnailFallback) return;
      poster.dataset.thumbnailFallback = 'youtube';
      poster.src = `https://i.ytimg.com/vi/${button.dataset.youtubeEmbed}/hqdefault.jpg`;
    };
    poster.addEventListener('error', fallback);
    if (poster.complete && poster.naturalWidth === 0) fallback();
    button.addEventListener('click', () => {
      const frame = button.nextElementSibling;
      const area = button.parentElement;
      frame.addEventListener('load', () => area.classList.add('is-playing'), { once: true });
      frame.src = `https://www.youtube-nocookie.com/embed/${button.dataset.youtubeEmbed}?autoplay=1&rel=0&playsinline=1`;
      button.disabled = true;
    });
  });

  const dialog = document.getElementById('image-dialog');
  const image = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  const original = document.getElementById('open-original');
  const zoom = document.getElementById('zoom-toggle');
  document.querySelectorAll('[data-open-image]').forEach(button => button.addEventListener('click', () => {
    const source = button.dataset.openImage;
    image.src = source;
    image.alt = button.dataset.caption;
    caption.textContent = button.dataset.caption;
    original.href = source;
    dialog.classList.remove('zoomed');
    zoom.textContent = 'ZOOM IN';
    dialog.showModal();
  }));
  document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  function toggleZoom() { const expanded = dialog.classList.toggle('zoomed'); zoom.textContent = expanded ? 'FIT TO SCREEN' : 'ZOOM IN'; }
  zoom.addEventListener('click', toggleZoom);
  image.addEventListener('click', toggleZoom);
  dialog.addEventListener('close', () => { image.removeAttribute('src'); dialog.classList.remove('zoomed'); });
})();

