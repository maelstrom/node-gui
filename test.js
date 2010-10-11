console.log('test.js');
var gtk = require('./build/default/gtk');
var fs  = require('fs');

var window = new gtk.Window();
var entry  = new gtk.Entry();

entry.setText('A teeheehee!');
entry.setVisibility(true);

entry.on('changed', function () {
  setTimeout(function () {
    entry.appendText(1);
  }, 2000);
  console.log('changed');
});

var button = new gtk.Button();
button.setLabel('Test Button');

button.on('clicked', function () {
  console.log('clicked');
  var dialog = new gtk.MessageDialog(window, gtk.DIALOG_DESTROY_WITH_PARENT,
                       gtk.MESSAGE_INFO, gtk.BUTTONS_OK);
  dialog.show();
});

//window.add(button);
window.add(entry);

window.setTitle('Node');
window.setResizable(true);
window.setDefaultSize();

window.on('destroy', function () {
  console.log(window.getOpacity());
  console.log(window.getPosition());
  console.log(window.getSize());
  console.log(window.getResizable(true));
  console.log(window.getTitle());
  console.log('OMG');
});

window.show();

//setInterval(function () {
  //console.log('hi');
//}, 1000);
console.log('test');
