/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLinks.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 72;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass?.classList.add("active");
    } else {
      sectionsClass?.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s ease-out forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".about__data, .trg__card, .service__card, .contact__form")
  .forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });

/*=============== SMOOTH SCROLL ===============*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = 72;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

/*=============== FORM VALIDATION & SUBMISSION ===============*/
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Basic validation
    if (!name || !phone || !message) {
      showMessage("Por favor, preencha todos os campos.", "error");
      return;
    }

    if (phone.length < 10) {
      showMessage("Por favor, insira um número de telefone válido.", "error");
      return;
    }

    // Simulate form submission (replace with actual backend integration)
    try {
      // Disable button during submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.innerHTML = "<span>Enviando...</span>";

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      showMessage(
        "Mensagem enviada com sucesso! Entrarei em contato em breve.",
        "success"
      );
      contactForm.reset();

      // Re-enable button
      submitButton.disabled = false;
      submitButton.innerHTML = `
        <span>Enviar Mensagem</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      `;

      // Optional: Redirect to WhatsApp after success
      setTimeout(() => {
        const whatsappMessage = encodeURIComponent(
          `Olá! Meu nome é ${name}. ${message}`
        );
        window.open(
          `https://wa.me/5519998161689?text=${whatsappMessage}`,
          "_blank"
        );
      }, 2000);
    } catch (error) {
      showMessage(
        "Ocorreu um erro ao enviar a mensagem. Tente novamente.",
        "error"
      );
      const submitButton = contactForm.querySelector('button[type="submit"]');
      submitButton.disabled = false;
      submitButton.innerHTML = `
        <span>Enviar Mensagem</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      `;
    }
  });
}

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = `contact__form-message ${type}`;

  // Clear message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = "";
    formMessage.className = "contact__form-message";
  }, 5000);
}

/*=============== PHONE MASK ===============*/
const phoneInput = document.getElementById("phone");
if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    }

    e.target.value = value;
  });
}

/*=============== LAZY LOADING IMAGES ===============*/
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img").forEach((img) => {
    imageObserver.observe(img);
  });
}

/*=============== PARALLAX EFFECT ===============*/
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".hero__decoration");

  parallaxElements.forEach((el, index) => {
    const speed = (index + 1) * 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

/*=============== PRELOADER (Optional) ===============*/
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/*=============== CONSOLE MESSAGE ===============*/
console.log(
  "%c✨ Site desenvolvido com amor e atenção aos detalhes ✨",
  "color: #6fa89a; font-size: 16px; font-weight: bold; padding: 10px;"
);
