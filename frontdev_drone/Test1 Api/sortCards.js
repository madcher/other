//API получает на вход набор несортированных карточек и выдает маршрут

//входные данные должны быть представлены в виде объекта с параемтрами from, to и другими.
//Структура объекта: object[{from:"fromPoint" , to: "toPoint" , type: , ...}], где fromPoint - это точка отправления, а toPoint - точка прибытия

//выходные данные представлены в виде объекта с параметрами from, to и другими, отсортированного по порядку следования

//тестовый массив №1
var testMass1 =[{from: "Adler", to: "Sochi", type: "plain", number: "A311"}, {from: "Moscow", to: "Adler", number: "22E",  type: "train"}, {from: "Sochi", to: "Vologda", type: "plain"}];
//тестовый массив №2
var testMass2 =[{to: "Sochi", type: "plain", from: "Adler", number: "A311", seat: "22B"}, {from: "Moscow", to: "Adler", type: "train", number: "11G", seat: "35A"}, { number: "U653", from: "Sochi", to: "Vologda", type: "plain" , seat: "78C"},
{from: "Rostov", to: "Moscow", type: "bus", number: "11", seat: "No seat assignment" }, {from: "Vologda", to: "Novosibirsk", type: "yandex-taxi" , number: "Any", seat: "No seat assignment"}
];

//API для сортировки
function cardSorter(data){
  data.sort(sortData);
  return data;
  //showData(data)
}

//функция сравнения
function sortData(a, b) {
  return (a.to.toLowerCase() == b.from.toLowerCase()) ? -1 : 1;
}

//функция вывода не нужна для API !!! Встраивается на стороне клиента, дана для примера
function showData(data){
  let res="";
  for (var i=0; i<data.length; i++){
    res+="<p> take "+data[i].type + " "+data[i].number +" from "+data[i].from+" to "+data[i].to+" seat: "+data[i].seat+"</p>";
  }

  document.getElementById("dataShow").innerHTML=res;
}
