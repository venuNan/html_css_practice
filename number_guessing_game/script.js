var starting;
var ending;

while(true){
    var starting = window.prompt("enter a starting number :");

    while(true){
        if(!starting){
            starting = window.prompt("enter a correct starting number")
        }
        else{
            break;
        }
    }

    var ending = window.prompt("enter a ending number :");

    while(true){
        if(!ending){
            ending = window.prompt("enter a correct ending number")
        }
        else{
            break;
        }
    }
    starting = Number.parseInt(starting)
    ending = Number.parseInt(ending)

    if (starting>ending){
        window.alert("Starting number must be less than ending number");
    }
    else{
        break;
    }
}

var random = Math.floor(Math.random()*(ending-starting)-1)+starting;
var attempts = 0;
var guess;
while(true){
    guess = window.prompt(`guess a number between ${starting} and ${ending}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Enter a correct number!")
    }
    else if(guess<starting || guess>ending){
        window.alert("Enter the number within range.");
    }
    else{
        attempts++;
        if (guess<random){
            window.alert("TOO Low! try aggain")
        }
        else if(guess>random){
            window.alert("TOO HIGH! Try again");
        }
        else{
            window.alert(`Hurray! you won the answer is ${random} and you guessed it in ${attempts}`);
            break;
        }
    }
}