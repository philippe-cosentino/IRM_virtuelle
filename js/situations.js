var modeCollege=false;

var tSituation=new Array();

var tBroca=[46,107,62,2,0.75];
var tWernicke=[32,104,140,2,0.75];
var tVisuHG=[82,104,187,2,0.75];
var tVisuHD=[111,105,187,2,0.75];
var tAudiHG=[31,102,107,2,0.75];
var tAudiHD=[155,102,107,2,0.75];
var tAudi=tAudiHG.concat(tAudiHD);
var tVisu=tVisuHG.concat(tVisuHD);
var tV3G=[64,116,185,0.5,1];
var tV3D=[123,116,182,0.5,1];
var tV3=tV3G.concat(tV3D);
var tV4G=[52,115,178,0.5,1];
var tV4D=[133,115,177,0.5,1];
var tV4=tV4G.concat(tV4D);
var tV5G=[44,107,157,0.5,1];
var tV5D=[140,107,158,0.5,1];
var tV5=tV5G.concat(tV5D);

var tGustaHD=[159,86,114,0.5,1];
var tGustaHG=[26,86,117,0.5,1];
var tGusta=tGustaHD.concat (tGustaHG);

var tEntorhinalHD=[112,133,94,0.5,1];
var tEntorhinalHG=[71,133,96,0.5,1];
var tEntorhinal=tEntorhinalHD.concat (tEntorhinalHG);

var tMoteurLevres=[32,73,105,0.75,1,  151,70,105,0.75,1];
var tMoteurLangue=[25,84,100,0.75,1,  155,85,100,0.75,1];
var tMoteurIndexHG=[45,44,107,0.75,0.75];
var tMoteurIndexHD=[134,44,107,0.75,0.75];
var tMoteurBrasHG=[65,36,115,0.75,0.75];
var tMoteurJambeHG=[84,41,117,0.75,0.75];
var tMoteurJambeHD=[98,41,117,0.75,0.75];
var tMoteurOrteilsHG=[84,57,110,0.75,0.75];
var tMoteurOrteilsHD=[94,57,110,0.75,0.75];
var tMoteurYeux=[39,57,111,0.75,0.75,   147,57,111,0.75,0.75];
var tMoteurOrteils=tMoteurOrteilsHG.concat(tMoteurOrteilsHD);
var tSensiPiedHG=[83,44,127,1,0.75];
var tSensiMainHG=[49,39,125,1,0.75];
var tSensiMainHD=[136,39,125,1,0.75];
var tSensiMainHDPara=[136,39,125,1.3,0.85];

var tSensiGenitauxHG=[80,55,122,0.5,0.75];
var tSensiGenitauxHD=[102,55,122,0.5,0.75];

var tMesencephale=[90,114,114,1];
var tAccumbensHG=[83,112,82,1];
var tAccumbensHD=[101,112,82,1];
var tAmygdaleHG=[71,122,92,0.7];
var tAmygdaleHD=[113,120,92,0.7];
var tOrbitoFrontalAntHD=[124,99,40,1];
var tOrbitoFrontalAntHG=[59,99,38,1];
var tGyrusFrontalMoyenHD=[140,65,83,2];
var tGyrusFrontalMoyenHG=[34,65,86,2];
var tPlaisirFaible=tMesencephale.concat([0.6],tOrbitoFrontalAntHG,[0.5],tOrbitoFrontalAntHD,[0.5],tGyrusFrontalMoyenHD,[0.6],tGyrusFrontalMoyenHG,[0.6],tAccumbensHG,[0.6],tAccumbensHD,[0.6],tAmygdaleHG,[0.6],tAmygdaleHD,[0.5]);
var tPlaisirFort=tMesencephale.concat([1],tOrbitoFrontalAntHD,[0.6],tOrbitoFrontalAntHG,[0.6],tGyrusFrontalMoyenHD,[0.8],tGyrusFrontalMoyenHG,[0.8],tAccumbensHG,[0.8],tAccumbensHD,[0.8],tAmygdaleHG,[0.8],tAmygdaleHD,[0.7]);
var tCorpsGenG=[72,109,114,2,1];
var tCorpsGenD=[107,109,114,2,1];

