// Initialize achievements
const achievements = [
    {
        name: "The First Repo",
        desc: "Earn $1",
        condition: 1
    },
    {
        name: "100 Repos Now?!",
        desc: "Earn $100",
        condition: 100
    },
    {
        name: "1K Moment",
        desc: "Earn $1000",
        condition: 1000
    },
    {
        name: "Path to 1M",
        desc: "Earn $100K",
        condition: 100000
    },
    {
        name: "Millionaire",
        desc: "Earn $1M",
        condition: 1000000
    },
    {
        name: "Billionaire",
        desc: "Earn $1B",
        condition: 1000000000
    },
    {
        name: "Trillionaire",
        desc: "Earn $1T",
        condition: 1000000000000
    },
];

function checkAchievements() {
    const achievementsList = document.getElementById("achievements-list");
    achievementsList.innerHTML = "";
    achievements.forEach(element => {
        if (score >= element.condition) {
            let card = document.createElement('div')
            card.className = "buildingCard"
            card.style.animation = "none"

            let title = document.createElement('h3')
            title.innerText = element.name;
            card.appendChild(title)

            let price = document.createElement('p')
            price.innerText = element.desc;
            card.appendChild(price)

            achievementsList.prepend(card)
        }
    });
}