function ToConsole() {
    console.log("Hello")
}
function  ToAlert() {
    alert("Hello")
}
function  ToWeb() {
    document.getElementById("message").innerHTML = "Hello"
}
document.getElementById("console").addEventListener("click", ToConsole);
document.getElementById("alert").addEventListener("click", ToAlert);
document.getElementById("web").addEventListener("click", ToWeb);