var tCorpsGenVis=chInt(tCorpsGenG,0.55).concat(chInt(tCorpsGenD,0.55));

var tFFA=[69,113,135,70,113,117,1,0.5,111,113,135,114,113,117,1,0.5]; // aire fusiforme visages
var tFFAFaible=[69,113,135,70,113,117,1,0.25,111,113,135,114,113,117,1,0.25];

var tHippocampe=[112,132,92,115,103,130,0.75,0.75,64,134,92,64,101,130,0.75,0.75];
var tHippocampeFaible=[112,132,92,115,103,130,0.75,0.5,64,134,92,64,101,130,0.75,0.5];

var tCorpsGen=tCorpsGenG.concat(tCorpsGenD);
function chInt (t,r) {
	var l=t.length/5;
	var tt = t.slice(); // pour forcer l'instanciation

	for (var i=0;i<l;i++) {
		var ii=i*5+4;
		tt[ii]=tt[ii]*r;
	}
	return tt;
}

var nbParaTotal=3;

var n=0;
tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="(IRM anatomique uniquement)";
tSituation[n].foyers=[]; 
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet est immobile, dans le silence, dans le noir";
tSituation[n].texteCourt1="lorsque vous êtes immobile, dans le silence et dans le noir";
tSituation[n].desc="vous allez vous retrouver dans l'obscurité avec un casque sur les oreilles pour vous isoler du bruit"
tSituation[n].foyers=[]; 
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].diviseur=true;
tSituation[n].nom="le sujet entend...";
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet entend un son de cloche";
tSituation[n].texteCourt1="lorsque vous entendez le son d'une cloche";
tSituation[n].desc="vous allez entendre, dans votre casque audio, le son d'une cloche";
tSituation[n].foyers=tAudi;
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet entend une liste de mots";
tSituation[n].texteCourt1="lorsque vous entendez une liste de mots";
tSituation[n].desc="vous allez entendre, dans votre casque audio, une liste de mots";
tSituation[n].foyers=tWernicke.concat(tAudi);  // Wernicke
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet entend une chanson";
tSituation[n].texteCourt1="lorsque vous entendez une chanson";
tSituation[n].desc="vous allez entendre une chanson dans votre casque audio";
tSituation[n].foyers=tWernicke.concat(tAudi); 
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet entend une musique";
tSituation[n].texteCourt1="lorsque vous entendez une musique";
tSituation[n].desc="vous allez entendre une musique dans votre casque audio";
tSituation[n].foyers=tAudi;
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].diviseur=true;
tSituation[n].nom="";
n++;




tSituation[n]=new Object;
tSituation[n].diviseur=true;
tSituation[n].nom="le sujet regarde/voit ...";
tSituation[n].modeCol=true;
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet voit un flash lumineux";
tSituation[n].texteCourt1="lorsque vous voyez un flash lumineux";
tSituation[n].desc="vous allez voir un flash lumineux";
tSituation[n].foyers=tVisu.concat(tCorpsGenVis);  
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet voit un flash lumineux rouge vif";
tSituation[n].texteCourt1="lorsque vous voyez un flash lumineux rouge vif";
tSituation[n].desc="vous allez voir un flash lumineux rouge vif";
tSituation[n].foyers=tVisu.concat(tCorpsGenVis,tV4);  
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tVisuFaibleHD=chInt(tVisuHD,0.6);
tSituation[n].nom="le sujet voit un flash lumineux (oeil gauche bandé)";
tSituation[n].texteCourt1="lorsque vous voyez un flash lumineux avec l'oeil gauche bandé";
tSituation[n].desc="vous allez voir un flash lumineux avec un bandeau sur l'oeil gauche";
tSituation[n].foyers=tVisuHG.concat(tVisuFaibleHD,chInt(tCorpsGenG,0.6),chInt(tCorpsGenD,0.4));  
n++;


tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet voit un point lumineux à gauche du champ visuel";
tSituation[n].texteCourt1="lorsque vous voyez un point lumineux à gauche de votre champ visuel";
tSituation[n].desc="vous allez voir un flash lumineux à gauche de votre champ visuel";
tSituation[n].foyers=tVisuHD.concat(chInt(tCorpsGenD,0.6));  
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet regarde une photographie en noir et blanc";
tSituation[n].modeCol=true;
tSituation[n].texteCourt1="lorsque vous regardez une photographie noir et blanc d'un objet";
tSituation[n].desc="vous allez regarder une photographie en noir et blanc d'un objet";
tSituation[n].foyers=tVisu.concat(tV3,tMoteurYeux,tCorpsGenVis);  // visuelle et motricité yeux
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet regarde une photographie colorée";
tSituation[n].modeCol=true;
tSituation[n].texteCourt1="lorsque vous regardez une photographie en couleurs d'un objet";
tSituation[n].desc="vous allez regarder une photographie en couleurs d'un objet";
tSituation[n].foyers=tVisu.concat(tV3,tMoteurYeux,tV4,tCorpsGenVis);  
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet regarde la photographie d'un visage";
tSituation[n].texteCourt1="lorsque vous regardez la photographie d'un visage inconnu";
tSituation[n].desc="vous allez regarder la photographie d'un visage inconnu";
tSituation[n].foyers=tVisu.concat(tV3,tMoteurYeux,tV4,tCorpsGenVis); 
tSituation[n].segments=tFFA;
n++;

//tSituation[n]=new Object;
//tSituation[n].nom="le sujet regarde une photographie sensuelle";
//tSituation[n].foyers=tVisu.concat(tMoteurYeux,tPlaisirFaible,chInt(tV4,0.8));  
//tSituation[n].segments=[91,63,87,91,93,47,1,0.5].concat(tFFAFaible);
//n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet regarde un film érotique";
tSituation[n].texteCourt1="lorsque vous visionnez un film érotique";
tSituation[n].desc="vous allez visionner un film érotique";
tSituation[n].foyers=tVisu.concat(tV3,tMoteurYeux,tPlaisirFaible,tV5,chInt(tV4,0.8),tCorpsGenVis);
tSituation[n].segments=[91,63,87,91,93,47,1,0.5].concat(tFFAFaible,tHippocampeFaible);
n++;


tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet lit un texte en silence";
tSituation[n].texteCourt1="lorsque vous lisez un texte en silence (dans votre tête)";
tSituation[n].desc="vous allez lire en silence un texte qui vous sera projeté";
tSituation[n].foyers=tWernicke.concat(tV3,tMoteurYeux,tVisu,tCorpsGenVis);   // Broca, Wernicke
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet regarde un film muet en couleur";
tSituation[n].texteCourt1="lorsque vous visionnez un film muet en couleur";
tSituation[n].desc="vous allez visionner un film muet en couleur";
tSituation[n].foyers=tVisu.concat(tV3,tMoteurYeux,tV4,tV5,tCorpsGenVis);  
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet regarde un film muet en noir et blanc";
tSituation[n].texteCourt1="lorsque vous visionnez un film muet en noir et blanc";
tSituation[n].desc="vous allez visionner un film muet en noir et blanc";
tSituation[n].foyers=tVisu.concat(tV3,tMoteurYeux,tV5,tCorpsGenVis); 
n++;



tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].diviseur=true;
tSituation[n].nom="";
n++;


tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].diviseur=true;
tSituation[n].nom="le sujet est touché ...";
n++;

tSituation[n]=new Object;
tSituation[n].nom="les organes génitaux sont touchés (stimulus neutre)";
tSituation[n].texteCourt1="lorsque vos organes génitaux sont touchés";
tSituation[n].desc="on va toucher, par l'intermédiaire d'un instrument, vos organes génitaux";
tSituation[n].modeCol=false;
tSituation[n].foyers=tSensiGenitauxHG.concat(tSensiGenitauxHD); 
n++;

tSituation[n]=new Object;
tSituation[n].nom="la main droite du sujet est touchée";
tSituation[n].texteCourt1="lorsque votre main droite est touchée";
tSituation[n].desc="on va toucher votre main droite";
tSituation[n].modeCol=true;
tSituation[n].foyers=tSensiMainHG; 
n++;

tSituation[n]=new Object;
tSituation[n].nom="la main gauche du sujet est touchée";
tSituation[n].texteCourt1="lorsque votre main gauche est touchée";
tSituation[n].desc="on va toucher votre main gauche";
tSituation[n].modeCol=true;
tSituation[n].foyers=tSensiMainHD; 
n++;

