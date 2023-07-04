<template>
  <div>
    <canvas id="canvas" style="width: 500px; height: 500px"></canvas>
  </div>
</template>
<script setup lang="ts">
import {
  WebGLEngine,
  Camera,
  MeshRenderer,
  PrimitiveMesh,
  BlinnPhongMaterial,
  DirectLight,
  Script,
  Vector3,
  Vector4,
  Color,
  GLTFResource
} from '@galacean/engine'
import { OrbitControl } from '@galacean/engine-toolkit-controls'

onMounted(() => {
  // 创建引擎实例
  const engine = new WebGLEngine('canvas')
  // 重设画布高宽
  engine.canvas.resizeByClientSize()

  // 创建场景根节点
  // 获得当前激活的场景
  const scene = engine.sceneManager.activeScene
  scene.ambientLight.diffuseSolidColor.set(1, 1, 1, 1)
  // 建一个根实体。场景中的根实体是场景树的根节点
  const rootEntity = scene.createRootEntity('root')
  // 创建一个相机实体
  let cameraEntity = rootEntity.createChild('camera_entity')
  cameraEntity.transform.position = new Vector3(0, 5, 10)
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0))
  cameraEntity.addComponent(OrbitControl)
  let camera = cameraEntity.addComponent(Camera)
  // 创建光照
  let lightEntity = rootEntity.createChild('light')
  let directLight = lightEntity.addComponent(DirectLight)
  directLight.color = new Color(1.0, 1.0, 1.0)
  directLight.intensity = 0.5

  lightEntity.transform.rotation = new Vector3(45, 45, 45)
  // 创建立方体
  // let cubeEntity = rootEntity.createChild('cube');
  // let cube = cubeEntity.addComponent(MeshRenderer);
  // cube.mesh = PrimitiveMesh.createCuboid(engine, 2, 2, 2);
  // cube.setMaterial(new BlinnPhongMaterial(engine));

  // 创建旋转脚本组件
  class Rotate extends Script {
    private _tempVector = new Vector3(0, 1, 0)
    onUpdate() {
      this.entity.transform.rotate(this._tempVector)
    }
  }
  // 导入一个模型
  engine.resourceManager
    .load<GLTFResource>(
      'https://gw.alipayobjects.com/os/OasisHub/267000040/9994/%25E5%25BD%2592%25E6%25A1%25A3.gltf'
    )
    .then((gltf) => {
      const duck = gltf.defaultSceneRoot
      rootEntity.addChild(duck)
      rootEntity.addChild(duck)

      // 添加旋转脚本组件
      duck.addComponent(Rotate)
    })

  engine.run()
})
</script>
<style lang="scss" scoped></style>
