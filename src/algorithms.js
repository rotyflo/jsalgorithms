module.exports = {


  // BASIC ALGORITHMS


  convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;

    return fahrenheit;
  },


  reverseString(str) {
    let reversed = str.split('').reverse().join('');

    return reversed;
  },


  factorialize(num) {
    let factorial = 1;

    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }

    return factorial;
  },


  findLongestWordLength(str) {
    let words = str.split(' ');
    let longest = 0;

    for (let word of words) {
      if (word.length > longest) {
        longest = word.length;
      }
    }

    return longest;
  },


  largestOfFour(arr) {
    let largestNumbers = [];

    for (let subArr of arr) {
      let largest = subArr[0];

      for (let num of subArr) {
        if (num > largest) {
          largest = num;
        }
      }

      largestNumbers.push(largest);
    }

    return largestNumbers;
  },


  confirmEnding(str, target) {
    let lastChars = str.slice(-target.length);
    let endsInTarget = lastChars === target;

    return endsInTarget;
  },


  repeatStringNumTimes(str, num) {
    let repeatedString = '';

    for (let i = 0; i < num; i++) {
      repeatedString += str;
    }

    return repeatedString;
  },


  truncateString(str, num) {
    let shortString = str.slice(0, num) + '...';

    return num >= str.length ? str : shortString;
  },

  
  findElement(arr, func) {
    for (let num of arr) {
      if (func(num)) {
        return num;
      }
    }
  },

  
  booWho(bool) {
    let isBoolean = typeof bool === 'boolean';
    
    return isBoolean;
  },


  titleCase(str) {
    let words = str.split(' ');
    let titleWords = [];

    for (let word of words) {
      let titleWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

      titleWords.push(titleWord);
    }

    let titleStr = titleWords.join(' ');

    return titleStr;
  },


  frankenSplice(arr1, arr2, n) {
    let spliced = arr2.slice();

    for (let item of arr1) {
      spliced.splice(n++, 0, item);
    }

    return spliced;
  },


  bouncer(arr) {
    let filteredArr = arr.filter(item => item);

    return filteredArr;
  },


  getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (let item of arr) {
      if (num <= item) {
        return arr.indexOf(item);
      }
    }

    return arr.length;
  },


  mutation(arr) {
    let str = arr[0].toLowerCase();
    let requiredletters = arr[1].toLowerCase().split('');

    for (let letter of requiredletters) {
      if (str.indexOf(letter) === -1) {
        return false;
      }
    }

    return true;
  },


  chunkArrayInGroups(arr, size) {
    let arrCopy = arr.slice();
    let subArrays = [];

    while (arrCopy.length > 0) {
      subArrays.push(arrCopy.splice(0, size));
    }

    return subArrays;
  },


  // INTERMEDIATE ALGORITHMS


  sumAll(arr) {
    arr.sort((a, b) => a - b);

    let sm = arr[0];
    let lg = arr[1];
    let sum = 0;

    for (let i = sm; i < lg + 1; i++) {
      sum += i;
    }

    return sum;
  },


  diffArray(arr1, arr2) {
    let difference = [];
    
    for (let item of arr1) {
      if (arr2.indexOf(item) === -1) {
        difference.push(item);
      }
    }

    for (let item of arr2) {
      if (arr1.indexOf(item) === -1) {
        difference.push(item);
      }
    }

    return difference;
  },


  destroyer(arr) {
    let forbiddenItems = [];
    
    for (let i = 1; i < arguments.length; i++) {
      forbiddenItems.push(arguments[i]);
    }

    let filtered = arr.filter(item => forbiddenItems.indexOf(item) === -1);

    return filtered;
  },


  // Intermediate Algorithm Scripting: Wherefore art thou //


  spinalCase(str) {
    let spinal = str[0];
    
    for (let i = 1; i < str.length; i++) {
      let char = str[i];

      if ('-_ '.includes(char)) {
        spinal += '-' + str[i + 1];
        i++;
      }
      else if (char === char.toUpperCase()) {
        spinal += '-' + char;
      }
      else {
        spinal += char;
      }
    }

    return spinal.toLowerCase();
  },


  translatePigLatin(str) {
    // Index of the first occuring vowel
    let i = str.search(/[aeiou]/);

    if (i === 0) return str + 'way';

    else if (i === -1) return str + 'ay';
    
    else return str.slice(i) + str.slice(0, i) + 'ay';
  },


  myReplace(str, before, after) {
    let beforeIsCapitalized = before[0] === before[0].toUpperCase();
    let capitalizedAfter = after[0].toUpperCase() + after.slice(1);

    return str.replace(before, () => {
      if (beforeIsCapitalized) {
        return capitalizedAfter;
      }
      else return after;
    });
  },


  pairElement(str) {
    let basePairs = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    };
    let completePairs = [];

    for (let item of str) {
      completePairs.push([item, basePairs[item]]);
    }

    return completePairs;
  },


  fearNotLetter(str) {
    let correctCode = str.charCodeAt(0);
    let missingChar = '';

    for (let i in str) {
      let charCode = str.charCodeAt(i);

      if (charCode === correctCode) {
        correctCode++;
      }
      else {
        missingChar = String.fromCharCode(correctCode);
      }
    }

    return missingChar;
  },


  uniteUnique(arr) {
    let uniqueItems = [];
    
    for (let arg of arguments) {
      for (let item of arg) {
        if (uniqueItems.indexOf(item) === -1) {
          uniqueItems.push(item);
        }
      }
    }

    return uniqueItems;
  },


  convertHTML(str) {
    let obj = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    }
    let convertedStr = '';
    
    for (let char of str) {
      if (char in obj) {
        convertedStr += obj[char];
      }
      else convertedStr += char;
    }

    return convertedStr;
  },


  // PROJECTS


  palindrome(str) {
    let alphanumeric = /[a-z0-9]/;
    let characters = str.toLowerCase().split('');
    let alphaNumStr = '';
    let reverseStr = '';

    for (let char of characters) {
      if (char.match(alphanumeric)) {
        alphaNumStr += char;
        reverseStr = char + reverseStr;
      }
    }

    let isPalindrome = alphaNumStr === reverseStr;

    return isPalindrome;
  },


  convertToRoman(num) {
    let romanNums = {
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
    };
    let convertedNum = '';
    let decimalVals = Object.keys(romanNums).reverse();

    for (let decimalVal of decimalVals) {
      while (num >= decimalVal) {
        let romanNum = romanNums[decimalVal];

        convertedNum += romanNum;
        num -= decimalVal;
      }
    }

    return convertedNum;
  },


  rot13(str) {
    let decodedStr = '';

    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      let decodedCode = charCode;

      if (charCode >= 65 && charCode <= 90) {
        decodedCode = charCode < 78 ? charCode + 13 : charCode - 13;
      }


      decodedStr += String.fromCharCode(decodedCode);
    }

    return decodedStr;
  }
}

