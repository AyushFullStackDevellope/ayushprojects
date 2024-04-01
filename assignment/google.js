// JavaScript search
function search() {
        let input = document.getElementById("searchInput").value.toLowerCase(); let resultsDiv = document.getElementById("results");
    // JavaScript  name all
    let studentNames = ["ayush lolusare",  "himanshu", "yash",   "ayush nakade", "nikhil", "ratnesh", "soundary", "yogesh sir"];
    let found = false;
    for (let name of studentNames) {
            if (input.includes(name)) {
                resultsDiv.innerText = "THERE ARE THE STUDENT OF ENJOY PROGRAMMING";
            resultsDiv.style.color = "blue";
            found = true;
        }   
    }
    let foundteach = false;
    // JavaScript found or not
    if (found) {
            resultsDiv.innerText = "THERE ARE NOT THE STUDENT OF ENJOY PROGRAMMING ";
        resultsDiv.style.color = "red";
    }
}