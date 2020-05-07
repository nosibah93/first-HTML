

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
	var convertm = userInput.value*1000
  document.getElementById("outputCM").innerHTML=convertm;
}, 
};

function myarray() {
  var array = [" 1 Mile = 0.000621371192 meter  ", " 1 Feet = 3.2808399 Meter " , " 1 Inch = 39.3700787 Meter "," 1 CM = 0.001 Meter"]; 
  document.getElementById("array").innerHTML = array;
}

function convertNumber () {
	 
	each (object , function (value , key) {
		 object[key]() ;
	})
}