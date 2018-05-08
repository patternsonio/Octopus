import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-library',
  styleUrl: 'op-library.css',
})
export class OPLibrary {
  @Prop() target: string;
  render() {
    return (
      <div class="op-library">
        <op-sidebar sidebarClass="library-sidebar">
          <op-navigation>
            <op-navigation-item href={this.target}>
              How to use
            </op-navigation-item>
            <op-navigation-item href={this.target}>Color</op-navigation-item>
            <op-navigation-item href={this.target}>
              Variables
            </op-navigation-item>
            <op-navigation level={2}>
              <op-navigation-item href={this.target}>Colors</op-navigation-item>
              <op-navigation-item href={this.target}>
                Animation
              </op-navigation-item>
            </op-navigation>
            <op-navigation-item href={this.target}>
              Components
            </op-navigation-item>
            <op-navigation level={2}>
              <op-navigation-item href={this.target}>
                Headline
              </op-navigation-item>
              <op-navigation-item href={this.target}>Button</op-navigation-item>
            </op-navigation>
          </op-navigation>
          <footer class="library-footer">
            <span class="credits-text">created with</span>
            <slot name="footer" />
          </footer>
        </op-sidebar>
        <main class="main">
          <slot />
        </main>
      </div>
    );
  }
}
