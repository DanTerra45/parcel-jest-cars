import AutoSimulator from './simulator.js';

describe('Simulador de automoviles', () => {
  let auto;
  beforeEach(() => {
    auto = new AutoSimulator(5, 5, 1, 2, 'N');
  });
  test('La función turn_left() debería cambiar la orientación correctamente', () => {
    auto.turn_left();
    expect(auto.orientation).toBe('W');
    auto.turn_left();
    expect(auto.orientation).toBe('S');
    auto.turn_left();
    expect(auto.orientation).toBe('E');
    auto.turn_left();
    expect(auto.orientation).toBe('N');
  });
  test('La función turn_right() debería cambiar la orientación correctamente', () => {
    auto.turn_right();
    expect(auto.orientation).toBe('E');
    auto.turn_right();
    expect(auto.orientation).toBe('S');
    auto.turn_right();
    expect(auto.orientation).toBe('W');
    auto.turn_right();
    expect(auto.orientation).toBe('N');
  });
});