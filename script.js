	  var op; 
	  function func() {
	    var result;
	    var num1 = Number(document.getElementById("num1").value);
	    var num2 = Number(document.getElementById("num2").value);
          
	    switch (op) {
	      case '+':
	        result = num1 + num2;
	        break;
	      case '-':
	        result = num1 - num2;
	        break;
	      case '*':
	        result = num1 * num2;
	        break;
	      case '/':
	        result = num1 / num2;
	        break;
	    }

	    document.getElementById("result").innerHTML = result;
	  }




function calculateBMI() {

var weight = parseFloat(document.getElementById("weight").value);

var height = parseFloat(document.getElementById("height").value) / 100;

var bmi = weight / (height * height);

var result = document.getElementById("results");

if (!isNaN(bmi)) {

result.innerHTML = "Your BMI is " + bmi.toFixed(2);

} else {

result.innerHTML = "Please enter valid values.";

}

}




