

//function convert length
function LengthConverter(num) {
	var x = document.getElementById("inputm")
	var z = x.value*0.000621371192
  document.getElementById("outputMile").innerHTML=z;
}
//function convert from meter to feet
function LengthConverter2(num) {
	var x = document.getElementById("inputm")
	var z = x.value*3.2808399
  document.getElementById("outputFeet").innerHTML=z;
}
function LengthConverter3(num) {
	var x = document.getElementById("inputm")
	var z = x.value*39.3700787
  document.getElementById("outputInch").innerHTML=z;
}
function LengthConverter4(num) {
	var x = document.getElementById("inputm")
	var z = x.value*1000
  document.getElementById("outputCM").innerHTML=z;
}
