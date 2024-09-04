export function parse_input(input) {
    const [dimensions, initial_position, commands] = input.split('/');
    const [max_x, max_y] = dimensions.split(',').map(Number);
    const x = parseInt(initial_position[0]);
    const y = parseInt(initial_position[2]);
    const orientation = initial_position[3];
    return { max_x, max_y, x, y, orientation, commands };
}