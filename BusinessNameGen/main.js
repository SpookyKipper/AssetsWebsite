const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    // handle the form data
    event.preventDefault();
    let input = document.getElementById("input").value;

    var items = StartupNameGenerator(input);
    let results_elem = document.getElementById("results");
    results_elem.innerHTML = "";

    items.forEach((item, idx) => {
        const item_elem = document.createElement("a");
        item_elem.className = "result-item";
        item_elem.target = "_blank";
        item_elem.href = `#?key=${item.toLowerCase()}`;
        item_elem.innerHTML = `<span>${item}</span>`;
        results_elem.appendChild(item_elem);
    });
});