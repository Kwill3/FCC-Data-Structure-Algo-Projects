// Project instructions at https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register/
function checkCashRegister(price, cash, cid) {
    let balance = 0;
    let message = {status: "", change: []};
    let changeGiven = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    let value = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  
  
    // Calculate change due, 'changeDue' value will be manipulated 'toPay' value will be used as marker
    let changeDue = cash - price;
    let toPay = cash - price;
  
    // Calculate amount of money in drawer
    for (let denom of cid) {
      balance += denom[1];
      balance = Math.round(balance * 100) / 100;
    }
    
    // Check if enough cash for change
    if (balance < changeDue) {
      message.status = "INSUFFICIENT_FUNDS";
      return message;
    }
  
      // Iterates through the  denominations in 3 arrays
      for (let i = 8; i >= 0; i--) {
        while (changeDue >= value[i][1] && cid[i][1] >= value[i][1]) {
          // Takes specific denominations from cid array and round the value to 2 decimal places
          cid[i][1] -= value[i][1];
          cid[i][1] = Math.round(cid[i][1] * 100) / 100;
          // Reduces the amount of change still due to customer and round value
          changeDue -= value[i][1];
          changeDue = Math.round(changeDue * 100) / 100;
          // Gives specific denominations to customer
          changeGiven[i][1] += value[i][1];
          changeGiven[i][1] = Math.round(changeGiven[i][1] * 100) / 100;
        }
      }
  
      if (changeDue === 0 && balance > toPay){
        // If customer fully paid and there is still balance money in cid
        message.status = "OPEN";
        message.change = changeGiven.filter(ele => ele[1] != 0).reverse();
        console.log(JSON.stringify(message));
        return message;
      } else if (toPay == balance){
        // If customer fully paid but balance in cid is 0
        message.status = "CLOSED";
        message.change = changeGiven;
        console.log(JSON.stringify(message));
        return message;
      } else {
        // If insufficient exact denominations to pay customer
        message.status = "INSUFFICIENT_FUNDS";
        console.log(JSON.stringify(message));
        return message;
      }
  
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);