var today = new Date() ;
var currentHour = today.getHours() ;
var greeting ;

if (currentHour > 0 && currentHour < 12){
    greeting = 'Good Morning Blood Champion.You are just a few drops away from saving a life.' ;
}
else if (currentHour >= 12 && currentHour <18){
    greeting = 'Good Afternoon Blood Champion.You are just a few drops away from saving a life.' ;
}
else if (currentHour >= 18 && currentHour <24){
    greeting = 'Good Evening Blood Champion.You are just a few drops away from saving a life.' ;
}
else {
    greeting = 'Welcome Blood Champ' ;
}

alert(greeting);
