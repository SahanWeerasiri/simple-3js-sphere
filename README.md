# Three.js + GSAP Interactive Sphere

This project showcases a 3D interactive sphere animation using **Three.js** for rendering and **GSAP** for smooth animations. The implementation includes dynamic lighting, camera controls, and responsive design for modern web applications.

---

## Features

- **3D Sphere Rendering**: A dynamically colored sphere rendered using Three.js.
- **Interactive Mouse Events**: Change sphere color dynamically based on mouse movements while holding the mouse button.
- **Smooth Animations**: GSAP animations for initial object scaling and UI transitions.
- **Camera Controls**: OrbitControls for seamless interaction, including damping and auto-rotation.
- **Responsive Design**: Adapts the canvas size to match the browser window dynamically.

---

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://yarnpkg.com/)

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd <project-directory>
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
---

## Usage

1. **Interacting with the Sphere:**
   - Hold down the mouse button and move the cursor to dynamically change the sphere’s color.
   
2. **Camera Interaction:**
   - Use the mouse to orbit around the sphere.
   - The auto-rotation feature ensures continuous rotation for a dynamic view.

---

## File Structure

```plaintext
src/
|-- style.css          # CSS styles for the project
|-- main.js            # Main JavaScript file with Three.js and GSAP logic
public/
|-- index.html         # Entry HTML file
```

---

## Dependencies

- **Three.js**: A lightweight, easy-to-use 3D library for rendering graphics.
- **GSAP**: A robust JavaScript library for animations.
- **OrbitControls**: For intuitive camera interaction.

---

## Key Code Highlights

### Sphere Geometry and Material
```javascript
const geometry = new THREE.SphereGeometry(3, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: '#00ff83' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

### Dynamic Color Update
```javascript
window.addEventListener("mousemove", (e) => {
    if (mouseDown) {
        rgb = [
            Math.floor((e.pageX / sizes.width) * 255),
            Math.floor((e.pageY / sizes.height) * 255),
            150
        ];
        let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
        gsap.to(mesh.material.color, {
            r: newColor.r,
            g: newColor.g,
            b: newColor.b,
        });
    }
});
```

### Responsive Design
```javascript
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
});
```

---

## Deployment

1. Build the project for production:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

2. Deploy the `dist` folder to your preferred hosting platform.

---

## Troubleshooting

- **Black Screen or Rendering Issues:** Ensure that WebGL is supported by your browser.
- **Resize Issues:** Check if the `resize` listener is correctly updating the camera and renderer.

---

## Acknowledgments

- [Three.js Documentation](https://threejs.org/docs/)
- [GSAP Documentation](https://greensock.com/docs/)
- [OrbitControls Example](https://threejs.org/examples/#misc_controls_orbit)

