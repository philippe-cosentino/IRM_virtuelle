var nePlusProposer=false;
var dejaExplique=true;

var nEtapeBD;
var turboEnCours=false;
var questionEnCours=false;
var modeTurbo="proto";

var nbEtapes;
const nbEtapesProto=13;
const nbEtapesTuto=15;
var n;

var tuto=new Array();
n=0;
tuto[n]=new Object ();
tuto[n].nIm=5;
tuto[n].nImDiapo=17;
tuto[n].texte="Avant toute chose, repérez bien ces flèches<br>situées à droite et à gauche de cet écran.<br>Elles vous permettront d'avancer ou de revenir en arrière dans mes explications.<br>Vous pourrez également utiliser la barre espace, ou les flèches sur votre clavier.";
tuto[n].xcoin=0.6;
tuto[n].large=0.9;
tuto[n].ycoin=0.05;
tuto[n].haut=0.35;
tuto[n].xpointe=1.16;
tuto[n].ypointe=0.55;
tuto[n].ypointe1;
tuto[n].xpointe1=1;
tuto[n].lpointe=0.02;
tuto[n].posFleche="bas";
n++;


tuto[n]=new Object ();
tuto[n].nIm=8;
tuto[n].nImDiapo=15;
tuto[n].texte="Cette application va vous permettre de réaliser des IRM virtuelles, et ainsi d'explorer le fonctionnement du cerveau.";
tuto[n].xcoin=0.68;
tuto[n].large=0.6;
tuto[n].ycoin=0.05;
tuto[n].haut=0.3;
tuto[n].xpointe=0.62;
tuto[n].ypointe=0.39;
tuto[n].ypointe1;
tuto[n].xpointe1;
tuto[n].lpointe;
tuto[n].posFleche="coingauche";
n++;

tuto[n]=new Object ();
tuto[n].nIm=6;
tuto[n].texte="Nous disposons pour cela d'un sujet, volontaire pour expérimenter diverses situations.";
tuto[n].xcoin=0.68;
tuto[n].large=0.55;
tuto[n].ycoin=0.05;
tuto[n].haut=0.25;
tuto[n].xpointe=0.62;
tuto[n].ypointe=0.39;
tuto[n].ypointe1;
tuto[n].xpointe1;
tuto[n].lpointe;
tuto[n].posFleche="coingauche";
n++;

tuto[n]=new Object ();
tuto[n].nIm=5;
tuto[n].nImDiapo=10;
tuto[n].texte="Dans un premier temps vous devrez choisir la situation que vous souhaitez tester.";
tuto[n].xcoin=0.6;
tuto[n].large=0.6;
tuto[n].ycoin=0.05;
tuto[n].haut=0.22;
tuto[n].xpointe=1.16;
tuto[n].ypointe=0.55;
tuto[n].ypointe1;
tuto[n].xpointe1=1;
tuto[n].lpointe=0.02;
tuto[n].posFleche="bas";
n++;

tuto[n]=new Object ();
tuto[n].nIm=5;
tuto[n].nImDiapo=11;
tuto[n].texte="Vous devrez également choisir une situation témoin, qui servira de référence.";
tuto[n].zapCol=true;
tuto[n].xcoin=0.6;
tuto[n].large=0.6;
tuto[n].ycoin=0.05;
tuto[n].haut=0.22;
tuto[n].xpointe=1.16;
tuto[n].ypointe=0.55;
tuto[n].ypointe1;
tuto[n].xpointe1=1;
tuto[n].lpointe=0.02;
tuto[n].posFleche="bas";
n++;

tuto[n]=new Object ();
tuto[n].nIm=2;
tuto[n].texte="Vous pourrez ensuite réaliser l'IRM virtuelle.<br><br>Dans une IRM réelle, la tête du sujet serait introduite dans un appareil. Son cerveau serait alors soumis à un fort champ magnétique et à des ondes radio.";
tuto[n].xcoin=0.9;
tuto[n].large=0.65;
tuto[n].ycoin=0.05;
tuto[n].haut=0.45;
tuto[n].xpointe;
tuto[n].ypointe;
tuto[n].ypointe1;
tuto[n].xpointe1;
tuto[n].lpointe;
tuto[n].posFleche="";
n++;

