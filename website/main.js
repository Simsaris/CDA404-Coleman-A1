// form accept message
function CFaccept() {
    var checkbox = document.getElementById("CF_accept");
    var text = document.getElementById("CF_message")
    if (CF_accept.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

