(function () {
   // document.getElementById('submit').addEventListener('click',UpdateDetails, false);
 
})();




function UpdateDetails()
{
   let firstName = document.getElementById('firstNameID').value;
   let lastName = document.getElementById('lastNameID').value;
   let DateBirth = document.getElementById('dobID').value;
   let address1 = document.getElementById('address1ID').value;
   let address2 = document.getElementById('address2ID').value;
   let address3 = document.getElementById('address3ID').value;

   let email = document.getElementById('emailAddressID').value;
   let security = document.getElementById('Security').value;
   let password = document.getElementById('passwordID').value;
   let confirmPassword = document.getElementById('confirmPasswordID').value;

   
   var userDetails={};
   userDetails.firstName= firstName;
   userDetails.lastName = lastName;
   userDetails.dob = DateBirth;
   userDetails.address1 = address1;
   userDetails.address2 = address2;
   userDetails.address3 = address3;
   userDetails.email = email;
   userDetails.security = security;
   userDetails.password = password;
   

   
    localStorage.setItem('createduserdetails',JSON.stringify(userDetails));

    event.preventDefault();
    
    Swal.fire(
      'Register Successful',
      'Welcome To WebFrame!',
      'success'
    )
    .then(() => {
      
     window.location.href = "login.html";
      })

    
    
  
}