tuto[n]=new Object ();
tuto[n].nIm=3;
tuto[n].texte="Cela permet de visualiser l'anatomie du cerveau, tranche par tranche (c'est ce qu'on appelle une IRM anatomique) ...";
tuto[n].xcoin=0.15;
tuto[n].large=0.6;
tuto[n].ycoin=0.5;
tuto[n].haut=0.31;
tuto[n].xpointe;
tuto[n].ypointe;
tuto[n].ypointe1;
tuto[n].xpointe1;
tuto[n].lpointe;
tuto[n].posFleche="";
n++;

tuto[n]=new Object ();
tuto[n].nIm=4;
tuto[n].texte="... mais aussi sa consommation de dioxygène et donc son activité (c'est ce qu'on appelle une IRM fonctionnelle) !";
tuto[n].xcoin=0.15;
tuto[n].large=0.6;
tuto[n].ycoin=0.5;
tuto[n].haut=0.29;
tuto[n].xpointe;
tuto[n].ypointe;
tuto[n].ypointe1;
tuto[n].xpointe1;
tuto[n].lpointe;
tuto[n].posFleche="";
n++;

tuto[n]=new Object ();
tuto[n].nIm=5;
tuto[n].nImDiapo=9;
tuto[n].texte="On effectuera alors une comparaison statistique entre les enregistrements obtenus dans la situation testée et le témoin, afin de déterminer quelles parties du cerveau s'activent davantage dans cette situation.";
tuto[n].zapCol=true;
tuto[n].xcoin=0.4;
tuto[n].large=0.7;
tuto[n].ycoin=0.03;
tuto[n].haut=0.35;
tuto[n].xpointe=1.16;
tuto[n].ypointe=0.55;
tuto[n].ypointe1;
tuto[n].xpointe1=1;
tuto[n].lpointe=0.02;
tuto[n].posFleche="bas";
n++;

tuto[n]=new Object ();
tuto[n].nIm=5;
tuto[n].nImDiapo=12;
tuto[n].texte="Les résultats apparaîtront<br>dans cette fenêtre.<br>L'IRM anatomique sera représentée selon 3 plans de coupes, en nuances de gris.";
tuto[n].xcoin=0.65;
tuto[n].large=0.6;
tuto[n].ycoin=0.05;
tuto[n].haut=0.3;
tuto[n].xpointe=1.16;
tuto[n].ypointe=0.55;
tuto[n].ypointe1;
tuto[n].xpointe1=1;
tuto[n].lpointe=0.02;
tuto[n].posFleche="bas";
n++;

tuto[n]=new Object ();
tuto[n].nIm=5;
tuto[n].nImDiapo=12;
tuto[n].texte="L'IRM fonctionnelle apparaîtra en superposition, sous la forme de taches colorées.<br>Une échelle de couleur vous permettra d'interpréter ces taches.";
tuto[n].xcoin=0.65;
tuto[n].large=0.6;
tuto[n].ycoin=0.05;
tuto[n].haut=0.35;
tuto[n].xpointe=1.16;
tuto[n].ypointe=0.55;
tuto[n].ypointe1;
tuto[n].xpointe1=1;
tuto[n].lpointe=0.02;
tuto[n].posFleche="bas";
n++;

tuto[n]=new Object ();
tuto[n].nIm=5;
tuto[n].nImDiapo=13;
tuto[n].texte="Vous pourrez vous déplacer dans les plans de coupe en utilisant les ascenseurs situés à gauche de chaque coupe, ou en cliquant directement sur les coupes.";
tuto[n].xcoin=0.6;
tuto[n].large=0.7;
tuto[n].ycoin=0.05;
tuto[n].haut=0.3;
tuto[n].xpointe=1.16;
tuto[n].ypointe=0.55;
tuto[n].ypointe1;
tuto[n].xpointe1=1;
tuto[n].lpointe=0.02;
tuto[n].posFleche="bas";
n++;

