# dev-http-logger

[https://github.com/devlopersabbir/dev-http-logger](https://github.com/devlopersabbir/dev-http-logger)

#### INSTALLATION

```console
npm i dev-http-logger --save-dev
```
```console
npm install dev-http-logger --save-dev
```
or
```console
yarn add dev-http-logger --save-dev
```
```console
yarn add dev-http-logger --save
```

#### ABOUT THE PACKAGE

We can able to log our http all history like METHOD request PATH also so many thing with this middleware. It's a very simple middleware for only [NodeJs](https://nodejs.org/en). It is simple [NPM](https://www.npmjs.com/) package but trust me it's a very usefull.

#### SUMMARY

A simple logging library that combines the simple [ExpressJs](https://expressjs.com/) and [NodeJs](https//nodejs.org/en) to loggin our all HTTP request and response.

#### USAGES

```ts
import { Logger } from "dev-http-logger";
// middleware
app.use(Logger());
```

We can able to pass so many object as `Logger()` agument.
For example:

```ts
import { Logger } from "dev-http-logger";
// pass an object
app.use(
  Logger({
    origin: true,
    showHeader: true,
    purpose: "DEV",
  })
);
```

You can only use this library in your nodeJs express app.
In the below section have a full example how you can use this `logger` in your express app.

```ts
import express from "express";
import { Logger } from "dev-http-logger";

const app = express();
app.use(
  Logger({
    origin: true,
    showHeader: true,
    purpose: "DEV",
  })
);
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server is running... at ${PORT}`));
```

#### Author

This package created by [Sabbir Hossain Shuvo](https://www.showwcase.com/devlopersabbir). And the GitHub profile is [https://github.com/devlopersabbir](https://github.com/devlopersabbir).

#### LICENSE

MIT

For support just [Buy Me A Coffee](https://www.buymeacoffee.com/devlopersabbir)
[https://www.buymeacoffee.com/devlopersabbir](https://www.buymeacoffee.com/devlopersabbir)
