import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import Loader from '../Loader';

const Computers = () => {
  
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      30,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(20, 3, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true,alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    mountRef.current.appendChild(renderer.domElement);

    
    
    // HDR environment light
    new RGBELoader().load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/rogland_clear_night_1k.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      
    });

    // Add light
    const pointLight = new THREE.PointLight(0xffffff,10);
    pointLight.position.set(-1, 4, 1);
    scene.add(pointLight);

    const hemiLight = new THREE.HemisphereLight(0x080820, 1);
    scene.add(hemiLight);

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load('./desktop_pc/scene.gltf', (gltf) => {
      gltf.scene.position.x = 0;
      gltf.scene.position.y = 0;
      gltf.scene.position.z = -1.8;
      gltf.scene.rotation.y = -Math.PI / 7; 
      scene.add(gltf.scene);
      setLoading(false);
    });

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 2.5;
    controls.minAzimuthAngle = Math.PI *2;  
    controls.maxAzimuthAngle = -Math.PI/.9; ;
    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.rotateSpeed = 0.5;
    


    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return(
  <div ref={mountRef} style={{ width: '100%', height: '100%' }}>
      {loading && (
        <div className="absolute inset-0 top-[150px] flex justify-center items-start bg-opacity-50 z-10">
          <Loader />
        </div>
        
      )}
  </div>

  );
};

export default Computers;
