const toggleMenu = document.querySelector(".toggle-menu");
const headNav= document.querySelector(".header-nav");
const blurr= document.querySelector(".blur");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    blurr.classList.toggle("open");
    headNav.classList.toggle("open");
    header.style=("border-bottom: 1px solid #ffffff;")
});

const links = document.querySelectorAll(".links-drop-item h4");

links.forEach((baba) => {
    baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
    });
});

// const header = document.querySelector(".header");
// const brandimg =document.querySelector(".branding img")
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset >= 100) {
//     header.classList.add("blue");
//     brandimg.style = "background-color: red";
//   } else {
//     header.classList.remove("blue");
//   }
// });

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 100) {
    header.classList.add("blue");;
  } else {
    header.classList.remove("blue");
  }
});
