'use strict'
const proc = require('./Part1_ex1.js')

test('proc {} zero elements', () => {
    //Arrange
    const obj = {}
    const props = ['a', 'g','d','b']

    //Act
    const res = proc(props, obj)

    //Assert
    const result = {}
    expect(result).toStrictEqual(res);
});

test('proc both [] and {} zero elements', () => {
    //Arrange
    const obj = {}
    const props = []

    //Act
    const res = proc(props, obj)

    //Assert
    const result = {}
    expect(result).toStrictEqual(res);
});

test('proc [] zero elements', () => {
    //Arrange
    const obj = {a: 'Thor', b: 1, c: "Captain America", d: {x: 10}, e: 2, f: [1,2,3]}
    const props = []

    //Act
    const res = proc(props, obj)

    //Assert
    const result = {}
    expect(result).toStrictEqual(res);
});

test('proc [] with 6 elements and {} with 4 elements ', () => {
    //Arrange
    const obj = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}}
    const props = ['b', 'd', 'g', 'a', 'c', 'z']

    //Act
    const res = proc(props, obj)

    //Assert
    const result = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}}
    expect(result).toStrictEqual(res);
});

test('proc {} with 6 elements and [] with 4 elements ', () => {
    //Arrange
    const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}
    const props = ['b', 'd', 'g', 'a']

    //Act
    const result = proc(props, o)

    //Assert
    const res = {a: 1, b: 'Thor', d: {x: 10}}
    expect(res).toStrictEqual(result);
});

test('proc [] with non existing obj keys', () => {
    //Arrange
    const obj = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}}
    const props = ['x', 'y', 'w', 't', 'u', 'z']

    //Act
    const res = proc(props, obj)

    //Assert
    const result = {}
    expect(result).toStrictEqual(res);
});
