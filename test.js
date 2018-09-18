'use strict';

const test = require('tape');
const m = require('./src');

const consumeInfinity = (t, stream) => {
    let count = 0;
    const n = 10;
    let size = 0;

    stream
        .on('data', (buf) => {
            size += buf.length;
            if (++count === n) {
                stream.pause();
                stream.emit('end');
            }
        })
        .on('end', () => {
            t.is(size, 16384 * 10);
        });
};

test('main', (t) => {
    t.plan(1);
    const stream = m();

    consumeInfinity(t, stream);
});

test('`size` option', (t) => {
    t.plan(1);
    const stream = m(100);
    let size = 0;

    stream
        .on('data', (buf) => {
            size += buf.length;
        })
        .on('end', () => {
            t.is(size, 100);
        });
});

test('`size` option = 0', (t) => {
    t.plan(1);
    const stream = m(0);
    let size = 0;

    stream
        .on('data', (buf) => {
            size += buf.length;
        })
        .on('end', () => {
            t.is(size, 0);
        });
});

test('`size` option = NaN', (t) => {
    t.plan(1);
    const stream = m(NaN);

    consumeInfinity(t, stream);
});

test('`size` option = undefined', (t) => {
    t.plan(1);
    const stream = m();

    consumeInfinity(t, stream);
});
