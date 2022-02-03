// import Date from '../src/index.js';

describe('Date', () => {

  test('should correctly return number from zero to six', () => {
    const d = new Date('Feb 2 2001');
    expect(d.getDay()).toEqual(5);
  });

  test('should correctly display the named 3-letter weekday corresponding to the index number', () => {
    const nameOfWeekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = d.getDay(5);
    expect(nameOfWeekday[day]).toEqual('Friday');
  });

});

  
