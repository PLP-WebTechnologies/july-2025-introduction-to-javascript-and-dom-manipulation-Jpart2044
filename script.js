// ================= Part 1: Variables & Conditionals =================
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
    const age = Number(ageInput.value);
    if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else if (age > 0) {
        ageResult.textContent = "You are a minor.";
    } else {
        ageResult.textContent = "Please enter a valid age.";
    }
});

// ================= Part 2: Functions =================
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

function sum(a, b) {
    return a + b;
}

const greetBtn = document.getElementById("greetBtn");
const greetResult = document.getElementById("greetResult");

greetBtn.addEventListener("click", () => {
    greetResult.textContent = greet("Student");
    console.log("Sum example: 5 + 3 =", sum(5, 3));
});

// ================= Part 3: Loops (Modern) =================
const loopBtn = document.getElementById("loopBtn");
const numberList = document.getElementById("numberList");

loopBtn.addEventListener("click", () => {
    numberList.innerHTML = ""; // Clear previous items
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Using forEach loop
    numbers.forEach(num => {
        const li = document.createElement("li");
        li.textContent = `Number: ${num}`;
        li.classList.add("number-item");
        numberList.appendChild(li);
    });
});

// ================= Part 4: DOM Manipulation =================
const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const createElementBtn = document.getElementById("createElementBtn");
const dynamicContent = document.getElementById("dynamicContent");

changeTextBtn.addEventListener("click", () => {
    document.querySelector("h1").textContent = "Heading Changed!";
});

toggleColorBtn.addEventListener("click", () => {
    document.body.classList.toggle("highlight");
});

// Event delegation: dynamically handle clicks on number items
numberList.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("number-item")) {
        alert(`You clicked on ${e.target.textContent}`);
    }
});

// Dynamically create elements
createElementBtn.addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.textContent = "I am a new element created dynamically!";
    dynamicContent.appendChild(newDiv);
});
