
function changelink(domain, addtohistory = true) {
	const xhttp = new XMLHttpRequest();
          
 var currentpagespan = document.getElementsByClassName('currentpage-span');
        for (let i = 0; i < currentpagespan.length; i++) {
         //   currentpagespan.item(i).parentNode.removeChild(currentpagespan.item(i));
            currentpagespan.item(i).style.opacity = '0';
        }

if (domain.includes('selector')) {
    document.querySelector('#nav-selector').classList.add('active');
} else if (domain.includes('greeting')) {
    document.querySelector('#nav-greeting').classList.add('active');
} else if (domain.includes('basic')) {
    document.querySelector('#nav-basic').classList.add('active');
}

/* else if (domain.includes('domain_checker')) {
    document.getElementById('currentpage-span-checker').style.opacity = '1';
    document.getElementById('currentpage-span-checker-mobile').style.opacity = '1';
}*/



	console.log("Clicked.");

    xhttp.onreadystatechange = function() {
        xhttpReadyState = this.readyState;
        if (this.readyState == 0) {
            nanobar.go(20);
            //document.querySelector('#backdrop-text').innerHTML = "Loading 0%"
        } else if (this.readyState == 1) {
            nanobar.go(40);
            //document.querySelector('#backdrop-text').innerHTML = "Loading 25%"
        } else if (this.readyState == 2) {
            nanobar.go(60);
            //document.querySelector('#backdrop-text').innerHTML = "Loading 50%"
        } else if (this.readyState == 3) {
            nanobar.go(80);
            //document.querySelector('#backdrop-text').innerHTML = "Loading 75%"
        } else if (this.readyState == 4) {
            nanobar.go(99);
           // document.querySelector('#backdrop-text').innerHTML = "Almost there..."
        }
    }


	xhttp.onload = function() {
        var readyState = this.readyState;
        var statusCode = this.status;
        if (this.readyState == 4 && this.status == 200) {

       
		let response = this.responseText;


		const parser = new DOMParser();
		var responsetext = parser.parseFromString(response, "text/html");


		// document.body.innerHTML = "";
		//   console.log("cleared");
		// function updatepage() {
		//   document.body = responsetext.body;
        var s = document.querySelector("#sidebarnav > li.nav-item.dropdown");

        

document.querySelector("body > main") = responsetext.querySelector("body > main").innerHTML;


realdomain = domain
   //     Swal.close();
		console.log("Restored");
        if (addtohistory) {
            history.pushState('', '', realdomain);
        }
		document.title = responsetext.title;

     
        nanobar.go(100);

		 var options = {
	             classname: 'nanobar',
                 id: 'nanobar'
	        };
	        var nanobar = new Nanobar( options );

		//nanobar.go(100);


		//  }

		// setTimeout(updatepage, 10);
     setTimeout(function() {document.querySelector('#backdrop-text').innerHTML = "Loading"}, 1000)
        } else {

           // function statuscodealert() {
            if (statusCode == 503) {
                xhttpalerted = true;
                console.log(xhttpalerted);
                Swal.close();
                Swal.fire({
                    title: 'Status 503',
                    text: 'Cloudflare Verification Required, Reloading.',
                    showCloseButton: false,
                    showConfirmButton: false,
                    showCancelButton: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                       Swal.showLoading();
                       setTimeout(function() {window.location.href = domain;}, 1000);
                       
                    },
                 });
                 
                //nanobar.go(0);
            } else if (statusCode != 200) {
                xhttpalerted = true;
                console.log(xhttpalerted);
                Swal.close();
                Swal.fire({
                    title: 'Error',
                    text: 'An Error Occurred with Status Code ' + statusCode + ".",
                    showCloseButton: false,
                    showConfirmButton: false,
                    showCancelButton: true,
                    cancelButtonText: 'Close',
                    allowOutsideClick: true,
                    icon: 'error'
                 });
                 console.log('removing screen');
        document.querySelector('#backdrop-loading').style.visibility = 'hidden';
        document.querySelector('#backdrop-loading').style.opacity = '0';
        document.getElementById('backdrop-long-loading').style.display = "none";
        console.log('removed screen');
                 setTimeout(function() {document.querySelector('#backdrop-text').innerHTML = "Loading"}, 2500)
                //nanobar.go(0);
            } /*else if (readyState != 4) {
             Swal.fire({
                title: 'Loading',
                text: 'It looks like that it is taking longer then usual.',
                showCloseButton: false,
                showConfirmButton: false,
                allowOutsideClick: true,
                didOpen: () => {
                Swal.showLoading()
            },
            })
            }}*/
         //    setTimeout(statuscodealert, 2001)
      //  }

    
        
	};}

//	//nanobar.go(20);
    xhttpalerted = false;
realdomain = domain;
	xhttp.open("GET", realdomain);
	xhttp.send();


    function timeout() {
        console.log(xhttpalerted);
        if (xhttpReadyState != 4 && xhttpalerted != true) {
            /*Swal.fire({
                title: 'Loading',
                text: 'It seems that it is taking longer than usual.',
                showCloseButton: false,
                showConfirmButton: false,
                allowOutsideClick: true,
                didOpen: () => {
                Swal.showLoading()
            },})*/
            document.getElementById('backdrop-long-loading').style.display = "block";
    
        }
    };
    setTimeout(timeout, 1500);

   

}
