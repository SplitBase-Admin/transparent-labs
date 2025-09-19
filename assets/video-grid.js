document.addEventListener("DOMContentLoaded", () => {
  // Toggle Video Grid
  const viewAllButton = document.querySelector(".view-button-toggle")
  const videoItems = document.querySelectorAll(".video-item")
  let isExpanded = false

  function updateVisibleItems() {
    const windowWidth = window.innerWidth
    let visibleCount = 3 // Default for desktop

    if (windowWidth <= 640) {
      visibleCount = 1 // Mobile
    } else if (windowWidth <= 1024) {
      visibleCount = 2 // Tablet
    }

    // If not expanded, hide items beyond the visible count
    if (!isExpanded) {
      videoItems.forEach((item, index) => {
        if (index < visibleCount) {
          item.classList.remove("hidden-item")
        } else {
          item.classList.add("hidden-item")
        }
      })

      // Update button text
      if (viewAllButton) {
        const buttonText = viewAllButton.querySelector("span")
        if (buttonText) {
          buttonText.textContent = "View All"
        }
      }
    } else {
      // Show all items when expanded
      videoItems.forEach((item) => {
        item.classList.remove("hidden-item")
      })

      // Update button text
      if (viewAllButton) {
        const buttonText = viewAllButton.querySelector("span")
        if (buttonText) {
          buttonText.textContent = "View Less"
        }
      }
    }
  }

  // Initial setup
  updateVisibleItems()

  // Toggle visibility on button click
  if (viewAllButton) {
    viewAllButton.addEventListener("click", () => {
      isExpanded = !isExpanded
      updateVisibleItems()
    })
  }

  // Update on window resize
  window.addEventListener("resize", updateVisibleItems)

  // Video Popup Functionality
  const playButtons = document.querySelectorAll(".video-play-button")
  const videoCards = document.querySelectorAll(".video-article-item")
  const overlay = document.getElementById("video-popup-overlay")
  const closeButton = document.querySelector(".video-popup-close")
  const playerContainer = document.getElementById("youtube-player-container")
  let player = null

  // Check if thumbnails loaded correctly, if not, try fallback
  document.querySelectorAll(".video-poster").forEach((img) => {
    img.addEventListener("error", function () {
      const youtubeId = this.closest(".video-inner").querySelector(".video-play-button").getAttribute("data-youtube-id")
      // Try standard quality thumbnail if high quality fails
      this.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    })
  })

  // Load YouTube API
  const tag = document.createElement("script")
  tag.src = "https://www.youtube.com/iframe_api"
  const firstScriptTag = document.getElementsByTagName("script")[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  // Create YouTube player when API is ready
  let YT // Declare YT here
  window.onYouTubeIframeAPIReady = () => {
    console.log("YouTube API Ready")
    YT = window.YT // Assign the YT object
  }

  // Function to open video popup
  function openVideoPopup(youtubeId) {
    console.log("Opening video with ID:", youtubeId)

    // Clear previous player if exists
    if (player) {
      player.destroy()
      player = null
    }

    // Show overlay first
    overlay.classList.add("active")
    document.body.style.overflow = "hidden"

    // Create new player
    playerContainer.innerHTML = "" // Clear container

    // Create a loading indicator
    const loadingIndicator = document.createElement("div")
    loadingIndicator.className = "loading-indicator"
    loadingIndicator.innerHTML = '<div class="spinner"></div>'
    playerContainer.appendChild(loadingIndicator)

    // Create player with a slight delay to ensure the container is visible
    setTimeout(() => {
      try {
        player = new YT.Player(playerContainer, {
          videoId: youtubeId,
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            origin: window.location.origin,
          },
          events: {
            onReady: onPlayerReady,
            onError: onPlayerError,
          },
        })
      } catch (e) {
        console.error("Error creating YouTube player:", e)
        playerContainer.innerHTML = '<div class="error-message">Error loading video. Please try again.</div>'
      }
    }, 300)
  }

  // Add click event to play buttons
  playButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
      e.stopPropagation() // Prevent triggering the card click
      const youtubeId = this.getAttribute("data-youtube-id")
      openVideoPopup(youtubeId)
    })
  })

  // Add click event to entire video cards
  videoCards.forEach((card) => {
    card.addEventListener("click", function() {
      const playButton = this.querySelector(".video-play-button")
      if (playButton) {
        const youtubeId = playButton.getAttribute("data-youtube-id")
        openVideoPopup(youtubeId)
      }
    })
  })

  function onPlayerReady(event) {
    console.log("Player ready")
    event.target.playVideo()
    // Remove loading indicator if it exists
    const loadingIndicator = playerContainer.querySelector(".loading-indicator")
    if (loadingIndicator) {
      loadingIndicator.remove()
    }
  }

  function onPlayerError(event) {
    console.error("YouTube player error:", event.data)
    playerContainer.innerHTML =
      '<div class="error-message">Error loading video. Please check the YouTube URL and try again.</div>'
  }

  closeButton.addEventListener("click", () => {
    closeVideoPopup()
  })

  // Close popup when clicking outside the video container
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeVideoPopup()
    }
  })

  // Close popup with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeVideoPopup()
    }
  })

  function closeVideoPopup() {
    if (player) {
      player.destroy()
      player = null
    }
    overlay.classList.remove("active")
    document.body.style.overflow = ""
    playerContainer.innerHTML = ""
  }
})