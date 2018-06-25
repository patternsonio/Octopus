import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-input',
  styleUrl: 'op-input.css',
})
export class OpInput {
  @Prop() type: string;
  @Prop() label: string;
  @Prop() disabled: boolean;
  @Prop() id: string;
  render() {
    return (
      <div class="op-input__wrap">
        <op-label>
          <span class="op-input__text">{this.label}</span>
          <input id={this.id || null} class="op-input" type={this.type} />
        </op-label>
      </div>
    );
  }
}
