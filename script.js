document.getElementById("inp").addEventListener("input", function conv() {
  var kg = Number(document.getElementById("inp").value);
  document.getElementById("gr").innerHTML = "Grams: "+String(kg*1000);
document.getElementById("lbs").innerHTML = "Ounces: "+String(kg/0.02834952);
  document.getElementById("oz").innerHTML = "Pounds: "+String(kg/0.45359237);
});