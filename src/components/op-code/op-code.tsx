import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-code',
  styleUrl: 'op-code.css',
})
export class OPcode {
  @Prop() content: string;
  @Prop() nomargin: boolean;
  @Prop() label: string;
  render() {
    return (
      <div>
        {this.label && <op-label>{this.label}</op-label>}
        <input
          readonly
          value={this.content}
          class={{
            'op-code-content': true,
            'op-code--nomargin': this.nomargin,
          }}
        />
      </div>
    );
  }
}
