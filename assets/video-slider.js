  document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper
    const sliderEl = document.querySelector('.video-slider');
    
    if (sliderEl) {
      // Define the updateFraction function if it doesn't exist
      if (!window.updateFraction) {
        window.updateFraction = function(swiper, selector) {
          const fractionEl = document.querySelector(selector);
          if (fractionEl) {
            fractionEl.textContent = `${swiper.realIndex + 1} / ${swiper.slides.length}`;
          }
        };
      }
      
      // Define breakpoints if they don't exist
      if (!window.swiperBreakpointsVideoCarousel) {
        window.swiperBreakpointsVideoCarousel = {
            640: {
              slidesPerView: 2.2
            },
            768: {
              slidesPerView: 2.4
            },
            1024: {
              slidesPerView: 2.9
            },
            1200: {
              slidesPerView: 3.44
            },
            1921: {
              slidesPerView: 4
            }
        };
      }
      
      const swiperVideoCarousel = new Swiper(sliderEl, {
        slidesPerView: 1.178,
        spaceBetween: 24,
        pagination: {
          el: ".video-slider-pagination",
          clickable: true
        },
        breakpoints: window.swiperBreakpointsVideoCarousel,
        on: {
          init: function () {
            window.updateFraction(this, '.video-slider-fraction');
          },
          slideChange: function () {
            window.updateFraction(this, '.video-slider-fraction');
          }
        }
      });
      
      window.addEventListener("resize", () => {
        window.updateFraction(swiperVideoCarousel, '.video-slider-fraction');
      });
    }
    
    // Toggle Video Grid
    const viewAllButton = document.querySelector('.view-all-toggle');
    const videoGridSection = document.querySelector('.video-grid-section');
    
    if (viewAllButton && videoGridSection) {
      viewAllButton.addEventListener('click', function() {
        const isVisible = videoGridSection.style.display !== 'none';
        videoGridSection.style.display = isVisible ? 'none' : 'block';
        
        // Update button text if needed
        const buttonText = this.querySelector('span');
        if (buttonText) {
          buttonText.textContent = isVisible ? 'View More' : 'Show Less';
        }
        
        // Scroll to grid if showing
        if (!isVisible) {
          setTimeout(() => {
            videoGridSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      });
    }
    
    // Video Popup Functionality
    const playButtons = document.querySelectorAll('.video-play-button');
    const overlay = document.getElementById('video-popup-overlay');
    const closeButton = document.querySelector('.video-popup-close');
    const playerContainer = document.getElementById('youtube-player-container');
    let player = null;
    
    // Check if thumbnails loaded correctly, if not, try fallback
    document.querySelectorAll('.video-poster').forEach(img => {
      img.addEventListener('error', function() {
        const youtubeId = this.closest('.video-inner').querySelector('.video-play-button').getAttribute('data-youtube-id');
        // Try standard quality thumbnail if high quality fails
        this.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      });
    });
    
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Create YouTube player when API is ready
    window.onYouTubeIframeAPIReady = function() {
      console.log('YouTube API Ready');
    };
    
    playButtons.forEach(button => {
      button.addEventListener('click', function() {
        const youtubeId = this.getAttribute('data-youtube-id');
        console.log('Opening video with ID:', youtubeId);
        
        // Clear previous player if exists
        if (player) {
          player.destroy();
          player = null;
        }
        
        // Show overlay first
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Create new player
        playerContainer.innerHTML = ''; // Clear container
        
        // Create a loading indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.innerHTML = '<div class="spinner"></div>';
        playerContainer.appendChild(loadingIndicator);
        
        // Create player with a slight delay to ensure the container is visible
        setTimeout(() => {
          try {
            player = new YT.Player(playerContainer, {
              videoId: youtubeId,
              playerVars: {
                'autoplay': 1,
                'rel': 0,
                'modestbranding': 1,
                'playsinline': 1,
                'origin': window.location.origin
              },
              events: {
                'onReady': onPlayerReady,
                'onError': onPlayerError
              }
            });
          } catch (e) {
            console.error('Error creating YouTube player:', e);
            playerContainer.innerHTML = '<div class="error-message">Error loading video. Please try again.</div>';
          }
        }, 300);
      });
    });
    
    function onPlayerReady(event) {
      console.log('Player ready');
      event.target.playVideo();
      // Remove loading indicator if it exists
      const loadingIndicator = playerContainer.querySelector('.loading-indicator');
      if (loadingIndicator) {
        loadingIndicator.remove();
      }
    }
    
    function onPlayerError(event) {
      console.error('YouTube player error:', event.data);
      playerContainer.innerHTML = '<div class="error-message">Error loading video. Please check the YouTube URL and try again.</div>';
    }
    
    closeButton.addEventListener('click', function() {
      closeVideoPopup();
    });
    
    // Close popup when clicking outside the video container
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeVideoPopup();
      }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeVideoPopup();
      }
    });
    
    function closeVideoPopup() {
      if (player) {
        player.destroy();
        player = null;
      }
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      playerContainer.innerHTML = '';
    }
  });