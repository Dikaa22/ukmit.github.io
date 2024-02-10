//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#info").onclick = () => {
  navbarNav.classList.toggle("active");
};

const info = document.querySelector("#info");

document.addEventListener("click", function (e) {
  if (!info.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
