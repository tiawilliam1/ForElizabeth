(function () {
  const LANG_TEXT = {
    en: {
      nav_home: "Home",
      nav_tours: "Tours",
      nav_about: "About me",
      nav_contact: "Contact",
      sitemap_home: "Home",
      sitemap_tours: "Tours",
      sitemap_athens: "Athens Tours",
      sitemap_pelop: "Peloponnese Tour",
      sitemap_central: "Central Greece Tours",
      sitemap_saronic: "Saronic Gulf Tours",
      sitemap_cyclades: "Cyclades Tours",
      sitemap_about: "About Me",
      sitemap_contact: "Contact",
      footer_name: "Elisavet Makri",
      footer_role: "Art Historian - Licensed Tour Guide",
      footer_location: "Athens, Greece",
      footer_copy: "&copy; 2026 Tour Guide. All rights reserved."
    },
    fr: {
      nav_home: "Accueil",
      nav_tours: "Visites",
      nav_about: "À propos de moi",
      nav_contact: "Contact",
      sitemap_home: "Accueil",
      sitemap_tours: "Visites",
      sitemap_athens: "Visites d'Athènes",
      sitemap_pelop: "Circuit du Péloponnèse",
      sitemap_central: "Visites en Grèce Centrale",
      sitemap_saronic: "Visites du Golfe Saronique",
      sitemap_cyclades: "Visites des Cyclades",
      sitemap_about: "À propos de moi",
      sitemap_contact: "Contact",
      footer_name: "Elisavet Makri",
      footer_role: "Historienne de l'art - Guide-conférencière",
      footer_location: "Athènes, Grèce",
      footer_copy: "&copy; 2026 Guide touristique. Tous droits réservés."
    },
    el: {
      nav_home: "Αρχική",
      nav_tours: "Ξεναγήσεις",
      nav_about: "Σχετικά με εμένα",
      nav_contact: "Επικοινωνία",
      sitemap_home: "Αρχική",
      sitemap_tours: "Ξεναγήσεις",
      sitemap_athens: "Ξεναγήσεις Αθήνας",
      sitemap_pelop: "Ξενάγηση Πελοποννήσου",
      sitemap_central: "Ξεναγήσεις Κεντρικής Ελλάδας",
      sitemap_saronic: "Ξεναγήσεις Σαρωνικού",
      sitemap_cyclades: "Ξεναγήσεις Κυκλάδων",
      sitemap_about: "Σχετικά με εμένα",
      sitemap_contact: "Επικοινωνία",
      footer_name: "Ελισάβετ Μακρή",
      footer_role: "Ιστορικός τέχνης - Αδειοδοτημένη ξεναγός",
      footer_location: "Αθήνα, Ελλάδα",
      footer_copy: "&copy; 2026 Ξεναγός. Με επιφύλαξη παντός δικαιώματος."
    }
  };

  const PAGE_CONFIG = {
    "index.html": {
      headerTitle: {
        en: "Greece Local Guide",
        fr: "Greece Local Guide",
        el: "Greece Local Guide"
      },
      activeNav: "home"
    },
    "greece-private-tours.html": {
      headerTitle: {
        en: "Our Tours",
        fr: "Nos Visites",
        el: "Οι Ξεναγήσεις μας"
      },
      activeNav: "tours"
    },
    "private-athens-tours.html": {
      headerTitle: {
        en: "Attica Tours",
        fr: "Visites en Attique",
        el: "Ξεναγήσεις στην Αττική"
      },
      activeNav: "tours"
    },
    "acropolis-guided-tour.html": {
      headerTitle: {
        en: "Attica Tours",
        fr: "Visites en Attique",
        el: "Ξεναγήσεις στην Αττική"
      },
      activeNav: "tours"
    },
    "athens-walking-tour.html": {
      headerTitle: {
        en: "Attica Tours",
        fr: "Visites en Attique",
        el: "Ξεναγήσεις στην Αττική"
      },
      activeNav: "tours"
    },
    "athens-philosophical-tour.html": {
      headerTitle: {
        en: "Attica Tours",
        fr: "Visites en Attique",
        el: "Ξεναγήσεις στην Αττική"
      },
      activeNav: "tours"
    },
    "athens-archaeological-tour.html": {
      headerTitle: {
        en: "Attica Tours",
        fr: "Visites en Attique",
        el: "Ξεναγήσεις στην Αττική"
      },
      activeNav: "tours"
    },
    "cape-sounion-sunset-tour.html": {
      headerTitle: {
        en: "Attica Tours",
        fr: "Visites en Attique",
        el: "Ξεναγήσεις στην Αττική"
      },
      activeNav: "tours"
    },
    "peloponnese-archaeological-tour.html": {
      headerTitle: {
        en: "Peloponnese Tours",
        fr: "Visites dans le Péloponnèse",
        el: "Ξεναγήσεις στην Πελοπόννησο"
      },
      activeNav: "tours"
    },
    "mycenae-nafplion-epidaurus-tour.html": {
      headerTitle: {
        en: "Peloponnese Tours",
        fr: "Visites dans le Péloponnèse",
        el: "Ξεναγήσεις στην Πελοπόννησο"
      },
      activeNav: "tours"
    },
    "ancient-corinth-tour.html": {
      headerTitle: {
        en: "Peloponnese Tours",
        fr: "Visites dans le Péloponnèse",
        el: "Ξεναγήσεις στην Πελοπόννησο"
      },
      activeNav: "tours"
    },
    "central-greece-tours.html": {
      headerTitle: {
        en: "Central Greece Tours",
        fr: "Visites en Grèce Centrale",
        el: "Ξεναγήσεις στην Κεντρική Ελλάδα"
      },
      activeNav: "tours"
    },
    "delphi-day-trip-from-athens.html": {
      headerTitle: {
        en: "Central Greece Tours",
        fr: "Visites en Grèce Centrale",
        el: "Ξεναγήσεις στην Κεντρική Ελλάδα"
      },
      activeNav: "tours"
    },
    "hosios-loukas-monastery-tour.html": {
      headerTitle: {
        en: "Central Greece Tours",
        fr: "Visites en Grèce Centrale",
        el: "Ξεναγήσεις στην Κεντρική Ελλάδα"
      },
      activeNav: "tours"
    },
    "saronic-gulf-island-tours.html": {
      headerTitle: {
        en: "Saronic Gulf Tours",
        fr: "Visites du Golfe Saronique",
        el: "Ξεναγήσεις στον Σαρωνικό"
      },
      activeNav: "tours"
    },
    "aegina-day-trip.html": {
      headerTitle: {
        en: "Saronic Gulf Tours",
        fr: "Visites du Golfe Saronique",
        el: "Ξεναγήσεις στον Σαρωνικό"
      },
      activeNav: "tours"
    },
    "hydra-day-trip.html": {
      headerTitle: {
        en: "Saronic Gulf Tours",
        fr: "Visites du Golfe Saronique",
        el: "Ξεναγήσεις στον Σαρωνικό"
      },
      activeNav: "tours"
    },
    "spetses-island-tour.html": {
      headerTitle: {
        en: "Saronic Gulf Tours",
        fr: "Visites du Golfe Saronique",
        el: "Ξεναγήσεις στον Σαρωνικό"
      },
      activeNav: "tours"
    },
    "cyclades-island-tours.html": {
      headerTitle: {
        en: "Cyclades Tours",
        fr: "Visites des Cyclades",
        el: "Ξεναγήσεις στις Κυκλάδες"
      },
      activeNav: "tours"
    },
    "mykonos-island-tour.html": {
      headerTitle: {
        en: "Cyclades Tours",
        fr: "Visites des Cyclades",
        el: "Ξεναγήσεις στις Κυκλάδες"
      },
      activeNav: "tours"
    },
    "santorini-private-tour.html": {
      headerTitle: {
        en: "Cyclades Tours",
        fr: "Visites des Cyclades",
        el: "Ξεναγήσεις στις Κυκλάδες"
      },
      activeNav: "tours"
    },
    "about-elisavet-makri.html": {
      headerTitle: {
        en: "About me",
        fr: "À propos de moi",
        el: "Σχετικά με εμένα"
      },
      activeNav: "about"
    },
    "about-elisavet-makri copy.html": {
      headerTitle: {
        en: "About me",
        fr: "À propos de moi",
        el: "Σχετικά με εμένα"
      },
      activeNav: "about"
    },
    "contact-greece-local-guide.html": {
      headerTitle: {
        en: "Contact",
        fr: "Contact",
        el: "Επικοινωνία"
      },
      activeNav: "contact"
    },
    "tocopy.html": {
      headerTitle: {
        en: "Attica Tours",
        fr: "Visites en Attique",
        el: "Ξεναγήσεις στην Αττική"
      },
      activeNav: "tours"
    }
  };

  function currentPage() {
    const path = window.location.pathname;
    const file = path.split("/").pop();
    return file || "index.html";
  }

  function getConfig() {
    const file = currentPage();
    const defaults = {
      headerTitle: {
        en: "Greece Local Guide",
        fr: "Greece Local Guide",
        el: "Greece Local Guide"
      },
      activeNav: "tours"
    };
    return Object.assign({}, defaults, PAGE_CONFIG[file] || {});
  }

  function navClass(key, activeKey) {
    return key === activeKey ? "is-active" : "";
  }

  function getStoredLanguage() {
    const lang = localStorage.getItem("selectedLanguage") || "en";
    return LANG_TEXT[lang] ? lang : "en";
  }

  function resolveHeaderTitle(config, lang) {
    if (typeof config.headerTitle === "string") {
      return config.headerTitle;
    }
    return (config.headerTitle && (config.headerTitle[lang] || config.headerTitle.en)) || "Greece Local Guide";
  }

  function headerMarkup(config) {
    return `
<header>
  <div class="logo-container">
    <img src="images/logo1.jpg" alt="Greece Local Guide logo" class="logo">
  </div>
  <h1 id="header-title">${resolveHeaderTitle(config, "en")}</h1>
  <div class="language-selector">
    <span class="language-option" data-lang="en">EN</span> /
    <span class="language-option" data-lang="fr">FR</span> /
    <span class="language-option" data-lang="el">GR</span>
  </div>

  <div class="burger-menu-btn" aria-label="Toggle Navigation">
    <img src="images/menu.png" alt="Open navigation menu" class="burger-icon">
    <img src="images/x.png" alt="Close navigation menu" class="close-icon" style="display: none;">
  </div>

  <nav class="burger-menu">
    <ul>
      <li><a href="index.html" class="nav-home ${navClass("home", config.activeNav)}">Home</a></li>
      <li><a href="greece-private-tours.html" class="nav-tours ${navClass("tours", config.activeNav)}">Tours</a></li>
      <li><a href="about-elisavet-makri.html" class="nav-about ${navClass("about", config.activeNav)}">About me</a></li>
      <li><a href="contact-greece-local-guide.html" class="nav-contact ${navClass("contact", config.activeNav)}">Contact</a></li>
      <li class="language-selector">
        <span class="language-option" data-lang="en">EN</span> /
        <span class="language-option" data-lang="fr">FR</span> /
        <span class="language-option" data-lang="el">GR</span>
      </li>
    </ul>
  </nav>

  <nav>
    <ul>
      <li><a href="index.html" id="nav-home" class="nav-home ${navClass("home", config.activeNav)}">Home</a></li>
      <li><a href="greece-private-tours.html" id="nav-tours" class="nav-tours ${navClass("tours", config.activeNav)}">Tours</a></li>
      <li><a href="about-elisavet-makri.html" id="nav-about" class="nav-about ${navClass("about", config.activeNav)}">About me</a></li>
      <li><a href="contact-greece-local-guide.html" id="nav-contact" class="nav-contact ${navClass("contact", config.activeNav)}">Contact</a></li>
    </ul>
  </nav>
</header>`;
  }

  function footerMarkup() {
    return `
<footer>
  <div class="footer-info">
    <p>Elisavet Makri</p>
    <p>Art Historian - Licensed Tour Guide</p>
    <p>greecelocalguide@gmail.com</p>
    <p>+30 6942919085</p>
    <p>Athens, Greece</p>
  </div>
  <div class="footer-sitemap">
    <ul>
      <li><a href="index.html" class="sitemap-home">Home</a></li>
      <li>
        <a href="greece-private-tours.html" class="sitemap-tours">Tours</a>
        <ul>
          <li><a href="private-athens-tours.html" class="sitemap-athens">Athens Tours</a></li>
          <li><a href="peloponnese-archaeological-tour.html" class="sitemap-pelop">Peloponnese Tour</a></li>
          <li><a href="central-greece-tours.html" class="sitemap-central">Central Greece Tours</a></li>
          <li><a href="saronic-gulf-island-tours.html" class="sitemap-saronic">Saronic Gulf Tours</a></li>
          <li><a href="cyclades-island-tours.html" class="sitemap-cyclades">Cyclades Tours</a></li>
        </ul>
      </li>
      <li><a href="about-elisavet-makri.html" class="sitemap-about">About Me</a></li>
      <li><a href="contact-greece-local-guide.html" class="sitemap-contact">Contact</a></li>
    </ul>
  </div>
  <div class="footer-logo">
    <img src="images/logo1.jpg" alt="Greece Local Guide logo" class="footer-logo-image">
    <p id="footer-text">&copy; 2026 Tour Guide. All rights reserved.</p>
  </div>
</footer>`;
  }

  function applySharedTranslations(lang) {
    const safeLang = LANG_TEXT[lang] ? lang : "en";
    const text = LANG_TEXT[safeLang];
    const config = getConfig();

    document.documentElement.lang = safeLang;

    const headerTitle = document.getElementById("header-title");
    if (headerTitle) {
      headerTitle.textContent = resolveHeaderTitle(config, safeLang);
    }

    document.querySelectorAll(".nav-home").forEach(function (el) { el.textContent = text.nav_home; });
    document.querySelectorAll(".nav-tours").forEach(function (el) { el.textContent = text.nav_tours; });
    document.querySelectorAll(".nav-about").forEach(function (el) { el.textContent = text.nav_about; });
    document.querySelectorAll(".nav-contact").forEach(function (el) { el.textContent = text.nav_contact; });

    const sitemapMap = [
      [".sitemap-home", text.sitemap_home],
      [".sitemap-tours", text.sitemap_tours],
      [".sitemap-athens", text.sitemap_athens],
      [".sitemap-pelop", text.sitemap_pelop],
      [".sitemap-central", text.sitemap_central],
      [".sitemap-saronic", text.sitemap_saronic],
      [".sitemap-cyclades", text.sitemap_cyclades],
      [".sitemap-about", text.sitemap_about],
      [".sitemap-contact", text.sitemap_contact]
    ];

    sitemapMap.forEach(function (entry) {
      const node = document.querySelector(entry[0]);
      if (node) node.textContent = entry[1];
    });

    const footerInfo = document.querySelectorAll(".footer-info p");
    if (footerInfo.length >= 5) {
      footerInfo[0].textContent = text.footer_name;
      footerInfo[1].textContent = text.footer_role;
      footerInfo[4].textContent = text.footer_location;
    }

    const footerText = document.getElementById("footer-text");
    if (footerText) footerText.innerHTML = text.footer_copy;

    document.querySelectorAll(".language-option").forEach(function (el) {
      el.classList.toggle("active", el.dataset.lang === safeLang);
    });

    localStorage.setItem("selectedLanguage", safeLang);
  }

  function bindLanguageSelectors() {
    const options = document.querySelectorAll(".language-option");
    options.forEach(function (option) {
      if (option.dataset.sharedLangBound === "1") return;
      option.dataset.sharedLangBound = "1";
      option.addEventListener("click", function () {
        const lang = option.dataset.lang || "en";
        applySharedTranslations(lang);
        window.dispatchEvent(new CustomEvent("shared-language-change", { detail: { lang: lang } }));
      });
    });
  }

  function setBurgerState(isOpen, burgerMenu, burgerIcon, closeIcon) {
    if (!burgerMenu) return;
    burgerMenu.classList.toggle("active", isOpen);
    if (burgerIcon) burgerIcon.style.display = isOpen ? "none" : "block";
    if (closeIcon) closeIcon.style.display = isOpen ? "block" : "none";
  }

  function bindBurgerMenu() {
    const burgerMenuBtn = document.querySelector(".burger-menu-btn");
    const burgerMenu = document.querySelector(".burger-menu");
    const burgerIcon = document.querySelector(".burger-icon");
    const closeIcon = document.querySelector(".close-icon");

    if (!burgerMenuBtn || !burgerMenu) return;
    if (burgerMenuBtn.dataset.sharedBurgerBound === "1") return;
    burgerMenuBtn.dataset.sharedBurgerBound = "1";

    setBurgerState(false, burgerMenu, burgerIcon, closeIcon);

    const toggleMenu = function (event) {
      if (event) {
        event.preventDefault();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
        event.stopPropagation();
      }
      const isOpen = !burgerMenu.classList.contains("active");
      setBurgerState(isOpen, burgerMenu, burgerIcon, closeIcon);
    };

    const closeMenu = function (event) {
      if (event) {
        event.preventDefault();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
        event.stopPropagation();
      }
      setBurgerState(false, burgerMenu, burgerIcon, closeIcon);
    };

    burgerMenuBtn.addEventListener("click", toggleMenu, true);
    if (closeIcon) closeIcon.addEventListener("click", closeMenu, true);

    burgerMenu.querySelectorAll("a").forEach(function (link) {
      if (link.dataset.sharedBurgerCloseBound === "1") return;
      link.dataset.sharedBurgerCloseBound = "1";
      link.addEventListener("click", function () {
        setBurgerState(false, burgerMenu, burgerIcon, closeIcon);
      });
    });

    if (window.__sharedBurgerResizeBound !== true) {
      window.__sharedBurgerResizeBound = true;
      window.addEventListener("resize", function () {
        const menu = document.querySelector(".burger-menu");
        const menuIcon = document.querySelector(".burger-icon");
        const xIcon = document.querySelector(".close-icon");
        if (window.innerWidth > 600) {
          setBurgerState(false, menu, menuIcon, xIcon);
        }
      });
    }
  }

  function injectLayout() {
    const headerHost = document.getElementById("site-header");
    const footerHost = document.getElementById("site-footer");

    if (!headerHost && !footerHost) return;

    const config = getConfig();

    if (headerHost && headerHost.dataset.sharedLayoutInjected !== "1") {
      headerHost.innerHTML = headerMarkup(config);
      headerHost.dataset.sharedLayoutInjected = "1";
    }
    if (footerHost && footerHost.dataset.sharedLayoutInjected !== "1") {
      footerHost.innerHTML = footerMarkup();
      footerHost.dataset.sharedLayoutInjected = "1";
    }

    bindLanguageSelectors();
    bindBurgerMenu();
    applySharedTranslations(getStoredLanguage());
  }

  injectLayout();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectLayout);
  }
})();
