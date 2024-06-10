// function for beginning button 
// hide and unhide function
function letsBegin() {
    document.getElementById("play-button").hidden = true;
    document.getElementById("main-body").hidden = false;
    displayQuestion();
}

// using array question 
let questions = [
    {
        question: "01. Who is the king of cricket?",
        answers: ["A. Virat Kohli", "B. Rohit Sharma", "C. MS Dhoni", "D. Sachin Tendulkar"],
        correct: 0
    },
    {
        question: "02. Who is the CEO of Google?",
        answers: ["A. Sundar Pichai", "B. Satya Nadella", "C. Narendra Modi", "D. None of the above"],
        correct: 0
    },
    {
        question: "03. Who is the founder of Enjoy Programming?",
        answers: ["A. Elon Musk", "B. Bill Gates", "C. Sundar Pichai", "D. Yogesh Lolusare sir"],
        correct: 3
    },
    {
        question: "04. Who is the CEO of Tesla?",
        answers: ["A. Elon Musk", "B. Jeff Bezos", "C. Mark Zuckerberg", "D. Steve Jobs"],
        correct: 0
    },
    {
        question: "05. Who is the founder of Microsoft?",
        answers: ["A. Elon Musk", "B. Bill Gates", "C. Ayush Nakade", "D. None of the above"],
        correct: 1
    },
    {
        question: "06. Who is known as father of Pakistan?",
        answers: ["A. Sachin Tendulkar", "B. Mahatma Gandhi", "C. Virat Kohli", "D. Narendra Modi"],
        correct: 2
    },
    {
        question: "07. Who is the Brand Ambassador of Audi?",
        answers: ["A. Elon Musk", "B. MS Dhoni", "C. Narendra Modi", "D. King Kohli"],
        correct: 3
    },
    {
        question: "08. Who is the founder of SpaceX?",
        answers: ["A. Virat Kohli", "B. Jeff Bezos", "C. Elon Musk", "D. None of these"],
        correct: 2
    },
    {
        question: "09. Who is the founder of Facebook?",
        answers: ["A. Elon Musk", "B. Mark Zuckerberg", "C. Bill Gates", "D. All of these"],
        correct: 1
    },
    {
        question: "10. Who is the Brand Ambassador of Cricket?",
        answers: ["A. Jay Shah", "B. Kapil Dev", "C. Virat Kohli", "D. Gautam Gambhir"],
        correct: 2
    }
];
// question starting from one
let currentQuestionIndex = 0;
// questio and options 
function displayQuestion() {
    const g = questions[currentQuestionIndex];
    document.getElementById("text-display").innerHTML = g.question;
    document.getElementById("option-one").innerHTML = g.answers[0];
    document.getElementById("option-two").innerHTML = g.answers[1];
    document.getElementById("option-three").innerHTML = g.answers[2];
    document.getElementById("option-four").innerHTML = g.answers[3];
}
// question and correct or incorrect options function
function answer(givenAnswer) {
    document.getElementById("loader").style.display = "block";
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        if (questions[currentQuestionIndex].correct === givenAnswer) {
            document.getElementById("text-display").innerHTML = "Spot on! That's the perfect response!!";
            document.getElementById("text-display").style.color = "green";
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                document.getElementById("text-display").innerHTML = "Your bank account has been credited with Rs. 7,00,00,000!";
            }
        } else {
            document.getElementById("text-display").innerHTML = "Better luck next time.";
            document.getElementById("text-display").style.color = "red";
            currentQuestionIndex = 0;
            // time taken by loader
            setTimeout(displayQuestion, 2100);
            // Delay before resetting to the first question
        }
    }, 2100);
}