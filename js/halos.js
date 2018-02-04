function ajouteHalo (xx,yy,zz,taille,intense) {
	'use strict';
	for (var ix=0;ix<nix;ix++) {
		for (var iy=0;iy<niy;iy++) {
			for (var iz=0;iz<niz;iz++) {
				var ii=getIHalo (ix,iy,iz);
				var x=ix*taillePix;
				var y=iy*taillePix;
				var z=iz*taillePix;
				var d2=(xx-x)*(xx-x)+(yy-y)*(yy-y)+(zz-z)*(zz-z);
				var v1=tActi[ii];
				var v2=calcVal(d2,taille,intense);
				var v=v1+v2;
				if (v>20000) {v=20000;}
				
				tActi[ii]=v;
			}
		}
	}
}

function retireHalo (xx,yy,zz,taille,intense) {
	'use strict';
	for (var ix=0;ix<nix;ix++) {
		for (var iy=0;iy<niy;iy++) {
			for (var iz=0;iz<niz;iz++) {
				var ii=getIHalo (ix,iy,iz);
				var x=ix*taillePix;
				var y=iy*taillePix;
				var z=iz*taillePix;
				var d2=(xx-x)*(xx-x)+(yy-y)*(yy-y)+(zz-z)*(zz-z);
				var v1=tActi[ii];
				var v2=calcVal(d2,taille,intense);
				var v=v1-v2;
				if (v<0) {v=0;}
				
				tActi[ii]=v;
			}
		}
	}
}

function ajouteHaloSegment (x1,y1,z1,x2,y2,z2,taille,intense) {
	var ptA={x:x1,y:y1,z:z1};
	var ptB={x:x2,y:y2,z:z2}; // les 2 points du segment
	for (var ix=0;ix<nix;ix++) {
		for (var iy=0;iy<niy;iy++) {
			for (var iz=0;iz<niz;iz++) {
				var ii=getIHalo (ix,iy,iz);
				var x=ix*taillePix;
				var y=iy*taillePix;
				var z=iz*taillePix;
				var ptC={x:x,y:y,z:z};
				var d2=distToSegmentSquared (ptC,ptA,ptB);
				var v1=tActi[ii];
				var v2=calcVal(d2,taille,intense);
				var v=v1+v2;
				if (v>20000) {v=20000;}
				
				tActi[ii]=v;
			}
		}
	}
}

function retireHaloSegment (x1,y1,z1,x2,y2,z2,taille,intense) {
	var ptA={x:x1,y:y1,z:z1};
	var ptB={x:x2,y:y2,z:z2}; // les 2 points du segment
	for (var ix=0;ix<nix;ix++) {
		for (var iy=0;iy<niy;iy++) {
			for (var iz=0;iz<niz;iz++) {
				var ii=getIHalo (ix,iy,iz);
				var x=ix*taillePix;
				var y=iy*taillePix;
				var z=iz*taillePix;
				var ptC={x:x,y:y,z:z};
				var d2=distToSegmentSquared (ptC,ptA,ptB);
				var v1=tActi[ii];
				var v2=calcVal(d2,taille,intense);
				var v=v1-v2;
				if (v<0) {v=0;}
				
				tActi[ii]=v;
			}
		}
	}
}



function resetHalos () {
	for (var i=0;i<ntMax;i++) {
		tActi[i]=10000; // 10000 => 0
	}
}

function ajouteBruitHalos () {
	for (var i=0;i<ntMax;i++) {
		var v=tActi[i]+(Math.random()-0.5)*bruit; 
		if (v>0) {tActi[i]=v;} else {tActi[i]=0;}
	}
}

function getIHalo (ix,iy,iz) {
	var v=iz+iy*niz+ix*niy*niz;
	return v;
}

function getIHaloFromXYZ (x,y,z) {
	var xx=Math.floor(x/taillePix);
	var yy=Math.floor(y/taillePix);
	var zz=Math.floor(z/taillePix);
	return getIHalo (xx,yy,zz);
}

function getValHalo (x,y,z) {
	var v=(tActi[getIHalo (x,y,z)])/200;
	if (v>100) {v=100;}
	if (v<0) {v=0;}
	return v;
}

function gauss(d2) {
	return Math.exp (-d2);
}

var bruit=2000;
function calcVal (d2,taille,intense) {
	if (d2>5000) {return 0}
	var dr=d2/100/taille;
	var v1=gauss(dr);
	v=v1*10000*intense;
	return v;
}

function afficheHaloAxi () {
	'use strict';
	ctxTemp.clearRect(0,0,dimMax,dimMax);
	for (var i=0;i<nix;i++) {
		for (var j=0;j<niz;j++) {
			var xIm=i*taillePix-taillePix/2;
			var yIm=j*taillePix-taillePix/2;
			var xx=i;
			var yy=Math.floor(yCoupe/taillePix);
			var zz=j;
			var v=getValHalo(xx,yy,zz);
			//if (i==0) {console.log ("v="+v+" xx="+xx+" yy="+yy+" zz="+zz);}
			if (v>=seuil) {
				ctxTemp.fillStyle=getColor(v,0.75,seuil);
				//ctxTemp.fillStyle="white";
				ctxTemp.fillRect(xIm,yIm,taillePix,taillePix);
			} 
		}
	}
	ctxAxiale.drawImage(canvTemp,0,0,lImage,hImage,0,0,canvAxiale.width,canvAxiale.height);
}

