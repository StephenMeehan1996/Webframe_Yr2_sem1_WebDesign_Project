/*Animation done with Animate.css, added navbar as bar scroller and it triggers the animations
the libriary works by adding classes to elements, each class has a different animation */ 
(function () {
        document.getElementById('who').addEventListener('click', Animate1, false);
        document.getElementById('Why').addEventListener('click', Animate2, false);
        document.getElementById('where').addEventListener('click', Animate3, false);
        document.getElementById('Work').addEventListener('click', Animate4, false);
   })();



function Animate1()
{
    let target = document.getElementById('an1'); // selecting elements
    let target2 = document.getElementById('an2');
    target.classList.add('animate__delay-1s'); // added 1 sec delay so animation doesnt play before page scrolls 
    target2.classList.add('animate__delay-1s');
    target.classList.add('animate__animated','animate__bounce'); // adding animation classes
    target2.classList.add('animate__animated','animate__backInRight');

    target.addEventListener('animationend', () => {
        target.classList.remove('animate__animated','animate__bounce'); // this listens for the end of the animation and remove class
      });

      target2.addEventListener('animationend', () => {
        target2.classList.remove('animate__animated','animate__backInRight');
      });
}

function Animate2()  // function works same as above, I used a seperate funtion for each section// 
{
    let target3 = document.getElementById('an3');
    let target4 = document.getElementById('an4');
    target3.classList.add('animate__delay-1s');
    target4.classList.add('animate__delay-1s');
    target3.classList.add('animate__animated','animate__jackInTheBox');
    target4.classList.add('animate__animated','animate__flipInX');



    target3.addEventListener('animationend', () => {
        target3.classList.remove('animate__animated','animate__jackInTheBox');
      });

      target4.addEventListener('animationend', () => {
        target4.classList.remove('animate__animated','animate__flipInX');
      });
     

}

function Animate3() // same
{
    let target5 = document.getElementById('an5');
    let target6 = document.getElementById('an6');
    target5.classList.add('animate__delay-1s');
    target6.classList.add('animate__delay-1s');
    target5.classList.add('animate__animated','animate__lightSpeedInLeft');
    target6.classList.add('animate__animated','animate__zoomInDown');



    target5.addEventListener('animationend', () => {
        target5.classList.remove('animate__animated','animate__lightSpeedInLeft');
      });

      target6.addEventListener('animationend', () => {
        target6.classList.remove('animate__animated','animate__zoomInDown');
      });

}

function Animate4() // same
{
    
    let target7 = document.getElementById('an7');
    let target8 = document.getElementById('an8');
    let target9 = document.getElementById('an9');
    let target10 = document.getElementById('an10');
 

    target7.classList.add('animate__delay-1s');
    target8.classList.add('animate__delay-1s');
    target9.classList.add('animate__delay-1s');
    target10.classList.add('animate__delay-1s');
    target7.classList.add('animate__animated','animate__flipInY');
    target8.classList.add('animate__animated','animate__lightSpeedInLeft');
    target9.classList.add('animate__animated','animate__lightSpeedInRight');
    target10.classList.add('animate__animated','animate__lightSpeedInLeft');



    target7.addEventListener('animationend', () => {
        target7.classList.remove('animate__animated','animate__flipInY');
      });

      target8.addEventListener('animationend', () => {
        target8.classList.remove('animate__animated','animate__lightSpeedInLeft');
      });

      target9.addEventListener('animationend', () => {
        target9.classList.remove('animate__animated','animate__lightSpeedInRight');
      });
      target10.addEventListener('animationend', () => {
        target9.classList.remove('animate__animated','animate__lightSpeedInLeft');
      });


  

}




    