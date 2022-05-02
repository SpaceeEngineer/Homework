function calculate(str) {
    let arr = str.split(" ");
    let firstNumber = arr[0], secondNumber = arr[2];
    let result = 0;
    let answer = "";

    switch(arr[1]){
        case "+":
            result = firstNumber.length + secondNumber.length;
        break;
        case "-":
            result = firstNumber.length - secondNumber.length;
        break;
        case "*":
            result = firstNumber.length * secondNumber.length;
        break;
        case "/":
            result = firstNumber.length / secondNumber.length;
        break;
    }

    for(let i = 0; i < result; i++)
    {
        answer += "."
    }
     
    return answer;
  }


  console.log(calculate(".. / .."));