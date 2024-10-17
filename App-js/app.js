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


    const siteBodyForm = document.getElementById("site-bodyform");
    const bringWork = document.getElementById("bringwork");
    const bringWorld = document.getElementById("bringworld");
    const emMessageError = document.getElementById("emError");
    const pdMessageError = document.getElementById("pdError");


  // Helper function to show the error message and add red border
  function showError(input, errorElement) {
    input.classList.add('error-border');
    errorElement.style.display = 'block';
  }

  // Helper function to remove the error message and red border
  function clearError(input, errorElement) {
    input.classList.remove('error-border');
    errorElement.style.display = 'none';
  }

  // Form submission event listener
  siteBodyForm.addEventListener('submit', function(event) {
    let isValid = true;

    // Check if username is empty
    if (bringWork.value.trim() === '') {
      showError(bringWork, emMessageError);
      isValid = false;
    }

    // Check if password is empty
    if (bringWorld.value.trim() === '') {
      showError(bringWorld, pdMessageError);
      isValid = false;
    }

    // If any field is invalid, prevent form submission
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Event listener to clear error when the user starts typing in the username field
  bringWork.addEventListener('input', function() {
    if (bringWork.value.trim() !== '') {
      clearError(bringWork, emMessageError);
    }
  });

  // Event listener to clear error when the user starts typing in the password field
  bringWorld.addEventListener('input', function() {
    if (bringWorld.value.trim() !== '') {
      clearError(bringWorld, pdMessageError);
    }
  });
// document.addEventListener("DOMContentLoaded", () => {
//   const isiPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;

//   if (isiPhone) {
//     document.querySelectorAll("input, textarea, select").forEach(input => {
//       input.style.borderRadius = "0";
//       input.style.outline = "none";
//     });
//   }
// });

