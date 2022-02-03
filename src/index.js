import $ from 'jquery';

let d = new Date('Feb 2 2001');

const nameOfWeekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = d.getDay();

nameOfWeekday[day]; //string to give back to user

$("#submitDate").click( function() {
  const userDate = $("input#userDate").val();
  console.log( userDate );
});


