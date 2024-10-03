let darkModeStatus = false
function darkModeToggle() {
    if (darkModeStatus == false) {
        const darkModeCSS = document.createElement("style");
        darkModeCSS.id = "darkmodecss";
        darkModeCSS.innerHTML = `
        html, img, .cert-card::before, .conveythis-widget-language > div:nth-child(1){
            filter: invert(1);
        }
        ::selection {
            background-color: #8aff00 !important;
            color: black;
        }
        `;
        document.head.appendChild(darkModeCSS);
        darkModeStatus = true;
    } else {
        document.getElementById("darkmodecss")?.remove();
        darkModeStatus = false;
    }
}


document.querySelector("#darkmode-toggle")?.addEventListener('click', darkModeToggle);
console.log("Button Listener Added");

console.log("Dark mode script loaded");

if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkModeToggle();
    console.log("Detected browser dark theme");
}

