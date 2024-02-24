var value = +prompt("Yechmoqchi bogan sonni kiriting");

  if (value !== NaN || value !== 0) {
    misol();
  } 

function misol() {
  for (let index = 1; index <= value; index++) {
    var randomNum1 = Math.round(Math.random() * 9 + 1); 
    var randomNum2 = Math.round(Math.random() * 9 + 1); 

    var symNum = Math.round(Math.random() * 3 + 1); // * random son orqali symvolni random qilish
    var sym = ""

    var userAnswer; 
    var correctAnswer; 

    // console.log(symNum);

    // random simvol orqali random simvolli misollar chiqishi
    if (symNum == 1) {
      sym = "+"; // simvol

      correctAnswer = randomNum1 + randomNum2; // tori javob 

      userAnswer = +prompt(randomNum1 + sym + randomNum2); // userni javobi
    } else if (symNum == 2) {
      sym = "-";

      correctAnswer = randomNum1 - randomNum2;

      userAnswer = +prompt(randomNum1 + sym + randomNum2);
    } else if (symNum == 3) {
      sym = "*";

      correctAnswer = randomNum1 * randomNum2;

      userAnswer = +prompt(randomNum1 + sym + randomNum2);
    } else if (symNum == 4) {
      sym = "/";

      correctAnswer = randomNum1 / randomNum2;

      userAnswer = +prompt(randomNum1 + sym + randomNum2);
    }

    // javoblarni tekshirish 
    if (userAnswer == correctAnswer) {
      console.log(`Sizning javob to'g'ri: ${userAnswer}`);
    } else {
      console.log(
        `Sizning javob noto'g'ri: ${userAnswer}, To'g'ri javob: ${correctAnswer}`
      );
    }
  }
}