tSituation[n]=new Object;
tSituation[n].nom="la main gauche du sujet est touchée (sujet paraplégique)";
tSituation[n].texteCourt1="lorsque votre main gauche est touchée, sachant que vous êtes paraplégique";
tSituation[n].desc="on va toucher votre main gauche";
tSituation[n].modeCol=true;
tSituation[n].foyers=tSensiMainHDPara; 
n++;

tSituation[n]=new Object;
tSituation[n].nom="le pied droit du sujet est touché";
tSituation[n].texteCourt1="lorsque votre pied droit est touché";
tSituation[n].desc="on va toucher votre pied droit";
tSituation[n].modeCol=true;
tSituation[n].foyers=tSensiPiedHG; 
n++;

tSituation[n]=new Object;
tSituation[n].nom="le pied droit du sujet est touché (sujet paraplégique)";
tSituation[n].texteCourt1="lorsque votre pied droit est touché, sachant que vous êtes paraplégique";
tSituation[n].desc="on va toucher votre pied droit";
tSituation[n].modeCol=true;
tSituation[n].foyers=[]; 
n++;


tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].diviseur=true;
tSituation[n].nom="";
n++;


tSituation[n]=new Object;
tSituation[n].diviseur=true;
tSituation[n].nom="le sujet s'exprime ...";
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet siffle une note";
tSituation[n].texteCourt1="lorsque vous sifflez une simple note de musique";
tSituation[n].desc="vous allez siffler une note de musique";
tSituation[n].foyers=tAudi.concat(tMoteurLevres); 
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet siffle un air de musique";
tSituation[n].texteCourt1="lorsque vous sifflez un air de musique";
tSituation[n].desc="vous allez siffler un air de musique";
tSituation[n].foyers=tAudi.concat(tMoteurLevres); 
tSituation[n].segments=tHippocampeFaible;
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet chante une chanson";
tSituation[n].texteCourt1="lorsque vous chantez une chanson";
tSituation[n].desc="vous allez chanter une chanson";
tSituation[n].foyers=tBroca.concat(tAudi,tWernicke,tMoteurLevres,tMoteurLangue); 
tSituation[n].segments=tHippocampeFaible;
n++;


tSituation[n]=new Object;
tSituation[n].nom="le sujet lit un texte à voix haute";
tSituation[n].texteCourt1="lorsque vous lisez un texte à voix haute";
tSituation[n].desc="vous allez lire un texte à voix haute";
tSituation[n].foyers=tBroca.concat(tWernicke,tAudi,tMoteurLevres,tMoteurYeux,tMoteurLangue,tVisu,tV3,tCorpsGenVis);   // Broca, Wernicke
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet discute avec l'opérateur";
tSituation[n].texteCourt1="lorsque vous discutez avec une personne";
tSituation[n].desc="vous allez discuter avec l'opérateur de l'IRM";
tSituation[n].foyers=tBroca.concat(tWernicke,tAudi,tMoteurLevres,tMoteurLangue);   // Broca, Wernicke
n++;

tSituation[n]=new Object;
tSituation[n].diviseur=true;
tSituation[n].nom="";
n++;


tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].diviseur=true;
tSituation[n].nom="le sujet bouge ...";
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet bouge l'index droit";
tSituation[n].texteCourt1="lorsque vous bougez l'index droit";
tSituation[n].desc="vous allez bouger l'index droit";
tSituation[n].foyers=tMoteurIndexHG; 
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet bouge l'index gauche";
tSituation[n].texteCourt1="lorsque vous bougez l'index gauche";
tSituation[n].desc="vous allez bouger l'index gauche";
tSituation[n].foyers=tMoteurIndexHD; 
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet bouge le bras droit";
tSituation[n].texteCourt1="lorsque vous bougez le bras droit";
tSituation[n].desc="vous allez bouger le bras droit";
tSituation[n].foyers=tMoteurBrasHG; 
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet bouge la jambe droite";
tSituation[n].texteCourt1="lorsque vous bougez la jambe droite";
tSituation[n].desc="vous allez bouger la jambe droite";
tSituation[n].foyers=tMoteurJambeHG; 
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet bouge la jambe gauche";
tSituation[n].texteCourt1="lorsque vous bougez la jambe gauche";
tSituation[n].desc="vous allez bouger la jambe gauche";
tSituation[n].foyers=tMoteurJambeHD; 
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet bouge les orteils";
tSituation[n].texteCourt1="lorsque vous bougez les orteils";
tSituation[n].desc="vous allez bouger les orteils";
tSituation[n].foyers=tMoteurOrteils; 
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet bouge les yeux";
tSituation[n].texteCourt1="lorsque vous bougez les yeux";
tSituation[n].desc="vous allez bouger les yeux";
tSituation[n].foyers=tMoteurYeux; 
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].diviseur=true;
tSituation[n].nom="";
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].diviseur=true;
tSituation[n].nom="autres situations ...";
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet boit de l'eau";
tSituation[n].texteCourt1="lorsque vous buvez de l'eau";
tSituation[n].desc="vous allez boire de l'eau à la paille";
tSituation[n].modeCol=false;
tSituation[n].foyers=tMoteurLangue; 
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet boit de l'eau légèrement salée";
tSituation[n].texteCourt1="lorsque vous buvez de l'eau légèrement salée";
tSituation[n].desc="vous allez boire de l'eau légèrement salée à la paille";
tSituation[n].modeCol=true;
tSituation[n].foyers=tMoteurLangue.concat(tGusta); 
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet boit un jus de fruit (stimulus agréable)";
tSituation[n].texteCourt1="lorsque vous buvez un jus de fruit";
tSituation[n].desc="vous allez boire un délicieux jus de fruit à la paille";
tSituation[n].modeCol=false;
tSituation[n].foyers=tMoteurLangue.concat(tGusta,tEntorhinal,tPlaisirFaible); 
tSituation[n].segments=[91,63,87,91,93,47,1,0.8].concat(tHippocampeFaible);
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet reçoit une caresse sexuelle (stimulus agréable)";
tSituation[n].texteCourt1="lorsque vous recevez une caresse sexuelle";
tSituation[n].desc="votre partenaire va vous prodiguer une caresse sexuelle";
tSituation[n].modeCol=false;
tSituation[n].foyers=tSensiGenitauxHG.concat(tSensiGenitauxHD,tPlaisirFort); 
tSituation[n].segments=[91,63,87,91,93,47,1,0.8].concat(tHippocampeFaible);
n++;


tSituation[n]=new Object;
tSituation[n].nom="le pied droit du sujet est massé (stimulus agréable)";
tSituation[n].texteCourt1="lorsqu'on vous masse le pied droit";
tSituation[n].desc="votre partenaire va vous masser le pied droit";
tSituation[n].foyers=tSensiPiedHG.concat(tPlaisirFort); 
tSituation[n].segments=[91,63,87,91,93,47,1,0.8].concat(tHippocampeFaible);
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet se remémore une musique";
tSituation[n].texteCourt1="lorsque vous vous remémorez une musique";
tSituation[n].desc="vous allez vous remémorer un morceau de musique";
var tSouvenirMusique=chInt(tAudi,0.7); 
tSituation[n].foyers=tSouvenirMusique.concat(tAmygdaleHD,[0.5],tAmygdaleHG,[0.5]);  
tSituation[n].segments=tHippocampe;
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet est dans l'obscurité après avoir consommé du LSD";
tSituation[n].modeCol=true;
tSituation[n].texteCourt1="lorsque vous avez consommé du LSD, dans l'obscurité";
tSituation[n].desc="vous allez être dans l'obscurité, sous l'effet du LSD que vous avez consommé, sous contrôle médical";
tSituation[n].foyers=chInt(tVisu,0.9).concat(chInt(tV3,0.8),chInt(tV4,0.9),chInt(tV5,0.7),chInt(tAudi,0.4),tCorpsGenVis);  // visuelle
n++;

