var keys =  (localStorage.getItem("key")==null) ? 0 : localStorage.getItem("key");
var messageToSend;
var show =0;

//send message function
function sendMsg(){
  let text=document.getElementById('msg').textContent;
  let msg = document.createElement("div");
  msg.className="userMsg";
  if (document.getElementById('msg').textContent){
    let t = document.createTextNode(text);
    msg.appendChild(t);
    document.getElementById("chatWindow").appendChild(msg);
    document.getElementById('msg').textContent="";
    loadData(msg);
  }
}
//change buttons to send message
function inputKeyUp(e) {
keys ? enter(e) : ctrlEnter(e);
}
///enter
function enter(e) {
    e.which = e.which || e.keyCode;
    if((e.which == 13) &&  (e.ctrlKey)) {
        sendMsg();
    }
}
///ctrl+enter
function ctrlEnter(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
        sendMsg();
    }
}
function showSettings(){
  show ? removeSettings() : addSettings();
}
function addSettings(){
  show=1;
  let set = document.createElement("div");
  set.id="settings";
  set.style.marginTop = "-140px";
  set.style.marginLeft = "207px";
  set.innerHTML = "Cпособ отправки: <form><input type='radio' name='group1' value='1' /> Enter<br /><input type='radio' name='group1' value='2' /> Ctrl+Enter<br /></form>"
  document.getElementById("control").appendChild(set);
}
function removeSettings(){
  show=0;
  changeBtns()
}
function changeBtns(){
  let elem=document.getElementsByName("group1");
  if(elem[1].checked){
    keys=1;
    localStorage.setItem("key", 1);
  }
  if(elem[0].checked){
    keys=0;
    localStorage.setItem("key", 0);
  }
  document.getElementById("settings").remove();
}
function tryConnect(param){
  if (param=="start") {
        setTimeout(function() { loadData() }, 1000);
  }
  else{
    return;
  }
}
function loadData(msg) {
    var url="https://2jway2q9n1.execute-api.us-east-2.amazonaws.com/prod/entries";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        //if request is ready
        if (xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200){
              let now = new Date();
              let time="<sub> "+(now.getHours()<10?'0':'')+now.getHours()+":"+(now.getMinutes()<10?'0':'') + now.getMinutes()+"</sub>";
              if(msg){
                msg.innerHTML+=time;
                document.getElementById('chatWindow').innerHTML+="<div class='botMsg'>Сообщение принято"+time+"</div>";
              }
              else{
                messageToSend=document.getElementsByClassName('userMsgOffline');
                for (let i=messageToSend.length-1; i>=0; i--){
                  messageToSend[i].innerHTML+=time;
                  messageToSend[i].className="userMsg";
                }
                document.getElementById('chatWindow').innerHTML+="<div class='botMsg'>Сообщение принято"+time+"</div>";
                tryConnect("stop");
              }
            }
            else{
              if(msg){
                msg.className="userMsgOffline";
              }
              tryConnect("start");
            }
        }
    };
}
