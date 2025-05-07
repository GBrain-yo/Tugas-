// Pastikan semua elemen yang dibutuhkan ada di DOM
document.addEventListener("DOMContentLoaded", () => {
  // Navbar Toggle (Menu Button)
  const navbar = document.querySelector(".navbar");
  const menuBtn = document.querySelector("#menu-btn");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navbar.classList.toggle("active");
      searchForm.classList.remove("active");
      cartItem.classList.remove("active");
    });
  }

  // Search Toggle (Search Button)
  const searchForm = document.querySelector(".search-form");
  const searchBtn = document.querySelector("#search-btn");

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      searchForm.classList.toggle("active");
      navbar.classList.remove("active");
      cartItem.classList.remove("active");
    });
  }

  // Cart Toggle (Cart Button)
  const cartItem = document.querySelector(".cart-items-container");
  const cartBtn = document.querySelector("#cart-btn");

  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      cartItem.classList.toggle("active");
      navbar.classList.remove("active");
      searchForm.classList.remove("active");
    });
  }

  // Close the open menus when scrolling
  window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
  });

  // Efek Hover pada Box Menu
  const boxes = document.querySelectorAll(".menu .box");

  document.addEventListener("mousemove", (e) => {
    boxes.forEach((box) => {
      const rect = box.getBoundingClientRect();
      const distX = Math.abs(rect.left + rect.width / 2 - e.clientX);
      const distY = Math.abs(rect.top + rect.height / 2 - e.clientY);
      const maxDist = 150;

      if (distX < maxDist && distY < maxDist) {
        box.style.backgroundColor = "rgba(211, 173, 127, 0.3)";
        box.style.transform = "scale(1.03)";
      } else {
        box.style.backgroundColor = "transparent";
        box.style.transform = "scale(1)";
      }
    });
  });
});
