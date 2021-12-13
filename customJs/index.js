
(function () {
      CreateUser();
      RollText();

  
})();



  function RollText() {
    let targetArray = ['User Interfaces.', 'Websites.', 'Web apps.', 'mobile apps.', 'Software.'," "];
    let targetWord = document.getElementById('targetText');
    let counter = 0;

    setInterval(function () {
      targetWord.innerHTML = targetArray[counter];
      targetWord.style.color = "black";
      counter++;
      if (counter >= 5) {
        counter = 0;
      }
    }, 2000);
  }

  function CreateUser()
  {

    var userDetails = {firstName:"John", lastName:"Smith", dob:"1991-02-12",address1:"26, Main Street", address2:"Sligo Town", address3:"Co. Sligo", email:"johnsmith91@gmail.com", security:"smith" , password: "password1"};
    localStorage.setItem('defaultuserdetails',JSON.stringify(userDetails));
    console.log(localStorage.getItem('defaultuserdetails'));

  }

 


  
  
