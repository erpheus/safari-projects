function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

if (!inIframe()){

	var load = false;

	function initCheck(event) {
		if (!load) {
		    var myMessageData = event.url;
		    var theAnswer = safari.self.tab.canLoad(event, myMessageData);

		    if (theAnswer == "pause") {
		        window.stop();
		    } else {
		    	load = true;
		    }
		}
	}

	function msgReceive(event) {
		if (event.name == "reload"){
			location.reload();
		}
	}

	document.addEventListener("beforeload", initCheck, true);
	safari.self.addEventListener("message", msgReceive, true);
	
}
