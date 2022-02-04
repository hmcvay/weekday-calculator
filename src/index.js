import $ from 'jquery';
import './css/styles.css';

const nameOfWeekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$("#submitDate").click(function() {
  const userDate =  $("input#userDate").val().replace( new RegExp( '-', 'g'), "/");
  
  console.log(userDate);
  $("#inputDate").text(userDate);
  const d = new Date(userDate);
  console.log(d);
  if ( isNaN(d) ) {
    $("#error").show();
    $("#error").text("ENTER A VALID DATE!!!");
  } else {
    const day = d.getDay();
    // console.log(day);
    const result = nameOfWeekday[day];
    $("#result").show();
    $("#dayValue").text(result);  
  }
  
});


