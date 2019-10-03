function multiByBase(base, digitsArray, totalNumberOfDigits) {
  let carry = 0;

  for (let i = 0; i < totalNumberOfDigits; i++) {
    let multiplyAndCarry = digitsArray[i] * base + carry;
    const reminder = multiplyAndCarry % 10;
    digitsArray[i] = reminder;
    carry = (multiplyAndCarry - reminder) / 10;
  }

  while (carry > 0) {
    const reminder = carry % 10;
    digitsArray[totalNumberOfDigits] = reminder;
    carry = (carry - reminder) / 10;
    totalNumberOfDigits++;
  }
  return totalNumberOfDigits;
}

export default function powerOf(base, exponent) {
  if (exponent === 0) {
      return 1;
  }
  
  const digitsArray = [];
  let totalNumberOfDigits = 0, tempVal = base;
  
  while(tempVal != 0) {
      const reminder = tempVal % 10;
      digitsArray[totalNumberOfDigits] = reminder;
      totalNumberOfDigits += 1;
      tempVal = (tempVal - reminder) / 10;
  }

  for (let i = 2; i <= exponent; i++) {
    totalNumberOfDigits = multiByBase(base, digitsArray, totalNumberOfDigits);
  }

  return digitsArray.reverse().join('');
}