tuto[n]=new Object ();
tuto[n].nIm=5;
tuto[n].nImDiapo=14;
tuto[n].texte="Vous pourrez également mettre en surbrillance certaines structures anatomiques ...<br>... pratique pour s'y retrouver !";
tuto[n].xcoin=0.85;
tuto[n].large=0.65;
tuto[n].ycoin=0.05;
tuto[n].haut=0.25;
tuto[n].xpointe=1.16;
tuto[n].ypointe=0.55;
tuto[n].ypointe1;
tuto[n].xpointe1=1;
tuto[n].lpointe=0.02;
tuto[n].posFleche="bas";
n++;

tuto[n]=new Object ();
tuto[n].nIm=5;
tuto[n].nImDiapo=16;
tuto[n].zapCol=true;
tuto[n].texte="Enfin, il est possible de régler le seuil au delà duquel une zone active est affichée.<br>Plus le seuil est bas, plus les zones affichées sont étendues.";
tuto[n].xcoin=0.6;
tuto[n].large=0.6;
tuto[n].ycoin=0;
tuto[n].haut=0.3;
tuto[n].xpointe=1.16;
tuto[n].ypointe=0.55;
tuto[n].ypointe1;
tuto[n].xpointe1=1;
tuto[n].lpointe=0.02;
tuto[n].posFleche="bas";
n++;

tuto[n]=new Object ();
tuto[n].nIm=8;
tuto[n].texte="Les explications sont terminées.<br>Si vous avez compris, vous pouvez cliquer sur le bouton en bas de l'écran. ";
tuto[n].xcoin=0.68;
tuto[n].large=0.6;
tuto[n].ycoin=0.1;
tuto[n].haut=0.25;
tuto[n].xpointe=0.62;
tuto[n].ypointe=0.39;
tuto[n].ypointe1;
tuto[n].xpointe1;
tuto[n].lpointe;
tuto[n].posFleche="coingauche";
n++;

//
// TURBOMEDIA PROTOCOLE
//

var etape=new Array ();
n=0;
etape[n]=new Object ();
etape[n].nIm=0;
etape[n].texte="Bonjour,<br>et encore merci d'avoir accepté de participer à cette expérience.";
etape[n].xcoin=0.68;
etape[n].large=0.46;
etape[n].ycoin=0.1;
etape[n].haut=0.25;
etape[n].xpointe=0.62;
etape[n].ypointe=0.39;
etape[n].ypointe1;
etape[n].xpointe1;
etape[n].lpointe;
etape[n].posFleche="coingauche";
n++;

etape[n]=new Object ();
etape[n].nIm=8;
etape[n].nImDiapo=1;
etape[n].texte="L'objectif est de déterminer quelles zones de votre cerveau sont davantage actives {texteCourt1}.";
etape[n].xcoin=0.68;
etape[n].large=0.65;
etape[n].ycoin=0.05;
etape[n].haut=0.3;
etape[n].xpointe=0.62;
etape[n].ypointe=0.39;
etape[n].ypointe1;
etape[n].xpointe1;
etape[n].lpointe;
etape[n].posFleche="coingauche";
n++;

etape[n]=new Object ();
//etape[n] = (JSON.parse(JSON.stringify(etape[n-1]))); // on clone l'étape précédente
etape[n].nIm=6;
etape[n].texte="Pour cela nous allons utiliser une technique appelée IRM. Rassurez-vous, cette technique est absolument sans danger pour vous !";
etape[n].xcoin=0.68;
etape[n].large=0.6;
etape[n].ycoin=0.05;
etape[n].haut=0.3;
etape[n].xpointe=0.62;
etape[n].ypointe=0.39;
etape[n].ypointe1;
etape[n].xpointe1;
etape[n].lpointe;
etape[n].posFleche="coingauche";
n++;

etape[n]=new Object ();
etape[n].nIm=2;
etape[n].texte="Nous allons faire passer votre tête à l'intérieur d'un appareil qui va soumettre votre cerveau à un fort champ magnétique et à des ondes radio.";
etape[n].xcoin=0.94;
etape[n].large=0.6;
etape[n].ycoin=0.05;
etape[n].haut=0.32;
etape[n].xpointe;
etape[n].ypointe;
etape[n].ypointe1;
etape[n].xpointe1;
etape[n].lpointe;
etape[n].posFleche="";
n++;

