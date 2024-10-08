function ToConsole() {
    console.log("Hello")
}
function  ToAlert() {
    alert("Hello")
}
function  ToElement() {
    document.getElementById("message").innerHTML = "Hello"
}
function  ToWeb() {
    document.write("Hello")
}
document.getElementById("console").addEventListener("click", ToConsole);
document.getElementById("alert").addEventListener("click", ToAlert);
document.getElementById("element").addEventListener("click", ToElement);
document.getElementById("web").addEventListener("click", ToWeb);