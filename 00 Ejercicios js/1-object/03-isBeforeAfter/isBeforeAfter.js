function mkDate(day, month, year) {
  const date = {
    day: day,
    month: month,
    year: year,
    isBefore(date2) {
      if (this.year < date2.year) {
        return true;
      } else if (this.year === date2.year) {
        if (this.month < date2.month) {
          return true;
        } else if (this.month === date2.month) {
          if (this.day < date2.day) {
            return true;
          } else if (this.day === date2.day) {
            return "Same dates";
          }
        }
      }
      return false;
    },
    isAfter(date3) {
      if (this.year > date3.year) {
        return true;
      } else if (this.year === date3.year) {
        if (this.month > date3.month) {
          return true;
        } else if (this.month === date3.month) {
          if (this.day > date3.day) {
            return true;
          } else if (this.day === date3.day) {
            return "Same dates";
          }
        }
      }
      return false;
    },
  };
  return date;
}

const date1 = mkDate(29, 6, 2000);
const date2 = mkDate(30, 6, 2000);
const date3 = mkDate(28, 6, 1999);
console.log("(29, 6, 2000) is before (30, 6, 2000)? " + date1.isBefore(date2))
console.log("(29, 6, 2000) is after (30, 6, 2000)? " + date1.isAfter(date2))
console.log("(29, 6, 2000) is after (28, 6, 1999)? " + date1.isAfter(date3))
