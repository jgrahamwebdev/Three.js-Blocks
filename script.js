
const scene = new THREE.Scene();

//Color Background
//scene.background = new THREE.Color( 0x00ff00 );

//Image Background
const loader = new THREE.TextureLoader();
loader.load('bg.jpg', function (bgImg){
  scene.background = bgImg;
});

//Lights
const ambientLights = new THREE.AmbientLight(0x404040, 3.5);
scene.add(ambientLights);

const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
dirLight.position.set(0, 1, 0);
scene.add(dirLight);

//Camera Setup
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 300;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, //left
  cameraWidth / 2, //right
  cameraHeight / 2, //top
  cameraHeight / -2, //bottom
  0, //near plane
  1000 //far plane
);

camera.position.set(120, 50, 200);
//camera.up.set(0, 0, 1);
camera.lookAt(0, 10, 0);

//Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

const rotSpd = 0.1;
const spd = 0.1;
const input = {left:0, right:0, up: 0, down: 0};

//Orbit Controls
const controls = new THREE.OrbitControls( camera, renderer.domElement );

//Grid
//const grid = new THREE.GridHelper(50, 10);
//scene.add(grid);




//CUBES
function createCubeOne() {
  const geometry = new THREE.BoxBufferGeometry(20, 20, 20);
 
    // create a texture loader.
    const textureLoader = new THREE.TextureLoader();

    // load a texture
    const texture = textureLoader.load(
      'minecraft.png',
    );
  
    // create a "standard" material using the texture we just loaded as a color map
    const material = new THREE.MeshStandardMaterial({
      map: texture,
    });

    const box = new THREE.Mesh( geometry, material );
    
  return box;
}
function minecraftBlock () {
let materialArray = [];

let texture_ft = new THREE.TextureLoader().load( 'side.jpg');
let texture_bk = new THREE.TextureLoader().load( 'side.jpg');
let texture_up = new THREE.TextureLoader().load( 'top.jpg');
let texture_dn = new THREE.TextureLoader().load( 'bottom.jpg');
let texture_rt = new THREE.TextureLoader().load( 'side.jpg');
let texture_lf = new THREE.TextureLoader().load( 'side.jpg');
  
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
for (let i = 0; i < 6; i++)
  materialArray[i].side = THREE.FrontSide;
   
let blockGeo = new THREE.BoxBufferGeometry(20, 20, 20);
let block = new THREE.Mesh( blockGeo, materialArray );

return block;
}

//CUBE BUILD
function cubeBuild () {
  const cube = new THREE.Group();

  const cubeOne = minecraftBlock();
  cubeOne.position.y = -50;
  cubeOne.position.x = 0;
  cubeOne.position.z = 0;
  cube.add(cubeOne);

  const cubeTwo = minecraftBlock();
  cubeTwo.position.y = -50;
  cubeTwo.position.x = -20;
  cubeTwo.position.z = 20;
  cube.add(cubeTwo);

  const cubeThree = minecraftBlock();
  cubeThree.position.y = -50;
  cubeThree.position.x = 20;
  cubeThree.position.z = 20;
  cube.add(cubeThree);

  const cubeFour = minecraftBlock();
  cubeFour.position.y = -50;
  cubeFour.position.x = 20;
  cubeFour.position.z = 0;
  cube.add(cubeFour);

  const cubeFive = minecraftBlock();
  cubeFive.position.y = -50;
  cubeFive.position.x = -20;
  cubeFive.position.z = 0;
  cube.add(cubeFive);

  const cubeSix = minecraftBlock();
  cubeSix.position.y = -30;
  cubeSix.position.x = -20;
  cubeSix.position.z = 0;
  cube.add(cubeSix);

  const cubeSeven = minecraftBlock();
  cubeSeven.position.y = -30;
  cubeSeven.position.x = 20;
  cubeSeven.position.z = 0;
  cube.add(cubeSeven);

  const cubeEight = minecraftBlock();
  cubeEight.position.y = -10;
  cubeEight.position.x = -20;
  cubeEight.position.z = -20;
  cube.add(cubeEight);

  const cubeNine = minecraftBlock();
  cubeNine.position.y = -30;
  cubeNine.position.x = 0;
  cubeNine.position.z = -20;
  cube.add(cubeNine);

  const cubeTen = minecraftBlock();
  cubeTen.position.y = -10;
  cubeTen.position.x = 0;
  cubeTen.position.z = -40;
  cube.add(cubeTen);

  const cubeEleven = minecraftBlock();
  cubeEleven.position.y = 10;
  cubeEleven.position.x = -20;
  cubeEleven.position.z = -40;
  cube.add(cubeEleven);

  return cube;
}

