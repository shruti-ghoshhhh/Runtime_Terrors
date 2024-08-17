const quiz = [
    {
        question: 'What is the unit of electrical conductance?',
        options: ['Ohm', 'Siemens', 'Farad', 'Henry'],
        answer: 1
    },
    {
        question: 'Which of the following is not a property of a perfect insulator?',
        options: ['Low resistivity', 'High dielectric constant', 'High conductivity', 'Does not allow electric current to flow'],
        answer: 2
    }
];

const quizContainer = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextButton = document.getElementById('next');
const resultEl = document.getElementById('result');

let currentQuiz = 0;
let score = 0;

function showQuestion() {
    const q = quiz[currentQuiz];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = '';

    q.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.id = `option${i}`;
        button.onclick = () => selectOption(i);
        optionsEl.appendChild(button);
    });
}

function selectOption(option) {
    const q = quiz[currentQuiz];

    if (q.answer === option) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz === quiz.length) {
        showResult();
    } else {
        showQuestion();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultEl.innerText = `Your score is ${score} out of ${quiz.length}`;
    resultEl.style.display = 'block';
}

showQuestion();