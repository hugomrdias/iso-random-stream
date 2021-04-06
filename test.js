'use strict'

const test = require('tape')
const { randomStream, randomBytes } = require('./src')

const consumeInfinity = (
  /** @type {test.Test} */ t,
  /** @type {_Readable.Readable} */ stream
) => {
  let count = 0
  const n = 10
  let size = 0

  stream
    .on('data', (buf) => {
      size += buf.length
      if (++count === n) {
        stream.pause()
        stream.emit('end')
      }
    })
    .on('end', () => {
      t.is(size, 16384 * 10)
    })
}

test('main', (t) => {
  t.plan(1)
  const stream = randomStream()

  consumeInfinity(t, stream)
})

test('`size` option', (t) => {
  t.plan(1)
  const stream = randomStream(100)
  let size = 0

  stream
    .on('data', (buf) => {
      size += buf.length
    })
    .on('end', () => {
      t.is(size, 100)
    })
})

test('`size` option = 0', (t) => {
  t.plan(1)
  const stream = randomStream(0)
  let size = 0

  stream
    .on('data', (buf) => {
      size += buf.length
    })
    .on('end', () => {
      t.is(size, 0)
    })
})

test('`size` option = NaN', (t) => {
  t.plan(1)
  const stream = randomStream(NaN)

  consumeInfinity(t, stream)
})

test('`size` option = undefined', (t) => {
  t.plan(1)
  const stream = randomStream()

  consumeInfinity(t, stream)
})

test('`size` greater than max value 65536', (t) => {
  t.plan(1)
  const buffer = randomBytes(65539 * 1000)

  t.is(buffer.byteLength, 65539 * 1000)
})
