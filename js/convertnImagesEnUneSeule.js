var tImages=new Array();
function chargeImages() {
	for (var i=0;i<nbImTotal;i++) {
		tImages[i]=new Image();
		tImages[i].src="images/irm/1211/IRMsujet1211anat-0"+digits3(i+1)+".png";
		tImages[i].onload=avanceImage();
	}
}

function digits3(n) {
	if (n<10) {return "00"+n;}
	if (n<100) {return "0"+n;}
	return n;
}

var nbIm=0;
function avanceImage () {
	nbIm++;
	if (nbIm>=nbImTotal) {
		toutesImageChargees();
	}
}

function toutesImageChargees() {
	console.log ("toutes images chargées");
}

function construit() {
	var xMosa=0;
	var yMosa=0;
	for (var i=0;i<nbImTotal;i++) {
		ctx.drawImage(tImages[i],xMosa*lImage,yMosa*hImage);
		xMosa++;
		if (xMosa>=lMosa) {xMosa=0;yMosa++;}
	}
}