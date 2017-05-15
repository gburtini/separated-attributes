separated-attributes
====================
[![Build Status](https://travis-ci.org/gburtini/separated-attributes.svg?branch=master)](https://travis-ci.org/gburtini/separated-attributes) [![Known Vulnerabilities](https://snyk.io/test/github/gburtini/separated-attributes/badge.svg)](https://snyk.io/test/github/gburtini/separated-attributes) [![npm version](https://badge.fury.io/js/separated-attributes.svg)](https://badge.fury.io/js/separated-attributes)


Very simple NPM package for working with separated attributes in HTML, e.g., `class="hello world"` -> `{ class: ['hello', 'world'] }`.

Installation
------------
`npm install --save separated-attributes`
or
`yarn add separated-attributes`

Usage
-----
```js
const separatedAttributes = require('separated-attributes');

// for getting attributes, see Potent Tools: https://github.com/gburtini/Potent-Tools-for-XPath
const attributes = getAttributes(domElement);
/*
 {
   class: 'a b c',
   name: 'bob'
 }
*/

const parsedAttributes = separatedAttributes.splitAttributes(attributes);
console.log(parsedAttributes);
/*
 {
   class: ['a', 'b', 'c'],
   name: 'bob'
 }
*/
 ```

Methods
-------
- `isSeparatedAttribute(attributeName)`: returns a truthy separator for attributeName or `false` if this is not a separated attribute.
- `splitAttribute(name, value)`: splits `value` based on the rule for attributes called `name`, e.g., classes split on spaces, media queries split on commas, styles split on semicolons.
- `splitAttributes(map)`: splits all the attributes in the map, using their key as their name.
