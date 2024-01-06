if (!String.prototype.replaceAll) {
	String.prototype.replaceAll = function(str, newStr){
		if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
			return this.replace(str, newStr);
		}
		return this.replace(new RegExp(str, 'g'), newStr);
	};
}


window.addEventListener("load",function(){
	console.log("Laden erfolgreich durchgeführt. Es kann einen Moment dauern, bis die Elemente geladen sind. Bitte hängen Sie fest!")
	pauseStats = false;
	focusStats = false;
	var pix = 0;
})



