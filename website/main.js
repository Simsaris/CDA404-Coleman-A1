function main() {
    
    console.log("in main function");
    var myForm  = document.getElementById("consentVerify");
    myForm.addEventListener("Submit",validateForm);
  }

function validateForm() {
    var i =  false;
    var contact = document.getElementById("consentVerify");

    if (contact == "I consent") {
      return true;
      document.getElementById("consentNotGiven").style.display = "none";
    }else {
        return false;
        document.getElementById("consentNotGiven").style.display = "block";
        Event.preventDefault();
    }
}