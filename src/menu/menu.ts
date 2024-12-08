import menuHtmlPath from './menu.html';

document.addEventListener("DOMContentLoaded", () => {
    // const menuPath = new URL('/menu.html', import.meta.url).toString();
    fetch(menuHtmlPath)
    .then(response => response.text())
    .then(menuHtml => {
        document.body.insertAdjacentHTML('afterbegin', menuHtml);
    })
    .catch(error => console.error("Failed to load the menu:", error));

    const menuLinks = document.querySelectorAll("#menu a") as NodeListOf<HTMLAnchorElement>;
    const currentPath = window.location.pathname;

    console.log("menulinks:")
    console.log(menuLinks) // TODO fix active link being highlighted
    menuLinks.forEach(link => {
        if (link.href.includes(currentPath)) { // TODO: figure out whether to target >es5 or polyfill for .includes()
            link.classList.add("active");
        }
    });
});