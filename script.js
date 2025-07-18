// Team data - customize this with your actual team members
const teamMembers = [
    {
        name: "Alice Johnson",
        photo: "images/alice-johnson.jpg",
        peanutButter: "crunchy",
        orangeJuice: "pulp"
    },
    {
        name: "Bob Smith",
        photo: "images/bob-smith.jpg",
        peanutButter: "creamy",
        orangeJuice: "noPulp"
    },
    {
        name: "Carol Davis",
        photo: "images/carol-davis.jpg",
        peanutButter: "crunchy",
        orangeJuice: "noPulp"
    },
    {
        name: "David Wilson",
        photo: "images/david-wilson.jpg",
        peanutButter: "creamy",
        orangeJuice: "pulp"
    },
    {
        name: "Emma Brown",
        photo: "images/emma-brown.jpg",
        peanutButter: "crunchy",
        orangeJuice: "pulp"
    },
    {
        name: "Frank Miller",
        photo: "images/frank-miller.jpg",
        peanutButter: "creamy",
        orangeJuice: "noPulp"
    },
    {
        name: "Grace Lee",
        photo: "images/grace-lee.jpg",
        peanutButter: "crunchy",
        orangeJuice: "noPulp"
    },
    {
        name: "Henry Clark",
        photo: "images/henry-clark.jpg",
        peanutButter: "creamy",
        orangeJuice: "pulp"
    }
];

// Game state
let currentGame = {
    members: [],
    currentIndex: 0,
    score: 0,
    userAnswers: {},
    gameStarted: false
};

// DOM elements
const elements = {
    setupInstructions: document.getElementById('setupInstructions'),
    startGameBtn: document.getElementById('startGameBtn'),
    gameArea: document.querySelector('.game-area'),
    memberPhoto: document.getElementById('memberPhoto'),
    memberName: document.getElementById('memberName'),
    choiceBtns: document.querySelectorAll('.choice-btn'),
    submitBtn: document.getElementById('submitBtn'),
    nextBtn: document.getElementById('nextBtn'),
    results: document.getElementById('results'),
    resultDetails: document.getElementById('resultDetails'),
    score: document.getElementById('score'),
    total: document.getElementById('total'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    gameOver: document.getElementById('gameOver'),
    finalScore: document.getElementById('finalScore'),
    scoreMessage: document.getElementById('scoreMessage'),
    restartBtn: document.getElementById('restartBtn')
};

// Initialize game
function initGame() {
    // Hide setup instructions and show game area
    elements.setupInstructions.style.display = 'none';
    elements.gameArea.style.display = 'block';

    // Shuffle team members for random order
    currentGame.members = shuffleArray([...teamMembers]);
    currentGame.currentIndex = 0;
    currentGame.score = 0;
    currentGame.userAnswers = {};
    currentGame.gameStarted = true;

    // Update score display
    elements.total.textContent = currentGame.members.length;
    elements.score.textContent = currentGame.score;

    // Load first member
    loadCurrentMember();

    // Add event listeners
    addEventListeners();
}

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Load current member
function loadCurrentMember() {
    const member = currentGame.members[currentGame.currentIndex];

    elements.memberPhoto.src = member.photo;
    elements.memberPhoto.alt = member.name;
    elements.memberName.textContent = member.name;

    // Reset choice buttons
    elements.choiceBtns.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        btn.disabled = false;
    });

    // Reset user answers for current member
    currentGame.userAnswers = {};

    // Update progress
    updateProgress();

    // Reset UI state
    elements.submitBtn.disabled = true;
    elements.nextBtn.style.display = 'none';
    elements.results.style.display = 'none';

    // Handle image loading error - show placeholder
    elements.memberPhoto.onerror = function () {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjBmMGYwIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI2NjYyIvPgo8cGF0aCBkPSJNNTAgMTUwQzUwIDEyMCA3NSA5NSAxMDAgOTVTMTUwIDEyMCAxNTAgMTUwVjE4MEg1MFYxNTBaIiBmaWxsPSIjY2NjIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LXNpemU9IjEyIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
    };
}

