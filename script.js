// ==========================================
// ARTICLE DATA (기사 데이터 3개)
// ==========================================
const articlesData = [
  {
    id: "article-1",
    category: "U.S.",
    title: "A comprehensive history of ICE (And, what can be done)",
    subtitle: "As artificial intelligence scales, hardware designers abandon classical architectures for unified matrix processing.",
    author: "By Nahyun Kang",
    date: "September 21, 2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "ICE agents standing outside a house.",
    summary: "ICE is the hot potato of the decade. Is Immigration Control getting too far?.",
    body: [
      "ICE, or  U.S Immigration and Customs Enforcement is a relatively newly formed agency, which was created in Homeland Security’s major governmental reorganization process. It was “granted a unique combination of civil and criminal authorities to better protect national security and public safety in answer to the tragic events on 9/11”. 
<a href='#ref-1-1' class='footnote-ref'>[1]</a>.",
      " Deviating greatly from what it purports to do, ICE has terrorized the citizenry of the U.S. by imposing constant threats of deportation, using less-than-humane facilities for detention, and deportations to potentially dangerous countries. At this, the reader may ask: has ICE always been this authoritarian; this eager to ‘protect national security’? 

      "The architectural pivot carries profound implications for global technology infrastructure<a href='#ref-1-2' class='footnote-ref'>[2]</a>. Data centers now consume significant shares of municipal power grids, making energy-per-flop efficiency the primary metric of computational merit over raw clock speed."
    ],
    references: [
      { id: "ref-1-1", text: “History of ICE.” ICE, U.S. department of Homeland Security, https://www.ice.gov/history. 
" },
    { id: "ref-1-2", text: "[2] Koomey, J., & Naffziger, S. (2016). Energy efficiency of computing what's feasible, what's plausible. IEEE Spectrum, 53(5), 50-55." }
    ],
    relatedIds: ["article-2", "article-3"]
  },
  {
    id: "article-2",
    category: "CULTURE",
    title: "The Typography of News: Why Serif Typefaces Retain Institutional Authority",
    subtitle: "In a digital ecosystem built on clean sans-serifs, traditional newsrooms double down on centuries-old stroke contrast.",
    author: "By Julian Thorne",
    date: "September 19, 2026",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Metal lead types set in a traditional letterpress printing frame.",
    summary: "While tech platforms embraced uniform sans-serif branding over the past decade, major news institutions continue to rely on high-contrast serif typefaces to convey authority and historical permanence.",
    body: [
      "Typefaces carry an implicit psychological weight long before their textual meaning is decoded. Serifs—the delicate bracketed strokes at the terminals of letters—originated in Roman stone carving and reached typographic perfection during the Renaissance<a href='#ref-2-1' class='footnote-ref'>[1]</a>.",
      "When readers encounter typefaces like Cormorant Garamond or Imperial, they unconsciously register centuries of archival record-keeping and editorial rigor. Studies in visual perception suggest that vertical stress and high stroke contrast evoke a sense of solemnity essential for investigative journalism.",
      "Even as readers transition almost entirely to high-density OLED screens, digital newsrooms continue to custom-design bespoke serifs that preserve print heritage while optimizing for pixel grids<a href='#ref-2-2' class='footnote-ref'>[2]</a>."
    ],
    references: [
      { id: "ref-2-1", text: "[1] Bringhurst, R. (2004). The Elements of Typographic Style. Hartley & Marks, Publishers." },
      { id: "ref-2-2", text: "[2] Lupton, E. (2010). Thinking with Type: A Critical Guide for Designers, Writers, Editors, & Students. Princeton Architectural Press." }
    ],
    relatedIds: ["article-1", "article-3"]
  },
  {
    id: "article-3",
    category: "WORLD",
    title: "Urban Microclimates: Re-Engineering Cities for Extreme Heat",
    subtitle: "Metropolitan centers deploy reflective masonry, subterranean aquifers, and canopy corridors to lower ambient temperatures.",
    author: "By Marcus Sterling",
    date: "September 18, 2026",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "A modern urban district incorporating vertical gardens and high-albedo building surfaces.",
    summary: "As heat island effects intensify in densely built environments, urban planners are shifting from passive resilience to active microclimate intervention using advanced materials and biome engineering.",
    body: [
      "Concrete and asphalt absorb vast amounts of solar radiation during the day, re-radiating thermal energy throughout the night. This heat island phenomenon can raise urban ambient temperatures by up to 10 degrees Fahrenheit compared to surrounding rural landscapes<a href='#ref-3-1' class='footnote-ref'>[1]</a>.",
      "To combat this, municipal authorities are specifying high-albedo paving materials that reflect solar radiation rather than trapping it. Simultaneously, retrofitted architectural facades now integrate automated misting networks supplied by harvested rainwater.",
      "The deployment of strategic urban forest corridors has yielded the most dramatic results, creating natural convection currents that pull cooler air into dense city centers<a href='#ref-3-2' class='footnote-ref'>[2]</a>."
    ],
    references: [
      { id: "ref-3-1", text: "[1] Oke, T. R. (1982). The energetic basis of the urban heat island. Quarterly Journal of the Royal Meteorological Society, 108(455), 1-24." },
      { id: "ref-3-2", text: "[2] Akbari, H., Pomerantz, M., & Taha, H. (2001). Cool surfaces and shade trees to reduce energy use and improve air quality in urban areas. Solar Energy, 70(3), 295-310." }
    ],
    relatedIds: ["article-1", "article-2"]
  }
];

// ==========================================
// DOM ELEMENTS & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const articlesGrid = document.getElementById("articles-grid");
  const mainView = document.getElementById("main-view");
  const detailView = document.getElementById("detail-view");
  const articleContent = document.getElementById("article-content");
  const backBtn = document.getElementById("back-btn");
  const switcherBtns = document.querySelectorAll(".switcher-btn");
  const homeLogoLink = document.getElementById("home-logo-link");

  // 1. 초기 기사 목록 렌더링
  renderArticleList();

  // 2. 레이아웃 스위처 이벤트 핸들러
  switcherBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      switcherBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const selectedLayout = btn.getAttribute("data-layout");
      articlesGrid.className = `articles-grid ${selectedLayout}`;
    });
  });

  // 3. 뒤로 가기 / 로고 클릭 이벤트 (메인 뷰 복귀)
  backBtn.addEventListener("click", showMainView);
  homeLogoLink.addEventListener("click", (e) => {
    e.preventDefault();
    showMainView();
  });

  // ==========================================
  // RENDER FUNCTIONS
  // ==========================================
  
  // 메인 기사 목록 생성
  function renderArticleList() {
    articlesGrid.innerHTML = "";
    
    articlesData.forEach(article => {
      const card = document.createElement("div");
      card.className = "article-card";
      card.onclick = () => showDetailView(article.id);

      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${article.image}" alt="${article.title}" class="card-img" loading="lazy">
        </div>
        <div class="card-content">
          <div class="card-category">${article.category}</div>
          <h2 class="card-title">${article.title}</h2>
          <p class="card-summary">${article.summary}</p>
          <div class="card-meta">${article.author} • ${article.date}</div>
        </div>
      `;
      articlesGrid.appendChild(card);
    });
  }

  // 상세 페이지 뷰 전환 및 렌더링
  function showDetailView(articleId) {
    const article = articlesData.find(a => a.id === articleId);
    if (!article) return;

    // 본문 Paragraphs 변환
    const bodyHTML = article.body.map(p => `<p>${p}</p>`).join("");

    // 참고문헌 HTML 변환
    const referencesHTML = article.references.map(ref => 
      `<li id="${ref.id}">${ref.text}</li>`
    ).join("");

    // 관련 기사 데이터 추출 및 HTML 변환
    const relatedArticles = articlesData.filter(a => article.relatedIds.includes(a.id));
    const relatedHTML = relatedArticles.map(rel => `
      <div class="article-card" onclick="window.navigateToArticle('${rel.id}')">
        <div class="card-category">${rel.category}</div>
        <h4 class="card-title" style="font-size: 1.2rem;">${rel.title}</h4>
        <div class="card-meta">${rel.date}</div>
      </div>
    `).join("");

    // 상세 화면 조합
    articleContent.innerHTML = `
      <header class="detail-header">
        <div class="detail-category">${article.category}</div>
        <h1 class="detail-title">${article.title}</h1>
        <div class="detail-subtitle">${article.subtitle}</div>
        <div class="detail-meta">${article.author} | Published ${article.date}</div>
      </header>

      <div class="detail-img-wrapper">
        <img src="${article.image}" alt="${article.title}">
        <div class="detail-img-caption">${article.imageCaption}</div>
      </div>

      <div class="detail-body">
        ${bodyHTML}
      </div>

      <section class="references-section">
        <h3 class="section-title">References & Sources</h3>
        <ul class="references-list">
          ${referencesHTML}
        </ul>
      </section>

      <section class="related-section">
        <h3 class="section-title">Related Articles</h3>
        <div class="related-grid">
          ${relatedHTML}
        </div>
      </section>
    `;

    // 뷰 스위칭
    mainView.classList.remove("active");
    detailView.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 메인 뷰 전환
  function showMainView() {
    detailView.classList.remove("active");
    mainView.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 관련기사 클릭 처리를 위한 전역 스코프 바인딩
  window.navigateToArticle = function(id) {
    showDetailView(id);
  };
});
