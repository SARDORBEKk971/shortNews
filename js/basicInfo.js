// Loader part
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 2000)
    })

// Navbar part
const burger = document.getElementById('nav');
const navLists = document.getElementById('nav__lists');

burger.addEventListener('click', () => {
    navLists.classList.toggle('toggled')
})

// for footer

const footerDate = document.getElementById('date');
const date = new Date();
let forFooter = date.getFullYear();
footerDate.innerHTML = forFooter;