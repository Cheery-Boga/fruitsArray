let mixes = []; 
	


function addFruits() {

	let fruitValues = (prompt("Please Add your Favorite Fruit as an ingredient!")); 
	
	let lowerCase = fruitValues.toLowerCase(); 

	mixes.unshift(lowerCase);  

	let sortedFruits = mixes.sort(); 


	console.log(mixes); 

	document.getElementById("chosenFruits").innerHTML = "Ingredients: " + sortedFruits.join(" with "); 

}