
function app() {

  pjs.defineDisplay("display", "app.json");
  
  // Display screen and wait for input
  display.helloScreen.execute();

  if (submit) {
    pjs.messageBox("Testing NodeRun, " + yourName + "!");
  }

}

exports.default = app;
