let username = "LeoTolstoy";
// let bonusBalance = 131;
// let points = 50
// let burningPoints = 3


// console.log('Пользователь: ' + username);
// console.log('Баланс: ' + bonusBalance);

// console.log(`Баланс:   ${bonusBalance + (points * 10 / 2 - 3 * 10) }`);

let bonusBalance = 1000; // из задачи 1
let pricePerKg = 80;    // цена за 1 кг пастилы

// остаток после покупки максимального количества
let remainder = bonusBalance % pricePerKg;

// сколько баллов потратится
let spent = bonusBalance - remainder;

// сколько кг можно купить
let maxKg = spent / pricePerKg;

console.log("Лев Толстой может купить пастилы (кг):", maxKg);
console.log("Останется баллов:", remainder);

; 
// for (let day = 1; day <= 10; day++) {
//   // сначала сгорают баллы
//   bonusBalance -= dailyDecay;

//   // покупка раз в два дня (на 2-й, 4-й, 6-й день и т.д.)
//   if (day % 2 === 0) {
//     bonusBalance += bonusPerPurchase;
//   }
// }

console.log("Баланс через 10 дней:", bonusBalance);


let item = 18;
if (item > 0){
 console.log('Товар присутствует');
}else {
  console.log('Товара нет')
}

let age = 18;
let cat = true;
if(age > 0 && cat == true){
   console.log('Miy');
}
console.log('GAV');