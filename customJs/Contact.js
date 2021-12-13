function ContactForm(){
  
    event.preventDefault();
    
   
    Swal.fire(
      'Success!',
      'Thank you for making contact with us, your message has been recorded, will will get back to ASAP',
      'success'
    )
    .then(() => {
     
      window.location.href = "index.html";
      })
 
   }