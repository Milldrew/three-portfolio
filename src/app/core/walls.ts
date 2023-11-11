import * as THREE from 'three'
export class Walls {
  static createAWall(color: number, x: number, y: number, z: number, width: number, height: number, depth: number, scene: THREE.Scene) {
    const geometry = new THREE.BoxGeometry(width, height, depth)
    const material = new THREE.MeshBasicMaterial({color})
    const cube = new THREE.Mesh(geometry, material)
    cube.position.x = x
    cube.position.y = y
    cube.position.z = z
    scene.add(cube)
    return cube
  }
}
