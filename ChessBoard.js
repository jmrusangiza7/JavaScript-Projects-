// Jean-Michel Rusangiza 

let size = 8; 
let board= ""; 

for (let a = 0; a < size; a++){
	
	for ( let b = 0; b < size; b++){
		
		if ((a+b)%2==0)
			board +=" "; 
		else
			board +="#"; 
		}
		board +="\n"; 
}
console.log(board); 