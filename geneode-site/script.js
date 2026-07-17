// ═══════════════════════════════════════════════════════
// GENEODE — Scientific Industrial Console
// ═══════════════════════════════════════════════════════

(function () {
  'use strict';

  // ─── BOOT SEQUENCE ────────────────────────────────
  const bootPanel = document.getElementById('bootPanel');
  if (bootPanel) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        bootPanel.classList.add('hidden');
      }, 2200);
    });
  }

  // ─── YEAR ─────────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ─── MOBILE NAV ───────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ─── SCROLL REVEAL ───────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.14 }
  );
  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 40, 300)}ms`;
    observer.observe(el);
  });

  // ─── DNA HELIX CANVAS ─────────────────────────────
  const canvas = document.getElementById('dnaCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    }

    function drawHelix() {
      const W = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const H = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));

      ctx.clearRect(0, 0, W, H);

      // Dark bg
      ctx.fillStyle = 'rgba(9, 11, 12, 0.3)';
      ctx.fillRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;
      const amp = Math.min(W, H) * 0.28;
      const period = 0.8;
      const points = 80;

      // Draw strands
      for (let strand = 0; strand < 2; strand++) {
        const phase = strand * Math.PI;
        ctx.beginPath();
        for (let i = 0; i <= points; i++) {
          const progress = (i / points - 0.5) * 3;
          const x = cx + Math.sin(progress * period + t + phase) * amp;
          const y = cy + progress * (H * 0.35);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = strand === 0
          ? 'rgba(66, 215, 255, 0.55)'
          : 'rgba(88, 245, 154, 0.4)';
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }

      // Cross rungs
      const rungCount = 22;
      for (let i = 0; i < rungCount; i++) {
        const progress = (i / rungCount - 0.5) * 3;
        const y = cy + progress * (H * 0.35);
        const angle = progress * period + t;

        const x1 = cx + Math.sin(angle) * amp;
        const x2 = cx + Math.sin(angle + Math.PI) * amp;

        const alpha = 0.15 + 0.15 * Math.abs(Math.cos(angle));
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = `rgba(66, 215, 255, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Nucleotide dots
        [x1, x2].forEach((x) => {
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(66, 215, 255, ${alpha * 1.5})`;
          ctx.fill();
        });
      }

      // Floating particles
      for (let p = 0; p < 18; p++) {
        const px = cx + Math.sin(t * 0.7 + p * 1.8) * amp * 1.3;
        const py = cy + Math.cos(t * 0.5 + p * 2.1) * H * 0.38;
        const pa = 0.12 + 0.08 * Math.sin(t * 1.3 + p);
        ctx.beginPath();
        ctx.arc(px, py, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(66, 215, 255, ${pa})`;
        ctx.fill();
      }

      t += 0.008;
      animId = requestAnimationFrame(drawHelix);
    }

    resize();
    drawHelix();
    window.addEventListener('resize', () => { resize(); });

    // Pause when off-screen to save CPU
    const vizObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!animId) drawHelix();
        } else {
          if (animId) { cancelAnimationFrame(animId); animId = null; }
        }
      },
      { threshold: 0.1 }
    );
    vizObserver.observe(canvas);
  }

  // ─── ACTIVE NAV LINK HIGHLIGHT ────────────────────
  const navLinks = document.querySelectorAll('.nav-link');
  const sectionIds = [];
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) sectionIds.push(href.slice(1));
  });

  if (sectionIds.length) {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.style.color = '');
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.style.color = 'var(--led-cyan)';
          }
        });
      },
      { threshold: 0.4, rootMargin: '-60px 0px 0px 0px' }
    );
    sections.forEach((s) => navObserver.observe(s));
  }

})();