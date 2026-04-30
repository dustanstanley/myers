/**
 * Myers Underground — motion (GSAP + ScrollTrigger).
 * Respects prefers-reduced-motion; no jQuery required.
 */
(function () {
  "use strict";

  var header = document.getElementById("header");
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("mobileNav");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (header) {
    window.addEventListener(
      "scroll",
      function () {
        header.classList.toggle("is-scrolled", window.scrollY > 24);
      },
      { passive: true }
    );
  }

  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = mobile.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobile.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  function noMotion() {
    return reduce.matches;
  }

  if (noMotion()) {
    return;
  }

  var easeOut = "power3.out";
  var easeMid = "power2.out";

  // Header slides in on load
  if (header) {
    gsap.from(header, {
      y: -28,
      autoAlpha: 0,
      duration: 0.65,
      ease: easeMid,
      clearProps: "transform",
    });
  }

  // Hero: staggered entrance
  var heroTl = gsap.timeline({
    defaults: { ease: easeOut },
    delay: 0.08,
  });

  heroTl
    .from(".hero-eyebrow", { autoAlpha: 0, y: 22, duration: 0.55 })
    .from(
      "#hero-heading",
      { autoAlpha: 0, y: 52, duration: 0.85 },
      "-=0.38"
    )
    .from(
      ".hero-lead",
      { autoAlpha: 0, y: 32, duration: 0.7 },
      "-=0.55"
    )
    .from(
      ".hero-actions .btn",
      { autoAlpha: 0, y: 24, duration: 0.5, stagger: 0.1 },
      "-=0.45"
    )
    .from(
      ".hero-meta > div",
      { autoAlpha: 0, y: 18, duration: 0.48, stagger: 0.09 },
      "-=0.35"
    );

  function stReveal(trigger, targets, vars) {
    var base = {
      autoAlpha: 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: trigger,
        start: "top 82%",
        toggleActions: "play none none none",
      },
    };
    var i;
    for (i in vars) {
      if (Object.prototype.hasOwnProperty.call(vars, i)) {
        base[i] = vars[i];
      }
    }
    return gsap.from(targets, base);
  }

  stReveal("#about", "#about .about-grid > *", {
    y: 56,
    duration: 0.88,
    stagger: 0.14,
    ease: easeOut,
  });

  stReveal(
    "#services",
    "#services .services-intro > *, #services .services-brick-row",
    {
      y: 40,
      duration: 0.75,
      stagger: 0.11,
      ease: easeOut,
    }
  );

  stReveal(".mission", ".mission .wrap > *", {
    y: 36,
    duration: 0.72,
    stagger: 0.14,
    ease: easeOut,
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".split",
        start: "top 78%",
        toggleActions: "play none none none",
      },
    })
    .from(
      ".split .split-panel:nth-child(1)",
      { autoAlpha: 0, x: -48, duration: 0.82, ease: easeOut, immediateRender: false },
      0
    )
    .from(
      ".split .split-panel:nth-child(2)",
      { autoAlpha: 0, x: 48, duration: 0.82, ease: easeOut, immediateRender: false },
      0.1
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })
    .from(
      ".testimonials .section-label",
      { autoAlpha: 0, y: 16, duration: 0.45, immediateRender: false },
      0
    )
    .from(
      ".testimonials .section-title",
      { autoAlpha: 0, y: 26, duration: 0.55, immediateRender: false },
      0.05
    )
    .from(
      ".testimonials-carousel",
      {
        autoAlpha: 0,
        y: 44,
        duration: 0.75,
        ease: easeOut,
        immediateRender: false,
      },
      0.1
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 78%",
        toggleActions: "play none none none",
      },
    })
    .from(
      "#projects .section-label",
      { autoAlpha: 0, y: 16, duration: 0.45, immediateRender: false },
      0
    )
    .from(
      "#projects .section-title",
      { autoAlpha: 0, y: 26, duration: 0.55, immediateRender: false },
      0.05
    )
    .from(
      "#projects .section-lead",
      { autoAlpha: 0, y: 18, duration: 0.5, immediateRender: false },
      0.1
    )
    .from(
      "#projects .project-list li",
      {
        autoAlpha: 0,
        x: -16,
        duration: 0.38,
        stagger: { each: 0.012, from: "start" },
        ease: easeMid,
        immediateRender: false,
      },
      0.12
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#careers",
        start: "top 82%",
        toggleActions: "play none none none",
      },
    })
    .from(
      "#careers .section-label",
      { autoAlpha: 0, y: 14, duration: 0.42, immediateRender: false },
      0
    )
    .from(
      "#careers .section-title",
      { autoAlpha: 0, y: 24, duration: 0.55, immediateRender: false },
      0.05
    )
    .from(
      "#careers .careers-box",
      {
        autoAlpha: 0,
        y: 36,
        scale: 0.97,
        duration: 0.78,
        ease: easeOut,
        immediateRender: false,
      },
      0.08
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })
    .from(
      "#contact .section-label",
      { autoAlpha: 0, y: 14, duration: 0.42, immediateRender: false },
      0
    )
    .from(
      "#contact .section-title",
      { autoAlpha: 0, y: 24, duration: 0.55, immediateRender: false },
      0.05
    )
    .from(
      "#contact .contact-details",
      { autoAlpha: 0, x: -36, duration: 0.72, ease: easeOut, immediateRender: false },
      0.1
    )
    .from(
      "#contact .map-frame",
      { autoAlpha: 0, x: 36, duration: 0.72, ease: easeOut, immediateRender: false },
      0.18
    );

  gsap.from("#site-footer p", {
    autoAlpha: 0,
    y: 20,
    duration: 0.6,
    ease: easeMid,
    immediateRender: false,
    scrollTrigger: {
      trigger: "#site-footer",
      start: "top 94%",
      toggleActions: "play none none none",
    },
  });

  window.addEventListener("load", function () {
    ScrollTrigger.refresh();
  });
})();

