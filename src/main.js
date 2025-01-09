import * as THREE from 'three';

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3,32,32);

const material = new THREE.MeshStandardMaterial({
    color:'#00ff83'
});

const mesh = new THREE.Mesh(
    geometry,
    material
);

scene.add(mesh);

const light = new THREE.PointLight(0xffffff,5,100);
light.position.set(0,5,5);
scene.add(light);

const camera = new THREE.PerspectiveCamera(
    45,
    800/600
);
camera.position.z = 20
scene.add(camera);

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(800,600);

renderer.render(scene,camera);