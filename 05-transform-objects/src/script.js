import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

//below when he started taught group

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "green"})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "yellow"})
)
group.add(cube2)
cube2.position.x = -2

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "red"})
    )
group.add(cube3)
cube3.position.x = 2


// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)


// //Positioning Object
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1
// //if want to do all at one
// mesh.position.set(0.7, -0.6, 1)

// //Scale
// // mesh.scale.x = 1.2
// // mesh.scale.y = 0.2
// // mesh.scale.z = 0.7
// //alternate of above
// mesh.scale.set(2,0.5,0.5)

// //rotate-rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25 
// mesh.rotation.y = Math.PI * 0.25
// // mesh.rotation.z = 1


//Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


// console.log(mesh.position.distanceTo(new THREE.Vector3(0,1,2)))
// mesh.position.normalize()
// console.log(mesh.position.length())

/**
 * Sizes
*/
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// console.log(mesh.position.distanceTo(camera.position))
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)

// camera.lookAt(new THREE.Vector3(3,0,0))
// camera.lookAt(mesh.position)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)