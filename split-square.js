
function dump(s) {
    if (s === 0 || s === 1) {
      return s.toString();
    } else {
      // Array.map(fn) - return new array of [fn(item1), fn(item2), ...]
      return s.map(dump).join(" ");
    }
  }
  
//TASK 2: Validate Square

function validateSquare(square){
    if (square.length !== 1 && square.length !== 4) return false;

    for(let num of square){
        if(Array.isArray(num)) {
            if(!validateSquare(num)) return false
        }else{
            if(num !== 1 && num !== 0) return false;
        }
    }

    return true;
}

//TASK 3: SIMPLIFY SQUARE

function simplifySquare(square, output="") {
    
    for(let i=0; i< square.length; i++){
        if(Array.isArray(square[i])){
            output = simplifySquare(square[i])
            square[i] = output
        }
    }
    if (s === 0 || s === 1) return s;
    else {
           let sum = square.reduce((acc,val)=>{
        return acc + val;
        })  

        if(sum === 0){
            output = 0
        } else if(sum === 4){
            output = 1
        } else{
            output = square
        }  
    } 
    return output
}

//TASK 4: ADDING SQUARES



function add(s1, s2, output=[]){

    if(s1 === 1 || s2 === 1) output = 1;
    if(s1 === 0 && s2 === 0) output = 0;
    
    if(Array.isArray(s1) && s2 === 0) output = s1;
    if(Array.isArray(s2) && s1 === 0) output = s2;

    
    if(Array.isArray(s1) && Array.isArray(s2)){
        for(let i=0; i < s1.length; i++){
            output = add(s1[i], s2[i])
        }

    }

    return output;
}

