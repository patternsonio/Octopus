import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-button',
  styleUrl: 'op-button.css',
})
export class OPButton {
  @Prop() href: string;
  @Prop() type: string;
  @Prop() nomargin: boolean;

  render() {
    const Element = this.href ? 'a' : 'button';

    return (
      <Element
        class={{
          'op-button': true,
          'op-button--nomargin': this.nomargin,
          ['op-button-' + this.type]: this.type !== null,
        }}
        href={this.href}
      >
        <span class="op-button-content">
          <slot />
        </span>
      </Element>
    );
  }
}
