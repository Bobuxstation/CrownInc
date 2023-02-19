let lawsuits = [
    {
        name: "Bribe Judge",
        desc: "Bribe the judge to prove your company is not guilty.",
        cost: (1000 * clonedAmount),
        increment: 10
    },
    {
        name: "Bribe Company",
        desc: "Bribe company and stop lawsuit.",
        cost: (150000 * clonedAmount),
        increment: 100
    },
    {
        name: "Ignore",
        desc: "Ignore lawsuit, Decreases respect",
        cost: 0,
        increment: -100
    },
    {
        name: "Plead guilty and pay losses",
        desc: "Plead guilty and pay losses, Decreases respect",
        cost: (500 * clonedAmount),
        increment: -10
    }
]

let respect = parseInt(localStorage.getItem("respect")) || 1;

function newLawSuit() {
    document.getElementById("building-container").style.display = "none";
    document.getElementById("EmployeeMenu").style.display = "none";
    document.getElementById("repo-container").style.display = "none";

    let companyname = faker.company.companyName();
    document.getElementById("lawsuitbox").innerHTML = ""
    document.getElementById("lawsuitbox").innerHTML = `<p>${faker.company.companyName()} Has sent you to court!</p>`
    document.getElementById("lawsuitbox").style.display = "block";

    lawsuits.forEach(element => {
        let card = document.createElement('div')
        card.className = "buildingCard"
        card.title = "Increments By: " + element.increment;
        card.onclick = function () {
            if (score >= element.cost) {
                score -= element.cost;
                respect += element.increment;
                localStorage.setItem("respect", respect);
                document.getElementById("lawsuitbox").style.display = "none";
            }
        }

        let title = document.createElement('h3')
        title.innerText = element.name;
        card.appendChild(title)

        let price = document.createElement('p')
        price.innerText = element.desc + " $" + element.cost;
        card.appendChild(price)

        document.getElementById('lawsuitbox').appendChild(card)
    });
}

setInterval(() => {
    const randomNumber = Math.random() * 100;
    if (randomNumber < 50) {
        newLawSuit();
    }
}, 60000);