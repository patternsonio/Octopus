import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-link',
  styleUrl: 'op-link.css',
})
export class OPLink {
  @Prop() href: string;
  @Prop() target: string;
  render() {
    return (
      <a class="op-link" href={this.href} target={this.target}>
        <slot />
      </a>
    );
  }
}
