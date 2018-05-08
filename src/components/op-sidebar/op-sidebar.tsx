import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-sidebar',
  styleUrl: 'op-sidebar.css',
})
export class Sidebar {
  @Prop() sidebarClass: string = null;

  render() {
    return (
      <div class="op-sidebar__placebo">
        <aside class={`op-sidebar ${this.sidebarClass}`}>
          <slot />
        </aside>
      </div>
    );
  }
}
