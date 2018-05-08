import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-card',
  styleUrl: 'op-card.css',
})
export class OPCard {
  render() {
    return <slot />;
  }
}
