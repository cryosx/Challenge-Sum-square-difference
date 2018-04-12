/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;

  return {
    sumOfSquares: sumOfSquares.bind(null, naturalNumbers),
    squareOfTheSums: squareOfTheSums.bind(null, naturalNumbers)
  };

  function sumOfSquares(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result += Math.pow(i, 2);
    }
    return result;
  }
  function squareOfTheSums(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return Math.pow(sum, 2);
  }
}

// do work here

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
