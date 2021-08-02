export default function deepCopyObj(original) {
    const result = {};
    let value;
    const stack = [result, original];
    let curr;
    let base;

    if (typeof original !== 'object' || original === null) {
        return original;
    }

    while (curr = stack.pop()) {
        base = stack.pop();
        for (const key in curr) {
            value = curr[key];

            if (typeof value === 'object') {
                stack.push(base[key] = {});
                stack.push(value);
            } else {
                base[key] = value;
            }
        }
    }

    return result;
}

