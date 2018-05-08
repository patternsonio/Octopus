import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-component',
  styleUrl: 'op-component.css',
})
export class OPComponent {
  render() {
    return (
      <op-content>
        <op-headline>Component Name</op-headline>
        <op-paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          officia cumque, ipsa distinctio ad architecto! Hic minus voluptas
          corporis sint a asperiores cum fugiat esse similique. Facilis ratione
          animi esse?
        </op-paragraph>
        <op-card>
          <op-button>I am a Button</op-button>
          <op-code
            nomargin
            label="how to use"
            content="<op-button>I am a button</op-button>"
          />
        </op-card>
        <op-list label="Props">
          <op-list-item>type | string (default: bla)</op-list-item>
          <op-list-item>nomargin | boolean</op-list-item>
        </op-list>
      </op-content>
    );
  }
}
