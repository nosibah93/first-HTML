

//function convert length
// var x = document.getElementById("inputm")
// var array =[0.000621371192 , 3.2808399 , 39.3700787 , 1000]
 
// function map(coll,f){
//  var acc=[];
//  if(!Array.isArray(coll)){
//    acc={};
//  }
//  each(coll,function(element,key){
//    acc[key]=f(element,key);
//  });
//  return acc
// }

// function results(array){
// 	map(array,function(element){
// 		x.value*element
// 	})
// 	return array
// }

// function LengthConverter(num) {
// 	var z = array[0]
//   document.getElementById("outputMile").innerHTML=z;
// }
// //function convert from meter to feet
// function LengthConverter2(num) {

// 	var z = array[1]
//   document.getElementById("outputFeet").innerHTML=z;
// }
// function LengthConverter3(num) {
	
// 	var z = array[2]
//   document.getElementById("outputInch").innerHTML=z;
// }
// function LengthConverter4(num) {
	
// 	var z = array[3]
//   document.getElementById("outputCM").innerHTML=z;
// }
//declare each function to iterating 
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

//declare object to organize our functions
var object = {
mile: function () {
	var userInput = document.getElementById("inputm")
	var convertm = userInput.value*0.000621371192
  document.getElementById("outputMile").innerHTML=convertm;
} ,

feet:function () {
	var userInput = document.getElementById("inputm")
	var convertm = userInput.value*3.2808399
  document.getElementById("outputFeet").innerHTML=convertm;
} ,
inch:function () {
	var userInput = document.getElementById("inputm")
	var convertm = userInput.value*39.3700787
  document.getElementById("outputInch").innerHTML=convertm;
} ,
cm:function () {
 	var userInput = document.getElementById("inputm")
	var convertm = userInput.value*100
  document.getElementById("outputCM").innerHTML=convertm;
}, 
};
//declare myarray function to our data in array and invoke it whene user click in vonvert button .
function myarray() {
  var array = [" 1 Meter = 0.000621371192 Mile  ", " 1 Meter = 3.2808399 Feet " , " 1 Meter = 39.3700787 Inch "," 1 Meter = 100 CM"]; 
  document.getElementById("array").innerHTML = array;
}
//
function convertNumber () {
	 
	each (object , function (value , key) {
		 object[key]() ;
	})
}