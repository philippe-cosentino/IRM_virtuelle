var struct=new Array();
var n=0;
struct[n]=new Object();
struct[n].nom="(aucune)";
struct[n].src="vide.png";
struct[n].simple=true;
n++;

struct[n]=new Object();
struct[n].nom="amygdales";
struct[n].src="amygdales.png";
n++;

struct[n]=new Object();
struct[n].nom="cerveau";
struct[n].src="cerveau.png";
struct[n].simple=true;
n++;

struct[n]=new Object();
struct[n].nom="cervelet";
struct[n].src="cervelet.png";
struct[n].simple=true;
n++;

struct[n]=new Object();
struct[n].nom="corps calleux";
struct[n].src="corpscalleux.png";
n++;


struct[n]=new Object();
struct[n].nom="corps géniculés latéraux";
struct[n].src="genicullat.png";
n++;


struct[n]=new Object();
struct[n].nom="cortex cérébral";
struct[n].src="cortexcerebral.png";
struct[n].simple=true;
n++;

struct[n]=new Object();
struct[n].nom="cortex cingulaire";
struct[n].src="cingulaire.png";
n++;

struct[n]=new Object();
struct[n].nom="épiphyse";
struct[n].src="epiphyse.png";
n++;

struct[n]=new Object();
struct[n].nom="hippocampe";
struct[n].src="hippocampe.png";
n++;

struct[n]=new Object();
struct[n].nom="hypophyse";
struct[n].src="hypophyse.png";
struct[n].simple=true;
n++;


struct[n]=new Object();
struct[n].nom="hypothalamus";
struct[n].src="hypothalamus.png";
struct[n].simple=true;
n++;


struct[n]=new Object();
struct[n].nom="lobes";
struct[n].src="lobes.png";
struct[n].simple=true;
n++;

struct[n]=new Object();
struct[n].nom="mésencéphale";
struct[n].src="mesencephale.png";
n++;


struct[n]=new Object();
struct[n].nom="noyaux accumbens";
struct[n].src="accumbens.png";
n++;

struct[n]=new Object();
struct[n].nom="noyaux caudés";
struct[n].src="noyauxcaudes.png";
n++;

struct[n]=new Object();
struct[n].nom="putamen";
struct[n].src="putamen.png";
n++;

struct[n]=new Object();
struct[n].nom="septum (aire septale)";
struct[n].src="aire_septale.png";
n++;


struct[n]=new Object();
struct[n].nom="thalamus";
struct[n].src="thalamus.png";
n++;


struct[n]=new Object();
struct[n].nom="tronc cérébral";
struct[n].src="tronc.png";
struct[n].simple=true;
n++;



var structSel=0;

var modeDessin=false;

function traceStructures () {
	var d=document.getElementById ("spanstructure");
	if (structSel==0) {
		d.style.display="none";return false;
	} else {
		d.style.display="block";
		var ns="<p><i>Structure mise en surbrillance : "+struct[structSel].nom;
		if (struct[structSel].nom=="lobes") {
			ns+=" (<font color=#830>frontal</font>, <font color=#080>temporal</font>, <font color=#088>pariétal</font>, <font color=#AA0>occipital</font>)";
		}
		ns+="</i></p>";
		d.innerHTML=ns;
	}
	
	traceStructureAxiale();
	traceStructureCoronale();
	traceStructureSagittale();
	
}
var blendingMode="soft-light"; 
function traceStructureCoronale () {
	//return false;
	ctxTemp.clearRect(0,0,dimMax,dimMax);
	var xd=0;
	for (var i=0;i<nbImTotal;i++) {
		var yd=i;
		var c=getXY(i);
		var xs=c.x*lImage;
		var ys=c.y*hImage;
		//var id=ctxStruct.getImageData(xs, ys+zCoupe, xMax, 1);
		//ctxTemp.putImageData(id, xd, yd);
		ctxTemp.drawImage(imageStruct,xs,ys+zCoupe,xMax,1,xd,yd,xMax,1);
	}
	ctxCoronale.globalAlpha = opaStruct;
	ctxCoronale.globalCompositeOperation = blendingMode;
	ctxCoronale.drawImage(canvTemp,0,0,xMax,yMax,0,0,xMax*echelle,yMax*echelle);
	ctxCoronale.globalAlpha = 1;
	ctxCoronale.globalCompositeOperation = "source-over";
}


