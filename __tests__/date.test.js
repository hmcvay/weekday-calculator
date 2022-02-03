
describe('Date', () => {
  let d;

  beforeEach(() => {
    d = new Date('Feb 2 2001');
  });

  test('should correctly return number from zero to six', () => {
    expect(d.getDay()).toEqual(5);
  });

  test('should correctly display the named 3-letter weekday corresponding to the index number', () => {
    const nameOfWeekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = d.getDay(5);
    expect(nameOfWeekday[day]).toEqual('Friday');
  });

  test('should correctly instantiate a new Date class', () => {
    expect();
  });

});

  
