export default function setupLazyLoadingImages(imageSelector, onVisible = null, onLoad = null) {
  const images = document.querySelectorAll(imageSelector);

  if (!images.length) {
    return;
  }

  if (!window.hasOwnProperty("IntersectionObserver")) {
    console.info("Lazy loading not supported");

    return images.forEach((image) => {
      image.setAttribute('src', image.dataset.src);
      onVisible && onVisible(image);
      onLoad && onLoad(image);
    });
  }

  const imagesObserver = new IntersectionObserver((entries, observer) => {
    entries
      .filter(entry => entry.isIntersecting)
      .forEach(entry => {
        const image = entry.target;
        
        image.addEventListener('load', () => {
          onLoad && onLoad(image);
          image.removeEventListener('load', null);
        });

        onVisible && onVisible(image);

        image.setAttribute('src', image.dataset.src);
        image.classList.remove('lazy');

        observer.unobserve(image);
      });
  });

  images.forEach((image) => {
    imagesObserver.observe(image);
  });
}