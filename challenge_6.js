/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */

class SumOfASquare {
  constructor(naturalNumbers) {
    this.naturalNumbers = naturalNumbers;
  }

  sumOfSquares() {
    let result = 0;
    for (let i = 1; i <= this.naturalNumbers; i++) {
      result += Math.pow(i, 2);
    }
    return result;
  }
  squareOfTheSums() {
    let sum = 0;
    for (let i = 1; i <= this.naturalNumbers; i++) {
      sum += i;
    }
    return Math.pow(sum, 2);
  }
}

exports.SumOfASquare = SumOfASquare;

// do work here

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
