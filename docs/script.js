function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    fetch("https://web-implement1-1.onrender.com/data/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ num1, num2, operator })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("result").innerText = data.error;
        } else {
            document.getElementById("result").innerText = data.result;
        }
    })
    .catch(error => console.error("Error:", error));
}

