function grid(N) {
    
    let arr = [];
    let letter = 97;

    for (let i = 0; i < N; i++) { 
        arr[i] = [];
        for (let j = 0; j < N; j++) {
            arr[i][j] = String.fromCharCode(letter);
            letter++;
            if(letter == 123)
                letter = 97;
        }
        letter = arr[i][1];
        letter = letter.charCodeAt(0);
    }

    if (N == 0)
    {
        return null;
    }
    else
    {
        return arr;
    }
  }

  let result = grid(6);
  if(result == null)
  {
      console.log("Розмір сітки = 0");
  }
  else
  {
    for (let i = 0; i < result.length; i++)
    {
        console.log(result[i]);
    }
  }
  