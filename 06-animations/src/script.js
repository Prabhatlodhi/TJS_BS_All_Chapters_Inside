import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//Clock
// const clock = new THREE.Clock()

//GSAP lib
gsap.to(mesh.position, {duration:1, delay:1, x:2})
gsap.to(mesh.position, {duration:1, delay:2, x:0})

// let time = Date.now()
//Animations
const tick = ()=>{
    //Clock
    // const elapsedTime = clock.getElapsedTime()
    //Time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time;
    // time = currentTime
    //Update the cube
    // mesh.rotation.y += 0.001 * deltaTime
    // mesh.rotation.y += 0.001 
    // mesh.rotation.y = elapsedTime 

    //mesh is moving
    // mesh.position.y = Math.sin(elapsedTime) 
    // mesh.position.x = Math.cos(elapsedTime) 

    //camera is moving
    // camera.position.y = Math.sin(elapsedTime) 
    // camera.position.x = Math.cos(elapsedTime) 
    //do not use get delta
    // camera.lookAt(mesh.position)

    //Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()