export default class AutoSimulator {
    constructor(max_x, max_y, initial_x, initial_y, initial_orientation) {
      this.max_x = max_x;
      this.max_y = max_y;
      this.x = initial_x;
      this.y = initial_y;
      this.orientation = initial_orientation;
    }
    execute_commands(commands) {
      const initial_position = `${this.x},${this.y}${this.orientation}`;
      const final_position = `${this.x},${this.y}${this.orientation}`;
      return { initial_position, final_position };
    }
    turn_left() {
      switch (this.orientation) {
        case 'N': this.orientation = 'W'; break;
        case 'W': this.orientation = 'S'; break;
        case 'S': this.orientation = 'E'; break;
        case 'E': this.orientation = 'N'; break;
      }
    }
}