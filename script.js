(function result() {
  let num = document.querySelectorAll('input[name=num]');
  let btn = document.querySelector('button');
  let res = document.querySelector('.result');

  btn.addEventListener('click', function () {

    for (let i = 0; i < num.length; i++) {
      let resValue = isFriendly(+num[0].value, +num[1].value);

      if (resValue) res.innerHTML = 'Числа дружественные';
      else res.innerHTML = 'Числа не дружественные';
    }
  })

}());


function isFriendly(num1, num2) {
  return getDivisorsSum(num1) === num2 && getDivisorsSum(num2) === num1;
}

function getDivisorsSum(num) {
  return getSum(getDivisors(num))
}

function getDivisors(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) arr.push(i)
  }

  return arr;
}

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}