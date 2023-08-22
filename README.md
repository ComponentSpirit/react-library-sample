# react-library-sample

This React library is a good example of what you can expect as a deliverable from ComponentSpirit services.

It includes :
- a Javascript and Typescript-compatible library for React 17+
- a fully-functional [Storybook](https://componentspirit.github.io/react-library-sample/) to play with the library components and explain how they works
- a private NPM package that you can directly integrates in your own source code (see [Github Packages document](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry))

## Installation

First, you have to create a Github Access Token. That's a prerequisite which will allow you to get an access to the NPM Package if you are allowed to.

To create this token, go to [Personal Access Tokens settings](https://github.com/settings/personal-access-tokens/new) on your Github account.

```bash
npm login --scope=@ComponentSpirit --auth-type=legacy --registry=https://npm.pkg.github.com

# NPM will ask you these values
> Username: <Enter your Github own username>
> Password: <Enter the Personal Access Token you just created>
```

Once done, you can install the library on your project:

```bash
# With NPM
npm install @ComponentSpirit/react-library-sample

# Or with Yarn
yarn add @ComponentSpirit/react-library-sample
```

## Usage

```typescript
import { HelloWorld } from '@ComponentSpirit/react-library-sample';

export const MyComponent = () => {
  return <HelloWorld name={'world'} />;
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
