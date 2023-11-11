import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

/**
  * Creates a camera that can move freely in the scene with arrow keys and the mouse
  */
export class FreeCamera {
  static controls: OrbitControls

  static createControls(camera: THREE.Camera, renderer: THREE.Renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    FreeCamera.controls = controls;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.rotateSpeed = 0.35;
    controls.maxPolarAngle = Math.PI / 2.1;
    controls.minPolarAngle = Math.PI / 2.1;
    controls.minDistance = 0;
    controls.maxDistance = 1000;
    controls.target.set(0, 0, 0);
    return controls;
  }
  static isMouseDown() {
    let isMouseDown = false;
    window.addEventListener('mousedown', () => {
      isMouseDown = true;
    })
    window.addEventListener('mouseup', () => {
      isMouseDown = false;
    })
    return isMouseDown;
  }

  static addEventListeners(camera: THREE.Camera) {
    window.addEventListener('keydown', event => {
      console.log(event.keyCode)
      switch (event.keyCode) {
        case 37: // left
          camera.position.x -= 1;
          break;
        case 38: // up
          camera.position.z -= 1;
          break;
        case 39: // right
          camera.position.x += 1;
          break;
        case 40: // down
          camera.position.z += 1;
          break;
      }
    });
    if (FreeCamera.isMouseDown()) {
      window.addEventListener('mousemove', event => {
        camera.position.x = event.clientX;
        camera.position.z = event.clientY;
      })
    }
  }
}
