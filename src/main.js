import * as THREE from 'three';

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

// Create a light to get the visibility of the object
const light = new THREE.PointLight(0xffffff,5,100);
light.position.set(0,5,5);
scene.add(light);

// Create a camera
const camera = new THREE.PerspectiveCamera(
    45,
    800/600
);
camera.position.z = 20
scene.add(camera);

// Create a renderer (We need a canvas to render)
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(800,600);

renderer.render(scene,camera);