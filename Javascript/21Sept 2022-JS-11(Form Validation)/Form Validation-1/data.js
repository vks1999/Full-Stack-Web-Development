/*let numberFun = () => {
    // alert("test");
    let number = parseInt(document.getElementById('mobileNumber').value);
    alert(number)
    if (typeof number == 'string') {
        document.getElementById('mMessage').innerHTML = "Pls Enter only Number"
    }
}
*/

let formValidate = () => {
    // alert("Test");
    let name = document.getElementById("username").value;
    let mobile = document.getElementById("mobilenumber").value;
    if (name == "") {
        document.getElementById("userMessage").innerHTML = "Please Enter User Name";
        // alert("buddy please enter username");
    }
    else if (name.length < 5) {
        document.getElementById("userMessage").innerHTML = "Username Must Be of 5 Characters";
    }
    if (mobile == "") {
        document.getElementById("mMessage").innerHTML = "Please Enter Number";
    }
    else if (mobile.length < 10) {
        document.getElementById("mMessage").innerHTML = "Please Enter Valid 10 Digit Mobile Number";
    }
    return false;
}

/* function formValidate(){
} */