if (!customElements.get('sb-homepage-articles')) {
  class SbHomepageArticles extends HTMLElement {
    constructor() {
      super();
      this.viewAllSelector = this.querySelector('[data-view-all]');
      this.contentContainer = this.querySelector('[data-tab-content]');
      this.paginationContainer = this.querySelector('.pagination-content');

      this.blogUrl = this.getAttribute('data-blog-url') || '';
      this.sectionId = this.getAttribute('data-section-id') || '';
      this.hasFetchedContent = false;

      this.handleViewAllClick = this.handleViewAllClick.bind(this);
      this.handlePageView = this.handlePageView.bind(this);
    }

    connectedCallback() {
      this.addEventListeners();
    }

    disconnectedCallback() {
      this.removeEventListeners();
    }

    /**
     * Adds all necessary event listeners.
     */
    addEventListeners() {
      if (this.viewAllSelector) {
        this.viewAllSelector.addEventListener('click', this.handleViewAllClick);
      }
    }

    /**
     * Removes all event listeners to prevent memory leaks.
     */
    removeEventListeners() {
      if (this.viewAllSelector) {
        this.viewAllSelector.removeEventListener('click', this.handleViewAllClick);
      }
    }

    /**
     * Handles the click event for the "View All" button.
     * @param {Event} event - The click event.
     */
    async handleViewAllClick(event) {
      event.preventDefault();

      const blocksContent = this.querySelector('[data-tab-content="blocks"]');
      const blogContent = this.querySelector('[data-tab-content="blog"]');

      if (!blocksContent || !blogContent) {
        console.warn('Content containers not found.');
        return;
      }

      this.viewAllSelector.classList.toggle('active');
      const isShowingBlog = this.viewAllSelector.classList.contains('active');

      if (isShowingBlog) {
        // Switch to blog view
        if (!this.hasFetchedContent) {
          // Fetch content on first click
          await this.fetchAndReplaceContent();
          this.hasFetchedContent = true;
        }
        blocksContent.setAttribute('data-tab-content', 'blocks');
        blogContent.setAttribute('data-tab-content', 'blog');
        blogContent.removeAttribute('data-hidden');
        blocksContent.setAttribute('data-hidden', 'true');
      } else {
        // Switch back to blocks view
        blocksContent.setAttribute('data-tab-content', 'blocks');
        blogContent.setAttribute('data-tab-content', 'blog');
        blocksContent.removeAttribute('data-hidden');
        blogContent.setAttribute('data-hidden', 'true');
      }
    }

    /**
     * Fetches new content and replaces the existing blog content.
     */
    async fetchAndReplaceContent() {
      const blogContainer = this.querySelector('[data-tab-content="blog"]');

      if (!blogContainer) {
        console.warn('Blog container not found for fetching.');
        return;
      }

      this.dataset.loading = 'true';
      const baseUrl = `${window.location.origin}${this.blogUrl}`;
      const url = `${baseUrl}?sections=${this.sectionId}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const htmlString = data[this.sectionId];

        if (!htmlString) {
          console.warn(`No content found for section ID: ${this.sectionId}`);
          return;
        }

        const parser = new DOMParser();
        const parsedDoc = parser.parseFromString(htmlString, 'text/html');
        const newBlogContent = parsedDoc.querySelector('[data-tab-content="blog"]');

        if (newBlogContent) {
          blogContainer.innerHTML = newBlogContent.innerHTML;
          this.setPaginationListeners();
        } else {
          console.warn('New blog content element [data-tab-content="blog"] not found in fetched HTML.');
        }
      } catch (error) {
        console.error('Error fetching or parsing content:', error);
      } finally {
        this.dataset.loading = 'false';
      }
    }

    /**
     * Sets up event listeners for pagination links within the current content.
     */
    setPaginationListeners() {
      const newPagesEl = this.querySelectorAll('.pagination-content a.pagination__item');
      newPagesEl.forEach((page) => {
        page.addEventListener('click', this.handlePageView);
      });
    }

    /**
     * Handles clicks on pagination links.
     * @param {Event} event - The click event.
     */
    async handlePageView(event) {
      event.preventDefault();
      const newPageURL = event.currentTarget.getAttribute('href');
      const blogContainer = this.querySelector('[data-tab-content="blog"] .sb-homepage-articles--blog');

      if (!newPageURL || !blogContainer) {
        console.warn('Pagination URL or blog container not found.');
        return;
      }

      this.dataset.loading = 'true';
      const url = new URL(newPageURL, window.location.origin);
      url.searchParams.set('sections', this.sectionId);

      try {
        const response = await fetch(url.toString());
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const htmlString = data[this.sectionId];

        if (!htmlString) {
          console.warn(`No content found for section ID: ${this.sectionId} during pagination.`);
          return;
        }

        const parser = new DOMParser();
        const parsedDoc = parser.parseFromString(htmlString, 'text/html');
        const newBlogContent = parsedDoc.querySelector('.sb-homepage-articles--blog');

        if (newBlogContent) {
          blogContainer.innerHTML = newBlogContent.innerHTML;
        } else {
          console.warn(
            'New blog content element (.sb-homepage-articles--blog) not found in fetched HTML during pagination.'
          );
        }

        this.setPaginationListeners();
        this.scrollIntoView({ behavior: 'smooth', block: 'start' });

        history.pushState(null, '', newPageURL);
      } catch (error) {
        console.error('Error fetching or parsing paginated content:', error);
      } finally {
        this.dataset.loading = 'false';
      }
    }
  }

  customElements.define('sb-homepage-articles', SbHomepageArticles);
}
