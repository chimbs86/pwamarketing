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
      <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js"></script>

    ];
  }
}
