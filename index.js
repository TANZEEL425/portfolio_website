 const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.add("show");
});

function closeSidebar() {
  menu.classList.remove("show");
}

