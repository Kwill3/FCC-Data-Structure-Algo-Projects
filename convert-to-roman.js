function convertToRoman(num) {
    // Getting the integers on each place value
      let i = num;
      let ones = parseInt(i % 10, 10)
      let tens = parseInt(i/10 % 10, 10)
      let hundreds = parseInt(i/100 % 10, 10)
      let thousands = parseInt(i/1000 % 10, 10)
      let roman = [];
    
    // Using a function to map roman conversion
      let converter = (place, nine, four, five, one) => {
        while (place !== 0) {
          if (place === 9) {
            roman.push(nine);
            place = place - 9;
          }
          else if (place === 4) {
            roman.push(four);
            place = place - 4;
          }
          else if (place > 4) {
            roman.push(five);
            place = place - 5;
          }
          else {
            roman.push(one);
            place = place - 1;
          }
        }
      }
    
      converter(thousands, "", "", "", "M");
      converter(hundreds, "CM", "CD", "D", "C");
      converter(tens, "XC", "XL", "L", "X");
      converter(ones, "IX", "IV", "V", "I");
      
    console.log(ones, tens, hundreds,thousands, roman.join(""))
     return roman.join("");
    }
    
    convertToRoman(798);