const bring = document.getElementById('bringworld');
const bringtoggle = document.getElementById('toggleworld');

if(bringtoggle){
    bringtoggle.addEventListener('click', () => {
        
        if( bring.type === "text"){
            bring.type = "password";
            bringtoggle.innerText = "Show"    
        }
        else{
            bring.type = "text"
            bringtoggle.innerText = "Hide"
        }
    });
}

const siteYear = document.querySelector(".site-year")
siteYear.innerHTML = new Date().getFullYear() 

document.addEventListener("DOMContentLoaded", function() {
    const bringWork = document.getElementById("bringwork");
    const bringWorld = document.getElementById("bringworld");
    const emMessageError = document.getElementById("emError");
    const pdMessageError = document.getElementById("pdError");
    const siteBodyForm = document.getElementById("site-bodyform");
  
    // Function to clear error messages on input
    function clearError(inputField, errorField) {
      inputField.addEventListener("input", function() {
        errorField.textContent = "";
      });
    }
  
    // Validate form on submit
    siteBodyForm.addEventListener("submit", function(event) {
      let valid = true;
  
      // Email validation
      if (bringWork.value.trim() === "") {
        emMessageError.textContent = "Username is required";
        valid = false;
      }
  
      // Password validation
      if (bringWorld.value.trim() === "") {
        pdMessageError.textContent = "Password is required";
        valid = false;
      }
  
      // Prevent form submission if validation fails
      if (!valid) {
        event.preventDefault();
      }
    });
  
    // Clear error messages when user starts typing
    clearError(bringWork, emMessageError);
    clearError(bringWorld, pdMessageError);
  });
  