etape[n]=new Object ();
etape[n] = (JSON.parse(JSON.stringify(etape[n-1]))); // on clone l'étape précédente
etape[n].texte="Certains atomes de votre cerveau vont alors s'exciter et émettre à leur tour un rayonnement, que l'on pourra enregistrer.";
n++;

etape[n]=new Object ();
etape[n].nIm=3;
etape[n].texte="Cela nous permettra de visualiser l'anatomie de votre cerveau, tranche par tranche (c'est ce qu'on appelle une IRM anatomique) ...";
etape[n].xcoin=0.15;
etape[n].large=0.6;
etape[n].ycoin=0.5;
etape[n].haut=0.31;
etape[n].xpointe;
etape[n].ypointe;
etape[n].ypointe1;
etape[n].xpointe1;
etape[n].lpointe;
etape[n].posFleche="";
n++;

etape[n]=new Object ();
etape[n].nIm=4;
etape[n].texte="... mais aussi sa consommation de dioxygène et donc son activité (c'est ce qu'on appelle une IRM fonctionnelle) !";
etape[n].xcoin=0.15;
etape[n].large=0.6;
etape[n].ycoin=0.5;
etape[n].haut=0.29;
etape[n].xpointe;
etape[n].ypointe;
etape[n].ypointe1;
etape[n].xpointe1;
etape[n].lpointe;
etape[n].posFleche="";
n++;

etape[n]=new Object ();
etape[n].nIm=8;
etape[n].nImDiapo=1;
etape[n].texte="Pour savoir quelles zones sont davantage activées {texteCourt1}, on va vous faire passer deux séries d'IRM fonctionnelles.";
etape[n].texteCol="Pour savoir quelles zones sont davantage activées {texteCourt1}, on va vous faire passer une série d'IRM fonctionnelles.";
etape[n].xcoin=0.68;
etape[n].large=0.75;
etape[n].ycoin=0.05;
etape[n].haut=0.3;
etape[n].xpointe=0.62;
etape[n].ypointe=0.39;
etape[n].ypointe1;
etape[n].xpointe1;
etape[n].lpointe;
etape[n].posFleche="coingauche";
n++;

etape[n]=new Object ();
etape[n].nIm=2;
etape[n].texte="Au cours de la première série d'IRM fonctionnelles, {desc1}.";
etape[n].texteCol="Au cours de cette série d'IRM fonctionnelles, {desc1}.";
etape[n].xcoin=0.94;
etape[n].large=0.6;
etape[n].ycoin=0.05;
etape[n].haut=0.32;
etape[n].xpointe;
etape[n].ypointe;
etape[n].ypointe1;
etape[n].xpointe1;
etape[n].lpointe;
etape[n].posFleche="";
n++;

etape[n]=new Object ();
etape[n].nIm=2;
etape[n].texte="Au cours de la deuxième série, qui servira de témoin, {desc2}.";
etape[n].zapCol=true;
etape[n].xcoin=0.94;
etape[n].large=0.6;
etape[n].ycoin=0.05;
etape[n].haut=0.32;
etape[n].xpointe;
etape[n].ypointe;
etape[n].ypointe1;
etape[n].xpointe1;
etape[n].lpointe;
etape[n].posFleche="";
n++;

etape[n]=new Object ();
etape[n].nIm=5;
etape[n].nImDiapo=9;
etape[n].texte="On effectuera alors une comparaison statistique des deux séries d'enregistrements afin de déterminer quelles parties du cerveau s'activent davantage {texteCourt1}.";
etape[n].zapCol=true;
etape[n].xcoin=0.4;
etape[n].large=0.8;
etape[n].ycoin=0.03;
etape[n].haut=0.35;
etape[n].xpointe=1.16;
etape[n].ypointe=0.55;
etape[n].ypointe1;
etape[n].xpointe1=1;
etape[n].lpointe=0.02;
etape[n].posFleche="bas";
n++;


