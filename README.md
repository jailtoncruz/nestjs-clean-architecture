# Clean Architecture on NestJS

<p align="center">
  <a href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" target="blank">
  <img src="https://miro.medium.com/v2/resize:fit:772/1*wOmAHDN_zKZJns9YDjtrMw.jpeg" alt="Clean Architecture Image" />
  </a>
</p>

## Description

This project was created to study and implement a NestJS application with clean architecture and SOLID.

The application itself it's pretty simple, two controllers and basic logics.

## Layers

The outermost components of the application are inside the infrastructure folder (src/infraestructure), such as environment configuration, cloud providers and data providers.

The next layer is responsible for handling input, converting objects into DTOs and the presenters, and is inside the application folder (src/application), such as controllers and middlewares.

The last layer, called Core, is responsible for maintaining the business rules, such as use cases, entities and abstractions, inside the core folder (src/core).

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Stay in touch

- Author - [Jailton Cruz](https://tomcruz.dev)
