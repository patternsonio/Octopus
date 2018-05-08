import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-frame',
  styleUrl: 'op-frame.css',
})
export class OPFrame {
  render() {
    return <slot />;
  }
}
