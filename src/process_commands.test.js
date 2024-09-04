import process_commands from './process_commands.js';

describe('Procesar Comandos', () => {
  it('debería procesar los comandos correctamente', () => {
    const input = "5,5/1,2N/IAIAIAIAA";
    const result = process_commands(input);
    expect(result).toEqual({
      initial_position: "1,2N",
      final_position: "1,3N"
    });
  });
  it('debería manejar los casos extremos', () => {
    const input = "3,3/0,0N/AAAAAAA";
    const result = process_commands(input);
    expect(result).toEqual({
      initial_position: "0,0N",
      final_position: "0,3N"
    });
  });
});