tSituation[n]=new Object;
tSituation[n].nom="le sujet regarde une photographie en noir et blanc après avoir bu de l'alcool";
tSituation[n].modeCol=true;
tSituation[n].texteCourt1="lorsque vous regardez une photographie après avoir bu de l'alcool";
tSituation[n].desc="vous allez regarder une photographie en noir et blanc après avoir bu de l'alcool";
tSituation[n].foyers=chInt(tVisu,0.7).concat(chInt(tMoteurYeux,0.9),chInt(tV3,0.8),chInt(tCorpsGenVis,0.8));  // visuelle et motricité yeux
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet voit un flash lumineux après avoir bu de l'alcool";
tSituation[n].texteCourt1="lorsque vous voyez un flash lumineux après avoir bu de l'alcool";
tSituation[n].desc="vous allez voir un flash lumineux après avoir bu de l'alcool";
tSituation[n].foyers=chInt(tVisu,0.7).concat(chInt(tCorpsGenVis,0.8));
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].nom="le sujet doit reconnaître et nommer des objets sur une photographie";
tSituation[n].texteCourt1="lorsque vous devez reconnaître et nommer des objets";
tSituation[n].desc="vous allez devoir identifier et nommer oralement des animaux sur une photographie";
tSituation[n].foyers=tVisu.concat(tBroca,tWernicke,tAudi,tMoteurLevres,tMoteurYeux,tMoteurLangue,tV3,tV4,tMoteurYeux,tCorpsGenVis);
tSituation[n].segments=tHippocampe;
n++;

tSituation[n]=new Object;
tSituation[n].nom="un sujet aveugle lit un texte en braille";
tSituation[n].texteCourt1="lorsque vous lisez, en silence, un texte en braille avec vos doigts";
tSituation[n].desc="vous allez lire un texte en braille avec vos doigts, sans parler";
tSituation[n].foyers=tWernicke.concat(tMoteurYeux,chInt(tVisu,0.8),tSensiMainHG,tSensiMainHD,tMoteurIndexHG,tMoteurIndexHD);   
n++;

tSituation[n]=new Object;
tSituation[n].modeCol=true;
tSituation[n].diviseur=true;
tSituation[n].nom="";
n++;

var proto=4;
var temoin=1;
function chargeSituation(a,b) {
	proto=a;
	temoin=b;
	resetHalos ();
	var tS=tSituation[a];
	var tSt=tSituation[b];
	if (proto==0) {
		traceTout();
	} else {
		var f=tS.foyers;
		var ft=tSt.foyers;
		var nF=f.length/5;
		var nFt=ft.length/5;
		for (var i=0;i<nF;i++) {
			var ii=i*5;
			ajouteHalo(f[ii],f[ii+1],f[ii+2],f[ii+3],f[ii+4]);
		}
		//témoin
			for (var i=0;i<nFt;i++) {
			var ii=i*5;
			retireHalo(ft[ii],ft[ii+1],ft[ii+2],ft[ii+3],ft[ii+4]);
		}
		
		if (tS.segments) {
			var f=tS.segments;
			var nF=f.length/8;
			for (var i=0;i<nF;i++) {
				var ii=i*8;
				ajouteHaloSegment(f[ii],f[ii+1],f[ii+2],f[ii+3],f[ii+4],f[ii+5],f[ii+6],f[ii+7]);
			}
		}
		
		if (tSt.segments) {
			//témoin
			var ft=tSt.segments;
			var nFt=ft.length/8;
				for (var i=0;i<nFt;i++) {
				var ii=i*8;
				retireHaloSegment(ft[ii],ft[ii+1],ft[ii+2],ft[ii+3],ft[ii+4],ft[ii+5],ft[ii+6],ft[ii+7]);
			}		
		}
		
		ajouteBruitHalos(); 
		
		traceTout();
	}
	document.getElementById("spanprotocole").innerHTML=tS.nom;
	if (modeCollege==true) { document.getElementById("spanprotocolet").style.display="none";}
	else	{document.getElementById("spanprotocolet").innerHTML="Témoin : "+tSt.nom;}
}

function formateTableau () {
	if (modeCollege==true) {
		document.getElementById ("labelTemoin").innerHTML="";
		document.getElementById ("tdTemoin").remove();
		document.getElementById ("tdTemoin2").remove();
	}
}

