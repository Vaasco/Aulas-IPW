const proc = require('./Part1_ex3.js')

test('proc [1,2,3] + [4,5,6] -> [5,7,9]', () => {
    //Arrange
    const arr1 = [1,2,3]
    const arr2 = [4,5,6]

    //Act
    const res = arr1.zip(arr2, function(left, right) { return left + right})

    //Assert
    const result = [5,7,9]
    expect(result).toStrictEqual(res);
});

test('proc [1,2,3] + [4,5] = [5,7]', () => {
    //Arrange
    const arr1 = [1,2,3]
    const arr2 = [4,5]

    //Act
    const res = arr1.zip(arr2, function(left, right) { return left + right})

    //Assert
    const result = [5,7]
    expect(result).toStrictEqual(res);
});

test('proc [1,2,3] + [4,5,6,7,8] = [5,7,9]', () => {
    //Arrange
    const arr1 = [1,2,3]
    const arr2 = [4,5,6,7,8]

    //Act
    const res = arr1.zip(arr2, function(left, right) { return left + right})

    //Assert
    const result = [5,7,9]
    expect(result).toStrictEqual(res);
});

test('proc [] + [1,2,3] -> []', () => {
    //Arrange
    const arr1 = []
    const arr2 = [1,2,3]

    //Act
    const res = arr1.zip(arr2, function(left, right) { return left + right})

    //Assert
    const result = []
    expect(result).toStrictEqual(res);
});

test('proc [1,2,3] + [] = []', () => {
    //Arrange
    const arr1 = [1,2,3]
    const arr2 = []

    //Act
    const res = arr1.zip(arr2, function(left, right) { return left + right})

    //Assert
    const result = []
    expect(result).toStrictEqual(res);
});
