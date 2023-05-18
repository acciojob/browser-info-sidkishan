//your JS code here. If required.
var browserName = navigator.userAgent.split('/',1)[0];
var version = navigator.userAgent;
document.getElementById('browser-info').innerText = "You are using " + browserName + " version " + version;