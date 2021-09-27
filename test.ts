const shortList = ['one', 'two', 'three', 'one'];

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
