function preloadCoro() {
	'use strict';
	for (var n=0;n<zMax;n++) {
		var canvt=tempCoro[n].canv;
		var c=getCoroXY(n);
		var x=c.x*xMax;
		var y=c.y*yMax;
		var ct=canvt.getContext('2d');
		ct.drawImage(imageCoronale,x,y,xMax,yMax,0,0,xMax,yMax);
		canvt.available=true;
	}
}

function preloadSagi() {
	'use strict';
	for (var n=0;n<xMax;n++) {
		var canvt=tempSagi[n].canv;
		var c=getSagXY(n);
		var x=c.x*zMax;
		var y=c.y*yMax;
		var ct=canvt.getContext('2d');
		ct.drawImage(imageSagittale,x,y,zMax,yMax,0,0,zMax,yMax);
		canvt.available=true;
	}
}


function getXY (n) {
	n=nbImTotal-n-1;
	var c=new Object ();
	c.y=Math.floor(n/lMosa);
	c.x=n%lMosa;
	return c;
}

function getSagXY (n) {
	var c=new Object ();
	c.y=Math.floor(n/lMosa);
	c.x=n%lMosa;
	return c;
}

function getCoroXY (n) {
	var c=new Object ();
	c.y=Math.floor(n/lMosa);
	c.x=n%lMosa;
	return c;
}

function traceAxes() {
	// coronale
	ctxCoronale.fillStyle="rgba(200,0,0,0.5)";
	ctxCoronale.fillRect(0,yCoupe*echelle,xMax*echelle,1);
	ctxCoronale.fillRect(xCoupe*echelle,0,1,yMax*echelle);
	
	// sagittale
	ctxSagittale.fillStyle="rgba(200,0,0,0.5)";
	ctxSagittale.fillRect(0,yCoupe*echelle,hImage*echelle,1);
	ctxSagittale.fillRect(zCoupe*echelle,0,1,nbImTotal*echelle);
	
	// axiale
	ctxAxiale.fillStyle="rgba(200,0,0,0.5)";
	ctxAxiale.fillRect(0,zCoupe*echelle,lImage*echelle,1);
	ctxAxiale.fillRect(xCoupe*echelle,0,1,hImage*echelle);
}



function traceMasqueAxiale () {
	var c=getXY(yCoupe);
	var x=c.x*lImage;
	var y=c.y*hImage;
	ctxAxiale.drawImage(imageMasque,x,y,xMax,zMax,0,0,xMax*echelle,zMax*echelle);
}



function preloadMasqueCoro() {
	for (var i=0;i<zMax;i++) {
		var canvt=tempCoro[i].canvmasque;
		var c=getCoroXY(i);
		var x=c.x*xMax;
		var y=c.y*yMax;
		var ct=canvt.getContext('2d');
		canvt.available=true;
		ct.drawImage(imageCoroMasque,x,y,xMax,yMax,0,0,xMax,yMax);
	}
}

function traceMasqueCoronale() {
	'use strict';
	var canvt=tempCoro[zCoupe].canvmasque;
	if (canvt.available==true) {
		ctxCoronale.drawImage(canvt,0,0,xMax,yMax,0,0,xMax*echelle,yMax*echelle);
	} else {
		var c=getCoroXY(zCoupe);
		var x=c.x*xMax;
		var y=c.y*yMax;
		var ct=canvt.getContext('2d');
		canvt.available=true;
		ctxCoronale.drawImage(imageCoroMasque,x,y,xMax,yMax,0,0,xMax*echelle,yMax*echelle);
		ct.drawImage(imageCoroMasque,x,y,xMax,yMax,0,0,xMax,yMax);
	}
}

function traceMasqueSagittale() {
	'use strict';
	var canvt=tempSagi[xCoupe].canvmasque;
	if (canvt.available==true) {
		ctxSagittale.drawImage(canvt,0,0,zMax,yMax,0,0,zMax*echelle,yMax*echelle);
	} else {
		var c=getSagXY(xCoupe);
		var x=c.x*zMax;
		var y=c.y*yMax;
		var ct=canvt.getContext('2d');
		ctxSagittale.drawImage(imageSagiMasque,x,y,zMax,yMax,0,0,zMax*echelle,yMax*echelle);
		ct.drawImage(imageSagiMasque,x,y,zMax,yMax,0,0,zMax,yMax);
	}
}

function preloadMasqueSagi() {
	for (var i=0;i<xMax;i++) {
		var canvt=tempSagi[i].canvmasque;
		var c=getSagXY(i);
		var x=c.x*zMax;
		var y=c.y*yMax;
		var ct=canvt.getContext('2d');
		canvt.available=true;
		ct.drawImage(imageSagiMasque,x,y,zMax,yMax,0,0,zMax,yMax);
	}
}

function traceCoupeAxiale () {
	// directement à partir de l'image
	var c=getXY(yCoupe);
	var x=c.x*lImage;
	var y=c.y*hImage;
	ctxAxiale.drawImage(imageAxiale,x,y,xMax,zMax,0,0,xMax*echelle,zMax*echelle);
}


function traceImageSagittaleAPartirImageBrute (n) {
	// directement à partir de l'image
	var c=getSagXY(n);
	var x=c.x*zMax;
	var y=c.y*yMax;
	ctxSagittale.drawImage(imageSagittale,x,y,zMax,yMax,0,0,zMax*echelle,yMax*echelle);
}

