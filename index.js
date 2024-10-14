const userEntry = prompt("Enter Fahrenheit Number");
const fahTemp = Number(userEntry);
//  we created a prompt for the user to enter a fahreheit number //
// the number was a string initially so we made it a number data type //
// we declared the userEntry variable as a number data type in fahTemp variable //

const convertToCelsius = (fahrenheitTemp) => {
  const celsiusTemp = (fahrenheitTemp - 32) * (5/9);
  return celsiusTemp;
}
const newTemp = convertToCelsius(fahTemp); 
 
// ^ above we created a function, that function needs to pass a parameter//
// we called the parameter fahrenheitTemp//
// we created an equation which a variable is equal to celsiusTemp //
// celsiusTemp passes the parameter in the equation and returns result //
// result is stored as newTemp, we call the function with the users input.//
// we do this because fahTemp can be any number the end user wants //




//below we do the same thing with our new function but we pass the 
// newTemp variable that we assigned the function //
// we use conditional statements to set certain conditions //
// example: if the user input was 50 fahrenheit it would be converted to 10 celsius//
// then the alert would say hey its very cold // 


const describeTemp = (fahrTemp) => {
  if (fahrTemp < 32){
      return "very cold";
  } else if(fahrTemp > 32 && fahrTemp < 64){
      return "cold";
  } else if(fahrTemp > 64 && fahrTemp < 86){
      return "warm";
  } else if(fahrTemp > 86 && fahrTemp < 100){
      return "hot";
  } else if(fahrTemp >= 100){
      return "very hot";
  }  
}
const tempFeels = describeTemp(fahTemp);

alert(`It's ${fahTemp} degrees outside and is ${tempFeels}!`);
