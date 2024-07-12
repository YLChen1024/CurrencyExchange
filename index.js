var optionSelect = document.getElementById("option-select");
console.log(optionSelect.value);

var submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
    var option = optionSelect.value;

    var currency = document.getElementById("currency").value;

    var result = document.getElementById("result");

    if (currency === NaN || currency === "")
        result.innerHTML = "<h1>請輸入正確數字！</h1>";
    //result.textContent = "請輸入正確數字！";
    else if (option === "nt2us") {
        var outcome = parseFloat(currency) / 30;
        if (isNaN(outcome)) {
            result.innerHTML = "<h1>請輸入正確數字！</h1>";
        }
        else {
            result.innerHTML = "US" + outcome.toFixed(2); //toFixed(n):取到小數點第n位
        }
    }
    else if (option === "us2nt") {
        var outcome = parseFloat(currency) * 30;
        if (isNaN(outcome)) {
            result.innerHTML = "<h1>請輸入正確數字！</h1>";
        }
        else {
            result.innerHTML = "TW" + outcome.toFixed(2);
        }
    }
});
