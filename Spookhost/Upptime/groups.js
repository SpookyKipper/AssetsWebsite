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

function grouping2() {
  if (document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(7)") != null) {
    let triageservices = document.createElement("h1");
    let triageservicesp = document.createElement("p");
    triageservices.appendChild(triageservicesp);
    document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(7)").parentNode.insertBefore(triageservices, document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(7)"));
    triageservicesp.after("Triage Services");
  } else {
    setTimeout(grouping2, 100)
  }

}

function grouping3() {
  if (document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(9)") != null) {
    let otherservices = document.createElement("h1");
    let otherservicesp = document.createElement("p");
    otherservices.appendChild(otherservicesp);
    document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(9)").parentNode.insertBefore(otherservices, document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(9)"));
    otherservicesp.after("Core Services");
  } else {
    setTimeout(grouping3, 100)
  }

}

setTimeout(grouping3, 100);
setTimeout(grouping2, 100);
setTimeout(grouping1, 100);
