/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppAddscript {
    'name': string;
  }
  interface AppAddscriptAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppNon {}
  interface AppNonAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'name': string;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppAddscript': Components.AppAddscript;
    'AppHome': Components.AppHome;
    'AppNon': Components.AppNon;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'app-addscript': Components.AppAddscriptAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-non': Components.AppNonAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAppAddscriptElement extends Components.AppAddscript, HTMLStencilElement {}
  var HTMLAppAddscriptElement: {
    prototype: HTMLAppAddscriptElement;
    new (): HTMLAppAddscriptElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppNonElement extends Components.AppNon, HTMLStencilElement {}
  var HTMLAppNonElement: {
    prototype: HTMLAppNonElement;
    new (): HTMLAppNonElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-addscript': HTMLAppAddscriptElement
    'app-home': HTMLAppHomeElement
    'app-non': HTMLAppNonElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-addscript': HTMLAppAddscriptElement;
    'app-home': HTMLAppHomeElement;
    'app-non': HTMLAppNonElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
