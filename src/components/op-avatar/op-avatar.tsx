import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-avatar',
  styleUrl: 'op-avatar.css',
})
export class OPAvatar {
  @Prop() src: string;
  render() {
    return (
      <div class="op-avatar" style={{ backgroundImage: `url(${this.src})` }}>
        <slot />
      </div>
    );
  }
}
