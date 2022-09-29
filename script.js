console.log("secret message");
const secretBtn = document.getElementById("secretBtn");
const secretMsg = document.getElementById("secretMsg");

secretBtn.addEventListener("click", buttonFunction);

function buttonFunction() {
  console.log(`I'm clicked!`);
  if ((secretMsg.style.display = "none")) {
    secretMsg.style.display = "block";
  } else {
    secretMsg.style.display = "none";
  }
}
