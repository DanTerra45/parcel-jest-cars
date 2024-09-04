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
  test('debería no sobrepasar/sobresalirse de los limites de la cuadrícula (grid)', () => {
    const auto = new AutoSimulator(2, 2, 0, 0, 'S');
    auto.move_forward();
    expect(auto.y).toBe(0);
    auto.orientation = 'W';
    auto.move_forward();
    expect(auto.x).toBe(0);
    auto.orientation = 'N';
    auto.move_forward();
    auto.move_forward();
    auto.move_forward();
    expect(auto.y).toBe(2);
    auto.orientation = 'E';
    auto.move_forward();
    auto.move_forward();
    auto.move_forward();
    expect(auto.x).toBe(2);
  });
  test('debería tratar con aquellos comandos que no sean válidos', () => {
    const auto = new AutoSimulator(5, 5, 1, 1, 'N');
    const result = auto.execute_commands('IAXDYA');
    expect(result.final_position).toBe('0,2N');
  });
});