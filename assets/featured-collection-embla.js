let emblaSliders = {}; // Store instances by tab panel ID

function initializeEmblaSlider(tabPanel) {
  const emblaEl = tabPanel.querySelector('.embla');
  if (!emblaEl || emblaSliders[tabPanel.id]) return;

  const embla = EmblaCarousel(emblaEl, {
    loop: false,
    align: 'start',
    skipSnaps: true,
  });

  emblaSliders[tabPanel.id] = embla;

  const snapDisplay = emblaEl.querySelector('.embla__selected-snap-display');
  const dotsContainer = emblaEl.querySelector('.embla__dots');

  if (!snapDisplay || !dotsContainer) return;

  const createDots = () => {
    dotsContainer.innerHTML = '';
    const scrollSnaps = embla.scrollSnapList();
    scrollSnaps.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'embla__dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => embla.scrollTo(i));
      dotsContainer.appendChild(dot);
    });
  };

  const updateUI = () => {
    const scrollSnaps = embla.scrollSnapList();
    const selectedSnap = embla.selectedScrollSnap();
    snapDisplay.innerHTML = `<span>${selectedSnap + 1}</span> / <span>${scrollSnaps.length}</span>`;

    const dots = dotsContainer.querySelectorAll('.embla__dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-selected', i === selectedSnap);
    });
  };

  createDots();
  embla.on('select', updateUI).on('reInit', () => {
    createDots();
    updateUI();
  });

  updateUI();
}

// INIT first tab
document.addEventListener('DOMContentLoaded', () => {
  const firstPanel = document.querySelector('.tab-panel.active');
  if (firstPanel) initializeEmblaSlider(firstPanel);
});

// TAB switching
document.querySelectorAll('.tab-button').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const tabId = btn.dataset.tab;

    document.querySelectorAll('.tab-button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(tabId);
    if (targetPanel) {
      targetPanel.classList.add('active');
      if (!emblaSliders[tabId]) {
        initializeEmblaSlider(targetPanel);
      } else {
        emblaSliders[tabId].reInit(); // Ensure resized properly
      }
    }
  });
});

// ✅ Resize handler — only reInit visible panels
window.addEventListener('resize', () => {
  document.querySelectorAll('.tab-panel.active').forEach((panel) => {
    const embla = emblaSliders[panel.id];
    if (embla) embla.reInit();
  });
});

let emblaSliders1 = [];

document.querySelectorAll('.product_image_slider_embla').forEach((el, index) => {
  const embla = EmblaCarousel(el, {
    loop: false,
    align: 'start',
    skipSnaps: true,
    slidesToScroll: 1,
  });

  emblaSliders1[index] = embla;

  const prevBtn = el.querySelector('.embla__button--prev');
  const nextBtn = el.querySelector('.embla__button--next');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => embla.scrollPrev());
    nextBtn.addEventListener('click', () => embla.scrollNext());
  }

  // Prevent bubbling of swipe events to parent slider
  const preventParentSwipe = (event) => {
    event.stopPropagation();
  };

  const container = el.querySelector('.embla__container');
  if (container) {
    ['touchstart', 'touchmove', 'touchend', 'pointerdown', 'pointermove'].forEach(evt =>
      container.addEventListener(evt, preventParentSwipe, { passive: false })
    );
  }

  // Optional: Disable buttons at ends
  const toggleButtons = () => {
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = !embla.canScrollPrev();
    nextBtn.disabled = !embla.canScrollNext();
  };

  embla.on('select', toggleButtons);
  toggleButtons(); // Initialize
});
/* Working */




window.emblaSliders = emblaSliders












// const embla = EmblaCarousel(document.querySelector('.embla'), {
//   loop: false,
//   align: 'start',
// })

// let emblaSliders = [];
// document.querySelectorAll('.embla').forEach((el, index) => {
//    emblaSliders[index] = EmblaCarousel(el, {
//     loop: false,
//     align: 'start',
//     skipSnaps: true,
//   })

//   const snapDisplay = document.querySelector('.embla__selected-snap-display');
//   const embla = el;

//   const updateSnapDisplay = () => {
//     const selectedSnap = embla.selectedScrollSnap();
//     const snapCount = embla.scrollSnapList().length;
//     snapDisplay.innerHTML = `${selectedSnap + 1} / ${snapCount}`;
//   };
//   updateSnapDisplay();

//   embla.on('select', updateSnapDisplay).on('reInit', updateSnapDisplay);
//   updateSnapDisplay(); // initialize on load

  
// })



// console.log("I am here")
// import EmblaCarousel from 'embla-carousel'
// // import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
// // import { updateSelectedSnapDisplay } from './EmblaCarouselSelectedSnapDisplay'
// import '../css/base.css'
// import '../css/sandbox.css'
// import '../css/embla.css'

// const OPTIONS = { dragFree: true }

// export const updateSelectedSnapDisplay = (emblaApi, snapDisplay) => {
//   const updateSnapDisplay = (emblaApi) => {
//     const selectedSnap = emblaApi.selectedScrollSnap()
//     const snapCount = emblaApi.scrollSnapList().length
//     snapDisplay.innerHTML = `${selectedSnap + 1} / ${snapCount}`
//   }

//   emblaApi.on('select', updateSnapDisplay).on('reInit', updateSnapDisplay)

//   updateSnapDisplay(emblaApi)
// }


// const emblaNode = document.querySelector('.embla')
// const viewportNode = emblaNode.querySelector('.embla__viewport')
// // const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
// // const nextBtnNode = emblaNode.querySelector('.embla__button--next')
// const snapDisplayNode = emblaNode.querySelector('.embla__selected-snap-display')

// const emblaApi = EmblaCarousel(viewportNode, OPTIONS)

// // const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
// //   emblaApi,
// //   prevBtnNode,
// //   nextBtnNode
// // )
// updateSelectedSnapDisplay(emblaApi, snapDisplayNode)

// // emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
