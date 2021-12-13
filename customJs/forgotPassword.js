// let loggedInUser = JSON.parse(localStorage.getItem('defaultuserdetails'));
// loggedInUser.password = "test";
// console.log(loggedInUser);
// localStorage.setItem('defaultuserdetails', JSON.stringify(loggedInUser));
// let loggedInUser2 = JSON.parse(localStorage.getItem('defaultuserdetails'));
// console.log(loggedInUser2);





function returnHome(){
    event.preventDefault();
    window.location.href = "index.html"; // code just sends user home// 
}

// code not working, local storage not responding to change in password// 
function ForgotPassword()
{
 alert('test');
    let defaultUser = JSON.parse(localStorage.getItem('defaultuserdetails'));
    let CreatedUser = JSON.parse(localStorage.getItem('createduserdetails'));
    let loginStatus = localStorage.getItem('loggedIn');
    let enteredEmail = document.getElementById('inputEmail').value;
    let enteredPassword = document.getElementById('inputPassword').value;
    let enteredSecurity = document.getElementById('inputSecurity').value;

    if(enteredEmail == defaultUser.email && enteredSecurity == defaultUser.security)
    { 
        defaultUser.password = enteredPassword;
        localStorage.removeItem('defaultuserdetails');
        localStorage.setItem('defaultuserdetails', JSON.stringify(defaultUser));
        console.log(localStorage.getItem('defaultuserdetails'));
        
        

    }
    else if(enteredEmail == CreatedUser.email && enteredSecurity == CreatedUser.security)
    {
        CreatedUser.password = enteredPassword;
        localStorage.setItem('createduserdetails', JSON.stringify(defaultUser));
        console.log(localStorage.getItem('createduserdetails'));

    }

    else{
        alert("You have entered incorrect information");
    }

    
}

