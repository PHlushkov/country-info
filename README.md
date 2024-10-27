# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# Installation instructions

## Clone the repository
git clone <your_repository_link>

## Go to the project directory
cd country-info

# Description

Install dependencies: npm install
To run the application in development mode, run: npm run dev
To build the application for production, run: npm run build

Libraries Used: Vue 3, Vite, Vue Router, Axios, tailwindcss, ESLint and Prettier for code formatting

# Prettier Configuration

The Prettier configuration file is located at the root of the project as  `.prettirrc`.

You can use the Launchpad manuals in the command line. That's all, all the commands: npx prettier --write .

# ESLint

The project uses two configuration files for ESLint:

    1. eslint.config.js:
        Uses the @eslint/js and eslint-plugin-vue plugins to lint JavaScript and Vue files.
        Supports global variables from the browser.
        Includes configurations for TypeScript and Vue.
    2. .eslintrc.json:
        Extends the default ESLint and Vue configurations.
        Configures rules for handling imports in accordance with the Feature-Sliced ​​Design (FSD) architecture.
        Uses plugins to check import paths and layer compliance.

To run the linter and check your code, run: npx eslint .


# Feature-Sliced ​​Design (FSD)

Feature-Sliced ​​Design (FSD) is a design methodology that emphasizes separating application functionality into independent and reusable parts. This architectural model helps organize code more efficiently, making it easier to maintain and evolve.

### FSD Principles

1. **Functionality Layer**: Each functional part of the application is organized into a separate layer. This helps to clearly separate different aspects of the application and simplify their testing.

2. **Business Logic Isolation**: All business rules and logic are in one place, which avoids code duplication and simplifies support.

3. **Component Reuse**: Components and modules can be easily reused in different parts of the application, which speeds up development.

4. **Simplified Code Navigation**: The project structure becomes more understandable and predictable, which makes it easier to navigate and find the files you need.