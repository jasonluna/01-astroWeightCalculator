// actual functionality of the calculator
function calculator() {
// retrieves users weight
    var weight = document.getElementById("weight").value;
    // retrieves the planets gravity multiplier
    var gravity = document.getElementById("gravity").value;
    // multiplies users weight and the planet gravity
    var newWeight = weight * gravity;
    // rounds to the nearest decimal
    newWeight = newWeight.toFixed(0)
    // if or else statment that uses one of the 2 sentences depending on the planet 
    var planetName = document.getElementById("gravity")[document.getElementById("gravity").selectedIndex].text;
    if (planetName == 'sun' || planetName == 'moon') {
        document.getElementById("results").innerHTML = "if you were on the " + planetName + " you would weigh " + newWeight + " lbs.";
    } else {
        document.getElementById("results").innerHTML = "if you were on " + planetName + " you would weigh " + newWeight + " lbs";

    }
}
