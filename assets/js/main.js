/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50; // adjust offset as needed
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector('.nav__menu a[href="#' + sectionId + '"]');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink && navLink.classList.add("active-link");
    } else {
      navLink && navLink.classList.remove("active-link");
    }
  });
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");
if (contactForm && contactMessage && typeof emailjs !== "undefined") {
  emailjs.init({ publicKey: "ZpMGX8bDdcjqkYleh" });

  const sendEmail = (e) => {
    e.preventDefault();
    contactMessage.textContent = "Sending...";

    emailjs
      .sendForm("service_x58r6ae", "template_h2gcpca", contactForm)
      .then(() => {
        contactMessage.textContent = "Message sent successfully";
        contactForm.reset();

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      })
      .catch(() => {
        contactMessage.textContent = "Message not sent (service error)";
      });
  };

  contactForm.addEventListener("submit", sendEmail);
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
