var CIPHER = [79, 59, 12, 2, 79, 35, 8, 28, 20, 2, 3, 68, 8, 9, 68, 45, 0, 12, 9, 67, 68, 4, 7, 5, 23, 27, 1, 21, 79, 85, 78, 79, 85, 71, 38, 10, 71, 27, 12, 2, 79, 6, 2, 8, 13, 9, 1, 13, 9, 8, 68, 19, 7, 1, 71, 56, 11, 21, 11, 68, 6, 3, 22, 2, 14, 0, 30, 79, 1, 31, 6, 23, 19, 10, 0, 73, 79, 44, 2, 79, 19, 6, 28, 68, 16, 6, 16, 15, 79, 35, 8, 11, 72, 71, 14, 10, 3, 79, 12, 2, 79, 19, 6, 28, 68, 32, 0, 0, 73, 79, 86, 71, 39, 1, 71, 24, 5, 20, 79, 13, 9, 79, 16, 15, 10, 68, 5, 10, 3, 14, 1, 10, 14, 1, 3, 71, 24, 13, 19, 7, 68, 32, 0, 0, 73, 79, 87, 71, 39, 1, 71, 12, 22, 2, 14, 16, 2, 11, 68, 2, 25, 1, 21, 22, 16, 15, 6, 10, 0, 79, 16, 15, 10, 22, 2, 79, 13, 20, 65, 68, 41, 0, 16, 15, 6, 10, 0, 79, 1, 31, 6, 23, 19, 28, 68, 19, 7, 5, 19, 79, 12, 2, 79, 0, 14, 11, 10, 64, 27, 68, 10, 14, 15, 2, 65, 68, 83, 79, 40, 14, 9, 1, 71, 6, 16, 20, 10, 8, 1, 79, 19, 6, 28, 68, 14, 1, 68, 15, 6, 9, 75, 79, 5, 9, 11, 68, 19, 7, 13, 20, 79, 8, 14, 9, 1, 71, 8, 13, 17, 10, 23, 71, 3, 13, 0, 7, 16, 71, 27, 11, 71, 10, 18, 2, 29, 29, 8, 1, 1, 73, 79, 81, 71, 59, 12, 2, 79, 8, 14, 8, 12, 19, 79, 23, 15, 6, 10, 2, 28, 68, 19, 7, 22, 8, 26, 3, 15, 79, 16, 15, 10, 68, 3, 14, 22, 12, 1, 1, 20, 28, 72, 71, 14, 10, 3, 79, 16, 15, 10, 68, 3, 14, 22, 12, 1, 1, 20, 28, 68, 4, 14, 10, 71, 1, 1, 17, 10, 22, 71, 10, 28, 19, 6, 10, 0, 26, 13, 20, 7, 68, 14, 27, 74, 71, 89, 68, 32, 0, 0, 71, 28, 1, 9, 27, 68, 45, 0, 12, 9, 79, 16, 15, 10, 68, 37, 14, 20, 19, 6, 23, 19, 79, 83, 71, 27, 11, 71, 27, 1, 11, 3, 68, 2, 25, 1, 21, 22, 11, 9, 10, 68, 6, 13, 11, 18, 27, 68, 19, 7, 1, 71, 3, 13, 0, 7, 16, 71, 28, 11, 71, 27, 12, 6, 27, 68, 2, 25, 1, 21, 22, 11, 9, 10, 68, 10, 6, 3, 15, 27, 68, 5, 10, 8, 14, 10, 18, 2, 79, 6, 2, 12, 5, 18, 28, 1, 71, 0, 2, 71, 7, 13, 20, 79, 16, 2, 28, 16, 14, 2, 11, 9, 22, 74, 71, 87, 68, 45, 0, 12, 9, 79, 12, 14, 2, 23, 2, 3, 2, 71, 24, 5, 20, 79, 10, 8, 27, 68, 19, 7, 1, 71, 3, 13, 0, 7, 16, 92, 79, 12, 2, 79, 19, 6, 28, 68, 8, 1, 8, 30, 79, 5, 71, 24, 13, 19, 1, 1, 20, 28, 68, 19, 0, 68, 19, 7, 1, 71, 3, 13, 0, 7, 16, 73, 79, 93, 71, 59, 12, 2, 79, 11, 9, 10, 68, 16, 7, 11, 71, 6, 23, 71, 27, 12, 2, 79, 16, 21, 26, 1, 71, 3, 13, 0, 7, 16, 75, 79, 19, 15, 0, 68, 0, 6, 18, 2, 28, 68, 11, 6, 3, 15, 27, 68, 19, 0, 68, 2, 25, 1, 21, 22, 11, 9, 10, 72, 71, 24, 5, 20, 79, 3, 8, 6, 10, 0, 79, 16, 8, 79, 7, 8, 2, 1, 71, 6, 10, 19, 0, 68, 19, 7, 1, 71, 24, 11, 21, 3, 0, 73, 79, 85, 87, 79, 38, 18, 27, 68, 6, 3, 16, 15, 0, 17, 0, 7, 68, 19, 7, 1, 71, 24, 11, 21, 3, 0, 71, 24, 5, 20, 79, 9, 6, 11, 1, 71, 27, 12, 21, 0, 17, 0, 7, 68, 15, 6, 9, 75, 79, 16, 15, 10, 68, 16, 0, 22, 11, 11, 68, 3, 6, 0, 9, 72, 16, 71, 29, 1, 4, 0, 3, 9, 6, 30, 2, 79, 12, 14, 2, 68, 16, 7, 1, 9, 79, 12, 2, 79, 7, 6, 2, 1, 73, 79, 85, 86, 79, 33, 17, 10, 10, 71, 6, 10, 71, 7, 13, 20, 79, 11, 16, 1, 68, 11, 14, 10, 3, 79, 5, 9, 11, 68, 6, 2, 11, 9, 8, 68, 15, 6, 23, 71, 0, 19, 9, 79, 20, 2, 0, 20, 11, 10, 72, 71, 7, 1, 71, 24, 5, 20, 79, 10, 8, 27, 68, 6, 12, 7, 2, 31, 16, 2, 11, 74, 71, 94, 86, 71, 45, 17, 19, 79, 16, 8, 79, 5, 11, 3, 68, 16, 7, 11, 71, 13, 1, 11, 6, 1, 17, 10, 0, 71, 7, 13, 10, 79, 5, 9, 11, 68, 6, 12, 7, 2, 31, 16, 2, 11, 68, 15, 6, 9, 75, 79, 12, 2, 79, 3, 6, 25, 1, 71, 27, 12, 2, 79, 22, 14, 8, 12, 19, 79, 16, 8, 79, 6, 2, 12, 11, 10, 10, 68, 4, 7, 13, 11, 11, 22, 2, 1, 68, 8, 9, 68, 32, 0, 0, 73, 79, 85, 84, 79, 48, 15, 10, 29, 71, 14, 22, 2, 79, 22, 2, 13, 11, 21, 1, 69, 71, 59, 12, 14, 28, 68, 14, 28, 68, 9, 0, 16, 71, 14, 68, 23, 7, 29, 20, 6, 7, 6, 3, 68, 5, 6, 22, 19, 7, 68, 21, 10, 23, 18, 3, 16, 14, 1, 3, 71, 9, 22, 8, 2, 68, 15, 26, 9, 6, 1, 68, 23, 14, 23, 20, 6, 11, 9, 79, 11, 21, 79, 20, 11, 14, 10, 75, 79, 16, 15, 6, 23, 71, 29, 1, 5, 6, 22, 19, 7, 68, 4, 0, 9, 2, 28, 68, 1, 29, 11, 10, 79, 35, 8, 11, 74, 86, 91, 68, 52, 0, 68, 19, 7, 1, 71, 56, 11, 21, 11, 68, 5, 10, 7, 6, 2, 1, 71, 7, 17, 10, 14, 10, 71, 14, 10, 3, 79, 8, 14, 25, 1, 3, 79, 12, 2, 29, 1, 71, 0, 10, 71, 10, 5, 21, 27, 12, 71, 14, 9, 8, 1, 3, 71, 26, 23, 73, 79, 44, 2, 79, 19, 6, 28, 68, 1, 26, 8, 11, 79, 11, 1, 79, 17, 9, 9, 5, 14, 3, 13, 9, 8, 68, 11, 0, 18, 2, 79, 5, 9, 11, 68, 1, 14, 13, 19, 7, 2, 18, 3, 10, 2, 28, 23, 73, 79, 37, 9, 11, 68, 16, 10, 68, 15, 14, 18, 2, 79, 23, 2, 10, 10, 71, 7, 13, 20, 79, 3, 11, 0, 22, 30, 67, 68, 19, 7, 1, 71, 8, 8, 8, 29, 29, 71, 0, 2, 71, 27, 12, 2, 79, 11, 9, 3, 29, 71, 60, 11, 9, 79, 11, 1, 79, 16, 15, 10, 68, 33, 14, 16, 15, 10, 22, 73];
var KEY_LEN = 3;
var ENGLISH_LETTER_FREQUENCY = {
  "a": 8.167,
  "b": 1.492,
  "c": 2.782,
  "d": 4.253,
  "e": 12.702,
  "f": 2.228,
  "g": 2.015,
  "h": 6.094,
  "i": 6.966,
  "j": 0.153,
  "k": 0.772,
  "l": 4.025,
  "m": 2.406,
  "n": 6.749,
  "o": 7.507,
  "p": 1.929,
  "q": 0.095,
  "r": 5.987,
  "s": 6.327,
  "t": 9.056,
  "u": 2.758,
  "v": 0.978,
  "w": 2.360,
  "x": 0.150,
  "y": 1.974,
  "z": 0.074
};
solveCipher(CIPHER, KEY_LEN);

