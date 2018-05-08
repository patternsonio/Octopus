import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'op-kitchensink',
})
export class OPKitchensink {
  render() {
    return (
      <div>
        <op-header>
          <op-headline level={1}>This is a headline</op-headline>
          <op-button>And I am the button</op-button>
        </op-header>
        <op-content>
          <op-headline level={1}>Headline1</op-headline>
          <op-headline level={2}>Headline2</op-headline>
          <op-headline level={3}>Headline3</op-headline>
          <op-headline level={4}>Headline4</op-headline>
          <op-headline level={5}>Headline5</op-headline>
          <op-link href="https://lassediercks.de">
            This is a normal link
          </op-link>
          <op-input />
          <op-input label="Input with label" />
          <op-button>Normal Button</op-button>
          <op-button type="ghost">Ghost Button</op-button>
          <op-label>This is a Paragraph</op-label>
          <op-paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            consequuntur veritatis inventore, ipsum ullam aliquam illum
            voluptatum voluptates officiis, sit in nostrum quo laudantium maxime
            tenetur natus. Debitis, suscipit, eveniet.
          </op-paragraph>
          <op-list>
            <op-list-item>HI</op-list-item>
            <op-list-item>Sup</op-list-item>
            <op-list-item>I'm a list</op-list-item>
            <op-list-item>A long list</op-list-item>
          </op-list>
          <op-card />
          <op-code content="<op-card />" />
          <op-quote>Every second quote on the internet is fake</op-quote>
          <op-navigation>
            <op-navigation-item>Nav Item</op-navigation-item>
            <op-navigation-item>Nav Item</op-navigation-item>
            <op-navigation-item>Nav Item</op-navigation-item>
            <op-navigation-item>Nav Item</op-navigation-item>
          </op-navigation>

          <op-image src="https://lh3.googleusercontent.com/DrWjEQfCuM_EE0PuOQ2Tm_WRnU8dZE2c5yAKwexsm2w91QOZF702Qm7-IMJz5e2tw54rpxpGO06ahgsT1m5meiy4ZP3A5_OKtGaPCU23O7_OsIVK6WtoxKos40it2DR-g6TRp7zN07B6Ft1cf798TJ7pSLnT7eGhRQZoAaFdJtqw1CIkI8ggjJraI5im6GjURbYWTADWM_HGEjVHmlqwpisco-E54S2-_OEPcatZ0CIIfNNpXuBUnkhZWBFzd4yGsFGA2qfmBHpr-6-NEaFcBOTHayVaUkeAamyFyD2N7A0qpOrdTRRwWN9SUpj_RXFPJtpfipgeSQey3ulY7j4aPGEfmIomjb9l_LlIJu4BXrsdx3_zryN94lkbnwI5cifWHaNbmQ2l_HIDa9DYCHDaZEEYWUwPpm0hErpjGhEHOMAfFQ5IkYmNfjtkeyf1T8V67N4bWYlswf30yAYpqDNnSR-kCN7k5CZqZv-4thrQhFuHZEHcczYwbT2nwbILOr63mVfi8KRkKKLG9H5AXSyJuC8BkG5PNrVOlnEaicCVPhKhDxoi3G3Zmx28Y9aTa2Y_jlioOPLVXaW4UmMueMAbQDVDRy42IaYueFVL2gIa=w165-h220-no" />
        </op-content>
      </div>
    );
  }
}
