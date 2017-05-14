const expect = require('chai').expect;
const {   
  isSeparatedAttribute,
  splitAttribute,
  splitAttributes,
} = require('../index');

describe('isSeparatedAttribute', () => {
  it('should return true for class, rel, rev, style, media', () => {
    ['class', 'rel', 'rev', 'style', 'media'].map((attribute) => {
      expect(isSeparatedAttribute(attribute)).to.be.ok;
    })
  });
  
  it('should indicate we split on a space in classes', () => {
    expect(isSeparatedAttribute('class')).to.be.eq(' ');
  });

  it('should indicate we split on a semicolon in styles', () => {
    expect(isSeparatedAttribute('style')).to.be.eq(';');
  });
});


describe('splitAttribute', () => {
  it('should successfully split a style', () => {
    const splitStyle = splitAttribute('style', 'font-family:a,b,c; color:red');
    expect(splitStyle).to.be.deep.equal([ 'font-family:a,b,c', 'color:red' ]);
  });
});


describe('splitAttributes', () => {
  it('should successfully split a map', () => {
    const map = {
      class: 'a b c',
      style: 'font-family:a,b,c; color:red',
      name: 'alphaghettis with spaces, and commas; and semicolons',
    };

    const split = splitAttributes(map);
    expect(split).to.be.deep.equal({
      class: ['a', 'b', 'c'],
      style: [ 'font-family:a,b,c', 'color:red' ],
      name: 'alphaghettis with spaces, and commas; and semicolons',
    });
  });
});