function solveCipher(cipher, keyLen) {
  var keyBins, keyDicts, keyArrSorted, spaceCharCode, charsToTry, c, i, solution, key = [];
  //map the message into bins that use the same secret key char
  keyBins = makeKeyBins(cipher, keyLen);
  //reduce the bins to create sparse frequency tables
  keyDicts = makeKeyDicts(keyBins);
  //turn the frequency tables into sorted arrays (In V8, array to dict to array is usually the faster solution)
  keyArrSorted = keyDictsToArrs(keyDicts);
  //the space character is usually removed from ciphers, but if it's not, it's an easy win
  spaceCharCode = " ".charCodeAt(0);
  //Based off an english letter frequency table from wikipedia, list the most common letters, greatest to least
  charsToTry = [spaceCharCode].concat(dictToArrLargestFirst(ENGLISH_LETTER_FREQUENCY));
  //Assume the most common char in the cipher is also the most common in english, if not, try #2...etc.
  //If this fails, next step is to try that char for each individual key char (solves in O(n^keyLen) without heuristics)
  for (c = 0; c < charsToTry.length; c++) {
    for (i = 0; i < keyLen; i++) {
      key[i] = keyArrSorted[i][0] ^ charsToTry[c];
    }
    //decode the cipher & verify that 4/5 of the most common english words exist in the solution
    solution = maybeDecipher(cipher, key);
    //if the deciphered message is english, return the sum of ASCII char vals
    if (solution !== undefined) return solution;
  }
}

