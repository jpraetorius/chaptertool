$(document).ready(function() {
  var state="ready";
  var startdate = null;
  var timeline_container = $("#timeline");
   $("#start").click(function() {
     switch(state){
      case "ready":
        startdate = new Date();
        state = "running";
        timeline_container.append('<h2>Tracking session started at ' +formatDate(startdate)+ '</h2>');
        timeline_container.append('<ul id="timeline_list">');
        $("#timeline_list").append('<li>'+formatDate(startdate)+'</li>');
        timeline_container.append('</ul>');
        $("#start").html("Add new Timestamp...");
        break;
      case "running":
        var now = new Date();
        $("#timeline_list").append('<li>'+now.toString('dd.MM.yyyy HH:mm:ss')+'</li>');
        break;
      case "finished":
        break;
     }
   });
 });

// Takes a full date and makes a formatted String 
// in the form of dd.MM.yyyy HH:mm:ss of it
function formatDate(date) {
  var day = date.getDate();
  if (day < 9) {day = "0" + day};
  var month = date.getMonth() + 1;
  if (month < 9) {month = "0" + month};
  var year = date.getFullYear();
  var hours = date.getHours();
  if (hours < 9) {hours = "0" + hours};
  var minutes = date.getMinutes();
  if (minutes < 9) {minutes = "0" + minutes};
  var seconds = date.getSeconds();
  if (seconds < 9) {seconds = "0" + seconds};
  return day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
}