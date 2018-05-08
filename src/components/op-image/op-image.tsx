import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-image',
  styleUrl: 'op-image.css',
})
export class Image {
  @Prop() src: string;
  render() {
    return <img src={this.src} />;
  }
}
