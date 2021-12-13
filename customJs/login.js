var hasLoggedIn;
var hasItems = localStorage.getItem('hasCartItems');
var signIn = document.getElementById('signIn');
var pageDirect = document.getElementById('pageDirect');

(function () {
    signIn.addEventListener('click', ValidateUser, false);
    console.log(hasItems);

})();

function ValidateUser()
{
    
    let targetEmail = document.getElementById('inputEmail');
    let targetPassWord = document.getElementById('inputPassword');
    

    let createdUser = JSON.parse(localStorage.getItem('createduserdetails'));

    let defaultUser = JSON.parse(localStorage.getItem('defaultuserdetails'));
    
  

    console.log(defaultUser.email);
    console.log(defaultUser.password);

    console.log(createdUser.email);
    console.log(createdUser.password);

    if(targetEmail.value == defaultUser.email  && targetPassWord.value == defaultUser.password)
    {
        hasLoggedIn = 1;
    }
    else if(targetEmail.value == createdUser.email && targetPassWord.value== createdUser.password){

        hasLoggedIn = 2;
    }
    else{
        hasLoggedIn = 0;
    }

  

    localStorage.setItem('loggedIn', hasLoggedIn);

    let name = targetEmail.value; // splits email
    let splitName = name.split('@');
   

    if(hasLoggedIn == 1 && hasItems == 0 ||  hasLoggedIn == 2 && hasItems == 0){
        event.preventDefault();
    
   
        Swal.fire(
            'Success!',
            'Welcome back ' + splitName[0], // adds name to welcome message// 
            'success'
        )
        .then(() => {
       
          window.location.href = "index.html";
          })
        
        
    }
    else if (hasLoggedIn == 1 && hasItems > 0  || hasLoggedIn == 2 && hasItems > 0)
    {
        event.preventDefault();
        Swal.fire(
            'Success!',
            'Welcome back ' +  splitName[0],
            'success'
          )
          .then(() => {
         
            window.location.href = "checkout.html"; 
            })
        
    }
    else{
        event.preventDefault(); // triggers sweet alert if user is not logged in// 
        Swal.fire({
          icon: 'error',
          title: 'Account not recognised',
          text: 'Please enter correct details.',
          
        }) 
    }

    event.preventDefault();

}