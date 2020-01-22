let inputSize = prompt("Input a number")

for (let i = 1; i <= inputSize; i ++){
    let responseType = 0;  //   0 => not divisible by 3 or 5 | 1 => divisible by 3 | 2 => divisible by 5 | 3 => divisible by 3 and 5
    if(i % 3 === 0){ // if evenly divisible by 3
        responseType += 1;
    }
    if(i % 5 === 0){
        responseType += 2;
    }

    switch(responseType){
        case 0:
            console.log(i);
            break;
        case 1:
            console.log("Hee!");
            break;
        case 2:
            console.log("Haw!");
            break;
        case 3:
            console.log("Hee Haw!");
            break;
    }
}