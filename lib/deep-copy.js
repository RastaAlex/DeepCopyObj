'use strict';

function deepCopyObj(original) {
    const result = {};
    let value;
    
    if (typeof original !== 'object' || original === null) {
        return original;
    }
    
    for (const key of Object.keys(original)) {
        value = original[key];
        
        result[key] = deepCopyObj(value);
    }
    
    return result;
}

module.exports = deepCopyObj;
