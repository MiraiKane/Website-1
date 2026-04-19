
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    reveals.forEach(item => observer.observe(item));
  } else {
    reveals.forEach(item => item.classList.add("is-visible"));
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = encodeURIComponent(document.querySelector("#name").value.trim());
      const email = encodeURIComponent(document.querySelector("#email").value.trim());
      const subject = encodeURIComponent(document.querySelector("#subject").value.trim() || "Website inquiry");
      const message = encodeURIComponent(document.querySelector("#message").value.trim());
      const mailTo = `mailto:hello@miraikaneglobal.com?subject=${subject}&body=Name:%20${name}%0AEmail:%20${email}%0A%0A${message}`;
      window.location.href = mailTo;
    });
  }
});
