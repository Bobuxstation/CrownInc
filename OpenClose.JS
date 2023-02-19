function hireMenu() {
    var x = document.getElementById("EmployeeMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("building-container").style.display = "none";
        document.getElementById("repo-container").style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function buildingMenu() {
    var x = document.getElementById("building-container");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("repo-container").style.display = "none";
        document.getElementById("EmployeeMenu").style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function cloneMenu() {
    var x = document.getElementById("repo-container");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("building-container").style.display = "none";
        document.getElementById("EmployeeMenu").style.display = "none";
    } else {
        x.style.display = "none";
    }
}