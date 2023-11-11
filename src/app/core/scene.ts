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
    CustomScene.camera.position.set(0, 10, 0)
    const floor = Walls.createAWall(0xadadad, 4, 3, 0, 4, .04, 5, CustomScene.scene)
    //point camera at floor
    CustomScene.camera.lookAt(floor.position)
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
