fetch("/includes/header.html")
  .then(response => response.text())
  .then(data => {
    const target = document.getElementById("site-header");
    if (!target) return;

    target.innerHTML = data;

    const btn = document.getElementById("mobileToggle");
    const nav = document.getElementById("mobileNav");

    if (btn && nav) {
      btn.addEventListener("click", () => {
        const open = nav.classList.toggle("show");
        btn.setAttribute("aria-expanded", String(open));
        nav.setAttribute("aria-hidden", String(!open));
        btn.textContent = open ? "✕" : "☰";
      });
    }
  });
