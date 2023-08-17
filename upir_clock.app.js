// YouTube tutorial is here: https://youtu.be/4M407AYPeH0
// Source files are here: https://github.com/upiir/banglejs2_custom_clocks

var font = atob("AAAAAAAAAAAAAAAAAAF//////////////wA3//////////////AHf/////////////8A9//////////////wH3//////////////A/f/////////////8H9//////////////w/3//////////////H/f/////////////8/9//////////////3/3////////////////f///////////////8AAAAAAAAAAAAP///wAAAAAAAAAAAA////AAAAAAAAAAAAD///8AAAAAAAAAAAAP///wAAAAAAAAAAAA////AAAAAAAAAAAAD///8AAAAAAAAAAAAP///wAAAAAAAAAAAA////AAAAAAAAAAAAD///8AAAAAAAAAAAAP///wAAAAAAAAAAAA////AAAAAAAAAAAAD///8AAAAAAAAAAAAP///wAAAAAAAAAAAA////////////////7////////////////v/v/////////////+/8//////////////7/j//////////////v8P/////////////+/g//////////////78D//////////////vgP/////////////+8A//////////////7gD//////////////sAP/////////////+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAA/AAAAAAAAAAAAAAAH/AAAAAAAAAAAAAAA//AAAAAAAAAAAAAAH/8AAAAAAAAAAAAAA//wAAAAAAAAAAAAAH//AAAAAAAAAAAAAA//8AAAAAAAAAAAAAH//wAAAAAAAAAAAAA///AAAAAAAAAAAAAH//8AAAAAAAAAAAAA///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf/+AAAAAAAAD//8AN//4AAAAAAAA///wB3//gAAAAAAAP///APf/+AAAAAAAD///8B9//4AAAAAAA////wP3//gAAAAAAP////B/f/+AAAAAAD////8P9//4AAAAAA/////x/3//gAAAAAP/////P/f/+AAAAAD/////9/9//4AAAAA////////3//gAAAAP////////AAAAAAAD///8AAD/8AAAAAAA////AP///wAAAAAAP///wA////AAAAAAD///8AD///8AAAAAA////AAP///wAAAAAP///wAA////AAAAAD///8AAD///8AAAAA////AAAP///wAAAAP///wAAA////AAAAD///8AAAD///8AAAA////AAAAP///wAAAP///wAAAA////AAAD///8AAAAD///8AAA////AAAAAP//////////wAAAAA//////////8AAAAAD//////////AAAAAAP/////////wAAAAAA/////////8AAAAAAD/////////AAAAAAAP////////wAAAAAAA////////8AAAAAAAD////////AAAAAAAAP///////wAAAAAAAA///////8AAAAAAAAD///////AAAAAAAAAP/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF//gAAAAAAB//v/wA3/+AAAAAAAH/+//AHf/4AAAAAAAf/7/8A9//gAAAAAAB//v/wH3/+AAAAAAAH/+//A/f/4AAAAAAAf/7/8H9//gAAAAAAB//v/w/3/+AAAAAAAH/+//H/f/4AAAAAAAf/7/8/9//gAAAAAAB//v/3/3/+AAAAAAAH/+////f/4AAAAAAAf/7///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////////////////7////////////////v/v/////////////+/8//////////////7/j//////////////v8P/////////////+/g//////////////78D///////f//////vgP//////5//////+8A///////H//////7gD//////4f//////sAP//////B//////+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOwAAAAAAAAAAAAAAH7wAAAAAAAAAAAAAD/vwAAAAAAAAAAAAB/+/wAAAAAAAAAAAA//7/wAAAAAAAAAAAf//v/wAAAAAAAAAAP//+//AAAAAAAAAAH///7/8AAAAAAAAAD////v/wAAAAAAAAB////+//AAAAAAAAA/////7/8AAAAAAAAf/////v/wAAAAAAAP/////w//AAAAAAAH/////4D/8AAAAAAD/////8AP/wAAAAAB/////+AA//AAAAAA//////AAD/8AAAAAf/////gAAP/wAAAAP/////wAAA//AAAAH/////4AAAD/8AAAD/////8AAAAP/wAAAP////+AAAAA//AAAA/////AAAAAD/8AAAD////gAAAAAP/wAAAP///wAAAAAA//AAAA///4AAAAAAD/8AAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////z////////////////D///////////////8D///////////////wD///////////////AD//////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////4AAAf/6AD////////gAAB//sAP///////+AAAH/+4A////////4AAAf/7wD////////gAAB//vgP///////+AAAH/+/A////////4AAAf/7+D////////gAAB//v8P///////+AAAH/+/4////////4AAAf/7/z////////gAAB//v/v///////+AAAH/+////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+//////////AAAAD/7/////////8AAAAH/v/////////wAAAAP+//////////AAAAAf7/////////8AAAAA/v/////////wAAAAB+//////////AAAAAD7/////////8AAAAAHv/////////wAAAAAO//////////AAAAAAb/////////8AAAAAAv///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF//////////////wA3//////////////AHf/////////////8A9//////////////wH3//////////////A/f/////////////8H9//////////////w/3//////////////H/f/////////////8/9//////////////3/3////////////////f///////////////8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA//////AAH///////7/////8AAf///////v/v///wAB///////+/8////AAH///////7/j///8AAf///////v8P///wAB///////+/g////AAH///////78D///8AAf///////vgP///wAB///////+8A////AAH///////7gD///8AAf///////sAP///wAB///////+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/3/+AAAAAAAAAAAA//f/4AAAAAAAAAAAD/9//gAAAAAAAAAAAP/3/+AAAAAAAAAAAA//f/4AAAAAAAAAAA//9//gAAAAAAAAAA///3/+AAAAAAAAAA////f/4AAAAAAAAA////9//gAAAAAAAA/////3/+AAAAAAAA//////f/4AAAAAAA//////9//gAAAAAA///////wAAAAAAAA////////AAAAAAAA////////8AAAAAAA/////////wAAAAAA//////////AAAAAA////////D/8AAAAA////////AP/wAAAA////////AA//AAAA////////AAD/8AAA////////AAAP/wAA////////AAAA//AA////////AAAAD/8A////////AAAAAP/w////////AAAAAA//////////AAAAAAD/////////AAAAAAAP////////AAAAAAAA////////AAAAAAAAD///////AAAAAAAAAP//////AAAAAAAAAA//////AAAAAAAAAAD/////AAAAAAAAAAAD////AAAAAAAAAAAAD///AAAAAAAAAAAAAD//AAAAAAAAAAAAAAD/AAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf/////+A//////8AN//////4H//////wB3//////g///////APf/////+H//////8B9//////4///////wP3//////n///////B/f/////+///////8P9//////////////x/3//////////////P/f/////////////9/9////////////////3////////////////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///////////////+////////////////7/7//////////////v/P/////////////+/4//////////////7/D///////3//////v4P//////+f/////+/A///////x//////74D//////+H//////vAP//////wf/////+4A//////+B//////7AD//////wH//////oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF//////gAAA////wA3/////+AAAD////AHf/////4AAAP///8A9//////gAAA////wH3/////+AAAD////A/f/////4AAAP///8H9//////gAAA////w/3/////+AAAD////H/f/////4AAAP///8/9//////gAAA////3/3/////+AAAD//////f/////4AAAP/////8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////AAAAH/4AAAAAD///8AAAAf/gAAAAAP///wAAAB/+AAAAAA////////////////7////////////////v/v/////////////+/8//////////////7/j//////////////v8P/////////////+/g//////////////78D//////////////vgP/////////////+8A//////////////7gD//////////////sAP/////////////+gAAAAAAAAAAAAAAAAAA=");


function draw() {
  g.reset();
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();

  var time_hours = (" "+h).substr(-2);// + "" + m.toString().padStart(2,0);
  var time_minutes = m.toString().padStart(2,0);
  
  g.setFontCustom(font, 48, 40, 100);

  g.setFontAlign(-1,0); // align left
  g.drawString(time_hours, 0, 176/2, true /*clear background*/);

  g.setFontAlign(1,0);  // align right
  g.drawString(time_minutes, 176, 176/2, true /*clear background*/);

  g.fillRect(82, 59, 82+12, 59+12);
  g.fillRect(82, 105, 82+12, 105+12);
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
// now draw every second
var secondInterval = setInterval(draw, 1000);


// Show launcher when middle button pressed
Bangle.setUI("clock");

Bangle.loadWidgets();
Bangle.drawWidgets();





























