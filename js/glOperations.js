var echelle=1.86;
var renderer;
function initRenderer () {
	// renderer
	renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setClearColor( 0xffffff );
	renderer.setSize(lGL, hGL);

	divgl.appendChild(renderer.domElement);

	 // on initialise la scène
    scene = new THREE.Scene();
	
	var ratio=hGL/lGL;
	var taille=2000;
	
    // on initialise la camera que l’on place ensuite sur la scène
	camera = new THREE.OrthographicCamera( taille / - 2, taille / 2, taille / 2*ratio, taille / - 2*ratio, 1, 200000 );
    scene.add(camera);

	camera.position.z = 1000;
	camera.position.y = 400;
	camera.position.x = 1200;

	camera.up = new THREE.Vector3(0,1,0);
	camera.lookAt(new THREE.Vector3(0,0,0));
	
}

function ajoutePlans () {
	var geometry = new THREE.PlaneGeometry( 1400, 1400);
	var material = new THREE.MeshBasicMaterial( {color: 0xAA7777, side: THREE.DoubleSide,transparent:true,opacity:0.7} );
	planeX = new THREE.Mesh( geometry, material );
	var material = new THREE.MeshBasicMaterial( {color: 0x77AA77, side: THREE.DoubleSide,transparent:true,opacity:0.7} );
	planeY = new THREE.Mesh( geometry, material );
	var material = new THREE.MeshBasicMaterial( {color: 0x7777AA, side: THREE.DoubleSide,transparent:true,opacity:0.7} );
	planeZ = new THREE.Mesh( geometry, material );
	scene.add( planeX );
	scene.add( planeY );
	scene.add( planeZ );
	planeY.rotation.y=Math.PI/2;
	planeZ.rotation.x=Math.PI/2;
}

function creeEclairage () {
	// on rajoute à la scène une lumière d'ambiance 
	ambientLight = new THREE.AmbientLight( 0x444444 ); 
	scene.add( ambientLight );
		
	// on rajoute une lumière directionnelle
	directionalLight = new THREE.DirectionalLight( 0x444444, 2 );
	directionalLight.position.set (1,1,1);
	
	scene.add( directionalLight );
}


