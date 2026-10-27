const themeBtn = document.querySelector(".theme-btn");
const themeIcon = themeBtn.querySelector(".material-symbols-outlined");

function applyTheme(isDark) {
   document.body.classList.toggle("dark", isDark);
   themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
   themeBtn.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
   );
}

let savedTheme = null;
try {
   savedTheme = localStorage.getItem("theme");
} catch (e) {}

const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme ? savedTheme === "dark" : systemDark);

themeBtn.addEventListener("click", () => {
   const isDark = !document.body.classList.contains("dark");
   applyTheme(isDark);
   try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
   } catch (e) {}
});

const moreBtn = document.getElementById("moreBtn");
const more = document.getElementById("more");

moreBtn.addEventListener("click", () => {
   const open = more.classList.toggle("open");
   moreBtn.textContent = open ? "Read less" : "Read more";
   moreBtn.setAttribute("aria-expanded", open);
});
