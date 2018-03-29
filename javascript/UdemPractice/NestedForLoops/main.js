for(var month=1;month<=12;month++){
//start of a new month
console.log("The Month is: " + month);
for(var day=1;day<=31;day++){
//start of the 31 days of the month
console.log("the day is::::::: " + day);
}
//end of a month
}

var species = ["cat", "dog", "monkey"];
var specificSpecies = [["lion", 'leopard', 'tabby'],
                       ['wolf', 'hyena','poodle'],
                       ['spider', 'mandrill', "marmoset"]];

for (var i = 0; i < species.length; i++){
  console.log("The family name of the species is : " + species[i]);
  for (var j = 0; j < specificSpecies.length; j++){
    console.log("Examples of types of this species are: " + specificSpecies[i]);
  }
  console.log("end of both loops");
}
