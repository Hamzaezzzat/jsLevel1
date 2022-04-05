console.log("Hello");

const buttons = document.querySelector(".buttons");
const buttonContent = document.querySelector("#buttonContent");
buttons.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "btn btn-primary":
      buttonContent.innerText = "Primary";
      buttonContent.classList.add("btn-primary");

      break;
    case "btn btn-secondary":
      buttonContent.innerText = "secondary";
      buttonContent.classList.add("btn-secondary");
      break;
    case "btn btn-success":
      buttonContent.innerText = "success";
      buttonContent.classList.add("btn-success");
      break;
    case "btn btn-danger":
      buttonContent.innerText = "danger";
      buttonContent.classList.add("btn-danger");
      break;
    case "btn btn-warning":
      buttonContent.innerText = "warning";
      buttonContent.classList.add("btn-warning");
      break;
    case "btn btn-info":
      buttonContent.innerText = "info";
      buttonContent.classList.add("btn-info");
      break;
    case "btn btn-light":
      buttonContent.innerText = "light";
      buttonContent.classList.add("btn-light");
      break;
    case "btn btn-dark":
      buttonContent.innerText = "dark";
      buttonContent.classList.add("btn-dark");
      break;

    default:
      buttonContent.innerText = "Not Found"
      break;
  }
});
