const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns an empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Works on longer strings', () => {
    expect(wrap('hello hello hello hello hello', 6)).to.equal('hello \nhello \nhello \nhello \nhello')
  })
});
