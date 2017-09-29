
  var content2= '<div class="container"><div class="wrapper"><label>Поле A: </label><input type="email" id="inputA" required onkeypress="validation()"/> <span id="warning"></span></div><div class="wrapper"><label>Поле В: </label><input type="email" required/> <span>@longexample.com</span></div><div class="wrapper"><label>Поле В: </label><input type="email" required/> <span>@gmail.com</span></div></div>';


function validation(){

  var valid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,6})+$/;
  //console.log(!valid.test(document.getElementById('inputA').value));
    if (!valid.test(document.getElementById('inputA').value)){
      document.getElementById('warning').textContent="неправильный email";
    }
    else{
      document.getElementById('warning').textContent="";
      //&#10004;
    }
}
