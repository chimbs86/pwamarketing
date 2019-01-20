import {Component} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
<body>

      <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>


        <a-assets>
          <a-asset-item id="model" src="/assets/icon/model.gltf"></a-asset-item>
          <a-asset-item id="mhead" src="/assets/icon/mhead.gltf"></a-asset-item>
          <a-asset-item id="assetAframe" src="/assets/icon/head.ply"></a-asset-item>
          <img id="sky" src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg"/>
          <video id="penguin" autoPlay loop="true" src="/assets/icon/game.mov"></video>


        </a-assets>

        <a-marker type='pattern' url='/assets/icon/marker.patt'>

          {/*<a-entity scale="0.05 0.05 0.05" geometry="primitive: torusKnot" position="0 0 -0" material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;">*/}
            {/*<a-animation easing="linear" attribute="rotation" dur="10000" to="0 0 360" repeat="indefinite"></a-animation>*/}
          {/*</a-entity>*/}
          <a-image src="/assets/icon/gradcap.png" rotation='-90 0 0' scale="0.15 0.15 0.15">
            <a-animation easing="linear" attribute="scale" dur="10000" to="2 2 1" ></a-animation>

          </a-image>


        </a-marker>

        <a-marker preset='hiro'>


          <a-entity
            geometry="primitive: plane; width: 0; height: auto"
            material="color: cyan"
            text="value: Gaurav Raje."
            position='-3 1.5 0'
            rotation='-90 0 0'>

            <a-animation easing="linear" attribute="scale" dur="10000" to="4 14 17" ></a-animation>

          </a-entity>

        </a-marker>

        <a-marker preset='kanji'>

          <a-video src="#penguin" width="5" height="5" position="-3 0 0" rotation ='-90 0 0'></a-video>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
</body>
    ];
  }
}
