const header = document.querySelector('.header');

const checkViewport = () => {
  if(!isInViewport(header)) {
    header.classList.add('header__hidde');
  }

  else {
    header.classList.remove('header__hidde');
  }
}

let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      checkViewport();
      ticking = false;
    });
  }

  ticking = true;
});

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

