"use strict";
import "./style.css";
const result = [];
const appDiv = document.getElementById("app");

function getInfoFromApi(date) {
    fetch(`https://api.exchangeratesapi.io/${date}?base=RUB`)
        .then(request => request.json())
        .then(render);
}

(function getArrayDates(result) {
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    result.push(combineDateToString(currentYear, currentMonth, currentDay));
    for (let i = 0; i < 6; i++) {
        if (currentDay - 1 >= 1) {
            result.push(
                combineDateToString(currentYear, currentMonth, currentDay - 1)
            );
            currentDay -= 1;
        } else if (currentMonth >= 1) {
            currentDay = daysInMonth(currentMonth, currentYear);
            result.push(
                combineDateToString(currentYear, currentMonth - 1, currentDay)
            );
            currentMonth -= 1;
        } else {
            currentDay = daysInMonth(12, currentYear - 1);
            result.push(combineDateToString(currentYear - 1, 11, currentDay));
            currentMonth = 11;
            currentYear -= 1;
        }
    }
})(result);

function combineDateToString(year, month, day) {
    month += 1;
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
}
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function appendButton(dates) {
    dates.forEach(date => {
        let b = document.createElement("button");
        b.style.cssText =
            "background-color: #4CAF50;border-radius: 30%;color: white;padding: 0 auto;text-align: center;text-decoration: none;display: inline-block;font-size: 14px;";
        b.addEventListener("click", () => getInfoFromApi(date));
        b.innerText = date;
        buttons.appendChild(b);
    });
}

function render(obj) {
    divTable.innerHTML = "";
    for (let item in obj.rates) {
        let tr = document.createElement("tr");
        tr.style.cssText =
            "font-weight: bold;padding: 5px;background: #efefef;border: 1px solid #dddddd;";
        tr.innerHTML +=
            "<td>" + item + "<td/>" + "<td>" + obj.rates[item] + "<td/>";
        divTable.appendChild(tr);
    }
}
let buttons = document.createElement("div");
appDiv.append(buttons)
let divTable = document.createElement("table");
divTable.style.cssText =
    "width: 100%;margin-bottom: 0 auto;border: 2px solid black;border-collapse: collapse";
appDiv.appendChild(divTable);
appendButton(result);
