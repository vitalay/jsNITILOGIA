// let username = "LeoTolstoy";
// // let bonusBalance = 131;
// // let points = 50
// // let burningPoints = 3


// // console.log('Пользователь: ' + username);
// // console.log('Баланс: ' + bonusBalance);

// // console.log(`Баланс:   ${bonusBalance + (points * 10 / 2 - 3 * 10) }`);

// let bonusBalance = 1000; // из задачи 1
// let pricePerKg = 80;    // цена за 1 кг пастилы

// // остаток после покупки максимального количества
// let remainder = bonusBalance % pricePerKg;

// // сколько баллов потратится
// let spent = bonusBalance - remainder;

// // сколько кг можно купить
// let maxKg = spent / pricePerKg;

// console.log("Лев Толстой может купить пастилы (кг):", maxKg);
// console.log("Останется баллов:", remainder);

// ; 
// // for (let day = 1; day <= 10; day++) {
// //   // сначала сгорают баллы
// //   bonusBalance -= dailyDecay;

// //   // покупка раз в два дня (на 2-й, 4-й, 6-й день и т.д.)
// //   if (day % 2 === 0) {
// //     bonusBalance += bonusPerPurchase;
// //   }
// // }

// console.log("Баланс через 10 дней:", bonusBalance);


// let item = 18;
// if (item > 0){
//  console.log('Товар присутствует');
// }else {
//   console.log('Товара нет')
// }

// let age = 18;
// let cat = true;
// if(age > 0 && cat == true){
//    console.log('Miy');
// }
// console.log('GAV');

// let costume = 'Cat';
// let knownPerson = true;
// if ((costume === 'Cat' || costume === 'Owl') && knownPerson) {
//   console.log('Заходи!');
// }else {
//   console.log('Пошол Нах');
// }
// let age1 = 359
// let name = true
// let last = false
// if(name && last){
//   console.log('знакомый');
// }else if(name === true && age < 360 ) {

// console.log('приятели')
// } else if(age ){

// }



let name = ''
let balance = 5001
if (name === 'admin'){
  console.log('Администратор');
}else if ( name === '' ){
   console.log('Гость');
}else if (balance > 5000){
  console.log('Вип-клиент');
} else if(balance > 1000){
  console.log('Постоянный покупатель');
} else {
  console.log("Обычный пользователь");
}


let user = 'netologist'
let orderOwner = 'leo_tolstoy'

if (user === orderOwner || user === 'admin'){
  console.log("Редактирование разрешено");
}else {
  console.log("Заказ нельзя редактировать");
}


let age = 15;
switch (age){
  case 0:
  console.log('Вы еще не радились');
  break
  case 7:
    console.log('подрасти');
    break
  case 15:
    console.log('\u00FE одрасти еще немного');
    break
  case 18:
    console.log('доступ разрешо');
    break
  default:
  console.log('доступ запрещен');
}


let product = 'Печенье «Юбилейное», 1 кг'
let inBasket = true
let quantity = 5
if (inBasket){
  console.log(`${quantity} x ${product}`);
}