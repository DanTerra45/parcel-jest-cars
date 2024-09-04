import process_commands from "./process_commands.js";

const commands_input = document.querySelector("#commands");
const form = document.querySelector("#auto-form");
const result_div = document.querySelector("#resultado-div");
const grid_container = document.querySelector("#grid-container");

function create_grid(max_x, max_y) {
  grid_container.innerHTML = '';
  grid_container.style.gridTemplateColumns = `repeat(${max_x + 1}, 30px)`;
  for (let y = max_y; y >= 0; y--) {
    for (let x = 0; x <= max_x; x++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.id = `cell-${x}-${y}`;
      grid_container.appendChild(cell);
    }
  }
}

function update_grid(x, y, orientation) {
  document.querySelectorAll('.grid-cell').forEach(cell => cell.textContent = '');
  const cell = document.getElementById(`cell-${x}-${y}`);
  if (cell) {
    cell.textContent = get_orientation_symbol(orientation);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const commands = commands_input.value;
  const [dimensions, initial_position, _] = commands.split('/');
  const [max_x, max_y] = dimensions.split(',').map(Number);
  const result = process_commands(commands);
  const [final_x, final_y, final_orientation] = result.final_position.match(/(\d+),(\d+)([NSEW])/).slice(1);
});