let selectfield = document.getElementById("select-field");
let selecttext = document.getElementById("select-text");
let options = document.getElementsByClassName("option");
let list = document.getElementById("list");
selectfield.onclick = () => {
  list.classList.toggle("hide");
};
for (let option of options) {
  option.onclick = function () {
    selecttext.innerHTML = this.textContent;
  };
}
