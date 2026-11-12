/* =========================================================
   有限会社まんてん. — shared script
   ヘッダー・メニュー・フッターを全ページ共通で差し込みます
   ========================================================= */
(function () {
  "use strict";

  /* ---------- データ ---------- */
  var TEL = "086-436-8846";
  var TEL_LINK = "tel:0864368846";
  var INSTAGRAM = "https://www.instagram.com/mantenstyle/";

  // 施工事例（元サイト /works より）
  var WORKS = [
    [31, "庭と暮らしをつなぎ おうち時間を心地よく"],
    [30, "余白と機能性を両立 家族の笑顔があふれるシンプルモダン"],
    [29, "開放感のあるリビングでゆったり過ごす贅沢な平屋"],
    [28, "こだわりの広々リビング＆テラスがある平屋"],
    [27, "自然光が差し込む 開放的なリビングのある平屋"],
    [26, "窓をデザインした、ひだまりのある住まい"],
    [25, "アイアンを活かした吹抜けのあるおうち"],
    [24, "勾配天井の開放的なリビングが魅力的なおうち"],
    [23, "平屋の魅力全開　中庭のあるおうち"],
    [22, "コストと機能美を両立させたミニマムな平屋"],
    [21, "バイクガレージや書斎で大人の趣味を楽しむお家"],
    [20, "すっきり暮らせるミニマリストのおうち"],
    [19, "オシャレで落ち着くリビング、上質な空間と日常を叶えた平家"],
    [18, "「大きな吹抜け＆梁」があるオシャレなお家"],
    [17, "オシャレなご夫婦が愛犬と暮らすアースカラーの映える家"],
    [16, "大きなデッキのある開放的な平家"],
    [15, "レッドシダーが目をひく　開放的なリビングのある家"],
    [14, "WHITE×BLACK×WOOD×HOUSE"],
    [13, "平屋でゆったり暮らすお家"]
  ].map(function (w) {
    var tags = [];
    if (/平屋|平家/.test(w[1])) tags.push("平屋");
    if (/吹抜け|勾配天井/.test(w[1])) tags.push("吹抜け・勾配天井");
    if (/ガレージ|書斎/.test(w[1])) tags.push("趣味を楽しむ");
    if (/デッキ|テラス|中庭|庭/.test(w[1])) tags.push("庭・デッキ");
    return { no: w[0], title: w[1], img: "assets/img/works/w" + w[0] + ".jpg", tags: tags, isNew: w[0] >= 29 };
  });

  // お知らせ（元サイト /topics より）
  var NEWS = [
    { date: "2026.09.18", cat: "イベント", title: "岡山市小田郡矢掛町にて完成見学会開催!!", sub: "2026年11月21日(土)～22日(日)　予約制", event: true, end: "2026-11-22", img: "assets/img/works/w29.jpg" },
    { date: "2026.09.14", cat: "イベント", title: "倉敷市福井にて完成見学会開催!!", sub: "2026年10月31日(土)～11月1日(日)　予約制", event: true, end: "2026-11-01", img: "assets/img/works/w28.jpg" },
    { date: "2026.07.06", cat: "お知らせ", title: "お盆期間中の営業につきまして" },
    { date: "2026.06.19", cat: "イベント", title: "岡山市中区祇園にて完成見学会開催！！", sub: "2026年8月22日(土)～23日(日)", event: true, end: "2026-08-23", img: "assets/img/works/w27.jpg" },
    { date: "2026.05.20", cat: "イベント", title: "倉敷市西阿知にて完成見学会開催!!", event: true, end: "2026-05-31" },
    { date: "2026.04.10", cat: "お知らせ", title: "GW期間中の営業につきまして" },
    { date: "2026.04.07", cat: "イベント", title: "玉野市木目にて完成見学会開催!!", event: true, end: "2026-04-30" },
    { date: "2026.02.08", cat: "セミナー", title: "90分でわかる後悔しないための家づくりセミナー", event: true, end: "2026-02-28" },
    { date: "2025.12.01", cat: "お知らせ", title: "年末年始の営業につきまして" }
  ];

  var NAV = [
    { href: "concept.html", ja: "コンセプト", en: "CONCEPT", children: [
      ["concept.html", "人生を楽しむ家づくり"], ["company.html#story", "ロゴに込めた想い"], ["company.html", "会社紹介"] ] },
    { href: "works.html", ja: "施工事例", en: "WORKS", children: [
      ["works.html", "施工事例一覧"], ["tiloc.html", "平屋住宅 TILOC"] ] },
    { href: "flow.html", ja: "住まいの基本", en: "BASICS", children: [
      ["flow.html", "賢い家づくり4つのポイント"], ["support.html", "保証・メンテナンス"], ["support.html#zeh", "ZEH（ゼッチ）"] ] },
    { href: "news.html", ja: "イベント・お知らせ", en: "EVENT & NEWS", children: [
      ["news.html#event", "完成見学会"], ["seminar.html", "家づくり勉強会"], ["news.html", "お知らせ一覧"] ] },
    { href: "company.html", ja: "企業情報", en: "COMPANY", children: [
      ["company.html#profile", "会社概要"], ["company.html#access", "アクセス"] ] },
    { href: "contact.html", ja: "お問い合わせ", en: "CONTACT", children: [
      ["contact.html?type=consult", "家づくり相談"], ["contact.html?type=catalog", "資料請求"], ["contact.html?type=event", "見学会のご予約"] ] }
  ];

  var IG_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".8" fill="currentColor"/></svg>';

  /* ---------- 共通パーツ ---------- */
  function headerHTML() {
    return '' +
      '<header class="header' + (document.body.dataset.page === "home" ? " header--onhero" : " header--solid") + '" id="header">' +
        '<a class="header__logo" href="index.html" aria-label="有限会社まんてん. トップページ"><img src="assets/img/logo.svg" alt=""><span><small>岡山・倉敷の注文住宅</small>有限会社まんてん.</span></a>' +
        '<div class="header__right">' +
          '<div class="header__cta">' +
            '<a href="' + TEL_LINK + '"><span class="tel">' + TEL + '</span><small>9:00 – 18:00</small></a>' +
            '<a href="news.html#event"><small>EVENT</small>見学会のご予約</a>' +
            '<a href="contact.html?type=catalog"><small>CATALOG</small>資料請求</a>' +
          '</div>' +
          '<button class="menu-btn" id="menuBtn" aria-controls="gnav" aria-expanded="false"><span class="bars"></span><span class="lbl">MENU</span></button>' +
        '</div>' +
      '</header>' +
      '<nav class="gnav" id="gnav" aria-label="サイトメニュー"><div class="gnav__inner">' +
        '<div class="gnav__photo"><img src="assets/img/hero2.jpg" alt=""></div>' +
        '<div class="gnav__cols">' +
          NAV.map(function (g) {
            return '<div class="gnav__group"><a href="' + g.href + '"><small>' + g.en + '</small>' + g.ja + '</a><ul>' +
              g.children.map(function (c) { return '<li><a href="' + c[0] + '">' + c[1] + '</a></li>'; }).join("") +
              '</ul></div>';
          }).join("") +
          '<div class="gnav__foot">' +
            '<a class="btn btn--fill" href="news.html#event">見学会を予約する</a>' +
            '<a class="btn" href="contact.html?type=catalog">資料請求する</a>' +
            '<a class="btn" href="' + TEL_LINK + '">TEL ' + TEL + '</a>' +
          '</div>' +
        '</div>' +
      '</div></nav>';
  }

  function footerHTML() {
    return '' +
      '<section class="contact-strip">' +
        '<div class="wrap">' +
          '<p class="lead">資料請求・ご質問など<br class="sp-only">お気軽にお問い合わせください</p>' +
          '<a class="tel" href="' + TEL_LINK + '">TEL. ' + TEL + '</a>' +
          '<p class="hours">受付時間 9:00〜18:00</p>' +
          '<a class="btn btn--white" href="contact.html">お問い合わせフォーム</a>' +
          '<p class="note">初めてご来店の際は、1人1人のお客様に弊社の家づくりについて丁寧にご対応させていただきたいので、事前のご予約をお願い致します。</p>' +
        '</div>' +
      '</section>' +
      '<footer class="footer"><div class="wrap">' +
        '<div class="footer__top">' +
          '<div>' +
            '<a class="footer__logo" href="index.html"><img src="assets/img/footer_logo.svg" alt="有限会社まんてん."></a>' +
            '<p class="footer__addr">有限会社まんてん.<br>〒713-8127 岡山県倉敷市玉島黒崎新町1-11<br>TEL ' + TEL + ' ／ FAX 086-436-8847<br>受付時間 9:00〜18:00</p>' +
            '<a class="footer__sns" href="' + INSTAGRAM + '" target="_blank" rel="noopener">' + IG_SVG + 'Instagram</a>' +
          '</div>' +
          '<div class="footer__nav">' +
            NAV.map(function (g) {
              return '<div><h4><a href="' + g.href + '">' + g.ja + '</a></h4><ul>' +
                g.children.map(function (c) { return '<li><a href="' + c[0] + '">' + c[1] + '</a></li>'; }).join("") +
                '</ul></div>';
            }).join("") +
          '</div>' +
        '</div>' +
        '<div class="footer__bottom"><span>岡山・倉敷の注文住宅・工務店　有限会社まんてん.</span><span>copyright © 有限会社まんてん. all rights reserved.</span></div>' +
      '</div></footer>' +
      '<button class="pagetop" id="pagetop" aria-label="ページの先頭へ">TOP</button>' +
      '<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="施工事例の写真">' +
        '<button class="lightbox__close" data-lb="close">CLOSE ×</button>' +
        '<button class="lightbox__prev" data-lb="prev" aria-label="前へ">‹</button>' +
        '<figure><img alt=""><figcaption></figcaption></figure>' +
        '<button class="lightbox__next" data-lb="next" aria-label="次へ">›</button>' +
      '</div>';
  }

  document.body.insertAdjacentHTML("afterbegin", headerHTML());
  document.body.insertAdjacentHTML("beforeend", footerHTML());

  /* ---------- メニュー ---------- */
  var root = document.documentElement;
  var menuBtn = document.getElementById("menuBtn");
  function setMenu(open) {
    root.classList.toggle("is-menu-open", open);
    document.body.classList.toggle("is-menu-open", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.querySelector(".lbl").textContent = open ? "CLOSE" : "MENU";
  }
  menuBtn.addEventListener("click", function () { setMenu(!root.classList.contains("is-menu-open")); });
  document.getElementById("gnav").addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setMenu(false); closeLightbox(); } });

  /* ---------- スクロール ---------- */
  var header = document.getElementById("header");
  var pagetop = document.getElementById("pagetop");
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    pagetop.classList.toggle("is-show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  pagetop.addEventListener("click", function () { window.scrollTo({ top: 0 }); });

  /* ---------- 施工事例の描画 ---------- */
  function workCard(w, i) {
    return '<article class="work-card reveal" data-index="' + i + '" tabindex="0">' +
      '<div class="work-card__img"><img src="' + w.img + '" alt="' + w.title + '" loading="lazy">' +
        '<span class="work-card__no">WORKS ' + String(w.no).padStart(2, "0") + '</span>' +
        (w.isNew ? '<span class="work-card__new">NEW</span>' : "") +
      '</div>' +
      '<div class="work-card__tags">' + (w.tags.length ? w.tags : ["注文住宅"]).map(function (t) { return '<span class="tag">' + t + '</span>'; }).join("") + '</div>' +
      '<h3 class="work-card__title">' + w.title + '</h3>' +
    '</article>';
  }

  var lbList = WORKS;
  var lbIndex = 0;
  var lightbox = document.getElementById("lightbox");
  function openLightbox(list, i) {
    lbList = list; lbIndex = i; renderLightbox();
    lightbox.classList.add("is-open");
  }
  function closeLightbox() { lightbox.classList.remove("is-open"); }
  function renderLightbox() {
    var w = lbList[lbIndex];
    lightbox.querySelector("img").src = w.img;
    lightbox.querySelector("img").alt = w.title;
    lightbox.querySelector("figcaption").innerHTML = '<small>WORKS ' + String(w.no).padStart(2, "0") + '　' + (lbIndex + 1) + ' / ' + lbList.length + '</small>' + w.title;
  }
  lightbox.addEventListener("click", function (e) {
    var a = e.target.closest("[data-lb]");
    if (a) {
      var act = a.dataset.lb;
      if (act === "close") closeLightbox();
      if (act === "prev") { lbIndex = (lbIndex - 1 + lbList.length) % lbList.length; renderLightbox(); }
      if (act === "next") { lbIndex = (lbIndex + 1) % lbList.length; renderLightbox(); }
    } else if (e.target === lightbox) closeLightbox();
  });

  function bindCards(container, list) {
    container.addEventListener("click", function (e) {
      var c = e.target.closest(".work-card");
      if (c) openLightbox(list, +c.dataset.index);
    });
    container.addEventListener("keydown", function (e) {
      var c = e.target.closest(".work-card");
      if (c && e.key === "Enter") openLightbox(list, +c.dataset.index);
    });
  }

  // トップの横スライダー
  var worksSlider = document.getElementById("worksSlider");
  if (worksSlider) {
    var top = WORKS.slice(0, 8);
    worksSlider.innerHTML = top.map(workCard).join("");
    bindCards(worksSlider, top);
    var counter = document.getElementById("worksCount");
    var step = function () { return worksSlider.firstElementChild.getBoundingClientRect().width + 28; };
    var upd = function () {
      var i = Math.round(worksSlider.scrollLeft / step());
      counter.textContent = Math.min(i + 1, top.length) + " / " + top.length;
    };
    worksSlider.addEventListener("scroll", upd, { passive: true });
    document.getElementById("worksPrev").addEventListener("click", function () { worksSlider.scrollBy({ left: -step(), behavior: "smooth" }); });
    document.getElementById("worksNext").addEventListener("click", function () { worksSlider.scrollBy({ left: step(), behavior: "smooth" }); });
    upd();
  }

  // 施工事例一覧
  var worksGrid = document.getElementById("worksGrid");
  if (worksGrid) {
    var filterEl = document.getElementById("worksFilter");
    var allTags = ["すべて"];
    WORKS.forEach(function (w) { w.tags.forEach(function (t) { if (allTags.indexOf(t) < 0) allTags.push(t); }); });
    filterEl.innerHTML = allTags.map(function (t, i) { return '<button class="' + (i ? "" : "is-active") + '" data-tag="' + t + '">' + t + '</button>'; }).join("") +
      '<span class="count" id="worksTotal"></span>';
    var current = WORKS;
    var render = function (tag) {
      current = tag === "すべて" ? WORKS : WORKS.filter(function (w) { return w.tags.indexOf(tag) >= 0; });
      worksGrid.innerHTML = current.map(workCard).join("");
      document.getElementById("worksTotal").textContent = "全" + current.length + "件";
      observeReveal(worksGrid);
    };
    filterEl.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      filterEl.querySelectorAll("button").forEach(function (x) { x.classList.toggle("is-active", x === b); });
      render(b.dataset.tag);
    });
    worksGrid.addEventListener("click", function (e) {
      var c = e.target.closest(".work-card"); if (c) openLightbox(current, +c.dataset.index);
    });
    worksGrid.addEventListener("keydown", function (e) {
      var c = e.target.closest(".work-card"); if (c && e.key === "Enter") openLightbox(current, +c.dataset.index);
    });
    render("すべて");
  }

  /* ---------- イベント・お知らせ ---------- */
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  function isClosed(n) { return n.end && new Date(n.end + "T23:59:59") < today; }

  var eventGrid = document.getElementById("eventGrid");
  if (eventGrid) {
    var limit = +eventGrid.dataset.limit || 99;
    var evs = NEWS.filter(function (n) { return n.event && n.img; }).slice(0, limit);
    eventGrid.innerHTML = evs.map(function (n) {
      var closed = isClosed(n);
      return '<article class="event-card reveal' + (closed ? " is-closed" : "") + '">' +
        '<div class="event-card__img"><img src="' + n.img + '" alt="" loading="lazy"></div>' +
        '<div class="event-card__body">' +
          '<div class="event-card__status">' +
            (closed ? '<span class="status status--off">終了しました</span>' : '<span class="status">受付中</span><span class="status status--line">予約制</span>') +
            '<span class="status status--line">完成見学会</span>' +
          '</div>' +
          '<p class="event-card__date">' + (n.sub || "").replace("　予約制", "") + '</p>' +
          '<h3 class="event-card__title">' + n.title + '</h3>' +
          (closed ? '<p class="small muted">たくさんのご来場ありがとうございました。</p>' :
            '<div class="btn-pair"><a class="btn" href="flow.html#point3">詳しく見る</a><a class="btn btn--fill" href="contact.html?type=event">予約する</a></div>') +
        '</div></article>';
    }).join("");
  }

  var newsList = document.getElementById("newsList");
  if (newsList) {
    var nlimit = +newsList.dataset.limit || 99;
    newsList.innerHTML = NEWS.slice(0, nlimit).map(function (n) {
      var closed = isClosed(n);
      var href = n.event && !closed ? "contact.html?type=event" : null;
      var inner = '<time>' + n.date + '</time>' +
        '<span class="cat' + (n.event ? "" : " cat--info") + '">' + n.cat + '</span>' +
        '<span class="ttl">' + n.title + (n.sub ? '<small>' + n.sub + (closed ? "（終了しました）" : "") + '</small>' : (closed ? '<small>終了しました</small>' : "")) + '</span>';
      return '<li>' + (href ? '<a href="' + href + '">' + inner + '</a>' : '<div>' + inner + '</div>') + '</li>';
    }).join("");
  }

  var newsbar = document.getElementById("newsbar");
  if (newsbar) {
    var latest = NEWS[0];
    newsbar.innerHTML = '<a href="news.html"><span class="label">NEW</span><time>' + latest.date + '</time><span class="title">' + latest.title + '　' + (latest.sub || "") + '</span><span class="pc-only">→</span></a>';
  }

  /* ---------- ヒーロースライダー ---------- */
  var hero = document.querySelector(".hero__slides");
  if (hero) {
    var slides = hero.children;
    var hc = document.getElementById("heroCount");
    var cur = 0;
    var show = function (i) {
      slides[cur].classList.remove("is-active");
      cur = i;
      slides[cur].classList.add("is-active");
      if (hc) hc.textContent = String(cur + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    };
    show(0);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInterval(function () { show((cur + 1) % slides.length); }, 6000);
    }
  }

  /* ---------- お問い合わせフォーム ---------- */
  var form = document.getElementById("contactForm");
  if (form) {
    var type = new URLSearchParams(location.search).get("type");
    var map = { consult: "まずは相談したい", catalog: "資料請求", event: "見学会の予約" };
    if (type && map[type]) {
      var r = form.querySelector('input[name="type"][value="' + map[type] + '"]');
      if (r) r.checked = true;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (form.email.value !== form.email2.value) {
        form.email2.setCustomValidity("メールアドレスが一致しません");
        form.email2.reportValidity();
        return;
      }
      // ※送信先（フォームサービス等）が決まったら、ここで送信処理を追加します
      form.style.display = "none";
      document.getElementById("formMsg").classList.add("is-show");
      window.scrollTo({ top: document.getElementById("formMsg").offsetTop - 140 });
    });
    form.email2.addEventListener("input", function () { form.email2.setCustomValidity(""); });
  }

  /* ---------- 表示アニメーション ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;
  function observeReveal(scope) {
    (scope || document).querySelectorAll(".reveal:not(.is-in)").forEach(function (el) {
      if (io) io.observe(el); else el.classList.add("is-in");
    });
  }
  observeReveal();

  /* ---------- 確認用：?shot でアニメーションなし表示 ---------- */
  if (/[?&]shot\b/.test(location.search)) {
    root.classList.add("is-loaded");
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); el.style.transition = "none"; });
    var hh = document.querySelector(".hero"); if (hh) hh.style.height = "900px";
    var ld = document.querySelector(".loader"); if (ld) ld.style.display = "none";  }

  /* ---------- ローディング ---------- */
  window.addEventListener("load", function () { root.classList.add("is-loaded"); });
  setTimeout(function () { root.classList.add("is-loaded"); }, 2500);
})();
