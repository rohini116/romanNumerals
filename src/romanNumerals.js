export function covertNumbertoRomanNumerals(input) {
  let result = "";
  while (input) {
    if (input >= 1000) {
      result += "M";
      input -= 1000;
    } else if (input >= 500) {
      if (input >= 900) {
        result += "CM";
        input -= 900;
      } else {
        result += "D";
        input -= 500;
      }
    } else if (input >= 100) {
      if (input >= 400) {
        result += "CD";
        input -= 400;
      } else {
        result += "C";
        input -= 100;
      }
    } else if (input >= 50) {
      if (input >= 90) {
        result += "XC";
        input -= 90;
      } else {
        result += "L";
        input -= 50;
      }
    } else if (input >= 10) {
      if (input >= 40) {
        result += "XL";
        input -= 40;
      } else {
        result += "X";
        input -= 10;
      }
    } else if (input >= 5) {
      if (input >= 9) {
        result += "IX";
        input -= 9;
      } else {
        result += "V";
        input -= 5;
      }
    } else {
      if (input >= 4) {
        result += "IV";
        input -= 4;
      } else {
        result += "I";
        input -= 1;
      }
    }
  }
  return result;
}
