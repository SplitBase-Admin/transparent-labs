if (!customElements.get('product-modal')) {
  customElements.define(
    'product-modal',
    class ProductModal extends ModalDialog {
      constructor() {
        super();
      }

      hide() {
        super.hide();
      }

      show(opener) {
        super.show(opener);
        this.showActiveMedia();
      }

      showActiveMedia() {
        const mediaId = this.openedBy.getAttribute('data-media-id');
        const activeMedia = this.querySelector(`[data-media-id="${mediaId}"]`);
        const swiper = this.querySelector('swiper-slider');

        if (!activeMedia) return;

        if (swiper) {
          if (!swiper.slider && !swiper.initialized) {
            setTimeout(() => this.showActiveMedia(), 100);
            return;
          }

          const slides = swiper.querySelectorAll('[data-swiper-slide]');
          let targetIndex = -1;

          for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            if (
              slide.querySelector(`[data-media-id="${mediaId}"]`) ||
              slide.getAttribute('data-media-id') === mediaId
            ) {
              if (slide.hasAttribute('data-swiper-slide-index')) {
                targetIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
              } else {
                targetIndex = i;
              }
              break;
            }
          }

          if (targetIndex > -1) {
            swiper.performSlideToIndex(targetIndex + 1, 0);

            const activeMedia = this.querySelector(`[data-media-id="${mediaId}"]`);
            if (!activeMedia) return;

            const activeMediaTemplate = activeMedia.querySelector('template');
            const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;

            if (
              activeMedia.nodeName == 'DEFERRED-MEDIA' &&
              activeMediaContent &&
              activeMediaContent.querySelector('.js-youtube')
            )
              activeMedia.loadContent();

            return;
          }
        }
      }
    }
  );
}
