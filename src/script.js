
const generate = (word) => {
	let result = []
	let wordArray = word ? word.split('') : null;
	const array_length = word.length
	var lastIndex = wordArray.length - 1;
	var base = lastIndex -1
	var element = 1;
    var original = [].concat(wordArray);

	bringToLast(wordArray, base, lastIndex, element, original, array_length, result);

	return result
}

function bringToLast(myArray, base, lastIndex, element, original, array_length, result){
	while(lastIndex > 1){
		var word_iteration = {word: myArray.join(''), isActive: false}
		result.push(word_iteration)
		swap(myArray,base, lastIndex);
		lastIndex--
		base--

		if(compareArray(original, myArray)){
			if(element > array_length - 1){
				break;
			}
			swap(myArray, 0, element);
			original = [].concat(myArray);
			element++;
		}
		
		if(lastIndex === 1){
			lastIndex = myArray.length - 1
            base = lastIndex -1
		}
	}
}

function swap(myArray, base, target) {
    var tmp = myArray[base];  //create a tmp variable and assing a copy of baseItem
    myArray[base] = myArray[target];  //asssign baseItem value to toChangeItem value
    myArray[target] = tmp; //assing toChangeItem to tmp copy value
}

function compareArray(baseArray, array){
	if (baseArray.length != array.length) {
		return false;
	}
	for (var i = 0; i < baseArray.length; i++) {
        if (baseArray[i] != array[i]) { 
            return false;   
        }           
    }       
    return true;
}


export default generate