function maybeDecipher(cipher, key) {
  var i, decodedChar,
    sum = 0,
    decodedMessageTxt = '';
  for (i = 0; i < cipher.length; i++) {
    //XOR the cipher val with the char in the key
    decodedChar = cipher[i] ^ key[i % key.length];
    sum += decodedChar;
    //since strings are immutable, this could get expensive. Could check for charCodes instead if speed is an issue
    decodedMessageTxt += String.fromCharCode(decodedChar);
  }
  return isMessageEnglish(decodedMessageTxt) && sum;
}

function isMessageEnglish(txt) {
  //Most common words in english, spaces added to naively rule out false positives
  var wordsToCheck = [' the ', ' be ', ' to ', ' of ', ' and '];
  //4 out of 5, probably english
  var thresh = .80;
  var count = 0;
  for (var i = 0; i < wordsToCheck.length; i++) {
    if (txt.indexOf(wordsToCheck[i]) > -1) {
      count++;
    }
  }
  var score = count / wordsToCheck.length;
  return (score >= thresh);
}

function keyDictsToArrs(keyDict) {
  var keyArr = [];
  for (var i = 0; i < keyDict.length; i++) {
    keyArr[i] = dictToArrLargestFirst(keyDict[i]);
  }
  return keyArr;
}
function dictToArrLargestFirst(dict) {
  var keys = Object.keys(dict);
  var arr = [];
  for (var i = 0; i < keys.length; i++) {
    arr[i] = keys[i];
  }
  arr.sort(function (a, b) {
    return dict[b] - dict[a];
  });
  return arr;
}

function makeKeyDicts(keyBins) {
  var keyDicts = [];
  for (var i = 0; i < keyBins.length; i++) {
    keyDicts[i] = {};
  }
  mapValsToDict(keyDicts, keyBins);
  return keyDicts;
}

function mapValsToDict(keyDicts, keyBins) {
  for (var i = 0; i < keyBins.length; i++) {
    var bin = keyBins[i];
    for (var j = 0; j < bin.length; j++) {
      var val = bin[j];
      keyDicts[i][val] = keyDicts[i][val] + 1 || 1;
    }
  }
}
function makeKeyBins(cipher, keyLen) {
  var i, keyBins = [];
  for (i = 0; i < keyLen; i++) {
    keyBins[i] = [];
  }
  for (i = 0; i < cipher.length; i++) {
    keyBins[i % keyLen].push(cipher[i]);
  }
  return keyBins;
}