// Update progress bar
function updateProgress() {
    const progress = ((currentGame.currentIndex + 1) / currentGame.members.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `Question ${currentGame.currentIndex + 1} of ${currentGame.members.length}`;
}

// Add event listeners
function addEventListeners() {
    // Choice buttons
    elements.choiceBtns.forEach(btn => {
        btn.addEventListener('click', handleChoiceClick);
    });

    // Submit button
    elements.submitBtn.addEventListener('click', handleSubmit);

    // Next button
    elements.nextBtn.addEventListener('click', handleNext);

    // Restart button
    elements.restartBtn.addEventListener('click', restartGame);

    // Start game button
    elements.startGameBtn.addEventListener('click', initGame);
}

// Handle choice selection
function handleChoiceClick(event) {
    const btn = event.target;
    const question = btn.dataset.question;
    const answer = btn.dataset.answer;

    // Remove previous selection for this question
    elements.choiceBtns.forEach(otherBtn => {
        if (otherBtn.dataset.question === question) {
            otherBtn.classList.remove('selected');
        }
    });

    // Add selection to clicked button
    btn.classList.add('selected');

    // Store user answer
    currentGame.userAnswers[question] = answer;

    // Check if both questions are answered
    const bothAnswered = currentGame.userAnswers.peanutButter && currentGame.userAnswers.orangeJuice;
    elements.submitBtn.disabled = !bothAnswered;
}

// Handle submit
function handleSubmit() {
    const member = currentGame.members[currentGame.currentIndex];
    let correctCount = 0;

    // Check answers and update button styles
    elements.choiceBtns.forEach(btn => {
        const question = btn.dataset.question;
        const answer = btn.dataset.answer;
        const correctAnswer = member[question];
        const userAnswer = currentGame.userAnswers[question];

        btn.disabled = true;

        if (answer === correctAnswer) {
            btn.classList.add('correct');
            if (userAnswer === correctAnswer) {
                correctCount++;
            }
        } else if (btn.classList.contains('selected')) {
            btn.classList.add('incorrect');
        }
    });

    // Update score
    currentGame.score += correctCount;
    elements.score.textContent = currentGame.score;

    // Show results
    showResults(member, correctCount);

    // Update UI
    elements.submitBtn.style.display = 'none';
    elements.nextBtn.style.display = 'inline-block';
}

// Show results
function showResults(member, correctCount) {
    const peanutButterCorrect = currentGame.userAnswers.peanutButter === member.peanutButter;
    const orangeJuiceCorrect = currentGame.userAnswers.orangeJuice === member.orangeJuice;

    const peanutButterText = member.peanutButter === 'crunchy' ? '🥜 Crunchy' : '🧈 Creamy';
    const orangeJuiceText = member.orangeJuice === 'pulp' ? '🌊 With Pulp' : '💧 No Pulp';

    elements.resultDetails.innerHTML = `
        <div class="result-item">
            <span>🥜 Peanut Butter:</span>
            <span class="${peanutButterCorrect ? 'result-correct' : 'result-incorrect'}">
                ${peanutButterText} ${peanutButterCorrect ? '✓' : '✗'}
            </span>
        </div>
        <div class="result-item">
            <span>🍊 Orange Juice:</span>
            <span class="${orangeJuiceCorrect ? 'result-correct' : 'result-incorrect'}">
                ${orangeJuiceText} ${orangeJuiceCorrect ? '✓' : '✗'}
            </span>
        </div>
        <div class="result-item">
            <span><strong>Score for this round:</strong></span>
            <span><strong>${correctCount}/2</strong></span>
        </div>
    `;

    elements.results.style.display = 'block';
}

// Handle next
function handleNext() {
    currentGame.currentIndex++;

    if (currentGame.currentIndex >= currentGame.members.length) {
        showGameOver();
    } else {
        loadCurrentMember();
        elements.submitBtn.style.display = 'inline-block';
    }
}

// Show game over
function showGameOver() {
    elements.gameArea.style.display = 'none';
    elements.gameOver.style.display = 'block';

    const totalQuestions = currentGame.members.length * 2;
    const percentage = (currentGame.score / totalQuestions) * 100;

    elements.finalScore.textContent = `${currentGame.score}/${totalQuestions} (${Math.round(percentage)}%)`;

    // Score message
    let message, className;
    if (percentage >= 80) {
        message = "🎉 Excellent! You really know your team!";
        className = "score-excellent";
    } else if (percentage >= 60) {
        message = "👍 Good job! You have a solid understanding of your teammates.";
        className = "score-good";
    } else if (percentage >= 40) {
        message = "🤔 Not bad! Maybe spend more time in the break room?";
        className = "score-okay";
    } else {
        message = "😅 Looks like you need to get to know your team better!";
        className = "score-poor";
    }

    elements.scoreMessage.textContent = message;
    elements.scoreMessage.className = className;
}

// Restart game
function restartGame() {
    elements.gameOver.style.display = 'none';
    elements.setupInstructions.style.display = 'block';
    currentGame.gameStarted = false;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // Show setup instructions by default
    elements.setupInstructions.style.display = 'block';
    elements.gameArea.style.display = 'none';
    elements.gameOver.style.display = 'none';

    // Add event listener for start button
    elements.startGameBtn.addEventListener('click', initGame);
}); 