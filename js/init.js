// Si vous voulez forcer le mode college (et empêcher les collégiens d'accéder au mode lycée),  mettez la valeur "true" à modeCollegeForce dans la ligne ci-dessous modeCollegeForce=true
modeCollegeForce=false;

const version="v1.1.4 (29/01/2018)";

var tScript=new Array();
tScript[0]="three.min";
tScript[1]="meshTete";
tScript[2]="situations";
tScript[3]="bucketPaint";
tScript[4]="paint";
tScript[5]="ascenseurs";
tScript[6]="coupes";
tScript[7]="halos";
tScript[8]="gestCanvas";
tScript[9]="turboMedia";
tScript[10]="limitesModele";
tScript[11]="structures";
tScript[12]="glOperations";
tScript[13]="range-slider";

var nbScripts=tScript.length; 

var dureeTO=10;

var nScriptACharger=0;

var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
};


var webGLOK=false;

var opaCharge=0.1;

function opacifieCharge () {
	opaCharge=Math.floor((opaCharge+0.015)*1000)/1000;
	//console.log (opaCharge);
	document.getElementById("divimagecharge").style.opacity=opaCharge;
}

function initVersion () {
	var texte="<i>"+version+"</i>";
	document.getElementById("labelversion").innerHTML=texte;
	document.getElementById("divversion1").innerHTML=texte;
	document.getElementById("divversion2").innerHTML=texte;
}

function initVar () {
	nbImTotal=174;
	lMosa=18;
	hMosa=10;
	hImage=217;
	lImage=181;
	lImageCoronale=lImage;
	hImageCoronale=nbImTotal;
	taillePix=4;
	xMax=lImage;
	yMax=nbImTotal;
	zMax=hImage;
	
	xCoupe=91
	yCoupe=87;
	zCoupe=108
	
	nix=Math.ceil(xMax/taillePix);
	niy=Math.ceil(yMax/taillePix);
	niz=Math.ceil(zMax/taillePix);
	
	seuil=0;

	ntMax=nix*niy*niz;
	tActi=new Uint16Array(ntMax);
	resetHalos ();
}

	

function IsImageOk(img) {
    // During the onload event, IE correctly identifies any images that
    // weren’t downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
        return false;
    }

    // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.

    if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
        return false;
    }

    // No other way of checking: assume it’s ok.
    return true;
}

function chargeImages() {
	document.getElementById("spanprogression").innerHTML="(chargement des images turbomédia)";
	setTimeout(chargeImages2(),dureeTO);
}

var nim=0;
function chargeImages2() {
		imageBD=new Array() ;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/poigneedemain.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/sujet.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/schemaIRM.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/IRMcerveaucoupesmultiples.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;	
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/irmf.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;	
		
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/explicationTableauVide.png";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/docteurtable.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/debutIRM.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
}

function chargeImages3() {
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/questionMedecin.png";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/equation.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/captureTest.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/captureTemoin.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/captureIRM.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/captureDeplace.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/captureStructure.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/IRMdessin.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/captureSeuil.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
		
		imageBD[nim]=new Image();
		imageBD[nim].src="images/turbomedia/captureFleches.jpg";
		imageBD[nim].onload=avanceImage();
		nim++;
}

function chargeImages4() {
		imageAxiale=new Image();
		imageAxiale.src="images/irm/1211/axiales.jpg";
		imageAxiale.onload=avanceImage();
		
		imageSagittale=new Image();
		imageSagittale.src="images/irm/1211/sagittales.jpg";
		imageSagittale.onload=avanceImage();
		
		imageCoronale=new Image();
		imageCoronale.src="images/irm/1211/coronales.jpg";
		imageCoronale.onload=avanceImage();
		
		
		imageMasque=new Image();
		imageMasque.src="images/irm/1211/axiales_masque.png";
		imageMasque.onload=avanceImage();
		
		imageSagiMasque=new Image();
		imageSagiMasque.src="images/irm/1211/sagittales_masque.png";
		imageSagiMasque.onload=avanceImage();
		
		imageCoroMasque=new Image();
		imageCoroMasque.src="images/irm/1211/coronales_masque.png";
		imageCoroMasque.onload=avanceImage();
		
		
		imageStruct=new Image();
		imageStruct.src="images/structures/"+struct[structSel].src;
		imageStruct.onload=function () {
			if (ready==true) {
				document.getElementById("divchargement").style.display="none";
				divEcran.style.display="block";
				traceTout();
			} else {
				avanceImage();
			}
		}
		
		
}

