import {Component, Prop, State} from '@stencil/core';

@Component({
  tag: 'app-addscript',
  styleUrl: 'app-addscript.css'
})
export class AppAddScript {

  @State() state = false;
  @Prop() name: string;

  formattedName(): string {
    if (this.name) {
      return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    return [
      <body>
      <script>
        check();
      </script>
      <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>
        <a-assets>
          <a-asset-item id="model" src="/assets/icon/model.gltf"></a-asset-item>
          <a-asset-item id="mhead" src="/assets/icon/mhead.gltf"></a-asset-item>
          <a-asset-item id="assetAframe" src="/assets/icon/head.ply"></a-asset-item>
          <img id="sky" src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg"/>


        </a-assets>

        <a-marker type='pattern' url='/assets/icon/gau.patt'>

          <a-image src="/assets/icon/optimist.png" rotation='-90 0 0' scale="4 4 4" position='0 1.5 0'>
            <a-animation easing="linear" attribute="scale" dur="1000" to="2 2 1"></a-animation>

          </a-image>

        </a-marker>


        <a-marker type='pattern' url='/assets/icon/rav.patt'>

          <a-image src="/assets/icon/optimistwhat.png" rotation='-90 0 0' scale="4 4 4" position='0 1.5 0'>
            <a-animation easing="linear" attribute="scale" dur="1000" to="2 2 1"></a-animation>

          </a-image>

        </a-marker>



        <a-marker type='pattern' url='/assets/icon/raje.patt'>

          <a-image src="/assets/icon/optimistcurrent2.png" rotation='-90 0 0' scale="4 4 4" position='0 1.5 0'>
            <a-animation easing="linear" attribute="scale" dur="1000" to="2 2 1"></a-animation>

          </a-image>

        </a-marker>



        <a-marker type='pattern' url='/assets/icon/edu.patt'>

          <a-image src="/assets/icon/optimistfuture.png" rotation='-90 0 0' scale="4 4 4" position='0 1.5 0'>
            <a-animation easing="linear" attribute="scale" dur="1000" to="2 2 1"></a-animation>

          </a-image>

        </a-marker>


        <a-entity camera></a-entity>
      </a-scene>
      </body>
    ];
  }
}
