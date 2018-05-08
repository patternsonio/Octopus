import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-setup',
  styleUrl: 'op-setup.css',
})
export class Setup {
  render() {
    return (
      <div class="op-setup">
        <op-headline level={3}>
          Instructions to contribute to the library
        </op-headline>
      </div>
    );
  }
}
