// #string-lib 

// JS library for Strings  

console.log("hello world")


function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      alert('Your name have accepted : you can try another');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }

     // 89c4250809c202e3e1990eca9d40606  (my api key)