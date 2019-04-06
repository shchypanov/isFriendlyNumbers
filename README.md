# Задача на дружественные числа

Например, числа 220 и 284 - дружественные, т.к. сумма их делителей, исключая само число равна второму числу и наоборот.

220: 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284;
284: 1 + 2 + 4 + 71 + 142 = 220

Моя реализация:

HTML:
    <p>Введите два числа:</p>
    
    <label for="num1">Первое число
      <input type="text" id="num1" name="num">
    </label>
    
    <label for="num2">Второе число
      <input type="text" id="num2" name="num">
    </label>
    
    <button>Проверить</button>
    
    <p class="result"></p>

JS

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

