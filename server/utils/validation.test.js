const expect = require('expect');
var {isRealString} = require('./validation');

// isReal string
    // should reject non-string values
    // should reject string with only spaces
    // should allow string with non-space characters

describe ('isRealString', () => {
    it ('should reject non-string values', () => {
        var res = isRealString(12345);
        expect(res).toBe(false);
    });
    it ('should reject string with only spaces', () => {
        var res = isRealString('     ');
        expect(res).toBe(false);
    });

    it ('should allow string with non-space characters', () => {
        var res = isRealString('Sonja');
        expect(res).toBe(true);       
    });
});