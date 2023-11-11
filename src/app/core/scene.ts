import * as THREE from 'three'
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
    CustomScene.camera.position.z = 5
    CustomScene.renderer.render(CustomScene.scene, CustomScene.camera)

  }
}
