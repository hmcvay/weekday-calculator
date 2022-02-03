// import Date from '../src/index.js';

describe('Date', () => {

  test('should correctly return number from zero to six', () => {
    const d = new Date('Feb 2 2001');
    expect(d.getDay()).toEqual(5);
  });
});
