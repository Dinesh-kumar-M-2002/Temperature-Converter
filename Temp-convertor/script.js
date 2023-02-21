const celsius1=document.getElementById('Celsius')
const fahrenheit1=document.getElementById('Fahrenheit')
const kelvin1=document.getElementById('Kelvin')



function computetemp()
{
const currentvalue = +event.target.value
switch(event.target.name)
{
case "Celsius":
	kelvin1.value=(currentvalue+273.15).toFixed(2)
	fahrenheit1.value=(currentvalue*1.8+32).toFixed(2)
	break;
case "Fahrenheit":
	celsius1.value=((currentvalue - 32)/1.8).toFixed(2)
	kelvin1.value=((currentvalue-32)/1.8+273.15).toFixed(2)
	break;
case "Kelvin":
	celsius1.value=(currentvalue-273.15).toFixed(2)
	fahrenheit1.value=((currentvalue-273.15)*1.8+32).toFixed(2)
	break;
default:
	break;
}   


}