# ServicesExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Working of Application
This is a sample application where I've tried to impliment service to supply data to different components and handle communication amoung them. 
- First create components, here we have 2 components, Products and checkout.
- Now create a service to supply data to these components.
- create a model class and use that to create multiple products inside service class. These products serve as data to the components as we are not using any api to get data.
- now inject the service class inside component constructors. 
- use the getProducts() method to get the data and handle changes inside components.