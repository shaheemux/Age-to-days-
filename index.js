function calculateDays() {
    var ageInput = document.getElementById("age");
    var result = document.getElementById("result");
  
    var age = parseInt(ageInput.value);
    var days = age * 365;
  
    result.innerHTML = "Your age in days is: " + days;
  }