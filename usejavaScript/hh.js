
var numbers = [];
var interval;
var expectation;
var randomNum;

// Function to generate random lotto numbers
function generateRandomLottoNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to validate input and enable/disable start/stop button
function validateInput() {
    var expectationInput = document.getElementById("expectation").value;
    var startStopButton = document.getElementById("startStopButton");
    if (expectationInput >= 1 && expectationInput <= 100) {
        startStopButton.disabled = false;
        
        
    } else {
        startStopButton.disabled = true;
    }
}

// Function to generate lotto numbers on page load
function generateLottoNumbers() {
    expectation = parseInt(document.getElementById("expectation").value);
    var lottoNumbersDiv = document.getElementById("lottoNumbers");
    var uniqueNumbers = new Set();
    while (uniqueNumbers.size < 25) {
        uniqueNumbers.add(generateRandomLottoNumber());
    }
    numbers = Array.from(uniqueNumbers);
    updateLottoNumbers();
}

// Function to update the lotto numbers display
function updateLottoNumbers() {
    var lottoNumbersDiv = document.getElementById("lottoNumbers");
    lottoNumbersDiv.innerHTML = "";
    for (var i = 0; i < 25; i++) {
        var number = numbers[i] || "-";
        var circleClass = "";
        if (number === expectation && number === randomNum) {
            circleClass = "circle green";
            document.getElementById("winMessage").style.display = "block";
        } else if (number === randomNum && number !== expectation) {
            circleClass = "circle red";
        } else {
            circleClass = "circle";
        }
        lottoNumbersDiv.innerHTML += '<div class="' + circleClass + '">' + number + '</div>';
        if ((i + 1) % 5 === 0) {
            lottoNumbersDiv.innerHTML += '<br>';
        }
    }
}

// Function to start/stop generating lotto numbers
function startStop() {
    var startStopButton = document.getElementById("startStopButton");
    if (startStopButton.innerHTML === "Start") {
        startStopButton.innerHTML = "Stop";
        interval = setInterval(function() {
            randomNum = generateRandomLottoNumber();
            document.getElementById("result").innerText = "The result is: " + randomNum;
            updateLottoNumbers();
        }, 500);
    } else {
        startStopButton.innerHTML = "Start";
        clearInterval(interval);
        updateLottoNumbers();
    }
}
