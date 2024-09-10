import { useEffect, useState } from 'react'
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import './App.css'
import SceneInit from './scene/SceneInit';
import Sidebar from './ui/Containers';
import {Button} from './ui/Components'
import ModelLoader from './model/LoadModel';


function Model() {
  const [sceneParams, setSceneParams] = useState(null)
  const [loadedObject, setLoadedObject] = useState(null)

  useEffect((sceneParams) => {                 
    console.log(sceneParams)          //Declares variable called in return function
    //let testMount = sceneParams.sceneContainer
    //console.log(testMount)

    console.log(loadedObject)
    if (loadedObject) {                       //Checks if loadedObject is not Null
      loadedObject.children.forEach((child) => {
        const origMat = child.material.clone()
        const newMat = new THREE.MeshStandardMaterial({
          color: origMat.color,
          roughness: 0.75,
          metalness: 0.75
        })
        newMat.color.r = 1
        newMat.color.g = 1
        newMat.color.b = 1
        //console.log(child.material)
        child.material = newMat
        //console.log(child.material)
        /*
        child.material.color.r = (j / loadedObject.children.length)
        child.material.color.g = (j / loadedObject.children.length)
        child.material.color.b = (j / loadedObject.children.length)
        console.log(child.material.color)
        */
      })
    }
  }, [loadedObject])

  return (
    <>
      <Sidebar>
        <Button />
      </Sidebar>
      <SceneInit onSceneInit={setSceneParams} />
      {sceneParams && 
        <ModelLoader 
          scene={sceneParams.scene} 
          modelPath={'./models/Design-Model.3dm'} 
          onLoad={setLoadedObject}
        />
      }
    </>
  )
}


function App() {


  return (
    <Model />
  )
}

export default App
