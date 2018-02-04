var ascen=0;
function clicAscenseur(n) {
	ascen=n;
}

function placeAscenseur(a) {
	if (a==1) {var n=zCoupe/zMax;}
	if (a==2) {var n=xCoupe/xMax;}
	if (a==3) {var n=yCoupe/yMax;}
	var d=document.getElementById("divcur"+a);
	var b=document.getElementById("barrecur"+a);
	var ym=document.getElementById("barrecur"+a).clientHeight;
	var co=cumulativeOffset(b);
	var y=Math.round(ym*n-d.clientHeight/2)+co.top;
	d.style.top=y+"px";
}

function bougeSouris (e) {
	if (ascen==0) {return false;}
	e = e|| window.event;
	var d=document.getElementById("divcur"+ascen);
	var b=document.getElementById("barrecur"+ascen);
	var co=cumulativeOffset(b);
	var y=e.clientY-co.top;
	var ym=document.getElementById("barrecur"+ascen).clientHeight;
	var n=y/ym;
	if ((n>0)&&(n<1)) {
		if (ascen==1) {	zCoupe=Math.floor(zMax*n);	}
		if (ascen==2) {	xCoupe=Math.floor(xMax*n);	}
		if (ascen==3) {	yCoupe=Math.floor(yMax*n);	}
		traceTout(true);
	}
}

function leveSouris() {
	ascen=0;
}