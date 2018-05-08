import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-paragraph',
  styleUrl: 'op-paragraph.css',
})
export class Paragraph {
  render() {
    return (
      <p>
        <slot />
      </p>
    );
  }
}
