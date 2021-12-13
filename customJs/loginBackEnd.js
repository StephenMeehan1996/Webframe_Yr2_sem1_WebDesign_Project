
(function () {

 Login(); // calls login function 
})();

function Login()
{

let loginCheck = localStorage.getItem('loggedIn');
let button = document.querySelector('.loginButton');



        if(loginCheck == 1 || loginCheck == 2)
        {
            
            button.innerHTML = 'LogOut'; // changes login in button to logout if user is logout in 
        }

    button.addEventListener('click', function(){

      button.innerHTML = 'LogOut';
      localStorage.setItem('loggedIn',0);


      let cartData = null; // deletes all saved shopping data when logged out 
      let cartTotal = 0;
      let hasItems = 0;
      cartData = localStorage.setItem('cartStorage',cartData);
      cartTotal = localStorage.setItem('cartTotal',cartTotal);
      localStorage.setItem('hasCartItems', hasItems);


    });
        
    let userDetails =  document.getElementById('userDetails'); // hides user details button if user logged out 
    if (loginCheck == 0)
    {
      userDetails.style.display = "none";
    }
    else (loginCheck == 0 || loginCheck == 0 )
    {
      userDetails.style.display = "absoulte";

    }


}



