📂 JS Toolkit Pro: File Breakdown

=== array.js ===
// Array utilities

export function uniqueArray(arr) {
  return [...new Set(arr)];
}

export function chunkArray(arr, size) {
  return arr.reduce((result, _, i) =>
    i % size ? result : [...result, arr.slice(i, i + size)], []);
}


=== string.js ===
// String utilities

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function kebabCase(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}


=== number.js ===
// Number utilities

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function isEven(n) {
  return n % 2 === 0;
}


=== index.js ===
export * from './utils/array.js';
export * from './utils/string.js';
export * from './utils/number.js';


=== README.md ===
# 🧰 JS Toolkit Pro: Modern JavaScript Utilities & Components

A modular and efficient utility toolkit for JavaScript developers. This project provides reusable, framework-agnostic functions for string, number, and array manipulation — all in one well-structured repo.

## 📦 Structure

```
src/
├── utils/
│   ├── array.js      # Functions for working with arrays
│   ├── string.js     # String formatting and conversion
│   └── number.js     # Number helpers like clamp and isEven
└── index.js          # Master entry point
```

## ✨ Utilities Included

- ✅ `uniqueArray` and `chunkArray`
- 🔠 `capitalize` and `kebabCase`
- 🔢 `clamp` and `isEven`

## 🚀 Usage Example

```js
import { capitalize, isEven, uniqueArray } from './src/index.js';

console.log(capitalize("hello")); // Hello
console.log(isEven(4));           // true
console.log(uniqueArray([1,1,2])); // [1,2]
```

## 📄 License

MIT © Codex1ntech

