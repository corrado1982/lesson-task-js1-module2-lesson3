//Question 1

const btn = document.querySelector(".btn");

// btn.onclick = function () {
//     console.log("I'm a button");
// };

btn.addEventListener("click", function() {
    console.log("I'm a button");
} );

//Question 2
const message = document.querySelector("input[type='text']");
const bCount = document.querySelector("b.count");
const seconButton = document.querySelector("button[type='button']");

message.onkeyup = function () {
    console.log(event.target.value.length);

    const lengthValue = event.target.value.length;
    // const lengthTrimmed = lengthValue.trim();

    seconButton.addEventListener("click", function() {
        bCount.innerHTML = lengthValue;
});

};

////RISPOSTA
// Question 2
const input = document.querySelector("input");
const countButton = document.querySelector("form button");
const countOutput = document.querySelector("b.count");

function countCharacters() {
    const characterCount = input.value.trim().length;
    countOutput.innerHTML = characterCount;
}

countButton.addEventListener("click", countCharacters);

