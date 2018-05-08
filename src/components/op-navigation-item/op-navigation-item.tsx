import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-navigation-item',
  styleUrl: 'op-navigation-item.css',
})
export class NavigationItem {
  @Prop() href: string;
  render() {
    return (
      <a href={this.href} class="op-navigation-item">
        <slot />
      </a>
    );
  }
}
