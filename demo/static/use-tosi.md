# react-tosijs

[github](https://github.com/tonioloewald/react-xinjs#readme) | [npm](https://www.npmjs.com/package/react-tosijs) | [tosijs](https://tosijs.net)

This is a tiny helper module for integrating tosijs with React (or vice versa).

It provides two very useful things:

## `useTosi()`

`useTosi` allows you to use [tosijs](https://tosijs.net) as your state management system for React
elements. This is insanely simpler than dealing with hooks and providers, allows
you to integrate code libraries with React without complex adapters, and just makes
life better in general.

## `reactWebComponents` proxy

`reactWebComponents.fooBar` gives you a react functional component for generating
`<foo-bar>` elements. Since [tosijs](https://tosijs.net) makes it super easy to create web-components,
and also provides a library [tosijs-ui](https://ui.tosijs.net) with lots of useful web-components, and also
lets you use [tosijs blueprints](https://tosijs.net/?blueprint-loader.ts) to dynamically load web-components as needed,
this is also a Very Good Thing™.
