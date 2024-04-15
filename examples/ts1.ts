import {
    test2ArrowFunc,
    test2ArrowFunc2,
    test2LongList,
    test2ShortObj,
    test2ArrowFunc3,
    test2LongList2,
    test2LongList3,
    test2NormalFunc,
    test2NormalFunc2,
    test2NormalFunc3,
    test2ShortObj2,
    test2ShortObj3,
} from './ts2';

export {
    test2ArrowFunc,
    test2ArrowFunc2,
    test2LongList,
    test2ShortObj,
    test2ArrowFunc3,
    test2LongList2,
    test2LongList3,
    test2NormalFunc,
    test2NormalFunc2,
    test2NormalFunc3,
    test2ShortObj2,
    test2ShortObj3,
} from './ts2';

console.log('Test:', {
    test2ArrowFunc,
    test2ArrowFunc2,
    test2LongList,
    test2ShortObj,
    test2ArrowFunc3,
    test2LongList2,
    test2LongList3,
    test2NormalFunc,
    test2NormalFunc2,
    test2NormalFunc3,
    test2ShortObj2,
    test2ShortObj3,
});

const shortList = ['one', 'two', 'three', 'one', 'two', 'three', 'one', 'two', 'three'];

const longLongList = [
    'one',
    'two',
    'three',
    'one',
    'one',
    'two',
    'three',
    'one',
    'one',
    'two',
    'three',
    'one',
    'one',
    'two',
    'three',
    'one',
    'one',
    'two',
    'three',
    'one',
    'one',
    'two',
    'three',
    'one',
    'one',
    'two',
    'three',
    'one',
    'one',
    'two',
    'three',
    'one',
    'one',
    'two',
    'three',
    'one',
    'one',
    'two',
    'three',
    'one',
    'one',
    'two',
    'three',
    'one',
];

export const longList = [
    'one',
    'two',
    'three',
    'one',
    'two',
    'three',
    'one',
    'two',
    'three',
    'one',
    'two',
    'three',
    'four',
];

export const shortObj = {
    one: 'one',
    two: 'two',
    three: 'three',
};

export const arrowFunc = (name: string) => {
    const newName = name;
    return newName;
};

export const arrowFunc2 = (name: string, value: string) => {
    const newName = name + value;
    return newName;
};