/**
 * Testimonials: auto-advancing loop carousel (vanilla JS).
 * Runs even when GSAP is skipped; respects prefers-reduced-motion (static grid).
 */
(function initTestimonialsCarousel() {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var root = document.querySelector(".testimonials-carousel");
  var track = document.getElementById("testimonialsTrack");
  var pauseBtn = document.getElementById("testimonialsPause");
  var live = document.getElementById("testimonialsLive");
  if (!root || !track) {
    return;
  }

  var slides = track.querySelectorAll(".testimonials-slide");
  if (slides.length < 2) {
    return;
  }

  function setStaticLayout() {
    root.classList.add("testimonials-carousel--static");
    track.style.setProperty("--testimonial-slide-count", String(slides.length));
  }

  if (reduce.matches) {
    setStaticLayout();
    if (pauseBtn) {
      pauseBtn.hidden = true;
    }
    return;
  }

  var first = slides[0];
  var last = slides[slides.length - 1];
  var head = last.cloneNode(true);
  var tail = first.cloneNode(true);
  head.setAttribute("aria-hidden", "true");
  tail.setAttribute("aria-hidden", "true");
  head.classList.add("testimonials-slide--clone");
  tail.classList.add("testimonials-slide--clone");
  track.insertBefore(head, first);
  track.appendChild(tail);

  var allSlides = track.querySelectorAll(".testimonials-slide");
  var count = allSlides.length;
  track.style.setProperty("--testimonial-slide-count", String(count));

  var index = 1;
  var timer = null;
  var userPaused = false;
  var hoverPaused = false;
  var inView = false;
  var lastAnnounced = 0;

  function playing() {
    return !userPaused && !hoverPaused && inView;
  }

  function pct() {
    return (index * 100) / count;
  }

  function logicalSlide() {
    if (index === 0) {
      return slides.length;
    }
    if (index === count - 1) {
      return 1;
    }
    return index;
  }

  function updateLive() {
    if (!live) {
      return;
    }
    var logical = logicalSlide();
    if (logical === lastAnnounced) {
      return;
    }
    lastAnnounced = logical;
    live.textContent = "Slide " + logical + " of " + slides.length;
  }

  function applyTransform(instant) {
    if (instant) {
      track.style.transition = "none";
    }
    track.style.transform = "translateX(-" + pct() + "%)";
    if (instant) {
      void track.offsetHeight;
      track.style.transition = "";
    }
    updateLive();
  }

  function startTimer() {
    clearInterval(timer);
    timer = null;
    if (!playing()) {
      return;
    }
    timer = window.setInterval(advance, 6200);
  }

  function advance() {
    index += 1;
    applyTransform(false);
  }

  track.addEventListener("transitionend", function (e) {
    if (e.target !== track || e.propertyName !== "transform") {
      return;
    }
    if (index === count - 1) {
      index = 1;
      applyTransform(true);
    }
  });

  if (pauseBtn) {
    pauseBtn.addEventListener("click", function () {
      userPaused = !userPaused;
      pauseBtn.setAttribute("aria-pressed", userPaused ? "true" : "false");
      pauseBtn.textContent = userPaused ? "Play rotation" : "Pause rotation";
      startTimer();
    });
  }

  root.addEventListener("mouseenter", function () {
    hoverPaused = true;
    clearInterval(timer);
    timer = null;
  });
  root.addEventListener("mouseleave", function () {
    hoverPaused = false;
    startTimer();
  });

  reduce.addEventListener("change", function () {
    if (!reduce.matches) {
      return;
    }
    clearInterval(timer);
    timer = null;
    if (head.parentNode) {
      head.remove();
    }
    if (tail.parentNode) {
      tail.remove();
    }
    track.style.transform = "";
    track.style.removeProperty("--testimonial-slide-count");
    setStaticLayout();
    if (pauseBtn) {
      pauseBtn.hidden = true;
    }
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        inView = entry.isIntersecting;
        if (inView) {
          startTimer();
        } else {
          clearInterval(timer);
          timer = null;
        }
      });
    },
    { root: null, threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  observer.observe(root);

  applyTransform(true);
  updateLive();
})();
