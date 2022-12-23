let goodTask = [""];
let badtask = [""];
const taskName = document.getElementById("taskName");

const handleOnChange = (e) => {
  const { value } = e.target;
  console.log(value);
};

const handleOnClick = (e) => {
  const { ...value } = formData;
  console.log(formData);
};
taskName.addEventListener("change", handleOnChange());
