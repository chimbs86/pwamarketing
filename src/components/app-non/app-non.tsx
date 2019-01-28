import {Component} from '@stencil/core';

@Component({
  tag: 'app-non',
  styleUrl: 'app-non.css'
})
export class AppNon {

  render() {
    return [
      <body>
      <a-scene cursor="rayOrigin: mouse" foo>
        <a-assets>
          <a-asset-item id="tree" src="/assets/icon/Patrick.gltf"></a-asset-item>
          <img src="/assets/icon/person.png" id="chrome"/>

          <img id="pink" src="https://img.gs/bbdkhfbzkk/stretch/http://i.imgur.com/1hyyIUi.jpg"/>
          <img src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" id="grid"/>
          <img src="https://img.gs/bbdkhfbzkk/2048x1024,stretch/http://i.imgur.com/WMNH2OF.jpg" id="chrome"/>
          <img id="sky" src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg"/>
          <a-asset-item id="dawningFont"
                        src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2FdawningOfANewDayRegular.typeface.json?1490305922844"></a-asset-item>
          <a-asset-item id="exoFont"
                        src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2Black.typeface.json?1490305922150"></a-asset-item>
          <a-asset-item id="exoItalicFont"
                        src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2BlackItalic.typeface.json?1490305922725"></a-asset-item>
          <video id="penguin"  loop autoplay="true" src="/assets/icon/game.mov"></video>
        </a-assets>

        {/*<a-entity scale="2 2 2" geometry="primitive: torusKnot" position="0 6 -10" material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;">*/}
        {/*<a-animation easing="linear" attribute="rotation" dur="10000" to="0 0 360" repeat="indefinite"></a-animation>*/}
        {/*</a-entity>*/}
        <a-entity
          geometry="primitive: plane; width: 0; height: auto"
          material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
          text="value: Enterprise Software Developer at Integral Ad Science; color:white"
          position='-1 1.5 0'
          rotation='-180 -90 -180'>


        </a-entity>

        <a-entity
          geometry="primitive: plane; width: 0; height: auto"
          material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
          text="value: Software Developer at Adconion Media group; color:white"
          position='1 1.5 0'
          rotation='-0 -90 -0'>


        </a-entity>

        <a-entity
          geometry="primitive: plane; width: 0; height: auto"
          material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
          text="value: Platform Developer at Pulsepoint Inc; color:white"
          position='-0.5 1.5 1'
          rotation='-180 -0 -180'>


        </a-entity>
        <a-image src="/assets/icon/adconion.png" position='.19 1.65 0' scale="0.05 0.05 0.05"
                 rotation='-180 -90 -180'
                 material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;">
          <a-animation easing="linear" attribute="rotation" dur="10000" to="0 0 360" repeat="indefinite"></a-animation>


        </a-image>
        <a-image src="/assets/icon/pp.png" position='-0.45 1.7 1' scale="0.2 0.2 0.2"
                 rotation='-180 -90 -180'
                 material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;">
          <a-animation easing="linear" attribute="rotation" dur="10000" to="0 0 360" repeat="indefinite"></a-animation>


        </a-image>


        {/*<a-image src="/assets/icon/person.png" position='0 2.2 -1.5' scale="1 1 1"*/}
        {/*rotation='-180 -90 -180' material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;">*/}
        {/*<a-animation easing="linear" attribute="rotation" dur="10000" to='-180 90 -180' repeat="indefinite"></a-animation>*/}


        {/*</a-image>*/}
        {/*<a-entity gltf-model="/assets/icon/Patrick.gltf"  position='0 1 -1.5' scale=".5 0.5 0.5"*/}
        {/*rotation='-180 -90 -180' >*/}
        {/*<a-animation easing="linear" attribute="rotation" dur="10000" to="-180 -0 -180" repeat="indefinite"></a-animation>*/}
        {/*</a-entity>*/}


        <a-image src="/assets/icon/rit_logo.png" position='1.75 2.1 -1.5' scale=".45 0.45 0.45"
                 rotation='-180 -90 -180'
                 material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;">
          <a-animation easing="linear" attribute="rotation" dur="10000" to="0 0 360" repeat="indefinite"></a-animation>


        </a-image>

        <a-entity
          geometry="primitive: plane; width: 0; height: auto"
          material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
          text="value: Gaurav Raje \n Software Developer, DBA, Cloud Software Architect(Azure and AWS)  ; color:white; align:center"
          position='0 1 -1.5'
          scale="1.7 1.7 1"
          rotation='-0 0 0'>


        </a-entity>

        <a-entity
          geometry="primitive: plane; width: 0; height: auto"
          material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
          text="value: Chimbs The Game, available on the google play store\n click to play video  ; color:white; align:center"
          position='0 2.75 -1.5'
          scale="1 1 1"
          rotation='-0 0 0'>


        </a-entity>
        <a-entity
          geometry="primitive: plane; width: 0; height: auto"
          material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
          text="value: Master of Science - Computer Science\n Rochester Institute of Technology; color:white"
          position='2 1.75 -1.45'
          scale="1 1.2 1"
          rotation='-0 -45 0'>


        </a-entity>

        <a-image src="/assets/icon/nyu_logo.png" position='-2 2.1 -1.5' scale="0.5 0.5 0.5"
                 rotation='-180 -90 -180'
                 material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;">
          <a-animation easing="linear" attribute="rotation" dur="10000" to="0 0 360" repeat="indefinite"></a-animation>


        </a-image>

        <a-entity
          geometry="primitive: plane; width: 0; height: auto"
          material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
          text="value: Master of Business Administration - Finance \n NYU Stern school of business. (currently enrolled) ; color:white"
          position='-2 1.75 -1.75'
          scale="1 1.2 1"
          rotation='-0 65 0'>


        </a-entity>


        <a-entity
          geometry="primitive: plane; width: 0; height: auto"
          material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
          text="value: Drag to explore; color:white;align:center"
          position='0 1 -1'
          scale="2 2 2"
          rotation='-90 0 0'>


        </a-entity>


        <a-entity
          geometry="primitive: plane; width: 0; height: auto"
          material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
          text="value: Quarter finalist - Berkley Innovation Labs. \n Open Source Contributor; color:white"
          position='1 1.5 1.45'
          scale=".95 1.2 0.95"
          rotation='-0 -135 0'>


        </a-entity>

        <a-image src="/assets/icon/collective.png" position='1 2 1.45' scale="1 0.5 1"
                 rotation='-0 -135 0' material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;">


        </a-image>

        <a-video src="#penguin" position='0 2 -1.5' autoplay loop='true'
                 scale="1.5 1.2 1"
                 rotation='-0 -0 0'></a-video>

        <a-entity id="playbutton_1"
                  geometry="primitive: plane; width: 0; height: auto"
                  material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
                  text="value: <- Click Here ; color:white; align:center"
                  position='0.6 2.55 -1.5'
                  scale="1 1 1"
                  rotation='-0 0 0'>


        </a-entity>


        <a-image src="/assets/icon/ias.png" position='-0.19 1.65 0' scale="0.1 0.1 0.1"
                 rotation='-180 -90 -180'
                 material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;">
          <a-animation easing="linear" attribute="rotation" dur="10000" to="0 0 360" repeat="indefinite"></a-animation>


        </a-image>

        <a-entity position="-3 1 -6" rotation="5 0 0">
          <a-entity
            rotation="0 0 5"
            position="0 2 0.2"
            text-geometry="value: Virtual Reality; font: #dawningFont; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 12; size: 1; height: 0;"
            material="color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;"/>
        </a-entity>

        <a-entity
          geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0"
          material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;"></a-entity>

        <a-entity light="color: #ccccff; intensity: 1; type: ambient;" visible=""></a-entity>
        <a-entity light="color: ffaaff; intensity: 1.5" position="5 5 5"></a-entity>
        <a-entity light="color: white; intensity: 0.5" position="-5 5 15"></a-entity>
        <a-entity light="color: white; type: ambient;"></a-entity>

        <a-sky src="#sky" rotation="0 -90 0"></a-sky>
      </a-scene>
      </body>
    ];
  }
}
