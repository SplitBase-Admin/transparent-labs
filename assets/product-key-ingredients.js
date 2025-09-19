document.addEventListener("DOMContentLoaded", () => {
  // Initialize variables
  const ingredientCards = document.querySelectorAll(".ingredient-card")
  const ingredientGrid = document.querySelector(".ingredient-section__grid")
  const modal = document.getElementById("ingredient-modal")
  const modalOverlay = modal.querySelector(".ingredient-modal__overlay")
  const swiperElement = modal.querySelector(".ingredient-swiper")
  const sliderBottomElement = modal.querySelector(".key-ingredient-slider-bottom")
  let swiper = null

  // Card pagination variables
  const cardsPerPage = 4
  let visibleCards = cardsPerPage

  // Hide extra cards immediately to prevent flash of content
  // This runs as soon as the script loads, before DOMContentLoaded
  function hideExtraCardsImmediately() {
    const cards = document.querySelectorAll(".ingredient-card")
    if (cards.length > 0) {
      cards.forEach((card, index) => {
        if (index >= cardsPerPage) {
          card.style.display = "none"
        }
      })
    }
  }

  // Call this immediately
  hideExtraCardsImmediately()

  // Function to initialize the card display
  function initializeCardDisplay() {
    // Hide all cards initially with display: none (no transition)
    ingredientCards.forEach((card, index) => {
      if (index >= cardsPerPage && !card.classList.contains("show-more-button")) {
        card.style.display = "none"
      }
    })

    // Only add "Show More" button if there are more than cardsPerPage cards
    if (ingredientCards.length > cardsPerPage) {
      addShowMoreButton()
    }
  }

  // Function to add "Show More" button
  function addShowMoreButton() {
    // Remove existing button if any
    const existingButton = document.querySelector(".show-more-button")
    if (existingButton) {
      existingButton.remove()
    }

    // Create "Show More" button
    const showMoreButton = document.createElement("div")
    showMoreButton.className = "show-more-button ingredient-card"
    showMoreButton.innerHTML = `
      <div class="show-more-content">
        <button class="show-more-btn" aria-label="Show more ingredients">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M9 1V18M17.5 9.5H0.5" stroke="#111314" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    `

    // Add click event to show more cards
    showMoreButton.addEventListener("click", showMoreCards)

    // Append button to the grid
    ingredientGrid.appendChild(showMoreButton)
  }

  // Function to show more cards with smooth transition
  function showMoreCards() {
    const totalCards = ingredientCards.length
    const nextBatch = Math.min(visibleCards + cardsPerPage, totalCards)

    // Show the next batch of cards with animation
    for (let i = visibleCards; i < nextBatch; i++) {
      if (i < ingredientCards.length && !ingredientCards[i].classList.contains("show-more-button")) {
        const card = ingredientCards[i]

        // First make the card visible but with opacity 0
        card.style.display = ""
        card.style.opacity = "0"
        card.style.transform = "translateY(20px)"
        card.style.transition = "opacity 0.4s ease, transform 0.4s ease"

        // Force a reflow to ensure the transition works
        void card.offsetWidth

        // Then animate it in with a slight delay for each card
        setTimeout(
          () => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"

            // Remove the transition after it completes
            setTimeout(() => {
              card.style.transition = ""
            }, 400)
          },
          (i - visibleCards) * 100,
        ) // Stagger the animations
      }
    }

    // Update visible cards count
    visibleCards = nextBatch

    // Remove "Show More" button if all cards are visible
    if (visibleCards >= totalCards) {
      const showMoreButton = document.querySelector(".show-more-button")
      if (showMoreButton) {
        showMoreButton.remove()
      }
    } else {
      // Update the button position
      const showMoreButton = document.querySelector(".show-more-button")
      if (showMoreButton) {
        ingredientGrid.appendChild(showMoreButton)
      }
    }
  }

  // Initialize Swiper
  function initSwiper(initialSlide) {
    // Destroy existing swiper if it exists
    if (swiper) {
      swiper.destroy(true, true)
    }
  
    // Count the original slides BEFORE Swiper initialization
    const swiperWrapper = modal.querySelector(".swiper-wrapper")
    const originalSlides = swiperWrapper.querySelectorAll(":scope > .swiper-slide")
    const totalSlides = originalSlides.length
  
    if (totalSlides <= 1) {
      swiperWrapper.parentElement.classList.remove("swiper-initialized", "swiper-container-initialized")
      return
    }
  
    // Initialize new swiper with the clicked slide active
    swiper = new Swiper(".ingredient-swiper", {
      initialSlide: initialSlide,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 48,
      grabCursor: true,
      autoHeight: true,
      loop: true,
      loopAdditionalSlides: 2,
      speed: 300, // Animation speed for transitions
      breakpoints: {
        768: {
          autoHeight: false,
        }
      },
      pagination: {
        el: ".key-ingredient-pagination",
        clickable: true,
        type: "bullets",
        renderBullet: (index, className) => (index < totalSlides ? `<span class="${className}"></span>` : ""),
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        init: function () {
          this.originalSlideCount = totalSlides
          updateFractionPagination(this.realIndex + 1, totalSlides)
          
          // Store reference to swiper instance
          const swiperInstance = this;
          this.slides.forEach(function(slide) {
            slide.addEventListener('click', function(e) {
              e.stopPropagation();

              if(window.innerWidth > 768){
                if (slide.classList.contains('swiper-slide-next')) {
                  swiperInstance.slideNext(300);
                } else if (slide.classList.contains('swiper-slide-prev')) {
                  swiperInstance.slidePrev(300);
                }
              }
              
            });
          });
        },
        slideChange: function () {
          updateFractionPagination(this.realIndex + 1, this.originalSlideCount)
        }
      },
    })
    window.tempSlider = swiper;
  }

  function updateFractionPagination(current, total) {
    const fractionEl = document.querySelector(".key-ingredient-fraction")
    if (fractionEl) {
      // Make sure current is between 1 and total
      current = Math.max(1, Math.min(current, total))
      fractionEl.textContent = `${String(current).padStart(2, "0")}/${String(total).padStart(2, "0")}`
    }
  }

  // Open modal and show the clicked ingredient
  function openIngredientModal(clickedIndex) {
    // Initialize swiper with the clicked index
    initSwiper(clickedIndex)

    // Show modal
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  // Close modal
  function closeModal() {
    modal.classList.remove("active")
    document.body.style.overflow = ""
  }

  // Add event listeners to ingredient cards
  ingredientCards.forEach((card) => {
    card.addEventListener("click", function () {
      const clickedIndex = Number.parseInt(this.getAttribute("data-ingredient-index")) || 0
      openIngredientModal(clickedIndex)
    })
  })

  // Add click handler to the overlay
  if (modalOverlay) {
    modalOverlay.addEventListener("click", () => {
      closeModal()
    })
  }

  // Handle clicks on the modal
  modal.addEventListener("click", (e) => {
    // Only close if the click is directly on the modal element (not its children)
    if (e.target === modal) {
      closeModal()
      return
    }

    // Check if click is outside the swiper but not on the slider bottom (pagination/fraction)
    const isClickOnSwiper = swiperElement.contains(e.target)
    const isClickOnSliderBottom = sliderBottomElement && sliderBottomElement.contains(e.target)

    // If click is not on swiper and not on slider bottom, close the modal
    if (!isClickOnSwiper && !isClickOnSliderBottom) {
      closeModal()
    }
  })
  
  const modalCloseButtons = modal.querySelectorAll(".ingredient-modal__close")
  modalCloseButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal()
    })
  })

  // Close modal on escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeModal()
    }
  })

  // Initialize the card display
  initializeCardDisplay()
})
