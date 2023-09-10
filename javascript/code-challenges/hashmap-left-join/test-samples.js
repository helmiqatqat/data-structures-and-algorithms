const Hashtable = require('../hashtable/Hashtable');

const synMap = new Hashtable(1024);
const antMap = new Hashtable(1024);

synMap.set('diligent', 'employed');
synMap.set('fond', 'enamored');
synMap.set('guide', 'usher');
synMap.set('outfit', 'garb');
synMap.set('wrath', 'anger');

antMap.set('diligent', 'idle');
antMap.set('fond', 'averse');
antMap.set('guide', 'follow');
antMap.set('flow', 'jam');
antMap.set('wrath', 'delight');

module.exports = { synMap, antMap };
