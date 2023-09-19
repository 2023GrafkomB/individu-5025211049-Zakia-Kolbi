var cubeElement = document.querySelector(".cube");
var rotationX = 0;
var rotationY = 0;
var speedX = 0.05; // Kecepatan rotasi X (ganti sesuai keinginan)
var speedY = 0.05; // Kecepatan rotasi Y (ganti sesuai keinginan)
var isRotating = true; // Status rotasi (diaktifkan atau dihentikan)

function rotateCube() {
    if (isRotating) {
        rotationX += speedX;
        rotationY += speedY;

        cubeElement.style.transform = "rotateY(" + rotationX + "rad) rotateX(" + rotationY + "rad)";
    }

    requestAnimationFrame(rotateCube);
}

rotateCube(); // Memulai rotasi secara otomatis saat halaman dimuat

// Fungsi untuk mengatur status rotasi
function toggleRotation() {
    isRotating = !isRotating;
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var animate = function () {
    requestAnimationFrame(animate);

    // Animasi rotasi objek
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;

    renderer.render(scene, camera);
};

animate();
