// Hilarious fun facts to show during the game
const funFacts = [
    "🌭 Fun fact: Every hot dog eaten is 8 minutes off your life span (but totally worth it)",
    "🥜 Did you know artisanal peanut butter is just regular peanut butter with commitment issues?",
    "🤔 Philosophical question: Is crunchy almond butter a thing, or just nuts having an identity crisis?",
    "🚗 Pro tip: The best time for traffic in Toronto is 2:37am (you're welcome, commuters)",
    "🎮 Breaking news: Walking simulators are the hot new game genre (finally, cardio for gamers)",
    "📸 Dating tip: Fugly first date Instagram photos build character (and increase chances for a successful relationship)",
    "🏞️ Travel alert: Oklahoma is the premiere destination for Summit (pack your... enthusiasm?)",
    "🦷 Life hack: Toothpaste is covered by incidentals (notice 'dental' is in the word - coincidence? I think not!)",
    "🍽️ Restaurant mystery: Did they fold your napkin when you were in the bathroom? The ultimate service test."
];

// Funny loading messages
const loadingMessages = [
    "🎮 Loading... (Not as slow as a walking simulator)",
    "⏰ Loading... (Still faster than Toronto traffic at 2:38am)",
    "🥜 Loading... (Questioning the nature of artisanal peanut butter)",
    "🌭 Loading... (Each second costs you 0.13 hot dog minutes)",
    "📸 Loading... (Avoiding fugly loading screen photos)",
    "🍽️ Loading... (Napkin folding status: unknown)",
    "🦷 Loading... (Covered by incidentals)"
];

const teamMembers = [
    {
        name: "Jonathan Boston",
        photo: "images/jonathan-boston.jpg",
        peanutButter: "crunchy",
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
    restartBtn: document.getElementById('restartBtn'),
    funFacts: document.getElementById('funFacts'),
    funFactText: document.getElementById('funFactText'),
    budgetAmount: document.getElementById('budgetAmount')
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

    // Start budget counter
    startBudgetCounter();

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

// Show a random fun fact
function showRandomFunFact() {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    elements.funFactText.textContent = randomFact;
    elements.funFacts.style.display = 'block';
}

// Hide fun facts
function hideFunFacts() {
    elements.funFacts.style.display = 'none';
}

// Show loading message
function showLoadingMessage() {
    const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    elements.memberName.textContent = randomMessage;
}

// Update budget counter with random amount
function updateBudget() {
    // Generate random amount between $0.01 and $1.37 million
    const minAmount = 0.01;
    const maxAmount = 1370000;
    const randomAmount = Math.random() * (maxAmount - minAmount) + minAmount;

    // Format the amount with commas and 2 decimal places
    const formattedAmount = '$' + randomAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    elements.budgetAmount.textContent = formattedAmount;
}

// Start budget counter animation
function startBudgetCounter() {
    // Update immediately
    updateBudget();

    // Update every 2-4 seconds randomly
    const updateInterval = () => {
        updateBudget();
        const nextUpdate = Math.random() * 2000 + 2000; // 2-4 seconds
        setTimeout(updateInterval, nextUpdate);
    };

    // Start the random updates
    setTimeout(updateInterval, Math.random() * 2000 + 1000);
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
    hideFunFacts();

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

    // Show a fun fact after a short delay
    setTimeout(() => {
        showRandomFunFact();
    }, 1500);
}

// Handle next
function handleNext() {
    currentGame.currentIndex++;

    if (currentGame.currentIndex >= currentGame.members.length) {
        showGameOver();
    } else {
        // Show loading message briefly before next member
        showLoadingMessage();
        setTimeout(() => {
            loadCurrentMember();
            elements.submitBtn.style.display = 'inline-block';
        }, 800);
    }
}

// Show game over
function showGameOver() {
    elements.gameArea.style.display = 'none';
    elements.gameOver.style.display = 'block';

    const totalQuestions = currentGame.members.length * 2;
    const percentage = (currentGame.score / totalQuestions) * 100;

    elements.finalScore.textContent = `${currentGame.score}/${totalQuestions} (${Math.round(percentage)}%)`;

    // Score message with some humor
    let message, className;
    if (percentage >= 80) {
        message = "🎉 Excellent! You know your team better than they know themselves! Maybe consider a career as a walking simulator developer.";
        className = "score-excellent";
    } else if (percentage >= 60) {
        message = "👍 Good job! You have solid team knowledge. Unlike those fugly first date photos, your performance is actually attractive!";
        className = "score-good";
    } else if (percentage >= 40) {
        message = "🤔 Not bad! Maybe spend less time thinking about crunchy almond butter and more time in the break room?";
        className = "score-okay";
    } else {
        message = "😅 Looks like you need to get to know your team better! At least you didn't lose 8 minutes of your life to hot dogs during this game.";
        className = "score-poor";
    }

    elements.scoreMessage.textContent = message;
    elements.scoreMessage.className = className;

    // Show a final fun fact
    setTimeout(() => {
        showRandomFunFact();
    }, 1000);
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

    // Start budget counter even during setup
    startBudgetCounter();

    // Add event listener for start button
    elements.startGameBtn.addEventListener('click', initGame);
}); 