etape[n]=new Object ();
etape[n].nIm=4;
etape[n].texte="Les zones les plus actives {texteCourt1} seront alors mises en évidence grâce à un code de couleurs.";
etape[n].xcoin=0.15;
etape[n].large=0.6;
etape[n].ycoin=0.5;
etape[n].haut=0.34;
etape[n].xpointe;
etape[n].ypointe;
etape[n].ypointe1;
etape[n].xpointe1;
etape[n].lpointe;
etape[n].posFleche="";
n++;


etape[n]=new Object ();
etape[n].nIm=7;
etape[n].texte="Nous allons pouvoir commencer.<br>A tout à l'heure pour les résultats !";
etape[n].xcoin=0.6;
etape[n].large=0.65;
etape[n].ycoin=0.13;
etape[n].haut=0.16;
etape[n].xpointe=1.1;
etape[n].ypointe=0.43;
etape[n].ypointe1;
etape[n].xpointe1=1;
etape[n].lpointe=0.02;
etape[n].posFleche="bas";
n++;

function expliqueProtocole () {
	if (dejaExplique) {document.getElementById("boutoncompris").style.display="block";} else {document.getElementById("boutoncompris").style.display="none";}
	turboEnCours=true;
	divSituations.style.display="none";
	divTurbo.style.display="block";
	modeTurbo="proto";
	nEtapeBD=0;
	refreshTurbo();
}

function expliqueTuto () {
	turboEnCours=true;
	document.getElementById("boutoncompris").style.display="none";
	divTurbo.style.display="block";
	modeTurbo="tuto";
	nEtapeBD=0;
	refreshTurbo();
}


function fermeProtocole () {
	turboEnCours=false;
	dejaExplique=true;
	divSituations.style.display="block";
	divTurbo.style.display="none";
}

function dessineImageTurbo (img,imgDiapo) {
	imgDiapo=imgDiapo||false;
	var lCadre2=lCadre*0.88;
	var hCadre2=hCadre*0.88;
	var xCadre2=lCadre*0.06;
	var yCadre2=hCadre*0.02;
	ctxTurbo.clearRect(0,0,lCadre,hCadre);
	if (imgDiapo) {ctxTurbo.drawImage(imgDiapo,0,0,imgDiapo.width,imgDiapo.height,xCadre2,yCadre2,lCadre2,hCadre2);}
	ctxTurbo.drawImage(img,0,0,img.width,img.height,xCadre2,yCadre2,lCadre2,hCadre2);
}

function imageSuivante () {
	if (!turboEnCours) {return false;}
	nEtapeBD++;
	var et;
	if (modeTurbo=="proto") {nbEtapes=nbEtapesProto;et=etape;}
	if (modeTurbo=="tuto") {nbEtapes=nbEtapesTuto;et=tuto;}
	
	if (nEtapeBD>(nbEtapes-1)) {
		nEtapeBD=nbEtapes-1;
	}
	var zapCol=et[nEtapeBD].zapCol||false;
	if ((modeCollege==true)&&(zapCol==true)) {imageSuivante();} else {
		refreshTurbo();
	}
}

function imagePrecedente () {
	if (!turboEnCours) {return false;}
	if (nEtapeBD<1) {return false;}
	nEtapeBD--;
	var et;
	if (modeTurbo=="proto") {nbEtapes=nbEtapesProto;et=etape;}
	if (modeTurbo=="tuto") {nbEtapes=nbEtapesTuto;et=tuto;}
	if (nEtapeBD<0) {
		nEtapeBD=0;
	}
	var zapCol=et[nEtapeBD].zapCol||false;
	if ((modeCollege==true)&&(zapCol==true)) {imagePrecedente();} else {
		refreshTurbo();
	}
}

