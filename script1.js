const taskName = document.getElementById("taskName").value;
const taskHrs = document.getElementById("taskHrs").value;
const target = document.getElementById("target");

const handleOnChange = () => {
  target.innerHTML = "Wrong" + taskName + taskHrs;
};

const buttons = document.getElementById("buttons");
buttons.addEventListener("click", () => {
  handleOnChange();
});