var nbIm=0;
var ready=false;
function avanceImage () {
	var nbImTurbo=18;
	opacifieCharge();
	nbIm++;
	
	if (nbIm==8) {
		document.getElementById("spanprogression").innerHTML="(chargement des images turbomédia, 2ème partie)";
		setTimeout(chargeImages3,dureeTO);
	}	
	
	if (nbIm==nbImTurbo) {
		document.getElementById("spanprogression").innerHTML="(chargement des images IRM)";
		setTimeout(chargeImages4,dureeTO);
	}
	else if (nbIm>=(nbImTurbo+7)) {
		document.getElementById("spanprogression").innerHTML="(vérification des images IRM)";
		setTimeout(verifImagesIRM,dureeTO);
	}
}

function verifImagesIRM() {
	var isok=IsImageOk(imageAxiale)&&IsImageOk(imageCoronale)&&IsImageOk(imageSagittale)&&IsImageOk(imageMasque)&&IsImageOk(imageSagiMasque)&&IsImageOk(imageCoroMasque)&&IsImageOk(imageStruct);
	if (isok===true) {
		document.getElementById("spanprogression").innerHTML="(vérification des images turbomédia)";
		setTimeout (function(){verifImagesTurbo()},dureeTO);
	}
	else {	setTimeout (function(){verifImagesIRM()},100);}
}

function verifImagesTurbo() {
	var isok=true;
	
	for (var i=0;i<imageBD.length;i++) {
		isok=isok&&IsImageOk(imageBD[i]);
	}
	
	if (isok===true) {
		document.getElementById("spanprogression").innerHTML="(toutes les images sont vérifiées)";
		setTimeout (function(){start()},dureeTO);
	}
	else {	setTimeout (function(){verifImagesTurbo()},100);}
}


function ajouteListener () {
	document.body.addEventListener("mouseup", mouseUp, false); 
	document.body.addEventListener("mouseup", leveSouris, false);
	document.body.addEventListener("mouseleave", leveSouris, false); 
	document.body.addEventListener("mousemove", bougeSouris, false); 
	document.body.addEventListener("dragstart", function(){return false;}, false); 
	document.body.addEventListener("ondrop", function(){return false;}, false); 
}

function preStart () {
	initVar ();
	creeCanvas();
	
	createTempCanv ();
	redim ();
	verifieModeCol ();
	formateTableau();
	chargeImages();
}

function start() {
	opacifieCharge();
	document.getElementById("spanprogression").innerHTML="(précalcul des coupes coronales)";
	setTimeout(start2,dureeTO);
}


function start2 () {
	opacifieCharge();
	preloadMasqueCoro();
	preloadCoro();
	document.getElementById("spanprogression").innerHTML="(précalcul des coupes sagittales)";
	setTimeout(start3,dureeTO);
}
	
function start3 () {
	opacifieCharge();
	preloadMasqueSagi();
	preloadSagi();
	document.getElementById("spanprogression").innerHTML="(préparation des écrans)";
	setTimeout(start4,dureeTO);
}
	
function start4() {
	opacifieCharge();
	checkRedim();
	changeSeuil (61);
	chargeSituation(0,0);
	traceScale();
	ajouteListener();
	remplitTableaux();
	remplitListe ();
	creeRangeSlider('range-slider-1', function(value) {
		changeOpaStruct(value)
	});
	creeRangeSlider('range-slider-2', function(value) {
		changeSeuil (value);
	});
		
	document.getElementById("spanprogression").innerHTML="(préparation de la scène 3D)";
	setTimeout(start5,dureeTO);
}

function start5() {
	opacifieCharge();
	if (webGLOK) {
		initRenderer ();
		creeEclairage ();
	}
	document.getElementById("spanprogression").innerHTML="(ajout de la tête 3D)";
	setTimeout(start6,dureeTO);
}

