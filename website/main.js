function main() {
    
    console.log("in main function");
    var myForm  = document.getElementById("con");
    myForm.addEventListener("Submit",validateForm);
  }

function validateForm() {
    var x = document.forms["contact"]["consentVerify"].value;
    if (x == "I consent") {
      return true;
    }else {
        return false;
        document.getElementById("consentNotGiven").style.display = "block";
    }