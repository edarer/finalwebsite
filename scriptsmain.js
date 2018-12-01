var todayDate = new Date();
var month = todayDate.getMonth() + 1;
var date = todayDate.getDate();
var year = todayDate.getFullYear();
alert("Welcome to my site, it is still under contruction but feel free to look around");
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var am = " AM";
    m = checkTime(m);
    s = checkTime(s);
    if (h > 12){
      h -= 12;
      am = " PM";
    }
    document.getElementById('time').innerHTML =
    month + "/" + date + "/" + year + "    " + h + ":" + m + ":" + s + am;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
