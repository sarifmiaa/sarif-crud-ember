# CRUD - Sarif Mia

This README outlines the details of running and setting up of this application

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)

## Installation

- `unzip` this repository
- `cd customerio-app`
- `npm install`
- Set the `apiUrl` property to your server url at `config/environment.js`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `ember test`
- `ember test --server`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Information on App directory structure

`--components` All reusable components
`--common` Interfaces and common util functions and anything common to the application
`--fixtures` Drafts for test cases
`--routes` All routes defined in the application
`--services` Reusable services used appliaction wide
`--templates` Template files connected to route

### Things which can be improved and future work

- Managing edit of duplicate attributes
- Detailed test coverage with testing of server requests
- Mobile responsiveness
- Load data with caching mechanism while rendering list of customers
- Use ember router and build a service to redirect between application
- Add more support for accessibility if required
- Moving common used css variable to mixins and reusing the properties for easy maintainability
