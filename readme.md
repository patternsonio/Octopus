# Octopus

[![CircleCI](https://circleci.com/gh/patternsonio/Octopus/tree/master.svg?style=shield)](https://circleci.com/gh/patternsonio/Octopus/tree/master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Love and Peace](http://love-and-peace.github.io/love-and-peace/badges/base/v1.0-small.svg)](https://github.com/love-and-peace/love-and-peace/blob/master/versions/base/v1.0/en.md)

An adapting pattern library

## Run Locally

```
npm install
npm start
```

## Usage

put the library in your html:

`<script src="https://lib.patternson.io/Octopus/v/latest.js"></script>`

Put up the frame (it serves the global css variables) and start to use components

```
<op-frame>
  <op-headline>This is a Octopus Headline</op-headline>
  <op-button>Checkout the repository</op-button>
</op-frame>
```

### Specific version:

For a specific version use `https://lib.patternson.io/Octopus/v/[tag].js`

Where `[tag]` must be either `latest` or a valid semver specifier.
