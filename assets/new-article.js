// document.addEventListener('DOMContentLoaded', function() {
//   // Get references to the elements
//   const leftContent = document.querySelector('.article-info-sidebar-wrap');
//   const rightSidebar = document.querySelector('.article-sidebar');
  
//   // Variables to track scroll state
//   let lastScrollTop = 0;
//   let isScrollingUp = false;
//   let isMobile = window.innerWidth < 768;
  
//   // Function to update sidebar state based on screen size
//   function updateSidebarState() {
//     isMobile = window.innerWidth < 768;
    
//     if (isMobile) {
//       rightSidebar.classList.add('scrollable-sidebar');
//     } else {
//       rightSidebar.classList.remove('scrollable-sidebar');
//       rightSidebar.scrollTop = 0; // Reset scroll position when switching to desktop
//     }
//   }
  
//   // Initial setup
//   updateSidebarState();
  
//   // Handle window resize
//   window.addEventListener('resize', updateSidebarState);
  
//   // Handle scroll on left content
//   leftContent.addEventListener('scroll', function() {
//     if (!isMobile) return;
    
//     const scrollTop = leftContent.scrollTop;
    
//     // Detect scroll direction
//     isScrollingUp = scrollTop < lastScrollTop;
    
//     // If scrolling up and near the top, also scroll the sidebar to top
//     if (isScrollingUp && scrollTop < 100) {
//       rightSidebar.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     }
    
//     lastScrollTop = scrollTop;
//   });
// });