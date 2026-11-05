/* Tasarım C — sayfa davranışı (içerik ve davranış D ile aynı; kart ve yerleşim Joven çizgisinde) */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* Menü (mobil) */
  const menuBtn = $("#menuBtn"), nav = $("#nav");
  if (menuBtn) menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  if (nav) $$("a", nav).forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  /* Rakamlar */
  const nums = $("#nums");
  if (nums) nums.innerHTML = RAKAMLAR.map(r => `<div><b>${esc(r.v)}</b><span>${esc(r.l)}</span></div>`).join("");

  /* Grup */
  const grup = $("#grup");
  if (grup) grup.innerHTML = GRUP.map(g => `<div><span class="small">${esc(g.rol)}</span><h3 class="h3">${esc(g.ad)}</h3><p>${esc(g.metin)}</p></div>`).join("");

  /* Satış danışmanları */
  const advisers = $("#advisers");
  if (advisers) advisers.innerHTML = DANISMANLAR.map(d => `<div class="adv"><span class="small">Satış danışmanı</span><h3 class="h3">${esc(d.ad)}</h3><a class="adv-tel" href="${d.href}">${esc(d.tel)}</a><a class="btn" href="${d.href}">Ara</a></div>`).join("");

  /* Proje kartı: dikey görsel, adı üstte (Joven gibi); bilgiler proje sayfasında */
  function kart(p) {
    if (!p.kapak) return `<a class="pcard text" href="proje.html?p=${p.id}" data-kat="${p.kat}"><b class="big">${esc(p.one)}</b><b class="pname">${esc(p.ad)}</b></a>`;
    return `<a class="pcard" href="proje.html?p=${p.id}" data-kat="${p.kat}"><img src="${img(p.kapak)}" alt="${esc(p.ad)}" loading="lazy"><b class="pname">${esc(p.ad)}</b></a>`;
  }

  /* Projeler + filtre */
  const grid = $("#grid"), filters = $("#filters");
  if (grid) grid.innerHTML = PROJELER.map(kart).join("");
  if (grid && filters) {
    filters.innerHTML = KATEGORILER.map((k, i) => {
      const n = k.id === "tum" ? PROJELER.length : PROJELER.filter(p => p.kat === k.id).length;
      return `<button data-f="${k.id}" class="${i === 0 ? "on" : ""}">${esc(k.ad)}<span>${n}</span></button>`;
    }).join("");
    filters.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      $$("button", filters).forEach(x => x.classList.toggle("on", x === b));
      const f = b.dataset.f;
      $$(".pcard", grid).forEach(c => c.classList.toggle("hidden", f !== "tum" && c.dataset.kat !== f));
    });
  }

  /* Videolar: liste öğesi ve oynatıcı */
  const vitem = (v, alt) => { const f = video(v.id || v); return `<li><button class="vitem" data-src="${f.dosya}">
      <img src="${f.kapak}" alt="" loading="lazy"><span><b>${esc(v.ad || "")}</b><small>${esc(alt)}</small></span><span class="play" aria-hidden="true">▶</span></button></li>`; };
  const videos = $("#videos");
  if (videos) videos.innerHTML = VIDEOLAR.map(v => vitem(v, v.alt)).join("");
  const lb = $("#lightbox"), lbVideo = $("#lbVideo");
  if (lb) {
    document.addEventListener("click", e => {
      const el = e.target.closest(".vitem"); if (!el) return;
      lbVideo.src = el.dataset.src; lb.classList.add("on"); lbVideo.play().catch(() => {});
    });
    const closeLb = () => { lb.classList.remove("on"); lbVideo.pause(); lbVideo.removeAttribute("src"); lbVideo.load(); };
    $("#lbClose").addEventListener("click", closeLb);
    lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });
  }

  /* Form proje seçenekleri */
  $$("select#proje, select#pproje, select#dproje").forEach(sel => {
    PROJELER.forEach(p => { const o = document.createElement("option"); o.value = p.id; o.textContent = p.ad; sel.appendChild(o); });
  });

  /* Formlar (gönderim yok; teşekkür mesajı) */
  function bindForm(formId, doneId) {
    const f = $(formId), d = $(doneId); if (!f) return;
    f.addEventListener("submit", e => {
      e.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      f.style.display = "none"; d.classList.add("on");
    });
  }
  bindForm("#form", "#done"); bindForm("#panelForm", "#panelDone"); bindForm("#detayForm", "#detayDone"); bindForm("#ypForm", "#ypDone");

  /* Panel */
  const panel = $("#panel"), panelBg = $("#panelBg");
  function openPanel() { panel.classList.add("on"); panelBg.classList.add("on"); }
  function closePanel() { if (panel) { panel.classList.remove("on"); panelBg.classList.remove("on"); } }
  $$("[data-open-panel]").forEach(b => b.addEventListener("click", openPanel));
  $$("[data-close-panel]").forEach(b => b.addEventListener("click", closePanel));
  if (panelBg) panelBg.addEventListener("click", closePanel);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closePanel(); });

  /* Proje detay sayfası */
  const detay = $("#detay");
  if (detay) {
    const id = new URLSearchParams(location.search).get("p") || "yasamkent";
    const p = projeBul(id) || PROJELER[0];
    document.title = p.ad + " — Şenler Grup İnşaat";
    $("#dKat").textContent = p.katAd;
    $("#dAd").textContent = p.ad;
    $("#dKonum").textContent = p.konum;
    $("#dOzet").textContent = p.ozet;
    $("#dCrumb").textContent = p.ad;
    $("#dDesc").innerHTML = p.aciklama.map(t => `<p>${esc(t)}</p>`).join("");
    $("#dKunye").innerHTML = p.kunye.map(k => `<div><dt>${esc(k[0])}</dt><dd>${esc(k[1])}</dd></div>`).join("");
    $("#dCtaAd").textContent = p.ad;
    const sel = $("#dproje"); if (sel) sel.value = p.id;
    const hero = $("#pHero");
    if (p.kapak) hero.insertAdjacentHTML("afterbegin", `<img src="${img(p.kapak)}" alt="">`);
    else hero.classList.add("no-img");
    const main = $("#gMain"), thumbs = $("#gThumbs");
    if (p.galeri.length) {
      const ok = (yon, ad, d) => `<button class="gok gok--${ad}" type="button" data-gok="${yon}" aria-label="${ad === "onceki" ? "Önceki" : "Sonraki"} görsel"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg></button>`;
      main.innerHTML = `<img src="${img(p.galeri[0])}" alt="${esc(p.ad)}">` + (p.galeri.length > 1
        ? ok(-1, "onceki", "M15 18l-6-6 6-6") + ok(1, "sonraki", "M9 18l6-6-6-6") + `<span class="gsayac" aria-live="polite">1 / ${p.galeri.length}</span>` : "");
      const anaImg = main.querySelector("img");
      // 16:9 çerçeveye oranı uymayan görsel kırpılmasın: tamamı gösterilir.
      anaImg.addEventListener("load", () => { main.classList.toggle("sigdir", Math.abs(anaImg.naturalWidth / anaImg.naturalHeight / (16 / 9) - 1) > 0.06); anaImg.classList.remove("soluk"); });
      thumbs.innerHTML = p.galeri.map((g, i) => `<button class="${i === 0 ? "on" : ""}" data-i="${i}" aria-label="Görsel ${i + 1}"><img src="${img(g)}" alt="" loading="lazy"></button>`).join("");
      // 5 sn'de bir geçer; ok, küçük resim, klavye, kaydırma; fare üstünde / sekme arkada / tam ekranda / ekran dışında durur.
      // Görsele basınca tam ekran açılır; X, boşluğa basma ya da Esc ile kapanır.
      const n = p.galeri.length, cok = n > 1, btns = $$("button", thumbs), sayac = main.querySelector(".gsayac");
      const kaynak = k => img(p.galeri[k]);
      const azHareket = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let i = 0, zaman = null, gorunur = true, ustunde = false, tamAcik = false, degisim = null;
      const git = (k, elle) => {
        i = (k + n) % n;
        btns.forEach((b, x) => b.classList.toggle("on", x === i));
        if (btns[i]) thumbs.scrollTo({ left: btns[i].offsetLeft - (thumbs.clientWidth - btns[i].clientWidth) / 2, behavior: azHareket ? "auto" : "smooth" });
        if (sayac) sayac.textContent = (i + 1) + " / " + n;
        clearTimeout(degisim); anaImg.classList.add("soluk");
        degisim = setTimeout(() => { anaImg.src = kaynak(i); }, azHareket ? 0 : 200);
        if (cok) new Image().src = kaynak((i + 1) % n);
        if (tamAcik) tamGoster();
        if (elle) { durdur(); baslat(); }
      };
      const durdur = () => { clearInterval(zaman); zaman = null; };
      const baslat = () => { if (cok && !azHareket && !zaman && gorunur && !ustunde && !tamAcik && !document.hidden) zaman = setInterval(() => git(i + 1), 5000); };

      const tam = document.createElement("div");
      tam.className = "gtam"; tam.setAttribute("role", "dialog"); tam.setAttribute("aria-modal", "true"); tam.setAttribute("aria-label", "Görsel, tam ekran"); tam.hidden = true;
      tam.innerHTML = `<img alt="${esc(p.ad)}"><button class="gtam-kapat" type="button" aria-label="Kapat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>`
        + (cok ? ok(-1, "onceki", "M15 18l-6-6 6-6").replace("data-gok", "data-tgok") + ok(1, "sonraki", "M9 18l6-6-6-6").replace("data-gok", "data-tgok") + `<span class="gsayac"></span>` : "");
      document.body.appendChild(tam);
      const tImg = tam.querySelector("img"), tSayac = tam.querySelector(".gsayac");
      let oncekiOdak = null;
      const tamGoster = () => { tImg.src = kaynak(i); if (tSayac) tSayac.textContent = (i + 1) + " / " + n; };
      const tamAc = () => { tamAcik = true; durdur(); tamGoster(); oncekiOdak = document.activeElement; tam.hidden = false; requestAnimationFrame(() => tam.classList.add("on")); document.documentElement.style.overflow = "hidden"; tam.querySelector(".gtam-kapat").focus(); };
      const tamKapat = () => { tamAcik = false; tam.classList.remove("on"); tam.hidden = true; document.documentElement.style.overflow = ""; if (oncekiOdak && oncekiOdak.focus) oncekiOdak.focus(); baslat(); };
      main.addEventListener("click", e => { if (!e.target.closest(".gok")) tamAc(); });
      tam.addEventListener("click", e => {
        const o = e.target.closest("[data-tgok]");
        if (o) return git(i + +o.dataset.tgok, false);
        if (e.target.closest(".gtam-kapat") || e.target === tam) tamKapat();
      });
      document.addEventListener("keydown", e => {
        if (!tamAcik) return;
        if (e.key === "Escape") { e.preventDefault(); tamKapat(); }
        else if (e.key === "ArrowLeft" && cok) { e.preventDefault(); git(i - 1, false); }
        else if (e.key === "ArrowRight" && cok) { e.preventDefault(); git(i + 1, false); }
        else if (e.key === "Tab") { const o = $$("button", tam), ilk = o[0], son = o[o.length - 1]; if (e.shiftKey && document.activeElement === ilk) { e.preventDefault(); son.focus(); } else if (!e.shiftKey && document.activeElement === son) { e.preventDefault(); ilk.focus(); } }
      });
      const kaydir = (el, fn) => { let x0 = null; el.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true }); el.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 40) fn(dx < 0 ? 1 : -1); }); };
      if (cok) {
        $$("[data-gok]", main).forEach(o => o.addEventListener("click", () => git(i + +o.dataset.gok, true)));
        thumbs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) git(+b.dataset.i, true); });
        main.addEventListener("mouseenter", () => { ustunde = true; durdur(); });
        main.addEventListener("mouseleave", () => { ustunde = false; baslat(); });
        document.addEventListener("visibilitychange", () => (document.hidden ? durdur() : baslat()));
        $("#gallery").addEventListener("keydown", e => { if (tamAcik) return; if (e.key === "ArrowLeft") git(i - 1, true); if (e.key === "ArrowRight") git(i + 1, true); });
        kaydir(main, y => git(i + y, true));
        kaydir(tam, y => git(i + y, false));
        if ("IntersectionObserver" in window) new IntersectionObserver(k => { gorunur = k[0].isIntersecting; gorunur ? baslat() : durdur(); }, { threshold: 0.4 }).observe(main);
        baslat();
      }
    } else {
      $("#gallery").remove();
    }
    const planlar = $("#planlar");
    if (p.planlar && p.planlar.length) {
      $("#dPlans").innerHTML = p.planlar.map(([f, tip, olcu]) => `<a class="plan" href="../img/plan/${f}.jpg" target="_blank" rel="noopener">
        <span class="plan-img"><img src="../img/plan/${f}.jpg" alt="${esc(p.ad + " " + tip + " daire planı")}" loading="lazy"></span>
        <span class="plan-cap"><b>${esc(tip)}</b>${olcu ? `<span>${esc(olcu)}</span>` : ""}</span></a>`).join("");
    } else planlar.remove();
    const pvid = $("#pvideolar");
    if (p.videolar && p.videolar.length) {
      $("#dVideos").innerHTML = p.videolar.map(id => vitem({ id, ad: p.ad }, (VIDEOLAR.find(v => v.id === id) || {}).alt || "Video")).join("");
    } else pvid.remove();
    // Plan ve video yoksa alt bölüm tek sütun: bilgiler ve form yan yana.
    if (!(p.planlar && p.planlar.length) && !(p.videolar && p.videolar.length)) $("#pBody").classList.add("p-body--tek");
    const others = PROJELER.filter(x => x.id !== p.id).slice(0, 4);
    $("#others").innerHTML = others.map(kart).join("");
  }

  /* Yeni proje penceresi: ziyaretçi aşağı kaydırınca bir kez açılır (oturum başına).
     Kapatılır: çarpı, arka plan, Esc. Form "Sizi arayalım" ile aynı yere gider. */
  const yp = $("#yeniProje"), yeni = typeof YENI_PROJE !== "undefined" && projeBul(YENI_PROJE.id);
  if (yp && yeni) {
    $("#ypImg").innerHTML = `<img src="${img(YENI_PROJE.gorsel || yeni.kapak)}" alt="${esc(yeni.ad)}">`;
    // Liste: öne çıkan başta, "sona" yazılanlar sonda, diğerleri sitedeki sırayla.
    const sona = YENI_PROJE.sona || [];
    const liste = [yeni, ...PROJELER.filter(p => p !== yeni && !sona.includes(p.id)), ...sona.map(projeBul).filter(Boolean)];
    $("#ypProje").innerHTML = `<option value="">Henüz karar vermedim</option>`
      + liste.map(p => `<option value="${p.id}"${p === yeni ? " selected" : ""}>${esc(p.ad)}</option>`).join("");
    const ANAHTAR = "yeniProjeGoruldu";
    let goruldu = false;
    try { goruldu = sessionStorage.getItem(ANAHTAR) === "1"; } catch (e) {}
    const ac = () => {
      if (goruldu) return;
      goruldu = true;
      try { sessionStorage.setItem(ANAHTAR, "1"); } catch (e) {}
      yp.classList.add("on"); yp.setAttribute("aria-hidden", "false");
      const ilk = $("#ypForm input"); if (ilk) setTimeout(() => ilk.focus({ preventScroll: true }), 250);
    };
    const kapat = () => { yp.classList.remove("on"); yp.setAttribute("aria-hidden", "true"); };
    const izle = () => { if (scrollY > innerHeight * 0.35) { removeEventListener("scroll", izle); ac(); } };
    if (!goruldu) addEventListener("scroll", izle, { passive: true });
    $$("[data-yp-kapat]", yp).forEach(b => b.addEventListener("click", kapat));
    yp.addEventListener("click", e => { if (e.target === yp) kapat(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") kapat(); });
    $$("[data-yp-ac]").forEach(b => b.addEventListener("click", () => { goruldu = false; ac(); }));
  }
})();
