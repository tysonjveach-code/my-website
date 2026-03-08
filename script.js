function info(){
    let text = document.getElementById("info");

    if (text.textContent === "") {
        text.textContent = "Mobile: (563)-221-1296 <br> \
        Email: <a href='mailto:tyson.jveach@gmail.com'>tyson.jveach@gmail.com</a> <br> \
        LinkedIn: <a href='https://www.linkedin.com/in/tysonveach/' target='_blank'>LinkedIn</a>";
    } else {
        text.textContent = "";
    }
}