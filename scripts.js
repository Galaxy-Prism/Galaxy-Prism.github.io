
function makeFood() {
  console.log("Food");
}

var hideyToggle = 0;
function hideyText() {
  if(hideyToggle == 0) {
    document.getElementById("hideyID").innerHTML = "This text is hiding now";
    hideyToggle = 1;
  }
  if(hideyToggle == 1) {
    document.getElementById("hideyID").innerHTML = "I am not really sure how to get the text normal again. Sorry for the inconvenience?";
    hideyToggle = 0;
  }
}
