var total = 0;
var hasItems;
var getTotal = document.querySelector('#totalPrice span');
var getBasket = document.getElementById('shoppingBasket');
var loginCheck = localStorage.getItem('loggedIn');
var removeMessage = document.getElementById('noItem');
var getBasket = document.getElementById('shoppingBasket');
var loadCart = document.getElementById('cart');



(function () {
    
  
    document.querySelector(".cartBtn").addEventListener('click', HandleCart, false);
    document.querySelector(".checkOut").addEventListener('click', cartLogin, false);
    
    let button = document.querySelectorAll('.buyNow');
    for (var i = 0; i < button.length; i++) {    
      button[i].addEventListener('click', ((j) => {    	  
          return function() {
            AddCart(j);
          }
        })(i)
      )  
  }

  document.querySelector('.shoppingCart').addEventListener('click', function(e){ // lister on shopping cart, to lsitener for clicks on cart items 

    RemoveItem(e);
  });

  window.addEventListener('load', CartCheck, false);



  
    
  })();

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')) // for popOvers
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})



function CartCheck(){
  
  let count = localStorage.getItem('hasCartItems');
 

  if (count > 0) 
  {
    removeMessage.innerHTML = "Items Currently in Basket!";
    
  }
  
}

function HandleCart() {
   let accessCart = document.querySelector('.shoppingCart');
   if (accessCart.style.display === "none") {
     accessCart.style.display = "block";
   } else {
     accessCart.style.display = "none";
   }

 }

 function AddCart(index){ // uses index of the button clicked to dynamically fill cart
  
  let accessTitle = document.getElementsByClassName('itemName');
  let accessPic = document.getElementsByClassName('itemPic');
  let accessPrice = document.getElementsByClassName('itemPrice');
  let cartItem = document.createElement('div');
  let cartTitle = document.createElement('p');
  let cartPrice = document.createElement('p');
  let cartPic = document.createElement('img');
  let remove = document.createElement('button');
  let price = accessPrice[index].innerHTML;


  removeMessage.style.display = "none";
  cartTitle.innerHTML = accessTitle[index].innerHTML + "-";
  cartPic.src = accessPic[index].src;
  cartPrice.innerHTML = price;

  cartTitle.classList.add('cartItem');
  cartPrice.classList.add('cartItem');
  cartPic.classList.add('cartPic');
  remove.innerHTML = "&#10006;";
  remove.classList.add('remove');
  
  remove.style.color = "white";
  remove.style.fontWeight = "bold";

  cartItem.append(cartPic);
  cartItem.append(cartTitle);
  cartItem.append(cartPrice);
  cartItem.append(remove);

  //cartItem.name = cartTitle;

  getBasket.appendChild(cartItem);
  let priceString = price.substring(1); // removes £ 
  let convertPrice = parseFloat(priceString);

 // convertPrice = convertPrice.toFixed(2); // converts too two decimal places 
 //Math.round((num + Number.EPSILON) * 100) / 100
  


 total += convertPrice;


let decimalPlace = total.toFixed(2);


  getTotal.innerHTML = "€" + decimalPlace.toString();


  let cartStorage = getBasket.innerHTML;
  let totalStorage = getTotal.innerHTML;
  localStorage.setItem('cartStorage',cartStorage);
  localStorage.setItem('cartTotal',totalStorage);

     
 }
 function RemoveItem(e){
  if (e.target && e.target.classList.contains('remove')){ // only triggers when event target has a classname 'remove'// 
    // convert price of item to remove
    let parent =  e.target.parentNode; // access parent
    let removedString = parent.childNodes[2].innerHTML; // access 3 child of parent, Price 

    let priceString = removedString.substring(1); // removes £ // converts price to float
    let convertPrice = parseFloat(priceString);

    // convert current total//

    let completeTotal = getTotal.innerHTML.toString();
    let removeCurrency = completeTotal.substring(1);
    let currentTotal = parseFloat(removeCurrency);
    
   

    let newPrice = currentTotal - convertPrice; // updates price with deleted item  
    let decimalPlace = newPrice.toFixed(2); // makes sure is to two decimal points 

    getTotal.innerHTML = "€" + decimalPlace.toString(); // updates total with £ symbol

    parent.remove(); // removes parent of target 
     
     let cartStorage =  getBasket.innerHTML; 
     let totalStorage = getTotal.innerHTML;

    
     localStorage.setItem('cartStorage',cartStorage);
     localStorage.setItem('cartTotal',totalStorage); // updates local storage of deleted items 

    
      
  }
 }

 function cartLogin()
{
  let count = getBasket.childElementCount;
  
  
  let checkOut = document.getElementById('checkOut'); 

  if (loginCheck == 0)
  {
    event.preventDefault(); // triggers sweet alert if user is not logged in// 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You are not logged in!',
      
    }) .then(() => {
  
      localStorage.setItem('hasCartItems', count);
      window.location.href = "login.html";
     
      })
   
  }
  else{
    localStorage.setItem('hasCartItems', count);
    checkOut.setAttribute('href', "checkout.html");
  }

}


 



