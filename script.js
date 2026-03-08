function info(){
    let text = document.getElementById("info");

    if (text.textContent === "") {
        text.textContent =     "Mobile:(563-221-1296 | Email: tyson.jveach@gmail.com | LinkedIn: https://www.linkedin.com/in/tysonveach/";
    } else {
        text.textContent = "";
    }
}