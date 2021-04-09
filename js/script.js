var colors = ["#641e16", "#154360", "#0b5345", "#7e5109", "#424949", "#372e29"];
var id_arr1 = ["mon", "tue", "wed", "thu", "fri", "sat"];
var id_arr2 = ["d1", "d2", "d3", "d4", "d5", "d6"];

function toggle_view(id1) {
  var e = document.getElementById(id1);
  for (var i = 0; i < 6; i++) {
    var t = document.getElementById(id_arr1[i]);
    t.style.display = "none";
    t.style.visibility = "hidden-xs";
  }
  e.style.display = "block";
  e.style.visibility = "visible-xs";
}

function toggle_color(id2) {
  var a = id_arr2.indexOf(id2);

  ////// to set default background and color
  for (var i = 0; i < 6; i++) {
    document.getElementById(id_arr2[i]).style.backgroundColor = "#000000";
    document.getElementById(id_arr2[i]).style.color = colors[i];
  }

  document.getElementById("ripped").style.backgroundColor = colors[a];
  document.getElementById("ripped").style.color = "#ffffff";
  document.getElementById(id2).style.backgroundColor = colors[a];
  document.getElementById(id2).style.color = "#ffffff";
  document.getElementById("btn-id").click();
  document.getElementById("icons").style.display = "none";
}

function disable() {
  var t = document.getElementsByClassName("remove");
  for (var i = 0; i < t.length; i++) {
    t[i].style.display = "none";
  }
}

function icon_toggle(id3) {
  var e = document.getElementById(id3);
  var c = window.getComputedStyle(e).getPropertyValue("background-color");
  document.getElementById("ripped").style.backgroundColor = c;
  document.getElementById("ripped").style.color = "#ffffff";
  document.getElementById(id3).style.display = "block";
  document.getElementById("icons").style.display = "none";
  document.getElementById("btn-id").style.visibility = "visible";
}
