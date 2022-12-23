let goodTask = [""];
let badtask = [""];
const taskName = document.getElementById("taskName");

const fullData = {
  taskName: "",
  taskHrs: "",
};

taskName.addEventListener("keyup", () => {
  const taskData = taskName.value;
  console.log(taskData);
});

const taskHrs = document.getElementById("taskHrs");
taskHrs.addEventListener("keyup", () => {
  const hrsData = taskHrs.value;
  console.log(hrsData);
});

const button = document.getElementById("buttons");
button.addEventListener("click", () => {
  const dta = (taskName += taskName);
  console.log(dta);
});