const cube = cubeBuild();
scene.add(cube);

renderer.render(scene, camera);


//CHARACTER
function createHead () {
  let materialArray = [];
  
  let texture_lf = new THREE.TextureLoader().load( './character-head/left.jpg');
  let texture_rt = new THREE.TextureLoader().load( './character-head/right.jpg');
  let texture_up = new THREE.TextureLoader().load( './character-head/top.jpg');
  let texture_dn = new THREE.TextureLoader().load( './character-head/bottom.jpg');
  let texture_ft = new THREE.TextureLoader().load( './character-head/front.jpg');
  let texture_bk = new THREE.TextureLoader().load( './character-head/back.jpg');
   
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
     
  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.FrontSide;
     
  let blockGeo = new THREE.BoxBufferGeometry(11, 11, 11);
  let block = new THREE.Mesh( blockGeo, materialArray );
  
  return block;
}
function createBody () {
  let materialArray = [];
  
  let texture_lf = new THREE.TextureLoader().load( './character-body/left.png');
  let texture_rt = new THREE.TextureLoader().load( './character-body/right.png');
  let texture_up = new THREE.TextureLoader().load( './character-body/top.png');
  let texture_dn = new THREE.TextureLoader().load( './character-body/bottom.png');
  let texture_ft = new THREE.TextureLoader().load( './character-body/front.png');
  let texture_bk = new THREE.TextureLoader().load( './character-body/back.png');
   
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
     
  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.FrontSide;
     
  let blockGeo = new THREE.BoxBufferGeometry(11, 18, 5.5);
  let block = new THREE.Mesh( blockGeo, materialArray );
  
  return block;
}
function createArm () {
  let materialArray = [];
  
  let texture_ft = new THREE.TextureLoader().load( './character-arm/front.png');
  let texture_bk = new THREE.TextureLoader().load( './character-arm/back.png');
  let texture_up = new THREE.TextureLoader().load( './character-arm/top.png');
  let texture_dn = new THREE.TextureLoader().load( './character-arm/bottom.png');
  let texture_lf = new THREE.TextureLoader().load( './character-arm/side.png');
  let texture_rt = new THREE.TextureLoader().load( './character-arm/side.png');
   
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
     
  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.FrontSide;
     
  let blockGeo = new THREE.BoxBufferGeometry(5, 18, 5.5);
  let block = new THREE.Mesh( blockGeo, materialArray );
  
  return block;
}
function createLeg () {
  let materialArray = [];
  
  let texture_lf = new THREE.TextureLoader().load( './character-leg/left.png');
  let texture_rt = new THREE.TextureLoader().load( './character-leg/right.png');
  let texture_up = new THREE.TextureLoader().load( './character-leg/top.png');
  let texture_dn = new THREE.TextureLoader().load( './character-leg/bottom.png');
  let texture_ft = new THREE.TextureLoader().load( './character-leg/front.png');
  let texture_bk = new THREE.TextureLoader().load( './character-leg/back.png');
   
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
     
  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.FrontSide;
     
  let blockGeo = new THREE.BoxBufferGeometry(5.5, 18, 5.5);
  let block = new THREE.Mesh( blockGeo, materialArray );
  
  return block;
}

//CHARACTER BUILD
function characterBuild() {
  const character = new THREE.Group();

  const head = createHead();
  head.position.y = 22;
  head.position.x = 20;
  character.add(head);

  const body = createBody();
  body.position.y = 7.5;
  body.position.x = 20;
  character.add(body);

  const leftArm = createArm();
  leftArm.position.y = 7.5;
  leftArm.position.x = 28;
  character.add(leftArm);

  const rightArm = createArm();
  rightArm.position.y = 7.5;
  rightArm.position.x = 12;

  //WAVING
  //rightArm.position.y = 23;
  //rightArm.position.x = 9.5;
  //rightArm.position.z = 2.5;
  //rightArm.rotation.z = -20.4;
  //rightArm.rotation.y = 100 / -20;
  //rightArm.rotation.x = 100 / 20;
  character.add(rightArm);

  const leftLeg = createLeg();
  leftLeg.position.y = -10.5;
  leftLeg.position.x = 22.8;
  character.add(leftLeg);

  const rightLeg = createLeg();
  rightLeg.position.y = -10.5;
  rightLeg.position.x = 17.3;
  character.add(rightLeg);

  return character;
}

const character = characterBuild();
scene.add(character);

renderer.render(scene, camera);




//ANIMATION
const animate = function () {
  requestAnimationFrame( animate );

  //controls.update(); MUST go in the 'animate' Function for the Orbit Controls to work properly
  controls.update();
  //character.rotation.y += -0.02;
  
  renderer.render( scene, camera );
};
animate();
