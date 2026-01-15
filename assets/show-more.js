if (!customElements.get('show-more-button')) {
  customElements.define(
    'show-more-button',
    class ShowMoreButton extends HTMLElement {
      constructor() {
        super();
        const button = this.querySelector('button');
        
        // Handle clicks on the button and all its children (including spans)
        // Use capture phase to intercept before parent accordions can handle it
        this.addEventListener('click', (event) => {
          // Only handle clicks inside the button element
          if (event.target.closest('button') || event.target === button) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            
            this.expandShowMore(event);
            const nextElementToFocus = event.target.closest('.parent-display')?.querySelector('.show-more-item');
            if (nextElementToFocus && !nextElementToFocus.classList.contains('hidden') && nextElementToFocus.querySelector('input')) {
              nextElementToFocus.querySelector('input').focus();
            }
          }
        }, true); // Capture phase - fires before bubbling phase
      }
      expandShowMore(event) {
        const parentDisplay = event.target.closest('[id^="Show-More-"]')?.closest('.parent-display');
        if (!parentDisplay) return;
        
        const parentWrap = parentDisplay.querySelector('.parent-wrap');
        this.querySelectorAll('.label-text').forEach((element) => element.classList.toggle('hidden'));
        parentDisplay.querySelectorAll('.show-more-item').forEach((item) => item.classList.toggle('hidden'));
        if (!this.querySelector('.label-show-less')) {
          this.classList.add('hidden');
        }
      }
    }
  );
}
