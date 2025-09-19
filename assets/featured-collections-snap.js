document.querySelectorAll('.featured-collections-tabs').forEach(section => {
  // Scope selectors to this section
  const tabs = section.querySelectorAll(".tab-button");
  const panels = section.querySelectorAll(".tab-panel");
  const collectionLinks = section.querySelectorAll(".tab-collection-link");

  // Helper: check if all slides in view for a specific carousel container
  function checkAllSlidesInViewForPanel(container) {

    if(!container.closest(".goal-product-carousel")) return;
    
    if(!container) return;
    const panel = container.closest('.tab-panel');
    if (!panel) return;
    const track = container.querySelector('.product-item-wrapper');
    if (!track) return;
    const slides = Array.from(track.children);
    if (!slides.length) return;
    const containerRect = container.getBoundingClientRect();
    let allInView = slides.every(slide => {
      const r = slide.getBoundingClientRect();
      return (
        r.left >= containerRect.left &&
        r.right <= containerRect.right
      );
    });
    // Add class if all are in view, remove otherwise
    panel.classList.toggle('hide-pagination', allInView);
  }

  // Tabs logic (tab switching handlers)
  tabs.forEach(tab => {
    tab.addEventListener("click", event => {
      event.preventDefault();
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      collectionLinks.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const panelId = tab.dataset.tab;
      const activePanel = section.querySelector("#" + panelId); // scoped to section
      if(activePanel)   activePanel.classList.add("active");
      const tabLink = section.querySelector(`.tab-collection-link[data-id="${panelId}"]`);
      if (tabLink) tabLink.classList.add("active");
      // Check visibility for active panel's carousel
      if(activePanel) {
        const container = document.querySelector(`#${ panelId }`);
        checkAllSlidesInViewForPanel(container);
      }
    });
  });

  // Sliders logic (per carousel)
  section.querySelectorAll('.collection-swiper-container').forEach((container) => {
    const controls = container.nextElementSibling;
    if (!controls) return;
    const dotsContainer = controls.querySelector('.featured-collections-pagination');
    const fraction = controls.querySelector('.featured-collections-fraction');
    const track = container.querySelector('.product-item-wrapper');
    const slides = Array.from(track.children);
    let slidesInView = 1, totalWindows = 1;

    checkAllSlidesInViewForPanel(container);

    function calcSlidesInView() {
      if (!slides.length) return 1;
      const containerWidth = container.getBoundingClientRect().width;
      const slideWidth = slides[0].getBoundingClientRect().width;
      return Math.max(1, Math.floor(containerWidth / slideWidth));
    }

    function renderDots() {
      slidesInView = calcSlidesInView();
      totalWindows = slides.length - slidesInView + 1;
      if (totalWindows < 1) totalWindows = 1;
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalWindows; i++) {
        const dot = document.createElement('button');
        dot.className = 'dot swiper-pagination-bullet';
        dot.setAttribute('type', 'button');
        dot.setAttribute('aria-label', `Go to slides ${i + 1}–${i + slidesInView}`);
        dot.tabIndex = 0;
        dot.addEventListener('click', () => {
          slides[i].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
          });
          setTimeout(updateActive, 350);
        });
        dotsContainer.appendChild(dot);
      }
      checkAllSlidesInViewForPanel(container);
    }

    function getCurrentWindowIdx() {
      const containerRect = container.getBoundingClientRect();
      let minDiff = Infinity, idx = 0;
      for (let i = 0; i < slides.length; i++) {
        const slideRect = slides[i].getBoundingClientRect();
        const diff = Math.abs(slideRect.left - containerRect.left);
        if (diff < minDiff) {
          minDiff = diff; idx = i;
        }
      }
      if (idx > slides.length - slidesInView) idx = slides.length - slidesInView;
      if (idx < 0) idx = 0;
      return idx;
    }

    // Debounced update
    let updateScheduled = false;
    function updateActive() {
      if (updateScheduled) return;
      updateScheduled = true;
      requestAnimationFrame(() => {
        slidesInView = calcSlidesInView();
        totalWindows = slides.length - slidesInView + 1;
        if (totalWindows < 1) totalWindows = 1;
        const currentIdx = getCurrentWindowIdx();
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIdx);
        });
        if (fraction) {
          fraction.innerHTML = `<strong>${currentIdx + 1}</strong>/<span>${totalWindows}</span>`;
        }
        checkAllSlidesInViewForPanel(container);
        updateScheduled = false;
      });
    }

    // Desktop drag-to-scroll
    let isDown = false, startX = 0, scrollLeft = 0, moved = false;
    container.addEventListener('mousedown', (e) => {
      if (window.matchMedia('(pointer: coarse)').matches) return;
      e.preventDefault();
      isDown = true;
      moved = false;
      startX = e.pageX;
      scrollLeft = container.scrollLeft;
      container.classList.add('dragging');
    });
    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      if (Math.abs(e.pageX - startX) > 5) moved = true;
      e.preventDefault();
      const x = e.pageX;
      container.scrollLeft = scrollLeft - (x - startX);
    });
    document.addEventListener('mouseup', () => {
      if (isDown) {
        container.classList.remove('dragging');
      }
      isDown = false;
    });
    container.addEventListener('mouseleave', () => {
      if (isDown) {
        container.classList.remove('dragging');
      }
      isDown = false;
    });
    container.addEventListener('click', function(e) {
      if (moved && e.target.closest('a')) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
      moved = false;
    }, true);

    // Scroll + resize
    let rafId = null;
    container.addEventListener('scroll', () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateActive();
      });
    });

    window.addEventListener('resize', () => {
      renderDots();
      updateActive();
    });

    // Tab keyboard navigation
    slides.forEach((slide, i) => {
      slide.tabIndex = 0;
      slide.addEventListener('focus', () => {
        let idx = i;
        slidesInView = calcSlidesInView();
        if (i > slides.length - slidesInView) idx = slides.length - slidesInView;
        if (idx < 0) idx = 0;
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, j) => {
          dot.classList.toggle('active', j === idx);
        });
        if (fraction) {
          fraction.innerHTML = `<strong>${idx + 1}</strong>/<span>${totalWindows}</span>`;
        }
        slides[idx].scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest'
        });
        checkAllSlidesInViewForPanel(container);
      });
    });

    renderDots();
    updateActive();
  });

  // DRAG-TO-SNAP (per section, ensure only target)
  let activeDrag = {
    dragging: false,
    threshold: 5,
    startX: 0,
    startY: 0,
    moved: false
  };
  section.addEventListener('mousedown', function(e) {
    const container = e.target.closest('.collection-swiper-container');
    if (!container || !section.contains(container)) return;
    activeDrag.dragging = true;
    activeDrag.moved = false;
    activeDrag.startX = e.pageX;
    activeDrag.startY = e.pageY;
  });
  section.addEventListener('mousemove', function(e) {
    if (!activeDrag.dragging) return;
    if (Math.abs(e.pageX - activeDrag.startX) > activeDrag.threshold || Math.abs(e.pageY - activeDrag.startY) > activeDrag.threshold) {
      activeDrag.moved = true;
    }
  });
  section.addEventListener('mouseup', function(e) {
    if (activeDrag.dragging && activeDrag.moved) {
      function suppressClick(ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        document.removeEventListener('click', suppressClick, true);
      }
      document.addEventListener('click', suppressClick, true);
      const container = e.target.closest('.collection-swiper-container');
      if (container && section.contains(container)) {
        const track = container.querySelector('.product-item-wrapper');
        const slides = Array.from(track.children);

        function getCurrentWindowIdx() {
          const containerRect = container.getBoundingClientRect();
          let minDiff = Infinity,
              idx = 0;
          for (let i = 0; i < slides.length; i++) {
            const slideRect = slides[i].getBoundingClientRect();
            const diff = Math.abs(slideRect.left - containerRect.left);
            if (diff < minDiff) {
              minDiff = diff;
              idx = i;
            }
          }
          return idx;
        }
        const currIdx = getCurrentWindowIdx();
        const dx = e.pageX - activeDrag.startX;
        let targetIdx = currIdx;
        if (Math.abs(dx) > Math.abs(e.pageY - activeDrag.startY)) {
          if (dx < 0 && currIdx < slides.length - 1) {
            targetIdx = currIdx + 1;
          } else if (dx > 0 && currIdx > 0) {
            targetIdx = currIdx - 1;
          }
        }
        slides[targetIdx].scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest"
        });
        setTimeout(() => {
          if (container) {
            checkAllSlidesInViewForPanel(container);
          }
        }, 350);
      }
    }
    activeDrag.dragging = false;
    activeDrag.moved = false;
  });
});

/* A/B Test code for Shop By Goal -- Start */

const POLL_INTERVAL = 300; // ms

function checkDisplayAndUpdate() {
  document.querySelectorAll('.a-b-shop-by-goal').forEach(function(target) {
    const section = target.closest('.section-shop-by-goal');
    if (!section) return;
    const styleDisplay = window.getComputedStyle(target).display;

    if (styleDisplay === 'block') {
      section.classList.remove('shop-by-goal-hidden');
    } else {
      section.classList.add('shop-by-goal-hidden');
    }
  });
}
setInterval(checkDisplayAndUpdate, POLL_INTERVAL);

/* A/B Test code for Shop By Goal -- Start */