function remplitTableaux() {

	var ns=tSituation.length;
	nbParaTotal=0;
	textOnlyAnat="(IRM anatomique uniquement)";
	texte="";
	if (proto==0) {
		texte+="<span class='selsituation'>"+textOnlyAnat+"&#10004;</span>";
	} else {
		texte+="<a class='liensituation' href=# onclick=selIRMAnatOnly()>"+textOnlyAnat+"</a>&nbsp;";
	}
	texte+="<br>";

	var nPara=0;
	for (var i=1;i<ns;i++) {
		var tS=tSituation[i];
		var modeCol=tS.modeCol||false;
		if ((modeCollege==false)||(modeCol==true)) {
	
			if (tS.diviseur==true) {
				if (tS.nom!="") {
					nPara++;
					nbParaTotal++;
					if (nPara==nOpenPara) {disPara="block";} else {disPara="none";}
					texte+="<a class='liensituation' onclick=switchMenu("+nPara+");  href=#>"+tS.nom+"</a><div id='para"+nPara+"' style='display: "+disPara+"'><blockquote>";
				} else {
					texte+="</blockquote></div><br>";
				}
			} else {
				if (i==proto) {
					texte+="<span class='selsituation'>"+tS.nom+"&#10004;</span>";
				} else {
					texte+="<a class='liensituation' href=# onclick=selTest("+i+")>"+tS.nom+"</a>&nbsp;";
				}
				texte+="<br>";
			}
		}
	}
	document.getElementById("spandispotests").innerHTML=texte;
	
	if (modeCollege==false) {
		// témoins
		texte="";
		if (temoin==0) {
			texte+="<span class='selsituation'>"+textOnlyAnat+"&#10004;</span>";
		} else {
			texte+="<a class='liensituation' href=# onclick=selIRMAnatOnly()>"+textOnlyAnat+"</a>&nbsp;";
		}texte+="<br>";
		
		nPara=0;
		for (var i=1;i<ns;i++) {
			if ((modeCollege==false)||(i<2)) {
				var tS=tSituation[i];
				if (tS.diviseur==true) {
					if (tS.nom!="") {
						nPara++;
						if (nPara==nOpenParaB) {disPara="block";} else {disPara="none";}
						texte+="<a class='liensituation' onclick=switchMenuB("+nPara+");  href=#>"+tS.nom+"</a><div id='parab"+nPara+"' style='display: "+disPara+"'><blockquote>"
					} else {texte+="</blockquote></div><br>"}
				} else {
					if (i==temoin) {
						texte+="<span class='selsituation'>"+tS.nom+"&#10004;</span>";
					} else {
						texte+="<a class='liensituation' href=# onclick=selTemoin("+i+")>"+tS.nom+"</a>&nbsp;";
					}	
					texte+="<br>";
				}
			}
		}
		document.getElementById("spandispotemoins").innerHTML=texte;
	}
}

function selTest(n) {
	proto=n;
	if (proto>1) {dejaExplique=false;} else {dejaExplique=true;}
	if (temoin==0) {temoin=1;}
	verifieBoutonExpliquer();
	remplitTableaux();
}

function selTemoin (n) {
	temoin=n;
	if (proto>1) {dejaExplique=false;} else {dejaExplique=true;}
	if (proto==0) {proto=1;}
	verifieBoutonExpliquer();
	remplitTableaux();
}

function selIRMAnatOnly() {
	temoin=0;
	proto=0;
	verifieBoutonExpliquer();
	remplitTableaux();
}

function verifieBoutonExpliquer () {
	if (proto>1) {document.getElementById("butexpliquer").style.display="block";} else {document.getElementById("butexpliquer").style.display="none";}
}

function demarreIRM () {
	redim();
	goDivEcran();
	chargeSituation(proto,temoin);
	lasty=-1;lastx=-1;lastz=-1;
	traceTout();
	
}

var nOpenPara=0;
function switchMenu(nPara) {
	nOpenPara=nPara;
	for (var i=0;i<nbParaTotal;i++) {
		var el = document.getElementById("para"+(i+1));
		el.style.display = 'none';
	}
	var el = document.getElementById("para"+nPara);
	el.style.display = 'block';
}

var nOpenParaB=0;
function switchMenuB(nPara) {
	nOpenParaB=nPara;
	for (var i=0;i<nbParaTotal;i++) {
		var el = document.getElementById("parab"+(i+1));
		el.style.display = 'none';
	}
	var el = document.getElementById("parab"+nPara);
	el.style.display = 'block';
}