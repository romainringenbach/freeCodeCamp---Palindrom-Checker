const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click",() => {
    const valueToCheck = input.value
    const isPalindrome = checkPalindrome(valueToCheck);
    let msg = `${valueToCheck} is ${isPalindrome? "" : "not "}a palindrome`;
    resultDiv.textContent = msg;
});

function checkPalindrome(value){
    const regex = /[\W_]/g
    const cleanedValue = value.replace(regex,"").toLowerCase();
    const firstPart = cleanedValue.slice(0, Math.ceil(cleanedValue.length/2));
    const secondPart = cleanedValue.slice(Math.ceil(cleanedValue.length/2), cleanedValue.length);
    const secondPartReverted = Array.from(secondPart).reverse().join("");
    return firstPart === secondPartReverted;
}

