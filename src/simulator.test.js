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
  test('La función move_forward() debería actualizar la posición correctamente', () => {
    auto.move_forward();
    expect(auto.y).toBe(3);
    auto.orientation = 'E';
    auto.move_forward();
    expect(auto.x).toBe(2);
    auto.move_forward();
    expect(auto.y).toBe(3);
    auto.orientation = 'S';
    auto.move_forward();
    expect(auto.x).toBe(3);
    auto.move_forward();
    expect(auto.y).toBe(1);
    auto.orientation = 'W';
    auto.move_forward();
    expect(auto.x).toBe(2);
  });
  test('La función execute_commands(input) debería devolver la posición inicial y final', () => {
    const result = auto.execute_commands('IAIAIDAAADAA');
    expect(result).toEqual({
      initial_position: '1,2N',
      final_position: '0,0W'
    });
  });
});