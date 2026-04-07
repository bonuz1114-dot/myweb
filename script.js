const inputDOM = document.getElementById("firstname");
const text = document.getElementById("Hi");

function clickItem() {
    let name = inputDOM.value;

    text.textContent = name
}