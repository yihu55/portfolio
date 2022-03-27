const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  console.log(navLinks);

  burger.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');

    //animation links
    navLinks.forEach((link, index) => {
      //link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
      if (link.style.animation) {
        link.style.animation = '';
      } else
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
    });

    //burger animation
    burger.classList.toggle('toggle');
  });
};

navSlide();
