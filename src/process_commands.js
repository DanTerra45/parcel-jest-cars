import AutoSimulator from './simulator.js';
import { parse_input } from './input_parser.js';

export default function process_commands(input) {
  const { max_x, max_y, x, y, orientation, commands } = parse_input(input);
  const auto = new AutoSimulator(max_x, max_y, x, y, orientation);
  return auto.execute_commands(commands);
}