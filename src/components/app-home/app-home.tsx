import {Component} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

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

          <a-image src="/assets/icon/builder.png" rotation='-90 0 0' scale="4 4 4" position='0 1.5 0'>
            <a-animation easing="linear" attribute="scale" dur="1000" to="2 2 1"></a-animation>

          </a-image>

        </a-marker>


        <a-marker type='pattern' url='/assets/icon/rav.patt'>

          <a-image src="/assets/icon/buildwhat.png" rotation='-90 0 0' scale="4 4 4" position='0 1.5 0'>
            <a-animation easing="linear" attribute="scale" dur="1000" to="2 2 1"></a-animation>

          </a-image>

        </a-marker>



        <a-marker type='pattern' url='/assets/icon/raje.patt'>

          <a-image src="/assets/icon/buildcur2.png" rotation='-90 0 0' scale="4 4 4" position='0 1.5 0'>
            <a-animation easing="linear" attribute="scale" dur="1000" to="2 2 1"></a-animation>

          </a-image>

        </a-marker>



        <a-marker type='pattern' url='/assets/icon/edu.patt'>

          <a-image src="/assets/icon/builderfuture.png" rotation='-90 0 0' scale="4 4 4" position='0 1.5 0'>
            <a-animation easing="linear" attribute="scale" dur="1000" to="2 2 1"></a-animation>

          </a-image>

        </a-marker>


        <a-entity camera></a-entity>
      </a-scene>
      </body>
    ];
  }
}
