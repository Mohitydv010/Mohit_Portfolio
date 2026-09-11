// ===============================
// TYPING EFFECT
// ===============================

const text = "BCA Student & Aspiring Developer";

const typing = document.getElementById("typing");

let index = 0;

function typeText() {

    if (index < text.length) {

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 80);

    }

}

typeText();


// ===============================
// DARK MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// ===============================
// CURRENT YEAR
// ===============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();