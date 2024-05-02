/// you can use also only html + css, but in this case you should add class is-showing in mixin

let stars = document.querySelectorAll(".stars");

if (stars.length > 0) {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-showing");
      } else {
        entry.target.classList.remove("is-showing");
      }
    });
  };

  // Create the intersection observer
  let observer = new IntersectionObserver(callback, options);
  // start watching the target element

  [...stars].forEach((star) => {
    observer.observe(star);
  });
}
