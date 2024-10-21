// src/components/SplineAnimation.js
"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // Ensure this import path is correct
import spline from "./spline.js"; // Adjust the path if needed

const SplineAnimation = () => {
  useEffect(() => {
    // Boilerplate code to set up the scene...
    const w = window.innerWidth;
    const h = window.innerHeight;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);
    renderer.domElement.style.position = 'absolute'; // Ensure it covers the full area
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-50'; // Behind other elements

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;

    // Create a line geometry from the spline
    const points = spline.getPoints(100);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const line = new THREE.Line(geometry, material);
    // scene.add(line);

    // Create tube geometry from the spline
    const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, true);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x0099ff,
      wireframe: true,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    // scene.add(tubeMesh);

    // Add fog
    const fogColor = 0x000000;
    const fogDensity = 0.5;
    scene.fog = new THREE.FogExp2(fogColor, fogDensity);

    // Create an edge geometry from the spline
    const edges = new THREE.EdgesGeometry(tubeGeo, 0.2);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0099ff });
    const tubeLines = new THREE.LineSegments(edges, lineMaterial);
    scene.add(tubeLines);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    scene.add(hemiLight);

    function updateCamera(t) {
      const time = t * 0.1;
      const looptime = 10 * 1000;
      const p = (time % looptime) / looptime;
      const pos = tubeGeo.parameters.path.getPointAt(p);
      const lookAt = tubeGeo.parameters.path.getPointAt((p + 0.03) % 1);
      camera.position.copy(pos);
      camera.lookAt(lookAt);
    }

    function animate(t = 0) {
      requestAnimationFrame(animate);
      updateCamera(t);
      renderer.render(scene, camera);
      controls.update();
    }
    animate();

    // Handle window resize
    function handleWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleWindowResize, false);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return null; // Since we're handling the rendering ourselves
};

export default SplineAnimation;


// // src/components/SplineAnimation.js
// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import spline from "./spline.js"; 

// const SplineAnimation = () => {
//   const containerRef = useRef(null); // Reference to the container div

//   useEffect(() => {
//     const w = window.innerWidth;
//     const h = window.innerHeight;
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
//     camera.position.z = 5;
    
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(w, h);
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.outputColorSpace = THREE.SRGBColorSpace;
    
//     // Append the renderer to the container ref
//     if (containerRef.current) {
//       containerRef.current.appendChild(renderer.domElement);
//     }

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.03;

//     // ... (rest of the animation and scene setup)
//         // Create a line geometry from the spline
//     const points = spline.getPoints(100);
//     const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
//     const line = new THREE.Line(geometry, material);
//     // scene.add(line);

//     // Create tube geometry from the spline
//     const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, true);
//     const tubeMat = new THREE.MeshStandardMaterial({
//       color: 0x0099ff,
//       wireframe: true,
//     });
//     const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
//     // scene.add(tubeMesh);

//     // Add fog
//     const fogColor = 0x000000;
//     const fogDensity = 0.3;
//     scene.fog = new THREE.FogExp2(fogColor, fogDensity);

//     // Create an edge geometry from the spline
//     const edges = new THREE.EdgesGeometry(tubeGeo, 0.2);
//     const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0099ff });
//     const tubeLines = new THREE.LineSegments(edges, lineMaterial);
//     scene.add(tubeLines);

//     const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
//     scene.add(hemiLight);

//     function updateCamera(t) {
//       const time = t * 0.1;
//       const looptime = 10 * 1000;
//       const p = (time % looptime) / looptime;
//       const pos = tubeGeo.parameters.path.getPointAt(p);
//       const lookAt = tubeGeo.parameters.path.getPointAt((p + 0.03) % 1);
//       camera.position.copy(pos);
//       camera.lookAt(lookAt);
//     }

//     function animate(t = 0) {
//       requestAnimationFrame(animate);
//       updateCamera(t);
//       renderer.render(scene, camera);
//       controls.update();
//     }
//     animate();

//     // Handle window resize
//     function handleWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener("resize", handleWindowResize, false);


//     return () => {
//       // Cleanup code
//       window.removeEventListener("resize", handleWindowResize);
//       if (containerRef.current) {
//         containerRef.current.removeChild(renderer.domElement); // Clean up the canvas
//       }
//     };
//   }, []); 

//   return (
//     // the below div stays helps make it child of the div tag that we will use is page.js other wise properties individually specify krni pdegii!!!
//     <div ref={containerRef} className="absolute top-0 left-0 w-full h-full z-0">
//       {/* The canvas will be added here */}
//     </div>
//   );
// };

// export default SplineAnimation;
