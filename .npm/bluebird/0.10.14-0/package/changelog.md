## 0.10.9-0 (2013-11-27)

Bugfixes:

 - Promise.props now takes a [thenable-for-collection](https://github.com/petkaantonov/bluebird/blob/f41edac61b7c421608ff439bb5a09b7cffeadcf9/test/mocha/props.js#L197-L217)
 - All promise collection methods now reject when a promise-or-thenable-for-collection turns out not to give a collection

## 0.10.8-0 (2013-11-25)

Features:

 - All static collection methods take thenable-for-collection

## 0.10.7-0 (2013-11-25)

Features:

 - throw TypeError when thenable resolves with itself
 - Make .race() and Promise.race() forever pending on empty collections

## 0.10.6-0 (2013-11-25)

Bugfixes:

 - Promise.resolve and PromiseResolver.resolve follow thenables too.

## 0.10.5-0 (2013-11-24)

Bugfixes:

 - Fix infinite loop when thenable resolves with itself

## 0.10.4-1 (2013-11-24)

Bugfixes:

 - Fix a file missing from build. (Critical fix)

## 0.10.4-0 (2013-11-24)

Features:

 - Remove dependency of es5-shim and es5-sham when using ES3.

## 0.10.3-0 (2013-11-24)

Features:

 - Improve performance of `Promise.method`

## 0.10.2-1 (2013-11-24)

Features:

 - Rename PromiseResolver#asCallback to PromiseResolver#callback

## 0.10.2-0 (2013-11-24)

Features:

 - Remove memoization of thenables

## 0.10.1-0 (2013-11-21)

Features:

 - Add methods `Promise.resolve()`, `Promise.reject()`, `Promise.defer()` and `.resolve()`.

## 0.10.0-1 (2013-11-17)

## 0.10.0-0 (2013-11-17)

Features:

 - Implement `Promise.method()`
 - Implement `.return()`
 - Implement `.throw()`

Bugfixes:

 - Fix promises being able to use themselves as resolution or follower value

## 0.9.11-1 (2013-11-14)

Features:

 - Implicit `Promise.all()` when yielding an array from generators

## 0.9.11-0 (2013-11-13)

Bugfixes:

 - Fix `.spread` not unwrapping thenables

## 0.9.10-2 (2013-11-13)

Features:

 - Improve performance of promisified functions on V8

Bugfixes:

 - Report unhandled rejections even when long stack traces are disabled
 - Fix `.error()` showing up in stack traces

## 0.9.10-1 (2013-11-05)

Bugfixes:

 - Catch filter method calls showing in stack traces

## 0.9.10-0 (2013-11-05)

Bugfixes:

 - Support primitives in catch filters

## 0.9.9-0 (2013-11-05)

Features:

 - Add `Promise.race()` and `.race()`

## 0.9.8-0 (2013-11-01)

Bugfixes:

 - Fix bug with `Promise.try` not unwrapping returned promises and thenables

## 0.9.7-0 (2013-10-29)

Bugfixes:

 - Fix bug with build files containing duplicated code for promise.js

## 0.9.6-0 (2013-10-28)

Features:

 - Improve output of reporting unhandled non-errors
 - Implement RejectionError wrapping and `.error()` method

## 0.9.5-0 (2013-10-27)

Features:

 - Allow fresh copies of the library to be made

## 0.9.4-1 (2013-10-27)

## 0.9.4-0 (2013-10-27)

Bugfixes:

 - Rollback non-working multiple fresh copies feature

## 0.9.3-0 (2013-10-27)

Features:

 - Allow fresh copies of the library to be made
 - Add more components to customized builds

## 0.9.2-1 (2013-10-25)

## 0.9.2-0 (2013-10-25)

Features:

 - Allow custom builds

## 0.9.1-1 (2013-10-22)

Bugfixes:

 - Fix unhandled rethrown exceptions not reported

## 0.9.1-0 (2013-10-22)

Features:

 - Improve performance of `Promise.try`
 - Extend `Promise.try` to accept arguments and ctx to make it more usable in promisification of synchronous functions.

## 0.9.0-0 (2013-10-18)

Features:

 - Implement `.bind` and `Promise.bind`

Bugfixes:

 - Fix `.some()` when argument is a pending promise that later resolves to an array

## 0.8.5-1 (2013-10-17)

Features:

 - Enable process wide long stack traces through BLUEBIRD_DEBUG environment variable

## 0.8.5-0 (2013-10-16)

Features:

 - Improve performance of all collection methods

Bugfixes:

 - Fix .finally passing the value to handlers
 - Remove kew from benchmarks due to bugs in the library breaking the benchmark
 - Fix some bluebird library calls potentially appearing in stack traces

## 0.8.4-1 (2013-10-15)

Bugfixes:

 - Fix .pending() call showing in long stack traces

## 0.8.4-0 (2013-10-15)

Bugfixes:

 - Fix PromiseArray and its sub-classes swallowing possibly unhandled rejections

## 0.8.3-3 (2013-10-14)

Bugfixes:

 - Fix AMD-declaration using named module.

## 0.8.3-2 (2013-10-14)

Features:

 - The mortals that can handle it may now release Zalgo by `require("bluebird/zalgo");`

## 0.8.3-1 (2013-10-14)

Bugfixes:

 - Fix memory leak when using the same promise to attach handlers over and over again

## 0.8.3-0 (2013-10-13)

Features:

 - Add `Promise.props()` and `Promise.prototype.props()`. They work like `.all()` for object properties.

Bugfixes:

 - Fix bug with .some returning garbage when sparse arrays have rejections

## 0.8.2-2 (2013-10-13)

Features:

 - Improve performance of `.reduce()` when `initialValue` can be synchronously cast to a value

## 0.8.2-1 (2013-10-12)

Bugfixes:

 - Fix .npmignore having irrelevant files

## 0.8.2-0 (2013-10-12)

Features:

 - Improve performance of `.some()`

## 0.8.1-0 (2013-10-11)

Bugfixes:

 - Remove uses of dynamic evaluation (`new Function`, `eval` etc) when strictly not necessary. Use feature detection to use static evaluation to avoid errors when dynamic evaluation is prohibited.

## 0.8.0-3 (2013-10-10)

Features:

 - Add `.asCallback` property to `PromiseResolver`s

## 0.8.0-2 (2013-10-10)

## 0.8.0-1 (2013-10-09)

Features:

 - Improve overall performance. Be able to sustain infinite recursion when using promises.

## 0.8.0-0 (2013-10-09)

Bugfixes:

 - Fix stackoverflow error when function calls itself "synchronously" from a promise handler

## 0.7.12-2 (2013-10-09)

Bugfixes:

 - Fix safari 6 not using `MutationObserver` as a scheduler
 - Fix process exceptions interfering with internal queue flushing

## 0.7.12-1 (2013-10-09)

Bugfixes:

 - Don't try to detect if generators are available to allow shims to be used

## 0.7.12-0 (2013-10-08)

Features:

 - Promisification now consider all functions on the object and its prototype chain
 - Individual promisifcation uses current `this` if no explicit receiver is given
 - Give better stack traces when promisified callbacks throw or errback primitives such as strings by wrapping them in an `Error` object.

Bugfixes:

 - Fix runtime APIs throwing synchronous errors

## 0.7.11-0 (2013-10-08)

Features:

 - Deprecate `Promise.promisify(Object target)` in favor of `Promise.promisifyAll(Object target)` to avoid confusion with function objects
 - Coroutines now throw error when a non-promise is `yielded`

## 0.7.10-1 (2013-10-05)

Features:

 - Make tests pass Internet Explorer 8

## 0.7.10-0 (2013-10-05)

Features:

 - Create browser tests

## 0.7.9-1 (2013-10-03)

Bugfixes:

 - Fix promise cast bug when thenable fulfills using itself as the fulfillment value

## 0.7.9-0 (2013-10-03)

Features:

 - More performance improvements when long stack traces are enabled

## 0.7.8-1 (2013-10-02)

Features:

 - Performance improvements when long stack traces are enabled

## 0.7.8-0 (2013-10-02)

Bugfixes:

 - Fix promisified methods not turning synchronous exceptions into rejections

## 0.7.7-1 (2013-10-02)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.7-0 (2013-10-01)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.6-0 (2013-09-29)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.5-0 (2013-09-28)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.4-1 (2013-09-28)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.4-0 (2013-09-28)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.3-1 (2013-09-28)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.3-0 (2013-09-27)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.2-0 (2013-09-27)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.1-5 (2013-09-26)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.1-4 (2013-09-25)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.1-3 (2013-09-25)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.1-2 (2013-09-24)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.1-1 (2013-09-24)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.1-0 (2013-09-24)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.0-1 (2013-09-23)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.7.0-0 (2013-09-23)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.5-2 (2013-09-20)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.5-1 (2013-09-18)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.5-0 (2013-09-18)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.4-1 (2013-09-18)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.4-0 (2013-09-18)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.3-4 (2013-09-18)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.3-3 (2013-09-18)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.3-2 (2013-09-16)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.3-1 (2013-09-16)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.3-0 (2013-09-15)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.2-1 (2013-09-14)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.2-0 (2013-09-14)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.1-0 (2013-09-14)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.6.0-0 (2013-09-13)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.9-6 (2013-09-12)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.9-5 (2013-09-12)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.9-4 (2013-09-12)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.9-3 (2013-09-11)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.9-2 (2013-09-11)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.9-1 (2013-09-11)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.9-0 (2013-09-11)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.8-1 (2013-09-11)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.8-0 (2013-09-11)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.7-0 (2013-09-11)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.6-1 (2013-09-10)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.6-0 (2013-09-10)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.5-1 (2013-09-10)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.5-0 (2013-09-09)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.4-1 (2013-09-08)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.4-0 (2013-09-08)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.3-0 (2013-09-07)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.2-0 (2013-09-07)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.1-0 (2013-09-07)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.5.0-0 (2013-09-07)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.4.0-0 (2013-09-06)

Features:

 - feature

Bugfixes:

 - bugfix

## 0.3.0-1 (2013-09-06)

Features:

 - feature

Bugfixes:

 - bugfix

