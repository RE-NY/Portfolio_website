"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { getBody, getMouseBall } from "./getBodies.js"; // Adjust path to your getBodies.js
import RAPIER from '@dimforge/rapier3d-compat';
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

const BackgroundAnimation = () => {
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Setup scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);

    renderer.domElement.style.position = 'absolute'; // Ensure it covers the full area
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '0'; // Behind other elements

    document.body.appendChild(renderer.domElement);

    // Initialize Rapier physics
    let mousePos = new THREE.Vector2();
    let world;
    let bodies = [];
    let mouseBall;
    
    (async () => {
      await RAPIER.init();
      const gravity = { x: 0.0, y: 0, z: 0.0 };
      world = new RAPIER.World(gravity);

      // Post-processing setup
      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 2.0, 0.0, 0.005);
      const composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);

      // Add bodies to the scene
      const numBodies = 50;
      for (let i = 0; i < numBodies; i++) {
        const body = getBody(RAPIER, world);
        bodies.push(body);
        scene.add(body.mesh);
      }

      // Add the mouseBall
      mouseBall = getMouseBall(RAPIER, world);
      scene.add(mouseBall.mesh);

      // mouseBall.mesh.position.z = 1;

      // Add lighting
      const hemiLight = new THREE.HemisphereLight(0x00bbff, 0xaa00ff);
      hemiLight.intensity = 0.2;
      scene.add(hemiLight);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        world.step();
        mouseBall.update(mousePos);
        bodies.forEach(b => b.update());
        composer.render(scene, camera);
      };
      animate();
    })();

    // Handle window resize
    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleWindowResize);

    // Handle mouse move
    const handleMouseMove = (evt) => {
      mousePos.x = (evt.clientX / window.innerWidth) * 2 - 1;
      mousePos.y = -(evt.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default BackgroundAnimation;
