const headerEl = document.querySelector(".header");
const toTop = document.querySelector(".toTop");

// Intersection Observer API
const obsCallback = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting === true) {
    toTop.classList.remove("active");
  } else {
    toTop.classList.add("active");
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
};

// new IntersectionObserver accepts two parameters, a callback function and object options
const observer = new IntersectionObserver(obsCallback, obsOptions);

// Observes the changes to headerEl section
observer.observe(headerEl);
