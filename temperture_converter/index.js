document.getElementById("form_id").addEventListener("submit", function(event) {
    event.preventDefault();

    let input = parseFloat(document.getElementById("temperature").value);
    let tofarenheit = document.getElementById("celtofaren").checked;
    let tocelcius = document.getElementById("farentocel").checked;
    let resultElement = document.getElementById("result");

    if (isNaN(input)) {
        resultElement.style.color = "red";
        resultElement.innerHTML = "Please enter a valid number.";
        return;
    }

    if (tofarenheit) {
        let fahrenheit = (input * 9/5) + 32;
        if(fahrenheit<79){
            document.getElementById("container").style.backgroundImage = "url('cold.png')";
            document.getElementById("container").style.backgroundRepeat = "no-repeat";
            document.getElementById("container").style.backgroundSize = "cover";
        }
        else if (fahrenheit>97){
            document.getElementById("container").style.backgroundImage = "url('hot.png')";
            document.getElementById("container").style.backgroundRepeat = "no-repeat";
            document.getElementById("container").style.backgroundSize = "cover";

        }
        else if (fahrenheit>79 && fahrenheit < 97){
            document.getElementById("container").style.backgroundImage = "url('moderate.png')";
            document.getElementById("container").style.backgroundRepeat = "no-repeat";
            document.getElementById("container").style.backgroundSize = "cover";

        }
        resultElement.innerHTML = `${input} Celsius is ${fahrenheit} Fahrenheit.`;
    } else if (tocelcius) {
        let celsius = (input - 32) * 5/9;
        if(celsius<26){
            document.getElementById("container").style.backgroundImage = "url('cold.png')";
            document.getElementById("container").style.backgroundRepeat = "no-repeat";
            document.getElementById("container").style.backgroundSize = "cover";
        }
        else if (celsius>38){
            document.getElementById("container").style.backgroundImage = "url('hot.png')";
            document.getElementById("container").style.backgroundRepeat = "no-repeat";
            document.getElementById("container").style.backgroundSize = "cover";

        }
        else if (celsius>26 && celsius < 38){
            document.getElementById("container").style.backgroundImage = "url('moderate.png')";
            document.getElementById("container").style.backgroundRepeat = "no-repeat";
            document.getElementById("container").style.backgroundSize = "cover";

        }
        resultElement.innerHTML = `${input} Fahrenheit is ${celsius} Celsius.`;
    } else {
        resultElement.innerHTML = "Please select a conversion option.";
    }
});