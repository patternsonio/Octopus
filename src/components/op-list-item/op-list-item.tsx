import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-list-item',
  styleUrl: 'op-list-item.css',
})
export class OPListItem {
  render() {
    return (
      <li class="op-list-item">
        <slot />
      </li>
    );
  }
}
