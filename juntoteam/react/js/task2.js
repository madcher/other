function validation(){
  var valid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
  console.log(!valid.test(document.getElementById('inputA').value));
    if (!valid.test(document.getElementById('inputA').value)){
      document.getElementById('warning').textContent="неправильный email";
    }
    else{
      document.getElementById('warning').textContent="";
      //&#10004;
    }
}
