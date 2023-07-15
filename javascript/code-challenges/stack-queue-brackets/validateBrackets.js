function validateBrackets(str) {
    const stack = [];
    const backwardsArr = [')',']','}']
    const fullBrackets = ['()','[]','{}']
    const filteredArr = str.split("").filter(e => fullBrackets.join("").includes(e))
    if(filteredArr.length % 2 !== 0) {
      return false
    }
    for(let bracket of filteredArr) {
      if(backwardsArr.includes(bracket)) {
        if(stack && !fullBrackets.includes(stack.pop().concat(bracket))) {
          return false
        }
      } else {
        stack.push(bracket)
      }
    }
    return true
}

module.exports = validateBrackets