'use strict';

const mainObj = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
  }

  function deepCopyObj (original) {
    const result = {};

    for (const key of Object.keys(original)) {
      result[key] = original[key];
    }

    return result;
  }

  console.log(deepCopyObj(mainObj));

  module.exports = deepCopyObj;