# AGL Kittens

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Instructions
Make sure you have Node 12.16.1 LTS installed

## Code Challenge Notes

I have spend about 2-3 hours on this code challenge, and hope it is enough to earn an interview. 
You can run the project, unit tests and e2e tests with the commands below.  

I thought I would show:
* responsive design with the angular breakpointObserver in the gender.component.ts
* lazy loaded routes in app-routing.module.ts
* content projection using a generic card component in a shared module without any business logic
* a quick unit test of the petService.getCatsAlphabeticallyByOwnersGender method that will check if logic is broken (not test driven)
* an e2e test with reusable base and route components that will allow me to quickly create new tests. 
* some enums and interfaces to show I understand the importance and power of the domain.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Warning: If you see error message: `E/launcher - session not created: This version of ChromeDriver only supports Chrome version X`

Visit `chrome://settings/help` and update chrome