function afficheHaloCoro () {
	'use strict';
	ctxTemp.clearRect(0,0,dimMax,dimMax);
	for (var i=0;i<nix;i++) {
		for (var j=0;j<=niy;j++) {
			var xIm=i*taillePix-taillePix/2;
			var yIm=j*taillePix-taillePix/2;
			var xx=i;
			var yy=j;
			var zz=Math.floor(zCoupe/taillePix);
			var v=getValHalo(xx,yy,zz);
			if (v>=seuil) {
				ctxTemp.fillStyle=getColor(v,0.75,seuil);
				//ctxTemp.fillStyle="white";
				ctxTemp.fillRect(xIm,yIm,taillePix,taillePix);
			} 
		}
	}
	ctxCoronale.drawImage(canvTemp,0,0,lImage,nbImTotal,0,0,canvCoronale.width,canvCoronale.height);
}


function afficheHaloSagi () {
	'use strict';
	ctxTemp.clearRect(0,0,canvTemp.width,canvTemp.height);
	for (var i=0;i<niz;i++) {
		for (var j=0;j<=niy;j++) {
			var xIm=i*taillePix-taillePix/2;
			var yIm=j*taillePix-taillePix/2;
			var xx=Math.floor(xCoupe/taillePix);
			var yy=j;
			var zz=i;
			var v=getValHalo(xx,yy,zz);
			if (v>=seuil) {
				ctxTemp.fillStyle=getColor(v,0.75,seuil);
				//ctxTemp.fillStyle="white";
				ctxTemp.fillRect(xIm,yIm,taillePix,taillePix);
			} 
		}
	}
	ctxSagittale.drawImage(canvTemp,0,0,hImage,nbImTotal,0,0,canvSagittale.width,canvSagittale.height);
}

function traceHalos () {
	if (proto==0) {return false;}
	afficheHaloAxi ();
	afficheHaloCoro ();
	afficheHaloSagi ();
}



function getColor (v,opa,s) {
	'use strict';
	var v2=(v-s)/(100-s);
	if (v2<0) {v2=0;return "black";}
	var r=Math.round(v2*255);
	if (r>255) {r=255;}
	var b=Math.round(200-r);
	var g=Math.round(100-r/4);
	if (r<0) {r=0;}
	if (b<0) {b=0;}
	if (g<0) {g=0;}
	var c="rgba("+r+","+g+","+b+","+opa+")";
	return c;
}

function changeSeuil (v) {
	seuil=(v/100*57)+40;
	if (seuil>95) {seuil=95;}
	traceTout();
	//traceScale ();
	document.getElementById ("spanseuil").innerHTML=Math.round(seuil*2-100);
	traceScale ();
}

function setSeuil() {
	var v2=seuil-40;
	v2=v2*100/57;
	setSliderValue ("range-slider-2",v2);
}

function traceScale () {
	'use strict';
	var lSpectre=400;
	var hSpectre=20;
	var lBarre=500;
	var hBarre=40;
	var x0Spectre=(lBarre-lSpectre)/2;
	var lRaie=lSpectre/100;
	ctxTempCoul.clearRect(0,0,lBarre,hBarre);
	ctxCoul.clearRect(0,0,canvCoul.width,canvCoul.height);
	for (var i=0;i<=100;i++) {
		ctxTempCoul.fillStyle=getColor(i,1,0);
		if (i<100) {
			ctxTempCoul.fillRect(x0Spectre+i*lRaie,0,lRaie,hSpectre); //
		} else {
			ctxTempCoul.fillRect(x0Spectre+i*lRaie,0,1,hSpectre); //
		}
	}
	// graduation
	ctxTempCoul.fillStyle="black";
	var s=seuil*2-100;
	for (var i=-100;i<=100;i++) {
		var v=i-s;
		var v2=v/(100-s);
		var x=x0Spectre+v2*lSpectre;
		if ((v2>=0)&&(v2<=1)) {
			if (i==0) {
				ctxTempCoul.fillRect (x,hSpectre,1,10);
			} else 	if ((i%10)==0) {
				ctxTempCoul.fillRect (x,hSpectre,1,5);
			} else 	if ((i%5)==0) {
				ctxTempCoul.fillRect (x,hSpectre,1,2);
			}
		}
	}
	
	// légendes
	ctxTempCoul.font="18px Calibri";
	ctxTempCoul.textAlign="center";
	var pas=20;
	if (seuil>50) {pas=10;}
	if (seuil>75) {pas=5;}
	for (var i=-100;i<=100;i+=pas) {
		var v=i-s;
		var v2=v/(100-s);
		var x=x0Spectre+v2*lSpectre;
		if ((v2>=0)&&(v2<=1)) {
			 var t=i;
			 if (i>=0) {t="+"+Math.round(t)}
			//if (i==100) {t+="%";}
			ctxTempCoul.fillText (t,x,hSpectre+18);
		}
	}
	
	ctxCoul.drawImage(canvTempCoul,0,0,lBarre,hBarre,  0,0,canvCoul.width,canvCoul.height);
}
