document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display"); 
    const buttons = document.querySelectorAll("button"); 
    let plusClickCount = 0;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.textContent;
            console.log(`버튼 클릭: ${value}`);

            if (this.classList.contains("number")) {
                if (display.value === "0") {
                    display.value = value;
                } else {
                    display.value += value;
                }
                console.log(value);
            } else if (value === "C") {
                clearDisplay();
                console.log(value);
            } else if (value === ".") {
                if (!display.value.includes(".")) {
                    display.value += ".";
                }
                console.log(value);
            } else if (this.classList.contains("operator")) {
                display.value += value;
                console.log(value);
            } else if (value === "=") {
                calculate();
            } else if (value === "+") {
                handlePlusClick();
                pressKey("+");
            } else {
                pressKey(value);
            }
        });
    });

    function pressKey(key) {
        display.value += key;
    }

    function calculate() {
        try {
            if (display.value === "007") {
                display.value = "James Bond";
            } else if (display.value === "47") {
                display.value = "AK-47 Grrrr";
            } else if (display.value === "98") {
                playWindows98Sound();
            } else {
                display.value = eval(display.value);
            }
        } catch {
            display.value = "Error";
        }
    }

    function clearDisplay() {
        display.value = "0";
    }

    function handlePlusClick() {
        plusClickCount++;
        if (plusClickCount === 10) {
            display.value = "Leeeeeroooy!!!!!";
        }
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            if (display.value === "Leeeeeroooy!!!!!") {
                display.value = "jenkiiiiinsssss!!!";
            } else {
                calculate();
            }
        }
    });

    function playWindows98Sound() {
        let audio = new Audio("win98.mp3");
        audio.play();
    }
});
