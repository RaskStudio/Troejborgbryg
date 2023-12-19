/*Mobil nav script*/

const menu = document.querySelector('.menu')
const navToggle = document.querySelector('.nav_toggle')

navToggle.addEventListener('click', () => {
    const visibility = menu.getAttribute("data-visible")
    if (visibility === "false") {
        menu.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else{
        menu.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

/*Bug fikser når man går til stor skærm*/

var x = window.matchMedia("(min-width: 768px)")
myFunction(x)

function myFunction(x) {
    if (x.matches) {
        menu.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        menu.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
    }
  }