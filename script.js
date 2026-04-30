function changeUnit() {
    let unit = document.getElementById("unit").value;
    let heightContainer = document.getElementById("heightContainer");

    if (unit === "metric") {
        heightContainer.innerHTML = `
            <label>Height (cm):</label>
            <input type="number" id="height">
        `;
        document.getElementById("weightLabel").innerText = "Weight (kg):";
    } else {
        heightContainer.innerHTML = `
            <label>Height:</label>
            <input type="number" id="feet" placeholder="Feet">
            <input type="number" id="inches" placeholder="Inches">
        `;
        document.getElementById("weightLabel").innerText = "Weight (pounds):";
    }
}

function calculateBMI() {
    let unit = document.getElementById("unit").value;
    let weight = document.getElementById("weight").value;

    if (weight === "" || weight <= 0) {
        alert("Please enter valid weight");
        return;
    }

    let height;
    let bmi;

    if (unit === "metric") {
        height = document.getElementById("height").value;

        if (height === "" || height <= 0) {
            alert("Please enter valid height");
            return;
        }

        height = height / 100; // cm → meters
        bmi = weight / (height * height);

    } else {
        let feet = document.getElementById("feet").value;
        let inches = document.getElementById("inches").value;

        if (feet === "" || feet <= 0) {
            alert("Enter valid feet");
            return;
        }

        if (inches === "") inches = 0;

        let totalInches = (feet * 12) + parseFloat(inches);
        bmi = (weight / (totalInches * totalInches)) * 703;
    }

    bmi = bmi.toFixed(2);
    document.getElementById("result").innerText = "Your BMI: " + bmi;

    let category = "";
    let tips = "";

    if (bmi < 18.5) {
        category = "Underweight";
        tips = "Eat more nutritious food, increase protein intake, and consider strength training.";
    } 
    else if (bmi < 24.9) {
        category = "Normal weight";
        tips = "Maintain a balanced diet, exercise regularly, and stay hydrated.";
    } 
    else if (bmi < 29.9) {
        category = "Overweight";
        tips = "Exercise regularly, reduce junk food, and maintain a calorie deficit.";
    } 
    else {
        category = "Obese";
        tips = "Consult a doctor, follow a structured diet plan, and increase physical activity.";
    }

    document.getElementById("category").innerText = "Category: " + category;
    document.getElementById("tips").innerText = "Health Tips: " + tips;
}