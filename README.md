# loopback-demo

This application is generated using [LoopBack initializer package](https://github.com/loopbackio/create-loopback).

## Steps used to generate API
I followed along with the Getting Started guide [here](https://loopback.io/doc/en/lb4/Getting-started.html).
The following steps were involved:
1. Install Loopback CLI tool lb4.
2. Use lb4 to create a new app, which I called loopback-demo.
3. Create a new HelloController using lb4's controller command.
4. Use lb4 to create a new datasource, model, repository and controller for junk.
5. Test endpoints using the auto-generated OpenAPI UI.

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```


## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://loopback.io/images/branding/powered-by-loopback/blue/powered-by-loopback-sm.png)](http://loopback.io/)
