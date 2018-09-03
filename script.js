var colors = [
  "red",
  "purple",
  "blue",
  "white",
  "green",
  "brown",
  "orange",
  "yellow"
];

var background = document.getElementById("box");

var colorPicker = {
  pickColorBtn: function() {
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("pickedColor").innerHTML = pickedColor; //just to see what color has been picked
    background.className = pickedColor;
  },
  checkResultBtn: function() {
    
    var inputResult = document.getElementById("inputResult");
    var result = document.getElementById("result");
    
    if (inputResult.value === "") {
      result.innerHTML = "no value!!!!";
    } else if (inputResult.value === pickedColor) {
      result.innerHTML = "BRAVO THAT'S IT!!!";
    } else {
      result.innerHTML =
        "SOMETHING is WRONG!!!";
    }
  }
};
