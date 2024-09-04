import process_commands from "./process_commands.js";

const commands_input = document.querySelector("#commands");
const form = document.querySelector("#auto-form");
const result_div = document.querySelector("#resultado-div");
const grid_container = document.querySelector("#grid-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const commands = commands_input.value;
  const [dimensions, initial_position, _] = commands.split('/');
  const [max_x, max_y] = dimensions.split(',').map(Number);
  const result = process_commands(commands);
  const [final_x, final_y, final_orientation] = result.final_position.match(/(\d+),(\d+)([NSEW])/).slice(1);
});