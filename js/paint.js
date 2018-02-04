
var bucket=true;
var brossePlate=true;
var lumMin=70;
var lumMax=140;
var diffLumMax=60;

function paintHere (lx,ly,lz) {
	if (modeDessin==false) {return false;}
	
	if (bucket==true) {
		bucketFillHere ();
		return false;
	}
	
	if  ((brossePlate==true)&&(ly<=1)) {
		paintPlatAxiale (xCoupe,yCoupe,zCoupe);
		//traceTout();
		return false;
	}
	
	if  ((brossePlate==true)&&(lz<=1)) {
		paintPlatCoronale (xCoupe,yCoupe,zCoupe);
		//traceTout();
		return false;
	}
	
	paint(xCoupe,yCoupe,zCoupe,lx,ly,lz);
	//traceTout();
	
}

var brushColor="#FF0";
function paintPlatAxiale (x,y,z) {
	ctxStruct.fillStyle=brushColor;
	var c=getXY(y);
	var xx=x+c.x*lImage;
	var yy=z+c.y*hImage;
	var r=lSphere/2;
	if (efface==true) {
		ctxStruct.save();
		ctxStruct.beginPath();
		ctxStruct.arc (xx,yy,r,0,Math.PI*2);
		ctxStruct.clip();
		ctxStruct.clearRect(0,0,3258,2170);
		ctxStruct.restore();
	} else {
		ctxStruct.beginPath();
		ctxStruct.arc (xx,yy,r,0,Math.PI*2);
		ctxStruct.closePath();
		ctxStruct.fill();
	}
}

function paintPlatCoronale(x,y,z) {
	var lMax=lSphere;
	
	ctxStruct.fillStyle=brushColor;
	var y1=y-Math.floor(lMax/2);
	var y2=y+Math.floor(lMax/2);
	var rMax=Math.floor(lMax/2);
	for (var i=y1;i<=y2;i++) {
		var a=Math.abs(y-i);
		var r=Math.sqrt(rMax*rMax-a*a);
		var c=getXY(i);
		var xx=x+c.x*lImage;
		var yy=z+c.y*hImage;
		if (efface==true) {
			ctxStruct.clearRect (xx-r,yy,r*2,1);
		} else {
			ctxStruct.fillRect (xx-r,yy,r*2,1);
		}
	}
	
}

function clearAxiale (y) {
	var c=getXY(y);
	var xx=c.x*lImage;
	var yy=c.y*hImage;
	ctxStruct.clearRect(xx,yy,xMax,zMax);
	recalcImgStruct ();
}

function clearCoro (z) {
	for (var iy=0;iy<yMax;iy++) {
		var c=getXY(iy);
		var xx=c.x*lImage;
		var yy=z+c.y*hImage;
		ctxStruct.clearRect (xx,yy,xMax,1);
	}
	recalcImgStruct ();
}

function bucketFillHere () {
	var c=getXY(yCoupe);
	var x=xCoupe;
	var y=zCoupe;
	var startCol=Math.round((lumMin+lumMax)/2);
	ctxTempAxialeD.clearRect(0,0,lImage,hImage);
	ctxTempAxialeS.clearRect(0,0,lImage,hImage);
	ctxTempAxialeD.drawImage(canvStruct,c.x*lImage,c.y*hImage,lImage,hImage,0,0,lImage,hImage);
	ctxTempAxialeS.drawImage(imageAxiale,c.x*lImage,c.y*hImage,lImage,hImage,0,0,lImage,hImage);
	bucketPaint (ctxTempAxialeS,ctxTempAxialeD,lImage,hImage,x,y,lumMin,lumMax);
	ctxStruct.drawImage(canvTempAxialeD,0,0,lImage,hImage,c.x*lImage,c.y*hImage,lImage,hImage);
}

var lSphere=15;
var efface=false;
function paint(x,y,z,lx,ly,lz) {
	var lx2=Math.floor(lx/2);
	var ly2=Math.floor(ly/2)+1;
	var lz2=Math.floor(lz/2);
	var lMax=Math.max(lx,ly,lz);
	var lMax=lSphere;
	
	ctxStruct.fillStyle=brushColor;
	var mode="sphere";
	if (mode=="cube") {
		for (var i=y-ly2;i<(y+ly2);i++) {
			var c=getXY(i);
			var xx=x+c.x*lImage;
			var yy=z+c.y*hImage;
			ctxStruct.fillRect (xx-lx2,yy-lz2,lx,lz);
		}
	}
	if (mode=="sphere") {
		var y1=y-Math.floor(lMax/2);
		var y2=y+Math.floor(lMax/2);
		var rMax=Math.floor(lMax/2);
		for (var i=y1;i<=y2;i++) {
			var a=Math.abs(y-i);
			var r=Math.sqrt(rMax*rMax-a*a);
			var c=getXY(i);
			var xx=x+c.x*lImage;
			var yy=z+c.y*hImage;
			if (efface==true) {
				ctxStruct.save();
				ctxStruct.beginPath();
				ctxStruct.arc (xx,yy,r,0,Math.PI*2);
				ctxStruct.clip();
				ctxStruct.clearRect(0,0,3258,2170);
				ctxStruct.restore();
			} else {
				ctxStruct.beginPath();
				ctxStruct.arc (xx,yy,r,0,Math.PI*2);
				ctxStruct.closePath();
				ctxStruct.fill();
			}
		}
	}
	
}

function recalcImgStruct () {
	if (modeDessin==false) {return false;}
	imageStruct.src=canvStruct.toDataURL("image/png");	
	traceTout();
}



function clicCheckEfface (v) {
	efface=v;
}

function clicCheckPlat (v) {
	brossePlate=v;
}

function clicCheckBucket (v) {
	bucket=v;
}

function changeTailleBrosse(v) {
	lSphere=v;
	document.getElementById("svgbrosse").setAttribute("width", Math.round(lSphere*echelle)+"px");
	document.getElementById("svgbrosse").setAttribute("height", Math.round(lSphere*echelle)+"px");
}

function activeModeDessin () {
	modeDessin=true;
	ctxStruct.drawImage(imageStruct,0,0);
	document.getElementById ("panneauDessin").style.display="block";
	changeTailleBrosse(lSphere);
}


function clavier (event) {
	var char = event.which || event.keyCode;
	
	if (char==27) {
		// echap
		if (turboEnCours) {fermeProtocole () ;}
	}
	
	if (char==37) {
		imagePrecedente();
		return false;
	}
	
	if ((char==39)||(char==32)) {
		imageSuivante();
		return false;
	}
	
	if (modeDessin==false) {return false;}
	if (char==69) {
		//efface
		efface=!efface;
		document.getElementById("checkefface").checked=efface;
	}
	if (char==68) {
		//d
		activeModeDessin();
	}
	
	if (char==88) {
		//x
		clearAxiale (yCoupe);
	}
	
	if (char==67) {
		//c
		clearCoro (zCoupe);
	}
}