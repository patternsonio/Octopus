import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'op-headline',
  styleUrl: 'op-headline.css',
})
export class Headline {
  @Element() host: HTMLElement;
  @Prop() level: number = 1;
  render() {
    const Element = `h${this.level}`;

    return (
      <Element class={'op-headline op-headline-' + this.level}>
        <slot />
      </Element>
    );
  }
}
