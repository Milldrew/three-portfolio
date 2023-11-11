import * as THREE from 'three'
import {Walls} from './walls';
import {FreeCamera} from './FreeCamera';
export class CustomScene {
  static scene: THREE.Scene = new THREE.Scene()
  static renderer: THREE.WebGLRenderer;
  static camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  /**
    * use canvas element to create scene
    */
  static createScene() {
    const canvas = document.querySelector('canvas#scene') as HTMLCanvasElement
    CustomScene.renderer = new THREE.WebGLRenderer({canvas})
    CustomScene.renderer.setSize(window.innerWidth, window.innerHeight)
    CustomScene.camera.position.set(0, 1, 5)
    const floor = Walls.createAWall(0x434343, 0, -.1, 0, 4, .04, 5, CustomScene.scene)
    const ceiling = Walls.createAWall(0xadadad, 0, 2.1, 0, 4, .04, 5, CustomScene.scene)
    const leftWall = Walls.createAWall(0xadadad, -2.5, 1, 0, .04, 2, 5, CustomScene.scene)
    const rightWall = Walls.createAWall(0xadadad, 2.5, 1, 0, .04, 2, 5, CustomScene.scene)
    const backWall = Walls.createAWall(0xadadad, 0, 1, -2.5, 4, 2, .04, CustomScene.scene)
    const frontWall = Walls.createAWall(0xadadad, 0, 1, 2.5, 4, 2, .04, CustomScene.scene)
    //point camera at floor
    FreeCamera.createControls(CustomScene.camera, CustomScene.renderer)
    FreeCamera.addEventListeners(CustomScene.camera)
    CustomScene.scene.add(new THREE.AxesHelper)
    //render smoother edges
    CustomScene.renderer.setPixelRatio(window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio)

    CustomScene.renderer.render(CustomScene.scene, CustomScene.camera)
    //animate
    function animate() {
      requestAnimationFrame(animate)
      CustomScene.renderer.render(CustomScene.scene, CustomScene.camera)
    }
    animate()
  }
}
