
var send= function() {
  var year = parseInt(document.getElementById("year").value);
  var day = parseInt(document.getElementById("day").value);
  var name =(document.getElementById("name").value);
  var month = parseInt(document.getElementById("month").value);
  var date0fbirth = new Date(year + "/" + month + "/" + day);
  var results = date0fbirth.getDay();
   var male = document.getElementById("male") 
  var female = document.getElementById("female")
  var output = document.getElementById("return");
  var daysOfTheWeek = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday" ];
 var maleNames = ["Kwasi","Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"];
 var femaleNames = [ "Akosua"," Adwoa", "Abenaa",  "Akua",  "Yaa",  "Afua", "Ama" ];
 
 if (year < 0) {
   
  output.innerHTML = "dear " + name + "  enter a valid year please! "
  }
  if (name=="" && day =="" && year =="" && month=="") {
    alert("enter your informations to know your akan name");
    return false; 
}
  
else if ((month < 1) || (month >12)) {
    
    alert(output.innerHTML = "dear! " + name + " enter a valid month please! ")
}
  
 else if (day <0 || day >31) {
    
   alert( output.innerHTML = "dear " + name + " enter your valid day please! ")
}
else if (year <= 1879 || year >=2020) {
    
  alert(output.innerHTML = "dear " + name + " enter your valid year please! ")
}

  if(female.checked && year > 1879 && year<=2020 && month > 0 && month < 12 && day > 0 && day <= 31) {
   
  alert(output.innerHTML = "wow dear madam " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results]);
  }
   else if(male.checked && year > 1879 && year<=2020 && month > 0 && month < 12 && day > 0 && day <=31) {
   
 alert( output.innerHTML = "wow dear sir " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results])
};
};
