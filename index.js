debugger;
let guess = prompt("Введіть число");
let total = 0;

while (guess !== null) {
  total += parseInt(guess);
  guess = prompt("Введіть число");
  if (guess === null) {
    alert(`Общая сумма чисел равна ${total}`)
    break;
  } 
}