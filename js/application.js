$(document).ready(function() {
  var state="ready";
  var startdate = null;
  var timeline_container = $("#timeline");
  $("#start").click(function() {
   switch(state){
    case "ready":
    startdate = new XDate();
    state = "running";
    timeline_container.prepend(sessionStart(startdate));
    timeline_container.append(addRow(formatDateDiff(startdate, startdate), 'Intro', startdate.getTime()));
    $("#start").html("<i class='icon-bookmark-empty icon-large'> </i>Add new Timestamp...");
    $("#stop").removeClass('hide');
    break;
    case "running":
    var now = new XDate();
    timeline_container.append(addRow(formatDateDiff(startdate, now), '', now.getTime()));
    break;
    case "finished":
    break;
  }
});

  $("#stop").click(function() {
    var now = new XDate();
    timeline_container.append(addRow(formatDateDiff(startdate, now), 'End', now.getTime()));
    state = "finished";
    startdate = null;
    timeline_container.append(sessionEnd(now));
    $("#intro-text").html('Your Session has finished. Now add the needed additional information and download the Results in one of three formats:')
    $("#control-buttons").addClass('hide');
    $("#dl-buttons").removeClass('hide');
    $("#reload-button").removeClass('hide');
    $("#help").addClass('help-show');
  });

  $("#reload").click(function(e) {
    location.reload();
    e.preventDefault();
  });

  $("#auphonic").click(function(e) {
    e.preventDefault();
    var entries = serializeForm();
    var template = Handlebars.templates.auphonic;
    var context = { entries: entries };
    var formatted = template(context);
    $('#result').html(formatted);
  });

  $("#shownotes").click(function(e) {
    e.preventDefault();
    var entries = serializeForm();
    var template = Handlebars.templates.shownotes;
    var context = { entries: entries };
    var formatted = template(context);
    $('#result').html(formatted);
  });

  $("#podlove").click(function(e) {
    e.preventDefault();
    var entries = serializeForm();
    var template = Handlebars.templates.podlove;
    var context = { entries: entries };
    var formatted = template(context);
    $('#result').html(formatted);
  });

  $(document).on("click", "a.delete", function(){
    var div = $(this).closest('div.row-fluid').remove();
    return false;
  });


});

function serializeForm() {
  var source = $("#dl-form").serializeArray();
  var entries = new Array();
  var entry = {};
  source.forEach( function(src) { 
    var name = src.name;
    var value = src.value;
    if (name.indexOf("timecode_absolute_") >= 0) {
      var id = name.replace(/timecode_absolute_/,'');
      var property = "timecode_absolute";
    }
    if (name.indexOf("timecode_relative_") >= 0) {
      var id = name.replace(/timecode_relative_/,'');
      var property = "timecode_relative";
    }
    if (name.indexOf("text_") >= 0) {
      var id = name.replace(/text_/,'');
      var property = "text";
    }
    if (entry.id === null) {
      entry.id = id;
      entries.push(entry);
    }
    else {
      if (entry.id !== id) {
        entry = {};
        entry.id = id;
        entries.push(entry);
      }
    }
    entry[property] = value;
  });
  
  return entries;
}

// Diffs all Timefields of two XDates and returns a Timestring containing the result
function formatDateDiff(startdate, now) {
  var hours = Math.floor(startdate.diffHours(now));
  var minutes = Math.floor(startdate.diffMinutes(now));
  minutes = minutes - hours * 60; // subtract all elapsed hours
  var seconds = Math.floor(startdate.diffSeconds(now));
  seconds = seconds - ((hours * 3600) + (minutes * 60)); // subtract all elapsed hours and minutes
  var milliseconds = startdate.diffMilliseconds(now);
  milliseconds = milliseconds - ((hours * 3600000) + (minutes * 60000) + (seconds * 1000)); // subtract all elapsed hours, minutes and seconds

  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  if (milliseconds < 10) { milliseconds = "00" + milliseconds; }
  else if (milliseconds < 100) { milliseconds = "0" + milliseconds; }
  
  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function addRow(diff, text, id) {
  var template = Handlebars.templates.row;
  var context = { id: id,
    timecode_name: "timecode_relative_", 
    timecode_value: diff, 
    timecode_absolute_name: "timecode_absolute_", 
    timecode_absolute_value: id, 
    text_name: "text_", 
    text_value: text, 
    remove_id: id};
    var html = template(context);
    return html;
  }

  function sessionStart(date) {
    var template = Handlebars.templates.tracking_session_start;
    var context = { session_start: date.toString('dd.MM.yyyy HH:mm:ss') };
    var html = template(context);
    return html;
  }

  function sessionEnd(date) {
    var template = Handlebars.templates.tracking_session_end;
    var context = { session_end: date.toString('dd.MM.yyyy HH:mm:ss') };
    var html = template(context);
    return html;
  }

