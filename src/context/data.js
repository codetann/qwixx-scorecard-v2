function createNumbers(color) {
  let row = [];

  if (color === "red" || color === "yellow") {
    for (let i = 2; i <= 12; i++) {
      if (i === 12) {
        row.push({ number: i, toggled: false, disabled: true });
      } else {
        row.push({ number: i, toggled: false, disabled: false });
      }
    }
  } else {
    for (let i = 12; i >= 2; i--) {
      if (i === 2) {
        row.push({ number: i, toggled: false, disabled: true });
      } else {
        row.push({ number: i, toggled: false, disabled: false });
      }
    }
  }
  row.push({ number: 0, toggled: false, disabled: true });
  return row;
}

export const board = {
  rows: [
    {
      color: "red",
      hex: "#C40A0B",
      unlocked: false,
      score: 0,
      numbers: createNumbers("red"),
    },
    {
      color: "yellow",
      hex: "#E2C506",
      unlocked: false,
      score: 0,
      numbers: createNumbers("yellow"),
    },
    {
      color: "green",
      hex: "#44D30B",
      unlocked: false,
      score: 0,
      numbers: createNumbers("green"),
    },
    {
      color: "blue",
      hex: "#1534CA",
      unlocked: false,
      score: 0,
      numbers: createNumbers("blue"),
    },
  ],
  penalties: 0,
  totals: {},
  // Methods
  selectNumber(color, number) {
    // --- finds the index of the row color and number
    const rowIndex = this.rows.findIndex((item) => item.color === color);
    const numIndex = this.rows[rowIndex].numbers.findIndex(
      (num) => num.number === number
    );

    const row = board.rows[rowIndex].numbers;
    const selected = row[numIndex];

    if (selected.toggled === true) {
      const nextNum = row[numIndex + 1];

      if (numIndex === 11) {
        /**
         * Checks to see if the selected index is 11 (last index of the row)
         * If it is it will untoggle it and undisable all numbers before it until the next toggle is located
         */
        selected.disabled = false;
        selected.toggled = false;

        for (let i = numIndex - 1; i > 0; i--) {
          if (row[i].toggled === false) {
            row[i].disabled = false;
          } else {
            break;
          }
        }
      } else if ((nextNum.disabled || nextNum.toggled) && numIndex !== 9) {
        /**
         * Checks if the user is clicking a already toggled number that is next to a toggled or disabled number
         * Also checks to make sure the selected number is not the index of 9
         *    the 9th index errors out otherwise due to the fact that the last two numbers by default are disabled
         */
        return;
      } else {
        /**
         * Runs if the selected number is already toggled
         * Sets all of the previous un selected numbers disabled attribute to false
         */
        selected.disabled = false;
        selected.toggled = false;

        for (let i = numIndex - 1; i >= 0; i--) {
          if (row[i].toggled === false) {
            row[i].disabled = false;
          } else {
            break;
          }
        }
      }

      board.rows[rowIndex].score--;
    } else {
      /**
       * Runs if the selected number is not already toggled
       * Sets all of the previous un selected numbers disabled attribute to true
       */
      selected.toggled = true;
      selected.disabled = false;

      board.rows[rowIndex].score++;

      // --- filters through all the numbers before the selected element and disables them if they are not toggled
      for (let i = 0; i < numIndex; i++) {
        if (row[i].toggled === false) {
          row[i].disabled = true;
        }
      }
    }
    console.log(board.rows[rowIndex].score);

    if (board.rows[rowIndex].score >= 5) {
      row[10].disabled = false;
      row[11].disabled = false;
    } else {
      row[10].disabled = true;
      row[11].disabled = true;
    }
  },
  addPenalty() {
    this.penalties++;
  },
  removePenalty() {
    this.penalties--;
  },
  endGame() {
    this.rows.forEach((row) => {
      switch (row.score) {
        case 0:
          this.totals[row.color] = 0;
          break;
        case 1:
          this.totals[row.color] = 1;
          break;
        case 2:
          this.totals[row.color] = 3;
          break;
        case 3:
          this.totals[row.color] = 6;
          break;
        case 4:
          this.totals[row.color] = 10;
          break;
        case 5:
          this.totals[row.color] = 15;
          break;
        case 6:
          this.totals[row.color] = 21;
          break;
        case 7:
          this.totals[row.color] = 28;
          break;
        case 8:
          this.totals[row.color] = 36;
          break;
        case 9:
          this.totals[row.color] = 45;
          break;
        case 10:
          this.totals[row.color] = 55;
          break;
        case 11:
          this.totals[row.color] = 66;
          break;
        case 12:
          this.totals[row.color] = 78;
          break;
        default:
          break;
      }
    });

    this.totals["penalties"] = this.penalties * -5;

    this.totals["total"] =
      this.totals["red"] +
      this.totals["yellow"] +
      this.totals["green"] +
      this.totals["blue"] +
      this.totals["penalties"];
  },
};
