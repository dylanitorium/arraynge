# quickloop

Make a range array from an int for those times when you just needa loop over numbers

## installation

```bash
  $ npm install --save quickloop
```

or

```bash
  $ yarn add quickloop
```

## usage

```js

const quickloop = require('quickloop');

const range = quickloop(5); // [0, 1, 2, 3, 4]

const offsetRange = quickloop(5, 2); // [2, 3, 4, 5, 6];
```


capiche?