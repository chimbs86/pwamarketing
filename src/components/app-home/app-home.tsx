import {Component} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [

      <a-scene embedded arjs='sourceType: webcam;'>


        <a-assets>
          <a-asset-item id="model" src="/assets/icon/model.gltf"></a-asset-item>
          <a-asset-item id="mhead" src="/assets/icon/mhead.gltf"></a-asset-item>
          <a-asset-item id="assetAframe" src="/assets/icon/head.ply"></a-asset-item>

        </a-assets>

        <a-marker type='pattern' url='/assets/icon/marker.patt'>

          <a-image src="/assets/icon/icon.png" rotation='-90 0 0' ></a-image>

        </a-marker>

        <a-marker preset='hiro'>

          <a-entity gltf-model="url(/assets/icon/model.gltf)" rotation='-90 0 0'></a-entity>

          <a-entity
            geometry="primitive: plane; width: 1; height: auto"
            material="color: blue"
            text="value: This text will be 4 units wide."
            position='0 1.5 0'
            rotation='-90 0 0'></a-entity>

        </a-marker>

        <a-marker preset='kanji'>

          <a-box position='0 -0.5 -1.5' material='color: blue;'></a-box>

        </a-marker>
        <a-marker type='barcode' value='5'>
          <a-box position='0 0.5 0' material='color: blue;'></a-box>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    ];
  }
}
