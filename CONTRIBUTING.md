**These are just instructions to add to the final contributing file**

## Install VS Code extensions

### [Download VS Code](https://code.visualstudio.com/)

<br>

### 1. Open the repository in VS Code

You should get a prompt to "install the recommended extensions for this repository"

- click install

### What am I agreeing to install?

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier Code Formatting](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

<br>

## Install Dependancies

### 1. Check if yarn is installed `yarn --version`

- See `command not found: yarn` install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
  <br>
- See a version number? move onto "Learn how to check for errors/warnings"

<br>

### 2. Install dependancies `yarn install`

### What am I agreeing to install?

- Check the package.json file for a list of dependancies

  <br>

## How to check & fix errors/warnings

<!-- Video -->

### How to open the problems tool

- `shift + command/ctrl + M` or `view > Problems`

<br>

### What happens when I save the file?

- Check out the comments in the .vscode/settings.json file for info

<br>

### What happens when I click the yellow light bulb?

- Click on the lightbulb to see options
  - Do not disable errors/warnings. This could cause bugs

<br>

### What does this error mean?

- Hover over the error
- Click on eslint("link") to see descriptions that can help you debug

<br>

### I'd rather use some cool scripts:

- `yarn run format`
  - Show formatting errors
- `yarn run format:fix`
  - Fix formatting errors
- `yarn run lint`
  - Show linting errors (JS and CSS)
- `yarn run lint:fix`
  - Fix fixable linting errors (JS and CSS)

<br>

Have fun!
<br>
