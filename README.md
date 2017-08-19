[<img width="200" src="https://raw.githubusercontent.com/luisvinicius167/dutier/master/img/logo.png"/>](https://github.com/luisvinicius167/dutier)

Logger for Dutier, inspired by Redux Logger.<br/>

[![npm package](https://img.shields.io/badge/npm-0.0.1-blue.svg)](https://www.npmjs.com/package/dutier-logger)
[![CDN](https://img.shields.io/badge/cdn-0.0.1-ff69b4.svg)](https://unpkg.com/dutier-logger@0.0.1)

![dutier-logger](http://i.imgur.com/CgAuHlE.png)

Check out [Dutier](https://github.com/luisvinicius167/dutier), the async and powerfull state management solution for Javascript applications. 

### Install
* NPM: ``` npm install dutier-logger ```
* CDN: ```https://unpkg.com/dutier-logger@0.0.1```

## Getting Started
```javascript
/**
 * @name Logger
 * @description Each time you dispatch actions,
 * will log the prev state, action and nex state 
 * on your console for you
 */
  
import { applyMiddleware } from 'dutier'
import Logger from 'dutier-logger'

applyMiddleware(Logger);

```

#### License
MIT License.
