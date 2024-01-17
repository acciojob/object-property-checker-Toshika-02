const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
      for(let sampleKey in sampleObject){
		  if(sampleKey === key){
			  return true;
		  }
	  } 
	  return false;
	
}

// Do not change the code below
// const key = prompt("Enter Key.");
// alert(hasKey(key));
