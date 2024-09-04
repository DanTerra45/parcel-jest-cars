import { parse_input } from './input_parser.js';

describe('Manejador de las entradas', () => {
  it('debería analizar correctamente una cadena de entrada válida', () => {
    const input = "5,5/1,2N/IAIAIAIAA";
    const result = parse_input(input);
    expect(result).toEqual({
      max_x: 5,
      max_y: 5,
      x: 1,
      y: 2,
      orientation: 'N',
      commands: 'IAIAIAIAA'
    });
  });

  it('debería manejar diferentes tamaños y posiciones de la cuadrícula (grid)', () => {
    const input = "10,8/3,4E/AADADAGA";
    const result = parse_input(input);
    expect(result).toEqual({
      max_x: 10,
      max_y: 8,
      x: 3,
      y: 4,
      orientation: 'E',
      commands: 'AADADAGA'
    });
  });
});