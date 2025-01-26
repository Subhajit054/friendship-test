const questions = [
    "Do you feel comfortable sharing your struggles with this person?",
    "Do you think you can trust each other with personal secrets?",
    "Are you comfortable being your true self around them?",
    "Do you feel like you truly understand each other?",
    "Would you go out of your way to help them if they needed it?",
];

let currentQuestion = 0;
let answers = [];
let gender = '';

function selectGender(selectedGender) {
    gender = selectedGender;
    document.querySelector('.character-selection').classList.add('hidden');
    document.querySelector('#quizSection').classList.remove('hidden');
}

function answerQuestion(answer) {
    answers.push(answer);
    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.querySelector('#questionTitle').textContent = `Question ${currentQuestion + 1}`;
        document.querySelector('#questionText').textContent = questions[currentQuestion];
    } else {
        showResult();
    }
}

function showResult() {
    const positiveAnswers = answers.filter(a => a === 'yes').length;

    let result;
    if (positiveAnswers >= 4) {
        result = "You're best friends!";
    } else if (positiveAnswers >= 2) {
        result = "You're good friends!";
    } else {
        result = "You're acquaintances.";
    }

    document.querySelector('#quizSection').classList.add('hidden');
    document.querySelector('#resultSection').classList.remove('hidden');
    document.querySelector('#resultText').textContent = result;
}

function restartQuiz() {
    currentQuestion = 0;
    answers = [];
    gender = '';
    document.querySelector('#resultSection').classList.add('hidden');
    document.querySelector('.character-selection').classList.remove('hidden');
}
