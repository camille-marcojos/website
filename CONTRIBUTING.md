# Contributing to She.Codes Website

## Table of Contents

<!-- [Code of Conduct](#code-of-conduct) -->

[I don't want to read this whole thing... I just have a question](#i-don't-want-to-read-this-whole-thing-i-just-have-a-question)

[What to Know Before Getting Started](#what-to-know-before-getting-started)

[How To Contribute](#how-to-contribute)

* [Beginner's Walkthrough](#beginner's-walkthrough)

[Style Guideline](#style-guidelines)

* [JavaScript Style Guide](#javascript-style-guide)
  * [Linting Configurations](#linting-configurations)
  * [Coding Standards and Practices](#coding-standards-and-practices)
* [Branch Naming](#branch-naming)
* [Commit Messages](#commit-messages)

## I don't want to read this whole thing... I just have a question

The best way to get questions answered is to reach out to the She.Codes Projects Committee via [Discord](https://discord.gg/y4SRsjP45S).

## What to Know Before Getting Started

We are a small team working to create a website for the She.Codes club at Pasadena City College.
Currently we are using JavaScript, Node, React, and Next.js to build our website.
We welcome everyone who wants to help, whether you are an experienced coder or are brand new and hoping to learn web development skills.

## How to Contribute

### Beginner's Walkthrough

**1. Figure out what to work on.**

* Checkout the [issues](https://github.com/She-Codes-PCC/website/issues) to see if there is a task you wish to work on. If you already have a task in mind, see if its already listed in the issues.
  * If the issue is already listed and there are no assignees, assign yourself to it. If there is already one or more assignees you can either reach out to see if you can help or find another task.
  * If the issue is not listed, create one and add yourself as an assignee.
* If you are still not sure where to start just reach out to us on discord!

**2. Create a branch.**

* Create a branch off the master branch and make sure to follow the [branch naming](#branch-naming) style guide to include any possible tags and the issue number.
* IMPORTANT: Make sure you move into your new branch before you start making changes.

**3. Make your changes.**

* Make sure you are familiar with the [style guidelines](#style-guidelines) when coding so that we can ensure our code is as uniform and organized as possible.
* When your code is ready and tested stage your changes.

**4. Stage & Commit.**

* Don't commit incomplete work. Make sure you complete any relevant work and test it. That being said, try to keep your commits small and frequent.
* Make sure you have quality commit messages. Checkout [commit message](#commit-message) guide lines if your unsure about the best practices for commit messages.

**5. Push & Pull.**

* When your code is ready for feedback push your branch remotely and create a pull request so it can be reviewed by our team.
* Once 2 reviewers approve your pull request we will merge it to the master.
* Make sure to keep an eye on any comments or updates on your pull request in case the reviewers need you to make some changes or adjustments before merging your branch.
* If it is taking a while for us to review your pull request, go ahead and send us a message or ping us on discord.

## Style Guidelines

### JavaScript Style Guide

#### Linting Configurations

This project includes configurations that sets up the following:

* [EditorConfig](https://editorconfig.org)
* [Prettier](https://prettier.io) (formatter, reads from `.prettierrc.json` and mostly `.editorconfig`)
* [ESLint](https://eslint.org) (JS linter)
* [Stylelint](https://stylelint.io) (CSS linter)
* VSCode (integration with the previous tools via extensions and json files in `./.vscode`)

Some nifty features:

* Automatically fix formatting issues (tabs instead of spaces, etc.) with Prettiter and the EditorConfig config
* Automatically fix JS linting issues (sort `import` statements, use `let` instead of `var`, etc.)
* Automatically fix CSS linting issues (wrong units, duplicate statements, etc.)
* Configured [VSCode tasks](https://code.visualstudio.com/docs/editor/tasks)
  * Start NextJS Server
  * Fix formatting errors
  * Fix JS and CSS linting errors
* Configured [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts)
  * `yarn run lint` to fix formatting errors
  * `yarn run format` to fix js / css linting errors

There are complimentary tools like [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), but they are not as important as the tools that I have currently setup

#### Coding Standards and Practices

* Use the DRY principle (Don't Repeat Yourself)
* Clean code should be self-commenting
  * use comments only to explain complex functions or code that may not be obvious
* Avoid Inline CSS when possible
<!-- add more here? -->

### Branch Naming

* Start branch name with group word if applicable
  * i.e. bug-, wip-
* Use issue tacker ID next
  * i.e. bug-87-fix-broken-image
* use hyphen separators as seen in above examples

### Commit Messages

* Use present tense ("***Add*** feature" not "~~Added~~ feature")
* Use the imperative mood ("***Move*** cursor to..." not "~~Moves~~ cursor to...")
* Limit first(subject) line to 50 characters or less
* Separate subject from body with a blank line
* Capitalize the subject line
* Do not end subject line with period
* Wrap the body at 72 characters
* Use body to explain what and why vs how
* Reference [this post](https://cbea.ms/git-commit/) for more help and guidelines for good commit messages
