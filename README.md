# SWAPI Task

[![Build and Deploy](https://github.com/cchanxzy/swapi-task/actions/workflows/main.yml/badge.svg)](https://github.com/cchanxzy/swapi-task/actions/workflows/main.yml)

## Preview

This is deployed to: [https://cchanxzy.github.io/swapi-task/](https://cchanxzy.github.io/swapi-task/).

![Home page preview](preview/home-page.png 'Home page')

## Description

Demo project using [https://swapi.dev/](https://swapi.dev/)

Built using:

- Create React App
- Chakra UI
- React Testing Library
- Cypress

## Commands

`yarn start` to run locally

`yarn build` to build

`yarn test` to run tests

`yarn cypress:run` to run cypress tests

## Improvements

If I had more time I would:

- **Error handling**: Currently fetch errors are logged in the console, but the user does not know if an error has occurred. User experience would be improved if the user knows an error has happened.
- **Tests**: I wrote some very basic tests but there could definitely be more. I didn't include any unit tests because there wasn't any complex logic that I thought needed to be tested. At this point I think E2E and integrations tests provide good coverage, and I would have went in that direction when writing more tests. I could possible have added some unit tests for api calls, but the logic is quite simple, and a test wouldn't have checked much imo.
- **Styling**: I would improve styling since it is quite basic at the moment.