function start6() {
	opacifieCharge();
	if (webGLOK) {
		ajouteTete();
		ajoutePlans();
	} else {
		document.getElementById("div_image_tete_3D").style.display="block";
	}
	ready=true;
	document.getElementById("divchargement").style.display="none";
	goDivEcran();
	goDivSituations();
	afficheQuestion();
	//proto=3;
	//temoin=1;
	//expliqueProtocole ();
}

function verifieModeCol () {
	var urlParams = parseURLParams(window.location.href)||[]; 
	var urlParamMode=urlParams["mode"]||"lycee";
	modeCollege=(urlParamMode=="college");
	var autreMode="";
	if (modeCollegeForce==true) { // on ne permet pas un autre mode que collège
		modeCollege=true;
		document.getElementById("divdivmode").style.display="none";
	}
	if (modeCollege==true) {autreMode="lycée";} else {autreMode="collège";}
	onlySimple=modeCollege;
	if (modeCollege==true) {document.getElementById("divSeuil").style.display="none";}
	if (modeCollege==true) {document.getElementById("spanSeuil1").style.display="none";}
	if (modeCollege==true) {document.getElementById("div-legende-activite").innerHTML="<p style='padding-left:1em'><i>Activité cérébrale relative* :<br><small style='font-size:0.7em'>(*par rapport à un individu au repos, dans le silence et l'obscurité)</small></i></p>";}
	if (modeCollege==true) {document.getElementById("divmode").style.textAlign="left";} else {document.getElementById("divmode").style.textAlign="right";}
}

function changeModeCol () {
	console.log ("changement");
	if (modeCollege==true) {
		window.location.href="index.htm?mode=lycee"
	} else {
		window.location.href="index.htm?mode=college"
	}
}

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function chargeTousScripts ()
{
	var nomf=tScript[nScriptACharger];
	if ((nomf=="three.min")&&(!webGLOK)) {nomf="";}
	if ((nomf=="meshTete")&&(!webGLOK)) {nomf="";}
	
	nScriptACharger++;
	if (nScriptACharger<=nbScripts) {
		chargeScript(nomf);	
	}
}

function chargeScript(nomf)
{
	if (nomf=="") {
		setTimeout(function() { 
			avanceChargeScript();
			chargeTousScripts();
		}, 1);      
		return false;
	}
	
	
	var fileref=document.createElement('script');
	fileref.setAttribute("type","text/javascript");
	fileref.async = true;
	fileref.setAttribute("src", "js/"+nomf+".js");
	var js=document.getElementsByTagName("head")[0].appendChild(fileref);
    js.onload = function () {
		setTimeout(function() { 
			//console.log (nomf+" chargé.");
			document.getElementById("spanprogression").innerHTML="(script "+nomf+" chargé)";
			avanceChargeScript();
			chargeTousScripts();
		}, 1);      
	}
}

function avanceChargeScript()
{
	//console.log (nScriptACharger);
	opacifieCharge();
	if (nScriptACharger>=nbScripts)
	{
		setTimeout(function() { 
			preStart();
		}, 1);      
	}
}

function go() {
	initVersion();
	
	// détection de NWJS
	if (is_nwjs()===true) {
		var gui = require('nw.gui'); 
		var win = gui.Window.get();
		win.maximize();
		win.show();
		//alert (process.versions['node-webkit']);
	}	
	
	
	document.getElementById("spanprogression").innerHTML="(détection du WebGL)";
	setTimeout(detectWebGL,dureeTO);
}

function detectWebGL() {
	// détection du webgl
	if (!window.WebGLRenderingContext) {
		document.getElementById('spanprogression').innerHTML="<p>Votre système ou votre navigateur ne reconnait pas le WebGL.</p>";
		webGLOK=false;
	} else {
		var canvas =document.createElement("canvas");
		var context = canvas.getContext("webgl");
		if (!context) {
			document.getElementById('spanprogression').innerHTML="<p>Erreur lors de l'initialisation de WebGL.</p>";
			webGLOK=false;
		} else {
			webGLOK=true;
		}
	}
	document.getElementById("spanprogression").innerHTML="(chargement des scripts)";
	setTimeout(chargeTousScripts,dureeTO);
}


function is_nwjs(){
try{
		return (typeof require('nw.gui') !== "undefined");
	} catch (e){
		return false;
	}
}