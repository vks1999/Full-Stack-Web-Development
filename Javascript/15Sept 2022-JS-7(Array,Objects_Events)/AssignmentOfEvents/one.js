function mouseOverEx() {
    document.getElementById('mouseOverEx1').style.backgroundColor = "blue"
}
function mouseOutEx() {
    document.getElementById('mouseOutEx1').style.backgroundColor = "green"
}
function onClickEx() {
    document.getElementById('onClickEx1').style.backgroundColor = "aqua"
}
function onDblClickEx() {
    document.getElementById('dblclickex').style.backgroundColor = "brown"
}
function onFocusEx() {
    document.getElementById('ip1').style.backgroundColor = "violet"
}
function blur_theInput() {
    let tag_ref = document.getElementById("blur123");
    document.getElementById("blur123").value = tag_ref.value.toUpperCase();
    // tag_ref.value = name.touppercase();
}