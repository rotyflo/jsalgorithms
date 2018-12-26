function convertToRoman(num) {
  const romanNums = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  }
  let convertedNum = ''
  let decimalVals = Object.keys(romanNums).reverse()

  decimalVals.forEach(decimalVal => {
    while (num >= decimalVal) {
      let romanNum = romanNums[decimalVal]

      convertedNum += romanNum
      num -= decimalVal
    }
  })

  return convertedNum
}


function rot13(str) {
  let decodedStr = ''

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i)
    let decodedCode = charCode

    if (charCode >= 65 && charCode <= 90) {
      decodedCode = charCode < 78 ? charCode + 13 : charCode - 13
    }
    
    decodedStr += String.fromCharCode(decodedCode)
  }

  return decodedStr
}