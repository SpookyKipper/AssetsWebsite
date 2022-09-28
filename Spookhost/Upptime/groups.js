function grouping1() {
  if (document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(1)") != null) {
    let coreservices = document.createElement("h1");
    let coreservicesp = document.createElement("p");
    coreservices.appendChild(coreservicesp);
    document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(1)").parentNode.insertBefore(coreservices, document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(1)"));
    coreservicesp.after("Core Services");
  } else {
    setTimeout(grouping1, 100)
  }

}

setTimeout(grouping1, 100)
