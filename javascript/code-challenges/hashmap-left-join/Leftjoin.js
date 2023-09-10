const leftJoin = (synMap, antMap) => {
  const map = new Map();
  for(let key of synMap.keys()) {
    map.set(key, []);
    const mapKey = map.get(key);
    mapKey.push(synMap.get(key));
    if(antMap.get(key) !== 'Key does not exist') {
      mapKey.push(antMap.get(key));
    }
    else mapKey.push(null);
  }
  let result = [];
  for(let [key, value] of map.entries()) {
    result.push([key, ...value]);
  }
  return result;
};

module.exports = leftJoin;
