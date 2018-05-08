import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-quote',
  styleUrl: 'op-quote.css',
})
export class Quote {
  render() {
    return (
      <blockquote class="op-quote__blockquote">
        <p>
          <slot />
        </p>
      </blockquote>
    );
  }
}
