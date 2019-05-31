
function square(x){
 return x*x; 
}

console.log(square(4)); 

console.log("Eren's character?  ", future()); 

function future(){
	return "Eren Jaeger is a great character right now!";
}

const power=(base, exponent)=>
{
	let result = 1; 
	for (let count =0; count < exponent; count++){
		
		result *= base; 
	}
	return result; 
} 

console.log(power(4,5));



function greet(who){
	console.log("Hello " + who);
}
greet("Eren"); 








