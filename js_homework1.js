'use strict';
var filmArr = [];
//функция, генерирующая список фильмов с их свойствами
(function(arr){
    let i = 1;
    while(i<=10){
        let obj = {
            name: "film " +  i,
            genre: "genre " + Math.round((Math.random()*10+1)/2),
            cost: Math.round(200+Math.random()*200)
        }
        arr.push(obj);
        i++;
    }
})(filmArr)

let getFilmWithMinCost = (arr)=>{
    let minObj = arr[0];
    let min = arr[0].cost;
    for(let i = 0; i<arr.length-1;i++){
        if(arr[i+1].cost < min){
            min = arr[i+1].cost;
            minObj = arr[i+1];
        }
    }
    return minObj;
}

let getFilmWithMaxCost =  function (arr){
    let maxObj = arr[0];
    let max = arr[0].cost;
    for(let i = 0; i<arr.length-1;i++){
        if(arr[i+1].cost > max){
            max = arr[i+1].cost;
            maxObj = arr[i+1];
        }
    }
    return maxObj;
};

function averageCost (arr){
    let result = 0;
    for (let film of arr){
        result+=film.cost;
    }
    result/=arr.length;
    return result;
}



console.log("Список всех фильмов:", filmArr);
console.log("Фильм с минимальной стоимостью билета:",  getFilmWithMinCost(filmArr));
console.log("Фильм с максимальной стоимостью билета:", getFilmWithMaxCost(filmArr));
console.log("Средняя стоимость билета:", averageCost(filmArr));

//Намеренно старался использовать как можно больше различных
// способов объвления функций и различные циклы для тренировки.