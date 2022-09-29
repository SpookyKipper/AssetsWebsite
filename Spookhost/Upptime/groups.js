function grouping1() {
  if (document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(1)") != null) {
    let coreservices = document.createElement("h1");
    let coreservicesp = document.createElement("p");
    coreservices.appendChild(coreservicesp);
    document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(1)").parentNode.insertBefore(coreservices, document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(1)"));
    coreservicesp.after("Essential Services");
  } else {
    setTimeout(grouping1, 100)
  }

}

function grouping2() {
  if (document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(6)") != null) {
    let triageservices = document.createElement("h1");
    let triageservicesp = document.createElement("p");
    triageservices.appendChild(triageservicesp);
    document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(6)").parentNode.insertBefore(triageservices, document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(6)"));
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
    otherservicesp.after("Other Services");
  } else {
    setTimeout(grouping3, 100)
  }

}

function grouping4() {
  if (document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(11)") != null) {
    let otherservices = document.createElement("h1");
    let otherservicesp = document.createElement("p");
    otherservices.appendChild(otherservicesp);
    document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(11)").parentNode.insertBefore(otherservices, document.querySelector("#sapper > main > section.live-status.svelte-fqsq6s > article:nth-child(11)"));
    otherservicesp.after("Third Party Services");
  } else {
    setTimeout(grouping4, 100)
  }

}
setTimeout(grouping4, 100);
setTimeout(grouping3, 100);
setTimeout(grouping2, 100);
setTimeout(grouping1, 100);
