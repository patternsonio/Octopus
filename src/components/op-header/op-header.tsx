import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-header',
  styleUrl: 'op-header.css',
})
export class OPHeader {
  render() {
    return (
      <header class="op-header">
        <slot />
      </header>
    );
  }
}
