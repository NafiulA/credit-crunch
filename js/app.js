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

function inputValidate() {
    const rentValue = getInputValue("rent");
    const foodValue = getInputValue("food");
    const clothesValue = getInputValue("clothes");
    const incomeValue = getInputValue("income");
    const savingValue = getInputValue("saving");

    if (isNaN(rentValue) == true || isNaN(foodValue) == true || isNaN(clothesValue) == true || isNaN(incomeValue) == true || isNaN(savingValue) == true) {
        document.getElementById("string-error").style.display = "block"
        document.getElementById("negative-error").style.display = "none"
    }
    else if (rentValue < 0 || foodValue < 0 || clothesValue < 0 || incomeValue < 0 || savingValue < 0) {
        document.getElementById("string-error").style.display = "none"
        document.getElementById("negative-error").style.display = "block"
    }
    else {
        const totalExpenseValue = getTotalExpense();
        document.getElementById("total-expense-value").innerText = totalExpenseValue;
        document.getElementById("string-error").style.display = "none"
        document.getElementById("negative-error").style.display = "none"
    }
}

function saveCalculation() {
    const savingValue = getInputValue("saving");
    const incomeValue = getInputValue("income");

    const savingAmount = (savingValue * incomeValue) / 100;

    return savingAmount;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
    inputValidate();
    const incomeValue = getInputValue("income");
    const rentValue = getInputValue("rent");
    const foodValue = getInputValue("food");
    const clothesValue = getInputValue("clothes");
    const totalExpenseValue = getTotalExpense();

    if (rentValue > incomeValue || foodValue > incomeValue || clothesValue > incomeValue || totalExpenseValue > incomeValue) {
        document.getElementById("exceed-error").style.display = "block";
    }
    else {
        const balance = incomeValue - totalExpenseValue;
        document.getElementById("balance-value").innerText = balance;
        document.getElementById("exceed-error").style.display = "none";
    }
})

document.getElementById("save-btn").addEventListener("click", function () {
    inputValidate();
    const savingAmount = saveCalculation();

    const balanceText = document.getElementById("balance-value").innerText;
    const balanceValue = parseFloat(balanceText);

    if (savingAmount > balanceValue) {
        document.getElementById("saving-error").style.display = "block";
    }
    else {
        document.getElementById("saving-value").innerText = savingAmount;

        const remainingBalance = balanceValue - savingAmount;

        document.getElementById("remaining-balance-value").innerText = remainingBalance;

        document.getElementById("saving-error").style.display = "none";
    }
})