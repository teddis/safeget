# Safeget

This is a compile-time safe accessor method similar to Lodash _.get(). Lodash and several knock-offs continue to use a rely on the very dangerous practice of specifying a string path which can lead to unintended regression and errors. String paths are not checked at compile time and thus are hidden. Then later, if or when the underlying path changes, your code will silently fail.

Safeget lets you specify a wrapped function that returns the resolved value of  your access safely. If an error occurs, your default value will be supplied instead as expected (or undefined if you don't specify one). This allows compile-time checking of

## Install

```
npm install safeget
```

##  Usage

```
import safeget = require('safeget');

const a = {e: "tomato"}

console(safeget(() => a.b.c, 'carrot')); # outputs => "carrot"
console(safeget(() => a.e, 'carrot')); # outputs => "tomato"
console(safeget(() => a.b, 'carrot')); # outputs => undefined
console(safeget(() => a, 'carrot')); # outputs => {e: "tomato"}
```

