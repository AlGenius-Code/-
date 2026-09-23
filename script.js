document.addEventListener("DOMContentLoaded", () => {
  const body = document.body,
    langBtn = document.getElementById("languageBtn"),
    themeBtn = document.getElementById("themeBtn");

  let lang = localStorage.getItem("algenius-language") || "ar";

  const applyLanguage = () => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-ar]").forEach((el) => {
      const v = el.getAttribute(lang === "ar" ? "data-ar" : "data-en");
      if (v !== null) el.innerHTML = v;
    });

    document.querySelectorAll("option[data-ar]").forEach((el) => {
      el.textContent = el.getAttribute(lang === "ar" ? "data-ar" : "data-en");
    });

    if (langBtn) langBtn.textContent = lang === "ar" ? "EN" : "AR";
    localStorage.setItem("algenius-language", lang);
  };

  if (langBtn)
    langBtn.addEventListener("click", () => {
      lang = lang === "ar" ? "en" : "ar";
      applyLanguage();
    });

  const savedTheme = localStorage.getItem("algenius-theme");
  if (savedTheme === "light") body.classList.add("light-mode");

  const updateTheme = () => {
    if (themeBtn) themeBtn.textContent = body.classList.contains("light-mode") ? "☀" : "☾";
  };

  if (themeBtn)
    themeBtn.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      localStorage.setItem("algenius-theme", body.classList.contains("light-mode") ? "light" : "dark");
      updateTheme();
    });
  updateTheme();

  const menu = document.getElementById("mobileMenu"),
    toggle = document.getElementById("menuToggle");
  if (toggle && menu)
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", menu.classList.contains("open"));
    });
  menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a,.mobile-menu a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((e) => observer.observe(e));

  const top = document.getElementById("backToTop");
  if (top) {
    window.addEventListener("scroll", () => top.classList.toggle("show", scrollY > 450));
    top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  }

  // نموذج التواصل واستخراج نوع المشروع المحدد
  const form = document.getElementById("contactForm");
  if (form)
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const get = (id) => document.getElementById(id)?.value.trim() || "";
      const name = get("name"),
        phone = get("phone"),
        projectSelect = document.getElementById("project"),
        projectOption = projectSelect?.selectedOptions[0],
        message = get("message");

      const projectText =
        projectOption?.getAttribute(lang === "ar" ? "data-ar" : "data-en") ||
        projectOption?.textContent ||
        "";

      const text =
        lang === "ar"
          ? `مرحبًا Al-Genius 👋\n\nأريد الاستفسار عن مشروع.\n\nالاسم: ${name}\nرقم الهاتف: ${phone}\nنوع الخدمة / المشروع: ${projectText}\n\nتفاصيل المشروع:\n${message}`
          : `Hello Al-Genius 👋\n\nI would like to ask about a project.\n\nName: ${name}\nPhone: ${phone}\nProject type: ${projectText}\n\nProject details:\n${message}`;

      window.open("https://wa.me/201012747531?text=" + encodeURIComponent(text), "_blank");
    });

  document.querySelectorAll(".filter button").forEach((btn) =>
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll("#portfolioGrid .project-card").forEach((card) => {
        card.style.display = filter === "all" || card.dataset.category === filter ? "" : "none";
      });
    })
  );

  applyLanguage();
});

/* ===== AL-GENIUS ULTRA MOTION ENGINE ===== */
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll progress
  const progress = document.createElement("div");
  progress.id = "agProgress";
  document.body.appendChild(progress);
  const updateProgress = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
  };
  addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Cursor spotlight
  if (!reduce && matchMedia("(pointer:fine)").matches) {
    const glow = document.createElement("div");
    glow.id = "agCursorGlow";
    document.body.appendChild(glow);
    let tx = innerWidth / 2,
      ty = innerHeight / 2,
      cx = tx,
      cy = ty;
    addEventListener("pointermove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.style.opacity = "1";
    });
    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.left = cx + "px";
      glow.style.top = cy + "px";
      requestAnimationFrame(loop);
    };
    loop();
    addEventListener("pointerleave", () => (glow.style.opacity = "0"));

    document.querySelectorAll(".card,.hero-card,.project-card,.stat,.values>div").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect(),
          x = ((e.clientX - r.left) / r.width) * 100,
          y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty("--mx", x + "%");
        el.style.setProperty("--my", y + "%");
        const rx = (y - 50) / -18,
          ry = (x - 50) / 18;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
  }

  // Floating particles
  if (!reduce) {
    const wrap = document.createElement("div");
    wrap.className = "ag-particles";
    const count = window.innerWidth < 700 ? 18 : 34;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("i");
      p.className = "ag-particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.setProperty("--drift", Math.random() * 180 - 90 + "px");
      p.style.animationDuration = 9 + Math.random() * 13 + "s";
      p.style.animationDelay = -Math.random() * 18 + "s";
      p.style.opacity = 0.25 + Math.random() * 0.55;
      wrap.appendChild(p);
    }
    document.body.appendChild(wrap);
  }

  // Button ripples
  document.querySelectorAll(".btn,.icon-btn,.language-toggle,.theme-toggle-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      if (reduce) return;
      const r = btn.getBoundingClientRect(),
        s = document.createElement("span");
      s.className = "ag-ripple";
      const d = Math.max(r.width, r.height) * 2;
      s.style.width = s.style.height = d + "px";
      s.style.left = e.clientX - r.left - d / 2 + "px";
      s.style.top = e.clientY - r.top - d / 2 + "px";
      btn.appendChild(s);
      setTimeout(() => s.remove(), 700);
    })
  );

  // Counters
  if (!reduce) {
    document.querySelectorAll(".stat strong").forEach((el) => {
      const raw = el.textContent.trim(),
        m = raw.match(/^(\d+)(.*)$/);
      if (!m) return;
      const target = +m[1],
        suffix = m[2],
        obs = new IntersectionObserver(
          (es) => {
            if (!es[0].isIntersecting) return;
            let start = performance.now();
            const tick = (t) => {
              const p = Math.min((t - start) / 900, 1),
                v = Math.round(target * (1 - Math.pow(1 - p, 3)));
              el.textContent = v + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          },
          { threshold: 0.7 }
        );
      obs.observe(el);
    });
  }

  // Close mobile menu with Escape
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("mobileMenu")?.classList.remove("open");
      document.getElementById("menuToggle")?.setAttribute("aria-expanded", "false");
    }
  });
})();

/* ===== ULTRA PRO ADD-ONS ===== */
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("agLoader");
  if (loader) {
    setTimeout(() => loader.classList.add("hide"), 650);
    setTimeout(() => loader.remove(), 1400);
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = ((e.clientX - r.left - r.width / 2) / r.width) * 10;
        const y = ((e.clientY - r.top - r.height / 2) / r.height) * 10;
        btn.style.transform = `translate(${x}px,${y}px)`;
      });
      btn.addEventListener("pointerleave", () => (btn.style.transform = ""));
    });
  }

  document.querySelectorAll("h2").forEach((h) => h.classList.add("glitch"));
});