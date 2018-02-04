function redimDivCadre (d) {
	d.style.width=lCadre+"px";
	d.style.height=hCadre+"px";
	d.style.left=xCadre+"px";
	d.style.top=yCadre+"px";
}

var lasty,lastx,lastz;
var echelle;
var echelle0=-1;
var lEcran,hEcran,lCadre,hCadre,xCadre,yCadre,dimMax;
var hGL,lGL;
function redim () {
	'use strict';
	lasty=-1;lastx=-1;lastz=-1;
	echelle=3;
	lEcran=window.innerWidth;
	hEcran=window.innerHeight;
	
	var ratioEcran=1/0.6;
	
	
	if ((lEcran/hEcran)<ratioEcran) { // écran trop étroit en largeur
		lCadre=lEcran;
		hCadre=lEcran/ratioEcran;
	} else {
		hCadre=hEcran;
		lCadre=hCadre*ratioEcran;
	}

	lCadre=Math.floor(lCadre);
	hCadre=Math.floor(hCadre);
	xCadre=Math.floor((lEcran-lCadre)/2);
	yCadre=Math.floor((hEcran-hCadre)/2);	

	
	hGL=Math.round(hCadre*0.35);
	lGL=hGL;
	
	divgl.style.width=lGL+"px";
	divgl.style.height=hGL+"px";
	divgl.style.top=(hCadre*0.88-hGL)+"px";
	divgl.style.left=(lCadre*0.93-lGL)+"px";
	
	redimDivCadre (divEcran);
	redimDivCadre (divTurbo);
	redimDivCadre (divLimites);
	redimDivCadre (divSituations);
	redimDivCadre (divquestion);
	
	echelle=hCadre/445;
		
	var hFont=Math.round(echelle*1100)/100;
	document.body.style.fontSize=hFont+"px";
	
	if (echelle0==-1) {echelle0=echelle;}
	
	canvAxiale.width=xMax*echelle;
	canvAxiale.height=zMax*echelle;
	canvCoronale.width=xMax*echelle;
	canvCoronale.height=yMax*echelle;
	canvSagittale.width=zMax*echelle;
	canvSagittale.height=yMax*echelle;
	
	canvTemp2.width=dimMax*echelle;
	canvTemp2.height=dimMax*echelle;
	
	canvCoul.width=zMax*echelle+hFont*2;
	canvCoul.height=canvCoul.width*0.08;
	
	canvTurbo.width=lCadre;
	canvTurbo.height=hCadre;

	canvQuestion.width=lCadre;
	canvQuestion.height=hCadre;
	
	// ascenseurs verticaux
	for (var i=1;i<=3;i++) {
		var d=document.getElementById("barrecur"+i);
		if (i<3) {d.style.height=Math.floor(yMax*echelle)+"px";} else {d.style.height=Math.floor(zMax*echelle)+"px";}
	}
	
	//turbomedia
	refreshTurbo();
	
	//question
	refreshQuestion();
	
	// sliders
	redimSlider("range-slider-1");
	redimSlider("range-slider-2");
	setSeuil();
	setOpaStruct () ;
	
	// gl
	if (renderer) {
		renderer.setSize( lGL, hGL);
		camera.updateProjectionMatrix ();
		renderer.render(scene, camera); 
	}
}

