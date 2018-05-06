const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var test = 123;
    var result = isRealString(test);

    expect(result).toBeFalsy();

  });

  it('should reject string with only spaces', () => {
    var test = '    ';
    var result = isRealString(test);

    expect(result).toBeFalsy();

  });

  it('should allow string with non-space characters', () => {
    var test = '123';
    var result = isRealString(test);

    expect(result).toBeTruthy();

  });

});