import test from 'supertape';
import deepCopyObj from '..';


test('obj not equal another obj', (t) => {
    const mainObj = {
        a: 2,
        b: 5,
        c: {
          x: 7,
          y: 4,
        },
      }
    const actual = deepCopyObj(mainObj);
    const expect = {a: 2, b: 5, c: {x: 7, y: 4}};

    t.notEqual(actual, expect);
    t.end()
})

test('should not schange', (t) => {
  const mainObj = {
      a: 2,
      b: 5,
      c: {
        x: 7,
        y: 4,
      },
    }
  const actual = deepCopyObj(mainObj);
  delete actual.c.x;

  t.ok(mainObj.c.x);
  t.end()
});