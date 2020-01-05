"use strict"

var money = prompt("Ваш бюджет на месяц?", " ");

let year = prompt("Введите дату в формате YYYY-MM-DD", " ");

let category = prompt("Введите обязательную статью расходов в этом месяце", ""),
    cost = prompt("Во сколько обойдется?", "");

let appData = {
    money,
    timeData: year,
    expenses: {
        category: cost
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let oneday = money / 30;

alert(`Бюджет на один день составляет ${oneday}`);

