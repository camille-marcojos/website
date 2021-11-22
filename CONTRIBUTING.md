These are just instructions to add to the final contributing file

## Install Dependancies

### 1. Check if yarn is installed `yarn --version`

- See a version number? move onto step 2)
  <br>
- See `command not found: yarn` install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

### 2. Install dependancies `yarn install`

<br>

## Learn how to check for errors/warnings

### 1. Open problems tool

- shift + command/ctrl + M
  <br>
  or
- view > Problems

### 2. Learn how to see problems

- Open test.js

- Should see the following errors (red 'x' w/ circle) & warnings ('!' w/ triangle )

### 3. Learn fix on save

- Open test.css

- Should see the following errors & warnings

- Save test.css

- Problems should be fixed

Note: Learn how this setting works in the .vscode/settings.json file.

### 4. Check out what happens when you hover over an error/warning

- Hover over the red 'x' or yellow '!' should see a a lightbulb. Click on the lightbulb to see options
  - Note: do not disable errors/warnings
- Click on eslint(links) to see descriptions that can help you debug

<br>

## Scripts

- `yarn run format`
  - Show formatting errors
- `yarn run format:fix`
  - Fix formatting errors
- `yarn run lint`
  - Show linting errors (JS and CSS)
- `yarn run lint:fix`
  - Fix fixable linting errors (JS and CSS)
