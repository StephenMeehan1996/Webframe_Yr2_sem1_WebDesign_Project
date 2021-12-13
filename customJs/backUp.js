var accessDiv = document.getElementById('cartCheck');
var form_el = document.getElementById("myForm");
let cartTotal = localStorage.getItem('cartTotal');
let loadCart = document.getElementById('cart');
let totalDiv = document.getElementById('total');
let counter = 0;



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
  
 console.log(getDefault);
    
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
      

      


      console.log("storage:: " + cartTotal);

      
      //accessDiv.appendChild(title);
      loadCart.innerHTML+= cartData;

      
      let total = document.createElement('p');
      total.classList.add('accessTotal');
      
      total.innerHTML =  "Total : " + cartTotal;
      total.classList.add('totalClass');
      total.id = "total";  // so it can accessed by promo function
      
      total.style.borderTop = "1px solid white";
      total.style.marginTop = "10%";

      totalDiv.appendChild(total);

   
      
  }

  function Promo(){

    let promoCode = document.getElementById('promoCode').value;
    let splitTotal
    if(counter < 1)
    {
      if(promoCode == "Promo10")
     {
      swal.fire("Success!", "Promo Code Accepted");
       let newTotal = cartTotal - ((cartTotal/100) * 10)
       counter++;

       let discount = document.createElement('p');
       discount.innerHTML = "Discount: -" +((cartTotal/100) * 10).toString();
       discount.style.borderBottom = "1px solid white";

       let printNewTotal = document.createElement('p');
       printNewTotal.innerHTML = "Total : " + newTotal.toString();
       

       
     
       accessDiv.appendChild(discount);
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

   // convert price of item to remove
   let parent =  e.target.parentNode; // access parent
   let removedString = parent.childNodes[2].innerHTML; // access 3 child of parent, Price 

   let priceString = removedString.substring(1); // removes £ // converts price to float
   let convertPrice = parseFloat(priceString);

   // convert current total//

   let completeTotal = getTotal.innerHTML.toString();
   let removeCurrency = completeTotal.substring(1);
   let currentTotal = parseFloat(removeCurrency);

  function RemoveItem(e){
  
  
    let accessTotal = document.querySelector('.accessTotal');

    if (e.target && e.target.classList.contains('remove')){ // only triggers when event target has a classname 'remove'// 
        
     
      let parent =  e.target.parentNode; // access parent
      let removedString = parent.childNodes[2].innerHTML; // access 3 child of parent, Price 

     
  
      let priceString = removedString.substring(1); // removes £ // converts price to float
      let convertPrice = parseFloat(priceString);
      console.log(convertPrice);
  
      let currentTotal = accessTotal.innerHTML.toString();
      console.log("string Current total: " + currentTotal);
      let currentPrice = parseFloat(currentTotal.substring(9));
  
      let newPrice = currentPrice - convertPrice; // updates price with deleted item 
  
      console.log(accessTotal.innerHTML);
      let decimalPlace = newPrice.toFixed(2); 

      accessTotal.innerHTML = "Total : " + "€" + decimalPlace.toString();
  
      parent.remove(); // removes parent of target 
       //parent.classList.add('test');
       let cartStorage =  loadCart.innerHTML; // issue here

       
       let totalStorage = accessTotal.innerHTML;
       console.log("total Storage: " + totalStorage);
       localStorage.setItem('cartStorage',cartStorage);
       localStorage.setItem('cartTotal',totalStorage); // updates local storage of deleted items 


       let hasItems = 0;


  let getDiv = document.querySelectorAll('#cart div'); // dont need??


  if(getDiv.length >= 1)
  {
    hasItems = 1;

  }

  else{
    hasItems = 0
  }

  localStorage.setItem('hasItems',0);

        
    }
   }