function traceImageCoronaleAPartirImageBrute (n) {
	// directement à partir de l'image
	var c=getCoroXY(n);
	var x=c.x*xMax;
	var y=c.y*yMax;
	ctxCoronale.drawImage(imageCoronale,x,y,xMax,yMax,0,0,xMax*echelle,yMax*echelle);
}

function traceImageCoronale (n) {
	var tc=tempCoro[n];
	var c=tc.canv
	
	if (c.available==true) {
		// canvas déjà tracé
		ctxCoronale.drawImage(c,0,0,xMax,yMax,0,0,xMax*echelle,yMax*echelle);
	} else {
		// sécurité si les petits canvas temp ne marchent pas
		traceImageCoronaleAPartirImageBrute (n)
	}
}

function traceImageSagittale (n) {
	var tc=tempSagi[n];
	var c=tc.canv
	
	if (c.available==true) {
		// canvas déjà tracé
		ctxSagittale.drawImage(c,0,0,zMax,yMax,0,0,zMax*echelle,yMax*echelle);
	} else {
		// sécurité si les petits canvas temp ne marchent pas
		traceImageSagittaleAPartirImageBrute (n)
	}

}


function traceCoupes () {
	traceCoupeAxiale ();
	traceImageSagittale (xCoupe);
	traceImageCoronale (zCoupe);
	document.getElementById ("divxyz").innerHTML="x="+xCoupe+" y="+yCoupe+" z="+zCoupe;
	
	if (renderer) {
		planeZ.position.y=(142-yCoupe)*4.5;
		planeY.position.x=(92-xCoupe)*4.9;
		planeX.position.z=(109-zCoupe)*5.2;
		renderer.render(scene, camera); 
	}
}

function traceMasques () {
	if (temoin==0) {return false;}
	traceMasqueAxiale ();
	traceMasqueSagittale();
	traceMasqueCoronale();
}

var lastTraceTout=Date.now();
function traceTout () {
	'use strict';
	
	for (var i=1;i<=3;i++) {
		placeAscenseur(i);		
	}
	
	var t=Date.now();
	if ((t-lastTraceTout)<20) {return false;}
	traceCoupes ();
	traceHalos ();
	traceStructures ();
	traceMasques ();
	traceAxes ();
	var t4=Date.now();
	//console.log ("Temps tracé : "+(t4-t));
	lastTraceTout=Date.now();
}

function creeFoyer() {
	ajouteHalo(xCoupe,yCoupe,zCoupe,1,1);
}

function clicCoro (e) {
	clicCoupe=true;
	e = e|| window.event;
	var co=cumulativeOffset(canvCoronale);
	var x=e.clientX-co.left;
	var y=e.clientY-co.top;
	yCoupe=Math.floor(y/echelle);
	xCoupe=Math.floor(x/echelle);
	if (e.ctrlKey) {paintHere(10,10,1);} else {
		traceTout(true);
	}
}

function moveCoro (e) {
	if (clicCoupe==true) {clicCoro(e);}
}

function clicAxi (e) {
	clicCoupe=true;
	e = e|| window.event;
	var co=cumulativeOffset(canvAxiale);
	var x=e.clientX-co.left;
	var y=e.clientY-co.top;
	zCoupe=Math.floor(y/echelle);
	xCoupe=Math.floor(x/echelle);
	if (e.ctrlKey) {paintHere(10,1,10);} else {
		traceTout(true);
	}
}

function moveAxi (e) {
	if (clicCoupe==true) {clicAxi(e);}
}

function clicSagi (e) {
	clicCoupe=true;
	e = e|| window.event;
	var co=cumulativeOffset(canvSagittale);
	var x=e.clientX-co.left;
	var y=e.clientY-co.top;
	zCoupe=Math.floor(x/echelle);
	yCoupe=Math.floor(y/echelle);
	if (e.ctrlKey) {paintHere(1,10,10);} 
	else {
		traceTout(true);
	}
}

function moveSagi (e) {
	if (clicCoupe==true) {clicSagi(e);}
}


var clicCoupe=false;
var doubleClic=false;
var lastUp=Date.now();

function mouseUp () {
	var dateClic=Date.now();
	var t=dateClic-lastUp;
	if (t<200) {
		doubleClic=true;
		//creeFoyer();
	} else {doubleClic=false;}
	lastUp=Date.now();
	clicCoupe=false;
	recalcImgStruct();
}

function sqr(x) { return x * x }
function dist2(v, w) { return sqr(v.x - w.x) + sqr(v.y - w.y) + sqr(v.z - w.z) }
function distToSegmentSquared(p, v, w) {
  var l2 = dist2(v, w); // longueur segment
  if (l2 == 0) return dist2(p, v); // si v et w sont confondus
  var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y) + (p.z - v.z) * (w.z - v.z)) / l2;
  t = Math.max(0, Math.min(1, t));
  return dist2(p, { x: v.x + t * (w.x - v.x),
                    y: v.y + t * (w.y - v.y),
					z: v.z + t * (w.z - v.z) });
}
function distToSegment(p, v, w) { return Math.sqrt(distToSegmentSquared(p, v, w)); }