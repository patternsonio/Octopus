import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-label',
  styleUrl: 'op-label.css',
})
export class Label {
  render() {
    return (
      <label class="op-label">
        <slot />
      </label>
    );
  }
}