function refreshTurbo () {
	var et;
	if (modeTurbo=="proto") {nbEtapes=nbEtapesProto;et=etape;}
	if (modeTurbo=="tuto") {nbEtapes=nbEtapesTuto;et=tuto;}
	
	var flechePrec=document.getElementById("flecheprec");
	var flecheSuiv=document.getElementById("flechesuiv");
	
	if (nEtapeBD<=0) {flechePrec.style.display="none";} else {flechePrec.style.display="block";}
	if (nEtapeBD>=(nbEtapes-1)) {
		flecheSuiv.style.display="none";
		document.getElementById("boutoncompris").style.display="block"
	} else {flecheSuiv.style.display="block";}
	
	if (turboEnCours==false) {return false;}
	var nBulleBD=et[nEtapeBD].nIm;
	var nDiapo=et[nEtapeBD].nImDiapo||false;
	if (nDiapo) {dessineImageTurbo(imageBD[nBulleBD],imageBD[nDiapo]);} else {dessineImageTurbo(imageBD[nBulleBD]);}
	dessineBulle(ctxTurbo,divTexteBulle,et[nEtapeBD]);
}

function dessineBulle (ctx,div,et) {
	var xcoin=et.xcoin;
	var large=et.large;
	var ycoin=et.ycoin;
	var haut=et.haut;
	var xpointe=et.xpointe;
	var xpointe1=et.xpointe1;
	var ypointe=et.ypointe;
	var ypointe1=et.ypointe1;
	var lpointe=et.lpointe;

	var posFleche=et.posFleche;
	var texte=et.texte;
	var texteCol=et.texteCol;
		
	var r=0.05;
	
	var e=hCadre;
	
	ctx.fillStyle="white";
	ctx.strokeStyle="rgb(100,100,100)";
	
	if (posFleche=="bas") {
		ctx.beginPath();
		var x1=xpointe;
		var y1=ypointe;
		var x2=xpointe1-lpointe;
		var y2=ycoin+haut;
		var xc=xpointe1-lpointe/2;
		var yc=ycoin+haut;	
		ctx.moveTo (x1*e,y1*e);
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // flèche coté gauche
		var x1=xcoin+r;
		var y1=ycoin+haut;
		var x2=xcoin;
		var y2=y1-r;
		var xc=xcoin;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // coin inf gauche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin inf gauche
		var x1=xcoin;
		var y1=ycoin+r;
		var x2=xcoin+r;
		var y2=ycoin;
		var xc=xcoin;
		var yc=ycoin;
		ctx.lineTo (x1*e,y1*e); // coin sup gauche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin sup gauche

		var x1=xcoin+large-r;
		var y1=ycoin;
		var x2=xcoin+large;
		var y2=ycoin+r;
		var xc=xcoin+large;
		var yc=ycoin;
		ctx.lineTo (x1*e,y1*e); // coin sup droit
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin sup droit	

		var x1=xcoin+large;
		var y1=ycoin+haut-r;
		var x2=xcoin+large-r;
		var y2=ycoin+haut;
		var xc=xcoin+large;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // coin inf droit
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin inf droit		
		
		var x1=xpointe1+lpointe;
		var y1=ycoin+haut;
		var x2=xpointe;
		var y2=ypointe;
		var xc=xpointe1+lpointe/2;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // coin flèche droite
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin flèche droite
		

		//ctx.lineTo (xpointe*e,ypointe*e);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	
	}

	if (posFleche=="gauche") {
		ctx.beginPath();
		var x1=xpointe;
		var y1=ypointe;
		var x2=xcoin;
		var y2=ypointe1-lpointe;
		var xc=xcoin;
		var yc=ypointe1-lpointe/2;	
		ctx.moveTo (x1*e,y1*e);
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // flèche
		
		var x1=xcoin;
		var y1=ycoin+r;
		var x2=xcoin+r;
		var y2=ycoin;
		var xc=xcoin;
		var yc=ycoin;
		ctx.lineTo (x1*e,y1*e); // coin sup gauche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin sup gauche
		
		var x1=xcoin+large-r;
		var y1=ycoin;
		var x2=xcoin+large;
		var y2=ycoin+r;
		var xc=xcoin+large;
		var yc=ycoin;
		ctx.lineTo (x1*e,y1*e); // coin sup droit
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin sup droit	

		
		var x1=xcoin+large;
		var y1=ycoin+haut-r;
		var x2=xcoin+large-r;
		var y2=ycoin+haut;
		var xc=xcoin+large;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // coin inf droit
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin inf droit		
		
		
		var x1=xcoin+r;
		var y1=ycoin+haut;
		var x2=xcoin;
		var y2=y1-r;
		var xc=xcoin;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // coin inf gauche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin inf gauche
		
		var x1=xcoin;
		var y1=ypointe1+lpointe;
		var x2=xpointe;
		var y2=ypointe;
		var xc=xcoin;
		var yc=ypointe1+lpointe/2;
		ctx.lineTo (x1*e,y1*e); // flèche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // flèche
		

		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	
	}	
	
	if (posFleche=="droite") {
		ctx.beginPath();
		var x1=xpointe;
		var y1=ypointe;
		var x2=xcoin+large;
		var y2=ypointe1+lpointe;
		var xc=xcoin+large;
		var yc=ypointe1+lpointe/2;	
		ctx.moveTo (x1*e,y1*e);
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // flèche
		
				
		var x1=xcoin+large;
		var y1=ycoin+haut-r;
		var x2=xcoin+large-r;
		var y2=ycoin+haut;
		var xc=xcoin+large;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // coin inf droit
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin inf droit		
		
		var x1=xcoin+r;
		var y1=ycoin+haut;
		var x2=xcoin;
		var y2=y1-r;
		var xc=xcoin;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // coin inf gauche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin inf gauche		
		
		var x1=xcoin;
		var y1=ycoin+r;
		var x2=xcoin+r;
		var y2=ycoin;
		var xc=xcoin;
		var yc=ycoin;
		ctx.lineTo (x1*e,y1*e); // coin sup gauche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin sup gauche
		
		var x1=xcoin+large-r;
		var y1=ycoin;
		var x2=xcoin+large;
		var y2=ycoin+r;
		var xc=xcoin+large;
		var yc=ycoin;
		ctx.lineTo (x1*e,y1*e); // coin sup droit
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin sup droit	

		
		var x1=xcoin+large;
		var y1=ypointe1-lpointe;
		var x2=xpointe;
		var y2=ypointe;
		var xc=xcoin+large;
		var yc=ypointe1-lpointe/2;
		ctx.lineTo (x1*e,y1*e); // flèche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // flèche
		

		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	
	}	
	
	if (posFleche=="coingauche") {
		ctx.beginPath();
		var x1=xpointe;
		var y1=ypointe;
		var x2=xcoin;
		var y2=(ycoin+haut)-r;
		var xc=xcoin;
		var yc=(ycoin+haut)-r/2;	
		ctx.moveTo (x1*e,y1*e);
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // flèche
		
		var x1=xcoin;
		var y1=ycoin+r;
		var x2=xcoin+r;
		var y2=ycoin;
		var xc=xcoin;
		var yc=ycoin;
		ctx.lineTo (x1*e,y1*e); // coin sup gauche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin sup gauche
		
		var x1=xcoin+large-r;
		var y1=ycoin;
		var x2=xcoin+large;
		var y2=ycoin+r;
		var xc=xcoin+large;
		var yc=ycoin;
		ctx.lineTo (x1*e,y1*e); // coin sup droit
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin sup droit	

		
		var x1=xcoin+large;
		var y1=ycoin+haut-r;
		var x2=xcoin+large-r;
		var y2=ycoin+haut;
		var xc=xcoin+large;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // coin inf droit
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin inf droit		
		
		
		var x1=xcoin+r;
		var y1=ycoin+haut;
		var x2=xpointe;
		var y2=ypointe;
		var xc=xcoin+r/2;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // flèche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // flèche
		

		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	
	}	

	
	if (posFleche=="") {
		ctx.beginPath();
		var x1=xcoin;
		var y1=ycoin+r;
		var x2=xcoin+r;
		var y2=ycoin;
		var xc=xcoin;
		var yc=ycoin;
		ctx.moveTo (x1*e,y1*e); // coin sup gauche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin sup gauche
		
		var x1=xcoin+large-r;
		var y1=ycoin;
		var x2=xcoin+large;
		var y2=ycoin+r;
		var xc=xcoin+large;
		var yc=ycoin;
		ctx.lineTo (x1*e,y1*e); // coin sup droit
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin sup droit	

		
		var x1=xcoin+large;
		var y1=ycoin+haut-r;
		var x2=xcoin+large-r;
		var y2=ycoin+haut;
		var xc=xcoin+large;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // coin inf droit
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin inf droit		
		
		
		var x1=xcoin+r;
		var y1=ycoin+haut;
		var x2=xcoin;
		var y2=y1-r;
		var xc=xcoin;
		var yc=ycoin+haut;
		ctx.lineTo (x1*e,y1*e); // coin inf gauche
		ctx.quadraticCurveTo (xc*e,yc*e,x2*e,y2*e);  // coin inf gauche
		

		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	
	}	
	
	//texte collège ?
	if ((typeof texteCol !== 'undefined')&&(modeCollege==true)) {texte=texteCol;}
	
	// remplacement du texte
	var texteCourt1=tSituation[proto].texteCourt1;
	var desc1=tSituation[proto].desc;
	var desc2=tSituation[temoin].desc;
	texte = texte.replace(/{texteCourt1}/i, texteCourt1);
	texte = texte.replace(/{desc1}/i, desc1);
	texte = texte.replace(/{desc2}/i, desc2);
	
	// écriture du texte et positionnement de la bulle
	var margex=0.05;
	var margey=0.006;
	div.style.left=Math.round((xcoin+margex)*e)+"px";
	div.style.width=Math.round((large-margex*2)*e)+"px";
	div.style.top=Math.round((ycoin+margey)*e)+"px";
	div.innerHTML="<p>"+texte+"</p>";
}



