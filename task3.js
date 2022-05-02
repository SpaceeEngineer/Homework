function isValidParentheses(str){
  
    if (str.length < 0 || str.length > 100){
        console.log("Кількість символів повинна бути в межах: [0;100]");
        return false;
    }
    
    let br = "()";

    let st = [];
   
    for (let i = 0; i < str.length; ++i) {
       
        let ch = str[i];
        
        let ind = br.indexOf(ch);
       
        if (ind >= 0) {
           
            if (ind & 1) {
                
                if (!st.length) return false;
                
                let last_br = st.pop();
                
                if (last_br != br[ind - 1]) return false;
            } else { 
                
                st.push(ch);
            }
        }
    }
    
    return true;
}

  let str = "(())";
  console.log(isValidParentheses(str));
