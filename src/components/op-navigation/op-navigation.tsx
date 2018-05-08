import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-navigation',
  styleUrl: 'op-navigation.css',
})
export class OPNavigation {
  @Prop() level: number;
  render() {
    return (
      <div
        class={{
          'op-navigation': true,
          'op-navigation-level--two': this.level == 2,
        }}
      >
        <slot />
      </div>
    );
  }
}