var idQuestion=0;

function refreshQuestion() {
	if (questionEnCours) {
		afficheQuestion();
	}
}

function afficheQuestion () {
	questionEnCours=true;
	if (idQuestion==0) {
		var texteQ="Bienvenue dans l'application &laquo;IRM virtuelle&raquo;.<br>Souhaitez-vous quelques explications concernant son utilisation ?";
		var texte1="Oui";
		var texte2="Non";
		var texte3="";
	}
	
	if (idQuestion==1) {
		var texteQ="Souhaitez-vous des explications détaillées concernant le protocole que vous avez sélectionné ?";
		var texte1="Oui";
		var texte2="Non";
		var texte3="Ne plus demander";
	}
	
	divbouton1.innerHTML=texte1;
	divbouton2.innerHTML=texte2;
	divbouton3.innerHTML=texte3;
	if (texte3=="") {
		divbouton3.style.display="none";
	} else {
		divbouton3.style.display="block";
	}
	divSituations.style.display="none";
	divQuestion.style.display="block";
	
	var img=imageBD[8];
	var lCadre2=lCadre*0.88;
	var hCadre2=hCadre*0.88;
	var xCadre2=lCadre*0.06;
	var yCadre2=hCadre*0.02;
	ctxQuestion.drawImage(img,0,0,img.width,img.height,xCadre2,yCadre2,lCadre2,hCadre2);
	
	var et={};
	et.xcoin=0.65;
	et.large=0.6;
	et.ycoin=0.08;
	et.haut=0.3;
	et.xpointe=0.6;
	et.ypointe=0.4;
	et.texte=texteQ;
	et.texteCol=texteQ;
	et.posFleche="coingauche";
	dessineBulle(ctxQuestion,divtextebullequestion,et);
}	



function cacheQuestion () {
	questionEnCours=false;
	divQuestion.style.display="none";
}

function reponds1() {
	if (idQuestion==0) {
		cacheQuestion();
		expliqueTuto();
		return false;
	}
	if (idQuestion==1) {
		cacheQuestion();
		expliqueProtocole();
		return false;
	}
}

function reponds2() {
	if (idQuestion==0) {
		cacheQuestion();
		divSituations.style.display="block";
		return false;
	}
	if (idQuestion==1) {
		cacheQuestion();
		demarreIRM();
		return false;
	}
}

function reponds3() {
	if (idQuestion==1) {
		nePlusProposer=true;
		cacheQuestion();
		demarreIRM();
		return false;
	}
}

function proposeIRM() {
	if ((nePlusProposer)||(dejaExplique)) {demarreIRM();}
	else {
		idQuestion=1;
		afficheQuestion();
	}
}