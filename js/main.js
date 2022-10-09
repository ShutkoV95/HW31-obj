
let car1 = {
    brand: 'BMW',
    model: 'X5',
    maxSpeed: 300,
};

let car2 = {
    brand: 'Merc',
    model: 'S',
    maxSpeed: 400,
    minSpeed: 10,
};

// 1. Сравнение обьектов
function equalObj(obj1, obj2) {
    let props1 = Object.getOwnPropertyNames(obj1);
    let props2 = Object.getOwnPropertyNames(obj2);
  
    if (props1.length !== props2.length) {
      return false;
    }
  
    for (let i = 0; i < props1.length; i ++) {
      let prop = props1[i];
  
      if (obj1[prop] !== obj2[prop]) {
        return false;
      }
    }
    return true;
}

//2. Конкатенация обьектов (одинаковые св-ва второго объекта перезапишут св-ва первого)
function сoncatObj(obj1, obj2) {

    for (let p in obj1) {
        if ( obj2[p].constructor==Object ) {
          obj1[p] = сoncatObj(obj1[p], obj2[p]);
        } else {
          obj1[p] = obj2[p];
        }
    }
    return obj1;
}



//3. Вычитание объектов (удалить из 1-го об. все св-ва 2-го)

let compareObjects = (obj1, obj2) => {
    for (let p in obj1){
        if (Object.prototype.hasOwnProperty.call(obj1, p)) {
            if(obj1[p] !== obj2[p]){
                return false;
            }
        }
    }
    for(let p in obj2){
        if (Object.prototype.hasOwnProperty.call(obj2, p)) {
            if (obj1[p] !== obj2[p]) {
                return false;
            }
        }
    }
    return true;
};


let car3 = [
    {brand: 'BMW'},
    {model: 'X5'},
    {maxSpeed: 300},
];

let car4 = [
    {brand: 'Merc'},
    {model: 'S'},
    {maxSpeed: 300},
    {minSpeed: 10},
];

let result = car3.filter(x => !car4.some(y => compareObjects(x, y)));

console.log(equalObj(car1, car2));

console.log(сoncatObj(car1, car2));

console.log(result);