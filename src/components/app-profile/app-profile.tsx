import {Component, Prop, State} from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {

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
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-addscript" />
        </ion-router>
        <ion-nav />
      </ion-app>
    ];
  }
}
