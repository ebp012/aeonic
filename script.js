function featureEffect() {
	document.getElementById("cards").onmousemove = e => {
	  for(const card of document.getElementsByClassName("card")) {
	    const rect = card.getBoundingClientRect(),
	          x = e.clientX - rect.left,
	          y = e.clientY - rect.top;
	
	    card.style.setProperty("--mouse-x", `${x}px`);
	    card.style.setProperty("--mouse-y", `${y}px`);
	  };
	}
}
function doStuff() {
	featureEffect();
}

function timelineEffect() {
	document.getElementById("timeline").onmousemove = e => {
	  for(const card of document.getElementsByClassName("container")) {
	    const rect = card.getBoundingClientRect(),
	          x = e.clientX - rect.left,
	          y = e.clientY - rect.top;
	
	    card.style.setProperty("--mouse-x", `${x}px`);
	    card.style.setProperty("--mouse-y", `${y}px`);
	  };
	}
}

function doOtherStuff() {
	timelineEffect();
}
