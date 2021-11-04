'use strict'
const proc = require('./Part1_ex2.js')

test('proc [] zero elements', () => {
    //Arrange
    const obj = []
     const props = ['a', 'g', 'd', 'b']

    //Act
    const result = proc(props, obj)

    //Assert
    const res = []
    expect(res).toStrictEqual(result);
});
test('proc props zero elements', () => {
    //Arrange
    const obj = [
        {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
        {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
        {x: 'Vision', y: false}
    ]
     const props = []

    //Act
    const res = proc(props, obj)

    //Assert
    const result = [{}, {}, {}]
    expect(result).toStrictEqual(res);
});


test('proc [] and props zero elements', () => {
    //Arrange
    const obj = []
    const props = []

    //Act
    const result = proc(props, obj)

    //Assert
    const res = []
    expect(res).toStrictEqual(result);
});

test('proc props with 4 elements and [] with 3 objects', () => {
    //Arrange
    const obj = [
        {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
        {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
        {x: 'Vision', y: false}
     ]
     const props = ['b', 'd', 'g', 'a']

    //Act
    const res = proc(props, obj)

    //Assert
    const result = [
        {a: 1, b: 'Thor', d: {x: 10}},
        {b: 'Hulk', a: [1,2,3], d: {x: 10}, g: false}, 
        { }
    ]
    expect(result).toStrictEqual(res);
});