import $ from 'jquery';

// const d = new Date('Feb 2 2001');

const nameOfWeekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const day = d.getDay();

// nameOfWeekday[day]; //string to give back to user

// 2022-02-03
// 2022/02/03
$("#submitDate").click(function() {
  const userDate =  $("input#userDate").val().replace( new RegExp( '-', 'g'), "/");
  
  //.replace(/-/g, '\/');
  console.log(userDate);
  $("#inputDate").text(userDate);
  const d = new Date(userDate);
  console.log(d);
  const day = d.getDay();
  console.log(day);
  const result = nameOfWeekday[day];
  $("#dayValue").text(result);
});


