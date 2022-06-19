# UI Component library for iperka 🧩

React component library for all iperka apps using React and TypeScript.

[Screenshots](__screenshots__/)

[Chromatic Library](https://www.chromatic.com/library?appId=62aece68e29ccfa98f49e265)

## Install ⚙

In order to work the GitHub package registry must be added. [See docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

```bash
$ yarn add @iperka/iui@latest
```

## Usage 🎈

> Note that the instructions for using your library are slightly different if you published to a private repository. Everyone (aside from your own machine) who tries to import it is going to get a 404 Not Found error if they are not authorized.
>
> Those users also need to add a `~/.npmrc` file with the same information. To be more secure however you can provide those users with an access token that has only read privileges, not write.
>
> (From this point onward we will presume you have completed that step, or are working with a public repository.)

Since we have created a component library using React and Typescript, we are presuming that the consumers of our library will be using those tools as well. Technically all of our type files (`.d.ts`) are supplemental: meaning they are simply ignored if working with standard Javascript, so it's not necessary to use Typescript to use our library. The types are simply there if desired.

For our example we will use it however so that we can confirm that they are working properly. We will initialize a React app using one of the most popular and simple methods: Create React App.

Run the following command in a new directory:

(Remember we are simulating other users downloading and installing our library, so this project should be completely separate from the library itself)

```bash
$ yarn create react-app my-app --template typescript
$ cd my-app
```

Open the new my-app directory that is created and run:

```bash
$ yarn start
```

Confirm that you are able to open and load the default application screen on `localhost:3000` (or whatever port it opens on).

Now comes the test for our library. From the root directory of your new `my-app` project, run the following command:

```bash
$ yarn add @iperka/iui
```

Presuming your tokens and configuration are set up properly, everything will install correctly (if there are any issues, revisit the example for the `~/.npmrc` config.)

Import the library into the project and start adding components.

```tsx
import { Button } from "@iperka/iui";

const Example = () => {
  return <Button>Hello world</Button>;
};
```

## Development 🙇‍♂️

There are several predefined scripts that allow for easy development.

1. Clone this repository.
2. Install all required modules with `yarn`.
3. Start Storybook with `yarn storybook`.
4. Create or adjust components and watch life changes in storybook.

Disclaimer! If you are using a Window computer **(I don't know why)**. Setting the NODE_ENV value via script may fail, just run `npm i -g win-node-env` and try again, this should solve the issue.

## Available scripts 🚀

### Build

This script builds the library for production and creates all files in the `dist` folder.

```bash
$ yarn rollup
```

### Test

The test script runs all tests.

```bash
$ yarn test
```

### Storybook

The storybook script starts the storybook server. This is useful for development and testing.

```bash
$ yarn storybook
```

## Creating a new component 📦

In order to create a new component you can use the following command:

```bash
$ yarn hygen component new MyComponent
```

This will automatically create a new component with the structure described in the next section.

## Component Structure 🚧

To prevent nasty circular dependencies every component and structure includes a `index.{ts,tsx}` file which exports the required parts. Every other file depending on a exported function should include the `index` file only!

```bash
src/
├── components/
│   ├── Button/
│   │   ├── Button.stories.tsx # Defines storybook stories
│   │   ├── Button.test.tsx # Jest tests for this component
│   │   ├── Button.tsx # Component file
│   │   ├── Button.types.ts # Exports interface with props and states
│   │   └── index.ts # Exports component file
│   └── index.ts # Exports all components with name
└── index.ts # Exports all
```
