import "./style.css";
import * as THREE from "three";
//import the controls
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ACESFilmicToneMapping } from "three";

// create scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100000
);
//------------------------------------------------------------------------------
// the renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
//---- cam position -------------------------------------------------------
camera.position.setZ(100000);
camera.position.setX(0);
camera.position.setY(0);

// start the render
renderer.render(scene, camera);
// the lighters
//const pointLight = new THREE.PointLight(0xffffff, 100, 2000, 4);
//pointLight.position.set(0, 0, 1000);
const ambientLight = new THREE.AmbientLight(0xffffff);
//const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(2000, 50);
scene.add(ambientLight);
const controls = new OrbitControls(camera, renderer.domElement);
scene.add(gridHelper);

//-------------------------------
function addStar() {
  const geometry1 = new THREE.SphereGeometry(0.25, 20, 20);
  const material1 = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry1, material1);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => {
      return THREE.MathUtils.randFloatSpread(10000);
    });
  star.position.set(x, y, z);
  scene.add(star);
}
Array(4000).fill().forEach(addStar);
//-----------------------------------------------------------the bgc
const spaceTexture = new THREE.TextureLoader().load("/images/space.png");
scene.background = spaceTexture;
//---------------------------------------------------- the moon
const moon = new THREE.TextureLoader().load("/images/flat.png");
const moonMap = new THREE.TextureLoader().load("/images/moonMap.jpg");

const theMoon = new THREE.Mesh(
  new THREE.SphereGeometry(15, 32, 16),
  new THREE.MeshBasicMaterial({ map: moon, normalMap: moonMap })
);

theMoon.position.set(25, 5, 2000);
//scene.add(theMoon);
function rotateTheMoon() {
  theMoon.rotateX(0.02);
  theMoon.rotateY(0.005);
  theMoon.rotateZ(0.001);
}
// ----------------------------------------------------------sun
const sunImage = new THREE.TextureLoader().load("/images/sun-image.webp");
const sunMap = new THREE.TextureLoader().load("/images/sun-map.jpg");
const geometry = new THREE.SphereGeometry(1393, 40, 40);
const material = new THREE.MeshStandardMaterial({
  map: sunImage,
  normalMap: sunMap,
});
const sun = new THREE.Mesh(geometry, material);
sun.position.set(100, 5, 0);
scene.add(sun);
function rotateTheSun() {
  sun.rotateX(0.002);
  sun.rotateY(0.0005);
  sun.rotateZ(0.0001);
}
//-------------------------------------------------neptune

const nepMap = new THREE.TextureLoader().load("/images/neptune-texture.jpg");
const nepImage = new THREE.TextureLoader().load("/images/neptune.jpg");
const nepGeometry = new THREE.SphereGeometry(99, 40, 40);
const nepMaterial = new THREE.MeshStandardMaterial({
  map: nepImage,
  normalMap: nepMap,
});
const neptune = new THREE.Mesh(nepGeometry, nepMaterial);
neptune.position.set(250, 5, 46504);
scene.add(neptune);
function rotateNeptune() {
  neptune.rotateX(0.002);
  neptune.rotateY(0.0005);
  neptune.rotateZ(0.0001);
}

