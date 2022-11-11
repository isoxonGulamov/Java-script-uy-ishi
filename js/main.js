let sum = 11000.34;
let ism = prompt("ismingizni kiriting "); 
let money = prompt("pulni kiriting sumda :");
let natija = alert ( money / sum)
document.write("Sizning Ismingiz : " + ism + `<br>`);
document.write("Sizning pulingiz--sum : " + money + `<br>`);
document.write("Sizning pulingiz--natija : " + ( money / sum)  + `<br>`);
document.write("Borish-kelish samolyot bileti - $500 "+ `<br>`)
document.write("Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250 "+ `<br>`)
document.write("Muzey va ko’ngilochar joylar uchun - 120 yevro"+ `<br>`)
document.write("$1 = 11000.34 so’m"+ `<br>`)
document.write("1 yevro = 12354.03 so’m"+ `<br>`)

if (natija >= 20 ) {
  
    document.write(`Oq yo'l pulingiz zo'rg'a yetdi 🤣🤣🤣 ${ism} ✈️✈️`);
} else  {
    document.write(`${ism}, ozgina ishlab ko'p pul topish kerak bo’lar ekan 😔😔`);
}

