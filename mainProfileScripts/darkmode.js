let dark = false
function darkModeToggle() {
    console.log("Dark Mode: " + dark);
    if (dark == false) {
        const darkModeCSS = document.createElement("style");
        darkModeCSS.id = "darkmodecss";
        darkModeCSS.innerHTML = `
        html, img, .cert-card::before, .conveythis-widget-language > div:nth-child(1), .darkmode-toggle {
            filter: invert(1);
        }
        ::selection {
            background-color: #8aff00 !important;
            color: black;
        }
        `;
        document.head.appendChild(darkModeCSS);
        dark = true;
    } else {
        document.getElementById("darkmodecss")?.remove();
        dark = false;
    }
}
darkModeToggle();
