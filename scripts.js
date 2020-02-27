
function makeFood() {
  console.log("Food");
}

var hideyInt = 0;
function hideyText() {
  if(hideyText != 1) {
    window.alert("Oh. You broke my site. It should repair if you refresh.");
    document.getElementById("hideyID").innerHTML = "I am not really sure how to get the text normal again. Sorry for the inconvenience?";
    hideyInt = 1;
  }
}
