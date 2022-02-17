function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId + "-input");
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    return inputFieldValue;
}

function getTotalExpense() {
    const rentValue = getInputValue("rent");
    const foodValue = getInputValue("food");
    const clothesValue = getInputValue("clothes");

    const totalExpense = rentValue + foodValue + clothesValue;

    return totalExpense;
}

function saveCalculation() {
    const savingValue = getInputValue("saving");
    const incomeValue = getInputValue("income");

    const savingAmount = (savingValue * incomeValue) / 100;

    return savingAmount;
}

function errorMessage(errorID) {
    if ((errorID + "-error") == "string-error") {
        document.getElementById("string-error").style.display = "block";
        document.getElementById("negative-error").style.display = "none";
        document.getElementById("exceed-error").style.display = "none";
        document.getElementById("saving-error").style.display = "none";
    }
    else if ((errorID + "-error") == "negative-error") {
        document.getElementById("string-error").style.display = "none";
        document.getElementById("negative-error").style.display = "block";
        document.getElementById("exceed-error").style.display = "none";
        document.getElementById("saving-error").style.display = "none";
    }
    else if ((errorID + "-error") == "exceed-error") {
        document.getElementById("string-error").style.display = "none";
        document.getElementById("negative-error").style.display = "none";
        document.getElementById("exceed-error").style.display = "block";
        document.getElementById("saving-error").style.display = "none";
    }
    else if ((errorID + "-error") == "saving-error") {
        document.getElementById("string-error").style.display = "none";
        document.getElementById("negative-error").style.display = "none";
        document.getElementById("exceed-error").style.display = "none";
        document.getElementById("saving-error").style.display = "block";
    }
    else if ((errorID + "-error") == "no-error") {
        document.getElementById("string-error").style.display = "none";
        document.getElementById("negative-error").style.display = "none";
        document.getElementById("exceed-error").style.display = "none";
        document.getElementById("saving-error").style.display = "none";
    }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
    const incomeValue = getInputValue("income");
    const rentValue = getInputValue("rent");
    const foodValue = getInputValue("food");
    const clothesValue = getInputValue("clothes");
    const totalExpenseValue = getTotalExpense();

    if (isNaN(rentValue) == true || isNaN(foodValue) == true || isNaN(clothesValue) == true || isNaN(incomeValue) == true) {
        errorMessage("string");
    }
    else if (rentValue < 0 || foodValue < 0 || clothesValue < 0 || incomeValue < 0) {
        errorMessage("negative");
    }
    else if (rentValue > incomeValue || foodValue > incomeValue || clothesValue > incomeValue || totalExpenseValue > incomeValue) {
        errorMessage("exceed");
    }
    else {
        document.getElementById("total-expense-value").innerText = totalExpenseValue;
        const balance = incomeValue - totalExpenseValue;
        document.getElementById("balance-value").innerText = balance;
        errorMessage("no");
    }
})

document.getElementById("save-btn").addEventListener("click", function () {

    const savingValue = getInputValue("saving");
    const savingAmount = saveCalculation();
    const balanceText = document.getElementById("balance-value").innerText;
    const balanceValue = parseFloat(balanceText);

    if (isNaN(savingValue) == true) {
        errorMessage("string");
    }
    else if (savingValue < 0) {
        errorMessage("negative");
    }
    else if (savingAmount > balanceValue) {
        errorMessage("saving");
    }
    else {
        document.getElementById("saving-value").innerText = savingAmount;

        const remainingBalance = balanceValue - savingAmount;

        document.getElementById("remaining-balance-value").innerText = remainingBalance;

        errorMessage("no");
    }
})