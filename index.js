const questions=[
    {
        question:"Which is not a distributions of linux operating system.",
        answers:[
            {text: "Debian", correct:false},
            {text: "Windows", correct:true},
            {text: "Kali", correct:false},
            {text: "Ubuntu", correct:false},
        ]
    },
    {
    question:"Which is not a component of computer hardware.",
    answers:[
        {text: "CPU", correct:false},
        {text: "RAM", correct:false},
        {text: "Motherboard", correct:false},
        {text: "OS", correct:true},
]
    },
    {
        question:"CPU is referred to as _ of a computer?",
        answers:[
            {text: "Eye", correct:false},
            {text: "Ear", correct:false},
            {text: "Brain", correct:true},
            {text: "Leg", correct:false},
    ]
        },
        {
            question:"What does CPU mean.",
            answers:[
                {text: "Compresssion Process unit", correct:false},
                {text: "Computer Power Unit", correct:false},
                {text: "Central Processing Unit", correct:true},
                {text: "Current power unit", correct:false},
        ]
            },
            {
                question:"Convert 7 to binary numbers.",
                answers:[
                    {text: "101", correct:false},
                    {text: "11", correct:false},
                    {text: "011", correct:false},
                    {text: "111", correct:true},
            ]
                },
                {
                    question:"Which is not a component of CPU.",
                    answers:[
                        {text: "AlU", correct:false},
                        {text: "Register", correct:false},
                        {text: "Bus", correct:true},
                        {text: "Control Unit", correct:false},
                ]
                    },
                    {
                        question:"When was the vacuum tubes used.",
                        answers:[
                            {text: "1st genration", correct:true},
                            {text: "2nd genration", correct:false},
                            {text: "3rd genration", correct:false},
                            {text: "4th genration", correct:false},
                    ]
                        },
                        {
                            question:"Which is not a type of software.",
                            answers:[
                                {text: "Utility Software", correct:false},
                                {text: "Application Software", correct:false},
                                {text: "Operating Software", correct:true},
                                {text: "System Software", correct:false},
                        ]
                            },
                            {
                                question:"What does RAM mean.",
                                answers:[
                                    {text: "Random  Activate  Memory", correct:false},
                                    {text: "Read  And  Memory", correct:false},
                                    {text: "Read  Activate Management", correct:false},
                                    {text: "Random  Access  Memory", correct:true},
                            ]
                                },
                                {
                                    question:"Differentiate between NorthBridge and SouthBridge.",
                                    answers:[
                                        {text: "NorthBridge connects Processor and Motherboard while southbridge connects periphal devices", correct:false},
                                        {text: "NorthBridge connects Processor and RAM while southbridge connects periphal devices", correct:true},
                                        {text: "NorthBridge connects to the North direction only while southbridge connects to the south direction only", correct:false},
                                        {text: "NorthBridge connects Processor and periphal devices while southbridge controls the processor", correct:false},
                                ]
                                    },
                                    {
                                        question:"Which is not a type of network.",
                                        answers:[
                                            {text: "Metropolitan Area Network", correct:false},
                                            {text: "Local Area Network", correct:false},
                                            {text: "Technology Area Network", correct:true},
                                            {text: "Wide Area Network", correct:false},
                                    ]
                                        },
                                        {
                                            question:"Which is not a peripheral(Input/Output) device.",
                                            answers:[
                                                {text: "Printer", correct:false},
                                                {text: "Data", correct:true},
                                                {text: "Mouse", correct:false},
                                                {text: "Monitor", correct:false},
                                        ]
                                            },
                                            {
                                                question:"What does WWW mean.",
                                                answers:[
                                                    {text: "World-Wide-Web", correct:true},
                                                    {text: "World-Wide-Wealth", correct:false},
                                                    {text: "World-Wealth-Wide", correct:false},
                                                    {text: "Web-Wealth-wide", correct:false},
                                            ]
                                                },
                                                {
                                                    question:"Which is a frontend framework.",
                                                    answers:[
                                                        {text: "CSS", correct:false},
                                                        {text: "React", correct:true},
                                                        {text: "Javascript", correct:false},
                                                        {text: "Python", correct:false},
                                                ]
                                                    },
                                                    {
                                                        question:"Which is not a programming langauge.",
                                                        answers:[
                                                            {text: "Python", correct:false},
                                                            {text: "Javascript", correct:false},
                                                            {text: "C", correct:false},
                                                            {text: "HTML", correct:true},
                                                    ]
                                                        },
]

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score = 0; 
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)
        })
}
function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display="block"
}

function showScore(){
    resetState()
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`
    if(score<5){
        questionElement.innerHTML="Fail!! " + questionElement.innerHTML
    }
    else if(score<=12 && score>=5){
        questionElement.innerHTML="Average!! " + questionElement.innerHTML
    }
    else if(score>12){
        questionElement.innerHTML="Well done. " + questionElement.innerHTML
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display="block"
}

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex<questions.length){
showQuestion()
}else{
    showScore()
}
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }

})
startQuiz()