//-------------------------------------------------uranus
const uraMap = new THREE.TextureLoader().load("/images/uranus-texture.jpg");
const uraImage = new THREE.TextureLoader().load("/images/uranus.jpg");
const uraGeometry = new THREE.SphereGeometry(102, 40, 40);
const uraMaterial = new THREE.MeshStandardMaterial({
  map: uraImage,
  normalMap: uraMap,
});
const uranus = new THREE.Mesh(uraGeometry, uraMaterial);
uranus.position.set(150, 5, 29965);
scene.add(uranus);
function rotateUranus() {
  uranus.rotateX(0.002);
  uranus.rotateY(0.0005);
  uranus.rotateZ(0.0001);
}
//-------------------------------------------------------Saturn
const rings1Map = new THREE.TextureLoader().load("/images/ring-texture.jpg");
const ring1Image = new THREE.TextureLoader().load("/images/ring.jpg");
const ring1Geometry = new THREE.TorusGeometry(400, 80, 2, 100);
const ring1Material = new THREE.MeshBasicMaterial({
  map: ring1Image,
  normalMap: rings1Map,
});
const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
ring1.position.set(250, 5, 12454);
scene.add(ring1);
//----
const satMap = new THREE.TextureLoader().load("/images/saturn-texture.jpg");
const satImage = new THREE.TextureLoader().load("/images/saturn.jpg");
const satGeometry = new THREE.SphereGeometry(241, 40, 40);
const satMaterial = new THREE.MeshStandardMaterial({
  map: satImage,
  normalMap: satMap,
});
const saturn = new THREE.Mesh(satGeometry, satMaterial);
saturn.position.set(250, 5, 12454);
scene.add(saturn);
function rotateSaturnAndRing1() {
  saturn.rotateX(0.002);
  saturn.rotateY(0.0005);
  saturn.rotateZ(0.0001);
  ring1.rotateX(0.002);
  ring1.rotateY(0.0005);
  ring1.rotateZ(0.0001);
}
//-------------------------------------------------Jupiter
const jupMap = new THREE.TextureLoader().load("/images/jupiter-texture.jpg");
const jupImage = new THREE.TextureLoader().load("/images/jupiter.jpg");
const jupGeometry = new THREE.SphereGeometry(286, 40, 40);
const jupMaterial = new THREE.MeshStandardMaterial({
  map: jupImage,
  normalMap: jupMap,
});
const jupiter = new THREE.Mesh(jupGeometry, jupMaterial);
jupiter.position.set(150, 5, 8624);
scene.add(jupiter);
function rotateJupiter() {
  jupiter.rotateX(0.002);
  jupiter.rotateY(0.0005);
  jupiter.rotateZ(0.0001);
}
//-------------------------------------------------Mars
const marsMap = new THREE.TextureLoader().load("/images/mars-texture.jpg");
const marsImage = new THREE.TextureLoader().load("/images/mars.jpg");
const marsGeometry = new THREE.SphereGeometry(14, 40, 40);
const marsMaterial = new THREE.MeshStandardMaterial({
  map: marsImage,
  normalMap: marsMap,
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(60, 5, 3014);
scene.add(mars);
function rotateMars() {
  mars.rotateX(0.002);
  mars.rotateY(0.0005);
  mars.rotateZ(0.0001);
}
//-------------------------------------------------Earth
const earthMap = new THREE.TextureLoader().load("/images/earth-texture.jpg");
const earthImage = new THREE.TextureLoader().load("/images/earth.jpg");
const earthGeometry = new THREE.SphereGeometry(26, 40, 40);
const earthMaterial = new THREE.MeshStandardMaterial({
  map: earthImage,
  normalMap: earthMap,
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(60, 5, 2220);
scene.add(earth);
function rotateEarth() {
  earth.rotateX(0.002);
  earth.rotateY(0.0005);
  earth.rotateZ(0.0001);
}
//-------------------------------------------------Venus
const venusMap = new THREE.TextureLoader().load("/images/venus-texture.jpg");
const venusImage = new THREE.TextureLoader().load("/images/venus.jpg");
const venusGeometry = new THREE.SphereGeometry(24, 40, 40);
const venusMaterial = new THREE.MeshStandardMaterial({
  map: venusImage,
  normalMap: venusMap,
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.set(60, 5, 1794);
scene.add(venus);
function rotateVenus() {
  venus.rotateX(0.002);
  venus.rotateY(0.0005);
  venus.rotateZ(0.0001);
}
//-------------------------------------------------Mercury
const mercuryMap = new THREE.TextureLoader().load(
  "/images/mercury-texture.webp"
);
const mercuryImage = new THREE.TextureLoader().load("/images/mercury.jpg");
const mercuryGeometry = new THREE.SphereGeometry(10, 40, 40);
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: mercuryImage,
  normalMap: mercuryMap,
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.set(60, 5, 1290);
scene.add(mercury);
function rotateMercury() {
  mercury.rotateX(0.002);
  mercury.rotateY(0.0005);
  mercury.rotateZ(0.0001);
}
//---------------------------------------------------------------universe
const univMap = new THREE.TextureLoader().load("/images/space.png");
const univImage = new THREE.TextureLoader().load("/images/space.png");

//const univGeometry = new THREE.PlaneGeometry(17000, 10000);
const univGeometry = new THREE.SphereGeometry(70000, 3000, 3000);
const univMaterial = new THREE.MeshBasicMaterial({
  map: univMap,
  normalMap: univMap,
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const univ = new THREE.Mesh(univGeometry, univMaterial);
univ.position.set(0, 0, 0);
scene.add(univ);

//-------------------------------------------------animation function
function animate() {
  requestAnimationFrame(animate);
  rotateTheMoon();
  rotateTheSun();
  rotateNeptune();
  rotateUranus();
  rotateSaturnAndRing1();
  rotateJupiter();
  rotateMars();
  rotateEarth();
  rotateVenus();
  rotateMercury();
  controls.update();
  renderer.render(scene, camera);
}
animate();

//--------
/* setInterval(() => {
  camera.position.z -= 20;
  camera.position.y -= 0;
  camera.position.x -= 0;
}, 10); */

let play = setInterval(() => {
  camera.position.z -= 6;
  if (camera.position.z < 4000) {
    clearInterval(play);
    setInterval(() => {
      camera.position.z -= 3;
    }, 1);
  }
}, 1);
