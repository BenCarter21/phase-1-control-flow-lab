function scuberGreetingForFeet(rideDistance){
  let scuberGreetingForFeet; 
  if (rideDistance <= 400) {
    scuberGreetingForFeet = "This one is on me!";
  } else if (rideDistance < 2001) {
    scuberGreetingForFeet = "That will be twenty bucks.";
  } else if (rideDistance > 2500) {
    scuberGreetingForFeet = "No can do.";
  } else {
    scuberGreetingForFeet = "I will gladly take your thirty bucks.";
  }
  return scuberGreetingForFeet;
}

function ternaryCheckCity(destination){
  let city = "NYC";
  let ternaryCheckCity;
  if (destination === "NYC") {
    ternaryCheckCity = "Ok, sounds good.";
  } else {
    ternaryCheckCity = "No go.";
  }
  return ternaryCheckCity;
}
function switchOnCharmFromTip(tip){
  let switchOnCharmFromTip;

  if (tip === "generous") {
    switchOnCharmFromTip = "Thank you so much.";
  } else if (tip === "not as generous") {
    switchOnCharmFromTip = "Thank you.";
  } else {
    switchOnCharmFromTip = "Bye.";
  }

  return switchOnCharmFromTip;
}