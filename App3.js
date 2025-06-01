document.addEventListener("DOMContentLoaded", () => { 
    const quizData = [
        
        { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correct: "Paris" },
        
        { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: "Mars" },
        {question: "Which language is mostly used in India?",options:["Hindi","Urdu","English","none"],correct:"Hindi"},
        { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: "4" },
        {question :"Who is the Chief Minister of New Delhi",options:["Aatishi","Kejriwal","Manish","Rekha"],correct:"Rekha"},
        {question : "Which programming language is mostly used in world wide for Web development",options:["JavaScript","Java","Python","C"],correct: "JavaScript"},
        {question:"which of the following is the example of Cloud Storage?",options:["Dropbox","SSD","USB","Hard Drive"],correct:"Dropbox"},
        {question:"Which programming language is primarily used for Android app development?",options:["java","Kotlin","Python","Swift"],correct:"Kotlin"},
        {question:" Which country invented Ice-Cream ?", options:["India","China","Bhutan","America"],correct:"China"},
        {question:"Which company created the Windows operating system?", options:["Apple","Microsoft","Wipro","Infosys"],correct:"Microsoft"},
        {question: "How many month have 28 days", options:["2","1","none","All months"],correct:"All months"},
        {question:"Which of the following is a popular version of Control System?",options:["Git","HTML","Java","CSS"],correct:"Git"},
        {question:"Which animal has had 3 hearts?",options : ["Octopus", "Lion","Snake","bird"],correct:"Octopus"},
        {question :"Which of the following is storage device ? ",options:["Monitor","Keyboard","Hardware","Mouse"],correct:"Hardware"},
        {question:"Which company is known for the Android Operating Sysytem ?", options:["Apple","Microsoft","Google","IBM"],correct:"Google"},
        {question:"What is coming, but will never arrive ? ",options:["Today","Tomorrow","Yesterday","none"],correct:"Yesterday"},
        {question:"Which country passed the AI Act to regulate artificial intelligence systems and ensure ethical use", options:["America","India","China","Europe"],correct:"Europe"},
        {question :"Who is the CEO of Microsoft ",options:["Pichai","Satya Nadella","Ramu","Hamid"],correct:"Satya Nadella"},
        
    ];

    let currentQuestionIndex = 0;
    let score = 0; // Initialize score
    let wronganswer = 0;

    let btn1 = document.querySelector("#btn1");
    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
    let scoreElement = document.getElementById("score");
    let wronganswerElement = document.getElementById("wronganswer");

    if (!btn1 || !questionElement || !optionsElement || !scoreElement || !wronganswerElement) {
        console.error("Error: Some elements are missing in the HTML.");
        return;
    }

    // ✅ Fix: Next button moves to next question properly
    btn1.addEventListener("click", () => {
        currentQuestionIndex = (currentQuestionIndex + 1) % quizData.length; // Move to next question
        updateQuestion();
    });

    function updateQuestion() {
        console.log("Question Updated!");

        questionElement.textContent = quizData[currentQuestionIndex].question;
        
        optionsElement.innerHTML = "";
        quizData[currentQuestionIndex].options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-button");

            button.addEventListener("click", () => checkAnswer(option)); // Check answer on click
            
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selectedOption) {
        if (selectedOption === quizData[currentQuestionIndex].correct) {
            score++; // Increase score if correct
            scoreElement.textContent = `Score: ${score}`;
        } else {
            wronganswer++;
            wronganswerElement.textContent = `Wrong Answers: ${wronganswer}`;
        }

        currentQuestionIndex = (currentQuestionIndex + 1) % quizData.length; // Move to next question
        updateQuestion();
    }

    updateQuestion(); // Initialize the first question
});
