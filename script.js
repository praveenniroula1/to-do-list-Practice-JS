let goodTask = [""];
let badtask = [""];
const taskName = document.getElementById("taskName");

const handleOnChange = (e) => {
  const { value } = e.target;
  console.log(value);
};

taskName.addEventListener("change", handleOnChange());
