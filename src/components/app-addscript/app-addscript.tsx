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
      <h1>Please use Landscape mode </h1>
      <center><a href = "/">Refresh</a></center>
      </body>
    ];
  }
}
