import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-content',
  styleUrl: 'op-content.css',
})
export class OPContent {
  render() {
    return <slot />;
  }
}
