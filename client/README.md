# Ship Compoer Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

The project assumes by default you have [nodejs](https://nodejs.org/en/) & [npm](https://www.npmjs.com/) installed


## Project structure:

This structure is inspired from the following project:
https://github.com/akveo/ngx-admin

Even though not all features are used here (like Auth/Guards, Advanced Navigation .. etc), but it can be easily changed in future to enable these modules and make it functional with very little effort

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## What is missing (in a production project)

- Code linting (e.g. eslint as tslint is deprecated!)
- Code consistent styling (e.g. prettier)
- Git hooks, and pre-commits
- Auth flows, and route guards
- State manager (e.g. Redux, or NgRx) [based on project]
- Make UI consistent by using a UI Kit/Own UI Kit, and convert global styles to components (e.g. page, page-header, input, button .. etc)
- Better validation, and better error handling
- Use env vars for secrets instead of exposed variables (but for sake of easier testing)
- Handle more edge cases (only tested happy scenario)
- Use class statics / JSON dictionary for potential translations later
- Improve Test/Mocks folder structure
- Fix npm vulnerabilities
- Improve test coverage, and test cases