function traceStructureAxiale () {
	//return false;
	ctxTemp.clearRect(0,0,dimMax,dimMax);
	var c=getXY(yCoupe);
	var x=c.x*lImage;
	var y=c.y*hImage;
	//ctxTemp.drawImage(imageStruct,x,y,xMax,zMax,0,0,xMax,zMax);
	ctxAxiale.globalAlpha = opaStruct;
	ctxAxiale.globalCompositeOperation = blendingMode;
	//ctxAxiale.drawImage(canvTemp,0,0,xMax,zMax,0,0,xMax*echelle,zMax*echelle);
	ctxAxiale.drawImage(imageStruct,x,y,xMax,zMax,0,0,xMax*echelle,zMax*echelle);
	ctxAxiale.globalAlpha = 1;
	ctxAxiale.globalCompositeOperation = "source-over";
}

function traceStructureSagittale () {
	//return false;
	ctxTemp.clearRect(0,0,dimMax,dimMax);
	ctxTemp2.clearRect(0,0,zMax*2,yMax*2);
	for (var i=0;i<nbImTotal;i++) {
		var c=getXY(i);
		var x=c.x*lImage;
		var y=c.y*hImage;
		//var id=ctxStruct.getImageData(xCoupe+x, y, 1, zMax);
		//ctxTemp.putImageData(id, yMax-i, 0);
		ctxTemp.drawImage(imageStruct,xCoupe+x,y,1,zMax,yMax-i,0,1,zMax);
	}
	
	ctxTemp2.save();
	ctxTemp2.translate(0,(nbImTotal+1)*echelle);
	ctxTemp2.rotate(-Math.PI/2);
	ctxTemp2.drawImage(canvTemp,0,0,yMax,zMax,0,0,yMax*echelle,zMax*echelle);
	ctxTemp2.restore();
	ctxSagittale.globalAlpha = opaStruct;
	ctxSagittale.globalCompositeOperation = blendingMode;
	ctxSagittale.drawImage(canvTemp2,0,0); //,zMax,yMax,0,0,zMax*echelle,yMax*echelle);
	ctxSagittale.globalAlpha = 1;
	ctxSagittale.globalCompositeOperation = "source-over";
}

var opaStruct=0.35;
function changeOpaStruct (v) {
	opaStruct=v/200;
	canvStruct.style.opacity=opaStruct;
	traceTout();
}

function setOpaStruct () {
	setSliderValue ("range-slider-1",opaStruct*200);
}

function saveImageStruct() {
var w=window.open('about:blank','image from canvas');
w.document.write("<img src='"+imageStruct.src+"' alt='from canvas'/>");
}

var onlySimple;
function remplitListe () {
	var select=document.getElementById ('selectstruct');
	select.options.length = 0;
	for (var i=0;i<struct.length;i++) {
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = struct[i].nom;
		var spl=struct[i].simple||false;
		if ((spl==true)||(onlySimple==false)) {
			select.appendChild(opt);
		}
	}
	
	// on rajoute "davantage" à la liste
	if (onlySimple==true) {
		i=struct.length;
		opt.value = i;
		opt.innerHTML = "(... davantage de structures)";
		select.appendChild(opt);
	}
	
}

function changeStruct (v) {
	if (v==struct.length) {
		onlySimple=false;
		remplitListe ();
		document.getElementById ('selectstruct').focus();
		return false;
	}
	
	if (v==0) {document.getElementById("divPanneauStructures").style.display="none";} else {document.getElementById("divPanneauStructures").style.display="block";}
	setOpaStruct();

	document.getElementById("divchargement").style.display="block";
	document.getElementById("spanprogression").innerHTML="(chargement de la géométrie de la structure)";
	divEcran.style.display="none";
	structSel=v;
	imageStruct.src="images/structures/"+struct[structSel].src;
}

function changeMode (v) {
	blendingMode=v;
	traceTout();
	setOpaStruct();
}
