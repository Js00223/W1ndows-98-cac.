let display = document.getElementById("display");
let plusClickCount = 0;

function press(value) {
    display.value += value;

    // 이스터에그 감지
    if (value === '+') {
        plusClickCount++;
        if (plusClickCount >= 10) {
            display.value = "Leeeeeroooy!!!!!";
        }
    } else {
        plusClickCount = 0;
    }
}

function calculate() {
    const input = display.value;

    // 이스터에그 실행
    const easterEggs = {
        "Leeeeeroooy!!!!!": "jenkiiiiinsssss!!!",
        "007": "James Bond",
        "47": "AK-47 Grrrr",
        "98": "Windows 98",
        "86": "Deja Vu",
        "69": "Censored Num.",
        "02": "Zero Two",
        "0000": "You're my Number 0",
        "1004": "Angel",
        "4444": "Death Note",
        "1966": "I'm tired",
        "2002": "Anne Marie",
        "198": "Go Away, NaGa;;;",
        "666": "Are you Satan??"
    };

    if (easterEggs.hasOwnProperty(input)) {
        display.value = easterEggs[input];
        playSound();
        return;
    }

    try {
        display.value = computeExpression(input);
    } catch {
        display.value = "Error";
    }
}

function computeExpression(expression) {
    let sanitizedExpression = expression.replace(/[^0-9+\-*/().]/g, "");
    return new Function("return " + sanitizedExpression)();
}

function clearDisplay() {
    display.value = "";
    plusClickCount = 0;
}


// 터치로도 이스터에그 동작하도록 설정
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("touchstart", function() {
        press(button.innerText);
    });
});

// 윈도우 98 효과음 재생
function playSound() {
    const audio = new Audio("win98.wav");
    audio.play();
}

