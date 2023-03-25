// Initialize score and cookie element
let score = parseInt(localStorage.getItem("score")) || 0;
const cookie = document.getElementById("cookie");

const units = ["", "K", "M", "B", "T", "q", "Q", "s", "S", "o", "n", "d", "U", "D", "T", "Qt", "Qd", "Sd", "St", "O", "N", "v", "c"];

// Initialize score element and update function
const scoreDisplay = document.getElementById("score");
let scoreStat = document.getElementById("score-stat");
let scoreStatToo = document.getElementById("score-stat-too");
function formatScore(score) {
    const units = ["", "K", "M", "B", "T", "q", "Q", "s", "S", "o", "n", "d", "U", "D", "T", "Qt", "Qd", "Sd", "St", "O", "N", "v", "c"];
    let unitIndex = 0;

    while (score >= 1000 && unitIndex < units.length - 1) {
        score /= 1000;
        unitIndex++;
    }

    return score.toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + units[unitIndex];
}
function updateScore() {
    scoreDisplay.textContent = "$" + formatScore(score);
    scoreStat.textContent = "$" + formatScore(score);
    scoreStatToo.textContent = "$" + formatScore(score);
}

// Update score on click
cookie.addEventListener("click", function () {
    let clicksound = new Audio('click.mp3');
    clicksound.play()
    score += 1 + numEmployees;
    updateScore();
    localStorage.setItem("score", score);
    drawNewParticles()
});

// Initialize employee related elements
const hireButton = document.getElementById("hire-button");
const employeeCount = document.getElementById("employee-count");
const employeeStatCount = document.getElementById("employee-stat-count");
const employeeCostInput = document.getElementById("employee-cost");
let numEmployees = parseInt(localStorage.getItem("numEmployees")) || 0;

// Initialize hire button click event
hireButton.addEventListener("click", function () {
    let totalCost = 10 * (numEmployees + 1);
    updateEmployeeCount()
    if (score >= totalCost) {
        score -= totalCost;
        numEmployees++
        updateScore();
        localStorage.setItem("score", score);
        localStorage.setItem("numEmployees", numEmployees);
    }
});

function updateEmployeeCount() {
    employeeCount.innerText = numEmployees;
    employeeStatCount.innerText = numEmployees;
    employeeCostInput.innerText = "$" + (10 * (numEmployees + 1));
}

// Initialize building related elements
const buildingDOMlist = document.getElementById('building-container');
let buildingAmount = parseInt(localStorage.getItem("buildingAmount")) || 1;

// Initialize building related variables
let buildings = [
    {
        name: "Bedroom",
        desc: "Where Everything Starts.",
        cost: 10,
        increment: 1
    },
    {
        name: "Garrage",
        desc: "A step in becoming a billionare.",
        cost: 150,
        increment: 10
    },
    {
        name: "Basement",
        desc: "We cool now?",
        cost: 1500,
        increment: 100
    },
    {
        name: "Apartement",
        desc: "Where First Big Earning Goes to.",
        cost: 5000,
        increment: 150
    },
    {
        name: "Small Office",
        desc: "Now we have an office!",
        cost: 10000,
        increment: 200
    },
    {
        name: "Office",
        desc: "Now we have a better office!",
        cost: 50000,
        increment: 250
    },
    {
        name: "Small Island",
        desc: "Mr Employee or Mr Beast?",
        cost: 100000,
        increment: 350
    },
    {
        name: "Island",
        desc: "Welcome To Crownland!",
        cost: 1000000,
        increment: 400
    },
]

// Update building cost elements
function updateBuildingCosts() {
    buildings.forEach(element => {
        if (buildingAmount != 0) {
            var totalCost = element.cost * buildingAmount
        } else {
            var totalCost = element.cost
        }

        let card = document.createElement('div')
        card.className = "buildingCard"
        card.title = "Increments By: $" + (numEmployees * element.increment);
        card.onclick = function () {
            if (score >= totalCost) {
                score -= totalCost;
                buildingAmount += element.increment;
                localStorage.setItem("buildingAmount", buildingAmount);
                buildingDOMlist.innerHTML = `
                <p>Buildings:</p>
                `
                updateBuildingCosts()
            }
        }

        let title = document.createElement('h3')
        title.innerText = element.name;
        card.appendChild(title)

        let price = document.createElement('p')
        price.innerHTML = element.desc + "<span class='price'> $" + totalCost + "</span>";
        card.appendChild(price)

        buildingDOMlist.appendChild(card)
    });
}

// Initialize building counts and costs
updateBuildingCosts();

// Initialize clonne related elements
const cloneDOMlist = document.getElementById('repo-container');
let clonedAmount = parseInt(localStorage.getItem("clonedAmount")) || 1;

// Initialize building related variables
let repos = [
    {
        name: "JokeJungle",
        desc: "A game from a small indie team, Easy to steal.",
        cost: 1000,
        increment: 100
    },
    {
        name: "Uranium Store",
        desc: "A small game community. Will take some money to steal.",
        cost: 15000,
        increment: 1000
    },
    {
        name: "🚾 Studios",
        desc: "A indie game group that is easy to force-acquire.",
        cost: 150000,
        increment: 10000
    },
    {
        name: "Project Skoo-Oh-Pine TakeUp",
        desc: "A game with a decent community. Will take alot of money to steal.",
        cost: 500000,
        increment: 15000
    },
    {
        name: "BrokenHill Editor",
        desc: "This will earn us alot!",
        cost: 1000000,
        increment: 20000
    },
    {
        name: "People's Republic Of Games Studio",
        desc: "Hardest Of All...",
        cost: 100000000,
        increment: 2000000
    }
]

// Update building cost elements
function updateRepoCosts() {
    repos.forEach(element => {
        if (clonedAmount != 0) {
            var totalCost = element.cost * clonedAmount
        } else {
            var totalCost = element.cost
        }

        let card = document.createElement('div')
        card.className = "buildingCard"
        card.title = "Increments By: $" + (numEmployees * element.increment);
        card.onclick = function () {
            if (score >= totalCost) {
                score -= totalCost;
                clonedAmount += element.increment;
                localStorage.setItem("clonedAmount", clonedAmount);
                cloneDOMlist.innerHTML = `
                <p>Repos and companies to clone (or steal):</p>
                `
                updateRepoCosts()
            }
        }

        let title = document.createElement('h3')
        title.innerText = element.name;
        card.appendChild(title)

        let price = document.createElement('p')
        price.innerHTML = element.desc + "<span class='price'> $" + totalCost + "</span>";
        card.appendChild(price)

        cloneDOMlist.appendChild(card)
    });
}

// Initialize building counts and costs
updateRepoCosts();

// Initialize game loop to update score and employee click rate
setInterval(function () {
    let buildingAmountStat = document.getElementById('building-stat');
    buildingAmountStat.innerText = buildingAmount;

    let repoStat = document.getElementById('repo-stat');
    repoStat.innerText = clonedAmount;

    let respectStat = document.getElementById('respect-stat');
    respectStat.innerText = respect;

    if (numEmployees > 0) {
        score = parseInt(score) + (numEmployees * buildingAmount * clonedAmount);
    }

    updateScore();
    localStorage.setItem("score", score);
    localStorage.setItem("buildings", JSON.stringify(buildings));
    updateEmployeeCount();
    checkAchievements();
    drawNewParticles()
}, 1000);