let getCreated = JSON.parse(localStorage.getItem('createduserdetails'));
let getDefault = JSON.parse(localStorage.getItem('defaultuserdetails'));
let loginStatus = localStorage.getItem('loggedIn');

(function () {
    LoadDetails();
  })();

  function LoadDetails()
  {
console.log(getDefault);

   let firstName = document.getElementById('firstNameID');
   let lastName = document.getElementById('lastNameID');
   let DateBirth = document.getElementById('dobID');
   let email = document.getElementById('emailAddressID');
   let address1 = document.getElementById('address1ID')
   let address2 = document.getElementById('address2ID')
   let address3 = document.getElementById('address3ID')




   if(loginStatus == 1){
    firstName.value = getDefault.firstName;
    lastName.value = getDefault.lastName;
    DateBirth.value = getDefault.dob;
    email.value = getDefault.email;
    address1.value = getDefault.address1;
    address2.value = getDefault.address2;
    address3.value = getDefault.address3;
  
  

  }
  else if(loginStatus == 2){
   
    firstName.value = getCreated.firstName;
    lastName.value = getCreated.lastName;
    DateBirth.value = getCreated.dob;
    email.value = getCreated.email;
    address1.value = getCreated.address1;
    address2.value = getCreated.address2;
    address3.value = getCreated.address3;

   

  }





  }

  function SaveDetails()
  {
    window.location.href = "index.html";
    event.preventDefault();
  }