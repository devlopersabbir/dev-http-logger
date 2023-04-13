███████╗██╗  ██╗███████╗██╗     ██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
  ██╔════╝██║  ██║██╔════╝██║     ██║     ██╔═══██╗██╔══██╗████╗ ████║██╔════╝
  █████╗  ███████║█████╗  ██║     ██║     ██║   ██║██████╔╝██╔████╔██║█████╗  
  ██╔══╝  ██╔══██║██╔══╝  ██║     ██║     ██║   ██║██╔══██╗██║╚██╔╝██║██╔══╝  
  ██║     ██║  ██║███████╗███████╗███████╗╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
  ╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝

# dev-http-logger
A Powerful HTTP Request Logging Middleware for Node.js

  [![npm](https://img.shields.io/npm/v/dev-http-logger?style=flat-square&logo=npm)](https://www.npmjs.com/package/dev-http-logger)
  [![npm](https://img.shields.io/npm/l/dev-http-logger?style=flat-square&logo=npm)](https://github.com/devlopersabbir/dev-http-logger/blob/main/LICENSE)
  [![GitHub issues](https://img.shields.io/github/issues/devlopersabbir/dev-http-logger?style=flat-square&logo=github)](https://github.com/devlopersabbir/dev-http-logger/issues)
  [![GitHub stars](https://img.shields.io/github/stars/devlopersabbir/dev-http-logger?style=flat-square&logo=github)](https://github.com/devlopersabbir/dev-http-logger/stargazers)
  [![npm](https://img.shields.io/npm/dt/dev-http-logger?style=flat-square&logo=npm)](https://www.npmjs.com/package/dev-http-logger)

[https://github.com/devlopersabbir/dev-http-logger](https://github.com/devlopersabbir/dev-http-logger)

#### INSTALLATION

```console
$ npm i dev-http-logger --save-dev
```

```console
$ npm install dev-http-logger --save-dev
```

or

```console
$ yarn add dev-http-logger --save-dev
```

```console
$ yarn add dev-http-logger --save
```

#### ABOUT THE PACKAGE

We can able to log our http all history like METHOD request PATH also so many thing with this middleware. It's a very simple middleware for only [NodeJs](https://nodejs.org/en). It is simple [NPM](https://www.npmjs.com/) package but trust me it's a very usefull.

#### SUMMARY

A simple logging library that combines the simple [ExpressJs](https://expressjs.com/) and [NodeJs](https//nodejs.org/en) to loggin our all HTTP request and response.

#### USAGES

```ts
import logger from "dev-http-logger";
// middleware
app.use(logger());
```

We can able to pass so many thing as `logger()` agument.
For example:

```ts
import logger from "dev-http-logger";
// pass so so many arguments
app.use(logger({ origin: true, showHeader: true, purpose: EPurpose.TEST }));
```
| Name       	| Type    	| Description                                                                                                                                                                                     	|
|------------	|---------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| origin     	| boolean 	| You can pass a boolean value like `true \| false` for logging the app origin which will send `http` request.                                                                                    	|
| showHeader 	| boolean 	| If you are pass `showHeader: true \| false` then you can able to see the header. For example [jwtwebtoken](https://jwt.io/) I mean your `Bearer token`.                                         	|
| purpose    	| string  	| Purpose has an `enum` if you are using typescript then you can use this feature. In the purpose have some value like `TEST && PRODUCTION && DEV`. You can use only one value to define purpose. 	|

You can only use this library in your nodeJs express app.
In the below section have a full example how you can use this `logger` in your express app.

```ts
import express from "express";
import { logger, EPurpose } from "dev-http-logger";

const app = express();
app.use(express.json());
app.use(logger({ origin: true, showHeader: true, purpose: EPurpose.DEV }));

app.get("/", (req, res) => res.status(200).json({ message: "Hello world" }));

app.listen(5000, () => console.log(`🚀 Server is running...`));
```

#### Author

This package created by [Sabbir Hossain Shuvo](https://www.showwcase.com/devlopersabbir). And the GitHub profile is [https://github.com/devlopersabbir](https://github.com/devlopersabbir).

#### LICENSE

MIT

For support just [Buy Me A Coffee](https://www.buymeacoffee.com/devlopersabbir)
[https://www.buymeacoffee.com/devlopersabbir](https://www.buymeacoffee.com/devlopersabbir)
