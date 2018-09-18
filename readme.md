# iso-random-stream [![NPM Version](https://img.shields.io/npm/v/random-bytes-stream-iso.svg)](https://www.npmjs.com/package/random-bytes-stream-iso) [![NPM Downloads](https://img.shields.io/npm/dt/random-bytes-stream-iso.svg)](https://www.npmjs.com/package/random-bytes-stream-iso) [![NPM License](https://img.shields.io/npm/l/random-bytes-stream-iso.svg)](https://www.npmjs.com/package/random-bytes-stream-iso) [![Build Status](https://travis-ci.org/hugomrdias/random-bytes-stream-iso.svg?branch=master)](https://travis-ci.org/hugomrdias/random-bytes-stream-iso) [![codecov](https://codecov.io/gh/hugomrdias/random-bytes-stream-iso/badge.svg?branch=master)](https://codecov.io/gh/hugomrdias/random-bytes-stream-iso?branch=master)

> Random bytes stream for node and browser. Uses [crypto.randomBytes(size[, callback])](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) in node and [Crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) in the browser.

## Install

```
$ npm install iso-random-stream
```

## Usage

```js
const randomStream = require('iso-random-stream');

randomStream('100').pipe(process.stdout);
```

## API

### randomBytesStreamIso(size)

Returns a [`stream.Readable`](https://nodejs.org/api/stream.html#stream_readable_streams). By default, it produces infinite data.

#### size

Type: `number`
Default: `Infinity`

Number of random bytes to produce.

## License

MIT © [Hugo Dias](http://hugodias.me)
