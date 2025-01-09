import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css'
// Create the Scene (We include everything in it)
const scene = new THREE.Scene();

// Our object definitions
// Shape
const geometry = new THREE.SphereGeometry(3,32,32);
//Color
const material = new THREE.MeshStandardMaterial({
    color:'#00ff83'
});
// Combine Shape and Color
const mesh = new THREE.Mesh(
    geometry,
    material
);
// Add to the scene
scene.add(mesh);

// Make the canvas to fit the windows
const sizes = {
    width:window.innerWidth,
    height:window.innerHeight
} 

// Create a light to get the visibility of the object
const light = new THREE.PointLight(0xffffff,20,100);
light.position.set(0,5,5);
scene.add(light);

// Create a camera
const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width/sizes.height
);
camera.position.z = 20
scene.add(camera);

// Create a renderer (We need a canvas to render)
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(sizes.width,sizes.height);
renderer.setPixelRatio(2); //Smooth the pixels
renderer.render(scene,camera);

// Light controller
const controls = new OrbitControls(camera,canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

//Resize Listener
window.addEventListener('resize',()=>{
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //Update camera
    camera.aspect = sizes.width/sizes.height;
    renderer.setSize(sizes.width,sizes.height);

    //Update ball
    camera.updateProjectionMatrix();
});

const loop = () => {
     // Update controls
    controls.update();
    renderer.render(scene,camera);
    requestAnimationFrame(loop);
}
loop();