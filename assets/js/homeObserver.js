export default function homeObserver() {
  const header = document.getElementsByClassName("container");
  const sectionOne = document.getElementById("one");

  const faders = document.querySelectorAll(".opacity-0");
  // const sliders = document.querySelectorAll(".slide-in");

  const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px",
  };

  const sectionOneObserver = new IntersectionObserver(function (
    entries
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);

  sectionOneObserver.observe(sectionOne);

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("animate__fadeIn");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  // sliders.forEach(slider => {
  //   appearOnScroll.observe(slider);
  // });
}