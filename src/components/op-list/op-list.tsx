import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-list',
  styleUrl: 'op-list.css',
})
export class OPList {
  @Prop() type: string = 'ul';
  @Prop() label: string;

  render() {
    const Element = this.type;
    return (
      <div class="op-list-wrap">
        {this.label && <op-label>{this.label}</op-label>}
        <Element class="op-list">
          <slot />
        </Element>
      </div>
    );
  }
}