var canvTurbo,ctxTurbo,canvTempCoul,ctxTempCoul,canvTemp,ctxTemp,canvTemp2,ctxTemp2,canvStruct,ctxStruct,canvCoul,ctxCoul,canvAxiale,ctxAxiale,
canvCoronale,ctxCoronale,canvSagittale,ctxSagittale,divEcran,divSituations,divLimites,divTexteBulle,divTurbo,divgl ;
var divQuestion,divbouton1,divbouton2,divbouton3,canvQuestion,ctxQuestion;
function creeCanvas () {
	'use strict';
	divbouton1=document.getElementById("divbouton1");
	divbouton2=document.getElementById("divbouton2");
	divbouton3=document.getElementById("divbouton3");
	
	divgl = document.getElementById('divgl');
	
	canvTempCoul = document.createElement('canvas');
	ctxTempCoul = canvTempCoul.getContext('2d');
	canvTempCoul.width=500;
	canvTempCoul.height=50;

	canvTurbo = document.getElementById('canvturbomedia');
	ctxTurbo = canvTurbo.getContext('2d');
	
	canvQuestion = document.getElementById('canvquestion');
	ctxQuestion = canvQuestion.getContext('2d');
	
	canvTemp = document.createElement('canvas');
	ctxTemp = canvTemp.getContext('2d');
	//document.body.appendChild(canvTemp); 
	
	canvTemp2 = document.createElement('canvas');
	ctxTemp2 = canvTemp2.getContext('2d');
	
	// sa taille ne variant pas on le redim ici
	dimMax= Math.max (lImage, hImage, nbImTotal);
	
	canvTemp.width=dimMax;
	canvTemp.height=dimMax;
		
	canvStruct = document.createElement('canvas');
	ctxStruct = canvStruct.getContext('2d');
	canvStruct.width=3258;
	canvStruct.height=2170;
	
	canvCoul = document.getElementById('canvcoul');
	ctxCoul = canvCoul.getContext('2d');

	canvAxiale = document.getElementById('canvaxia');
	ctxAxiale = canvAxiale.getContext('2d');
	canvAxiale.className="unselectable";
	canvAxiale.addEventListener("mousemove", moveAxi, false); 
	canvAxiale.addEventListener("mousedown", clicAxi, false); 
	canvAxiale.style.cursor="crosshair";
	//document.body.appendChild(canvAxiale); 

	canvCoronale =document.getElementById('canvcoro');
	canvCoronale.className="unselectable";
	ctxCoronale = canvCoronale.getContext('2d');
	//document.body.appendChild(canvCoronale); 
	canvCoronale.addEventListener("mousemove", moveCoro, false); 
	canvCoronale.addEventListener("mousedown", clicCoro, false); 
	canvCoronale.style.cursor="crosshair";

	canvSagittale = document.getElementById('canvsagi');
	canvSagittale.className="unselectable";
	ctxSagittale = canvSagittale.getContext('2d');
	//document.body.appendChild(canvSagittale); 
	canvSagittale.addEventListener("mousemove", moveSagi, false); 
	canvSagittale.addEventListener("mousedown", clicSagi, false); 
	canvSagittale.style.cursor="crosshair";
	
	divEcran = document.getElementById('divecran');
	divTexteBulle = document.getElementById('divtextebulle');	
	divTurbo = document.getElementById('divturbomedia');
	divQuestion = document.getElementById('divquestion');
	divLimites = document.getElementById('divlimites');
	divSituations = document.getElementById('divsituations');
}


var tempCoro=new Array();
var tempSagi=new Array();
function createTempCanv () {
	'use strict';
	for (var i=0;i<=zMax;i++) {
		tempCoro[i]=new Object();
		tempCoro[i].canv=document.createElement('canvas');
		tempCoro[i].canv.available=false;
		tempCoro[i].canv.width=xMax;
		tempCoro[i].canv.height=yMax;
		
		tempCoro[i].canvmasque=document.createElement('canvas');
		tempCoro[i].canvmasque.available=false;
		tempCoro[i].canvmasque.width=xMax;
		tempCoro[i].canvmasque.height=yMax;
	}
	
	
	for (var i=0;i<=xMax;i++) {
		tempSagi[i]=new Object();
		tempSagi[i].canv=document.createElement('canvas');
		tempSagi[i].canv.available=false;
		tempSagi[i].canv.width=zMax;
		tempSagi[i].canv.height=yMax;
		
		tempSagi[i].canvmasque=document.createElement('canvas');
		tempSagi[i].canvmasque.available=false;
		tempSagi[i].canvmasque.width=zMax;
		tempSagi[i].canvmasque.height=yMax;
	}
}

function checkRedim () {
	'use strict';
	if ((lEcran!=window.innerWidth)||(hEcran!=window.innerHeight)) {
		redim();
		traceTout();
		traceScale ();
	}
	
	setTimeout(checkRedim,200);
}


function goDivEcran () {
	divSituations.style.display="none";
	divEcran.style.display="block";
	setSeuil();
	setOpaStruct();
	traceScale ();
	if (renderer) {renderer.render(scene, camera); }
}

function goDivSituations () {
	divSituations.style.display="block";
	divEcran.style.display="none";
}
