function detectRepeat(str) {
  const puncRe = /[,.;'"!@#$%^&*]/g;
  const words = str.replaceAll(puncRe, '').split(' ');
  const wordsArray = [];
  for(let word of words) {
    if(wordsArray.includes(word)) {
      return word;
    } else wordsArray.push(word.toLowerCase());
  }
  return 'There are no repeated words in the string provided';
}

module.exports = detectRepeat;
