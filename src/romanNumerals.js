export function covertNumbertoRomanNumerals(input) {
  let result = "";
  while (input) {
    if(input >= 10)
    { 
        if(input >= 40)
        {
            result += "XL";
            input -= 40;
        }
        else{
            //input = 19
            result += "X"; //result = "XXX"
            input -= 10;//input = 9
        }
        
    }
    else if (input >= 5) {
      if (input >= 9) {
        result += "IX";//result = "XXXIX"
        input -= 9;//input = 0
      } else {
        result += "V";
        input -= 5;
      }
    } else if (input >= 4) {
      result += "IV";
      input -= 4;
    } else {
      result += "I";
      input -= 1;
    }
  }
  return result;
}
