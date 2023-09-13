const graph = require('./test-samples');
const businessTrip = require('./businessTrip');

describe('Test business trip funciton', () => {
  test('Returns the total cost of trip', () => {
    expect(businessTrip(graph, ['Metroville', 'Pandora'])).toEqual('82$');
    expect(businessTrip(graph, ['Arendelle', 'Monstropolis', 'Naboo'])).toEqual('115$');
  });
  test('Returns null when the trip is not direct', () => {
    expect(businessTrip(graph, ['Naboo', 'Pandora'])).toBeNull();
    expect(businessTrip(graph, ['Narnia', 'Arendelle', 'Naboo'])).toBeNull();
  });
});
