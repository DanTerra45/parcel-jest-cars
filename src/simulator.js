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
    for (let command of commands) {
      switch (command) {
        case 'I':
          this.turn_left();
          break;
        case 'D':
          this.turn_right();
          break;
        case 'A':
          this.move_forward();
          break;
      }
    }
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
  turn_right() {
    switch (this.orientation) {
      case 'N': this.orientation = 'E'; break;
      case 'E': this.orientation = 'S'; break;
      case 'S': this.orientation = 'W'; break;
      case 'W': this.orientation = 'N'; break;
    }
  }
  move_forward() {
    switch (this.orientation) {
      case 'N':
        if (this.y < this.max_y) this.y++;
        break;
      case 'S':
        if (this.y > 0) this.y--;
        break;
      case 'E':
        if (this.x < this.max_x) this.x++;
        break;
      case 'W':
        if (this.x > 0) this.x--;
        break;
    }
  }
}