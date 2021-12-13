var accessDiv = document.getElementById('cartCheck');
var form_el = document.getElementById("myForm");
let cartTotal = localStorage.getItem('cartTotal');
let loadCart = document.getElementById('cart');
let totalDiv = document.getElementById('total');
let counter = 0;

var getTotal = document.querySelector('#totalPrice span');

(function () {
    PopulateDetails();
    populateCheck()
    accessDiv.addEventListener('click', function(e){
    RemoveItem(e);

   });
   document.getElementById('promoBtn').addEventListener('click', Promo, false);
  
   
        
  })();

 
  function PopulateDetails()
  {

    let getCreated = JSON.parse(localStorage.getItem('createduserdetails'));
    let getDefault = JSON.parse(localStorage.getItem('defaultuserdetails'));
    let loginStatus = localStorage.getItem('loggedIn');
  

    
    let name = document.getElementById('name');
    let address = document.getElementById('address');
    

    if(loginStatus == 1){

      name.innerHTML = getDefault.firstName + " " + getDefault.lastName;
      address.innerHTML = getDefault.address1 + ",<br>" + getDefault.address2 + ",<br>" + getDefault.address3 + ".";
    

    }
    else if(loginStatus == 2){
      name.innerHTML = getCreated.firstName + " " + getCreated.lastName;
      address.innerHTML = getCreated.address1 + ",<br>" + getCreated.address2 + ",<br>" + getCreated.address3 + ".";
     

    }

  }
  function populateCheck()
  {
      let cartData = localStorage.getItem('cartStorage');
     
      loadCart.innerHTML+= cartData;
      getTotal.innerHTML =  cartTotal;
      total.classList.add('totalClass');
   
   
      
  }

  function Promo(){

    let promoCode = document.getElementById('promoCode').value;
    
    if(counter < 1)
    {
      if(promoCode == "Promo10")
     {
     

      let currentPrice = parseFloat(getTotal.innerHTML.substring(1))

      
      swal.fire("Success!", "Promo Code Accepted");
       let newTotal = currentPrice - ((currentPrice/100) * 10)
       let dec = newTotal.toFixed(2); 
       counter++;
       let discount = ((currentPrice/100) * 10);
       discountDec = discount.toFixed(2);

       let discountP = document.createElement('p');
       discountP.innerHTML = "Discount: -" + discountDec.toString();
       discountP.style.borderBottom = "1px solid white";

       let printNewTotal = document.createElement('p');
       printNewTotal.innerHTML = "New Total : €" + dec.toString();
       

       accessDiv.appendChild(discountP);
       accessDiv.appendChild(printNewTotal);


     }

     else if(promoCode == null || promoCode != "Promo10")
     {
      

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Code Not recongnised',
       
      })
      

     }

    }
    else{
     
      Swal.fire({
        icon: 'error',
        
        text: 'You have already Entered promo Code!',
       
      })
      
    }
   

    

  }
  

  function ValCard(){
  
  event.preventDefault();
    
   
    Swal.fire(
      'Order Confirmed!',
      'Thank You!',
      'success'
    )
    .then(() => {
      localStorage.removeItem('cartStorage');
      localStorage.removeItem('cartTotal'); 
     localStorage.removeItem('hasCartItems');
      window.location.href = "index.html";
      })

  }


  function RemoveItem(e){
  

    if (e.target && e.target.classList.contains('remove')){ // only triggers when event target has a classname 'remove'// 
        
     
      let parent =  e.target.parentNode; // access parent
      let removedString = parent.childNodes[2].innerHTML; // access 3 child of parent, Price 

     
  
      let priceString = removedString.substring(1); // removes £ // converts price to float
      let convertPrice = parseFloat(priceString);
      
  
      let currentTotal = getTotal.innerHTML.toString();
      
      let currentPrice = parseFloat(currentTotal.substring(1));
  
      let newPrice = currentPrice - convertPrice; // updates price with deleted item 
  
      
      let decimalPlace = newPrice.toFixed(2); 

      getTotal.innerHTML = "€" + decimalPlace.toString();
  
      parent.remove(); // removes parent of target 
     
       let cartStorage =  loadCart.innerHTML; 

       
       let totalStorage = getTotal.innerHTML;
       
       localStorage.setItem('cartStorage',cartStorage);
       localStorage.setItem('cartTotal',totalStorage); // updates local storage of deleted items 

        
    }
   }