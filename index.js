let listItem = document.querySelector("input");
let container = document.getElementById("container");

document.querySelector("button").addEventListener("click", makeList);
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        makeList();
    }
});

function makeList() {
    let para = document.createElement("p");
    para.innerText = listItem.value;
    container.appendChild(para);
    listItem.value = "";
    para.addEventListener("click", function () {
        para.style.textDecoration = "line-through";
    })
    para.addEventListener("dblclick", function () {
        container.removeChild(para);
    })
}