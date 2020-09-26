
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
 
if (month =="" && year =="" && day =="" && name=="") {
    prompt("enter your informations");
    return false;
  }

  if (year < 0) {
   
    output.innerHTML = "dear " + name + "  enter a valid year! "
}
  
else if ((month < 1) || (month >= 31)) {
    
    output.innerHTML = "dear! " + name + " enter a valid month ! "
}
  
 else if (day <= 0 || day >=31) {
    
    output.innerHTML = "dear " + name + " enter your valid day! "
}

  if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
    output.style.background ="white"
      output.innerHTML = "wow dear sir " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
  }
   else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
    output.style.background ="white"
    output.style.background ="white"
    output.innerHTML = "wow dear madam " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
}

};
