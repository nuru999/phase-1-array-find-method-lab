// code your solution here

function superbowlWin(record) {
    const winningYearObj = record.find(game => game.result === "W");
  
    if (winningYearObj) {
      return winningYearObj.year;
    } else {
      return undefined;
    }
  }
  