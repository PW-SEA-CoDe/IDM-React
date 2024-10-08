import { useEffect } from 'react'
import { Rhino3dmLoader } from 'https://unpkg.com/three@0.164.1/examples/jsm/loaders/3DMLoader.js';

function ModelLoader({ scene, modelPath, onLoad }) {

    useEffect(() => {
        const loader = new Rhino3dmLoader();
        loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@8.6.1/');
        loader.load(modelPath, function (object) {
            scene.add(object);
            object.position.set(0,0,0);
            onLoad(object)
        });
    }, [scene, modelPath, onLoad])

    return null
}

export default ModelLoader

