console.log("Script Loaded")

function setText(id,newvalue) {
    const s = document.getElementById(id);
    s.innerHTML = newvalue;
}
// const submitButton = document.getElementById('submit');
const submitButton = document.querySelector('#my-div2 > button');
const textBox = document.querySelector('#my-div2 > input');

submitButton.addEventListener('click', () => {
    setText("title","Hello there");
    setText("display", "Today's weather")
})
textBox.addEventListener('input', () => {
    setText("display", "Today's weather")
})

// window.onload=function() { // or window.addEventListener("load",function() {
// setText("title","Hello there");
// }