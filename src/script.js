const THREE = require('three');

var width = window.innerWidth, height = window.innerHeight;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 0, 5);

var renderer = new THREE.WebGLRenderer({ antialiasing: true });
renderer.setSize(width, height);

document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(2, 2, 2);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
