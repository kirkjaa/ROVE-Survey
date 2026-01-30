// ROVE Survey System - Survey Logic with API

document.addEventListener('DOMContentLoaded', function() {
    initSurveySelection();
    initEmpathySurvey();
    initQuantitativeSurvey();
    initRankingDragDrop();
    initCardSelection();
});

// ===== Card Selection (for energy/experience cards) =====
function initCardSelection() {
    // Add 'selected' class to card labels when their radio is checked
    const cards = document.querySelectorAll('.energy-card, .experience-card');
    
    cards.forEach(card => {
        const input = card.querySelector('input[type="radio"]');
        if (input) {
            // Handle click on the card
            card.addEventListener('click', function() {
                // Remove selected class from siblings
                const siblings = card.parentElement.querySelectorAll('.energy-card, .experience-card');
                siblings.forEach(sibling => sibling.classList.remove('selected'));
                // Add selected class to this card
                card.classList.add('selected');
            });
            
            // Set initial state if already checked
            if (input.checked) {
                card.classList.add('selected');
            }
        }
    });
}

// ===== Survey Selection =====
function initSurveySelection() {
    const selectionSection = document.getElementById('survey-selection');
    const empathySection = document.getElementById('empathy-survey');
    const quantSection = document.getElementById('quantitative-survey');
    const surveyBtns = document.querySelectorAll('.survey-option-btn');

    surveyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const surveyType = this.dataset.survey;
            selectionSection.classList.add('hidden');

            if (surveyType === 'empathy') {
                empathySection.classList.remove('hidden');
            } else {
                quantSection.classList.remove('hidden');
            }
        });
    });
}

// ===== Empathy Survey =====
function initEmpathySurvey() {
    const form = document.getElementById('empathy-form');
    const parts = form.querySelectorAll('.form-part');
    const prevBtn = form.querySelector('.prev-btn');
    const nextBtn = form.querySelector('.next-btn');
    const submitBtn = form.querySelector('.submit-btn');
    const progressFill = document.getElementById('empathy-progress');
    const partIndicator = document.getElementById('empathy-part');
    
    let currentPart = 1;
    const totalParts = 6;

    function updateProgress() {
        const progress = (currentPart / totalParts) * 100;
        progressFill.style.width = `${progress}%`;
        partIndicator.textContent = currentPart;
    }

    function showPart(partNum) {
        parts.forEach(part => {
            part.classList.remove('active');
            if (parseInt(part.dataset.part) === partNum) {
                part.classList.add('active');
            }
        });

        prevBtn.disabled = partNum === 1;
        
        if (partNum === totalParts) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }

        updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', function() {
        if (currentPart > 1) {
            currentPart--;
            showPart(currentPart);
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentPart < totalParts) {
            currentPart++;
            showPart(currentPart);
        }
    });

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const responses = {};

        // Process form data
        for (let [key, value] of formData.entries()) {
            if (responses[key]) {
                if (Array.isArray(responses[key])) {
                    responses[key].push(value);
                } else {
                    responses[key] = [responses[key], value];
                }
            } else {
                responses[key] = value;
            }
        }

        // Add ranking data
        const rankingItems = document.querySelectorAll('#empathy-ranking .ranking-item');
        responses.e_q18_ranking = Array.from(rankingItems).map((item, index) => ({
            rank: index + 1,
            value: item.dataset.value
        }));

        // Submit to API
        try {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            
            const response = await fetch('/api/survey/empathy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ responses })
            });

            if (response.ok) {
                form.parentElement.classList.add('hidden');
                document.getElementById('success-message').classList.remove('hidden');
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            alert('Failed to submit survey. Please try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Survey ✨';
        }
    });

    updateProgress();
}

// ===== Quantitative Survey =====
function initQuantitativeSurvey() {
    const form = document.getElementById('quantitative-form');
    const parts = form.querySelectorAll('.form-part');
    const prevBtn = form.querySelector('.prev-btn');
    const nextBtn = form.querySelector('.next-btn');
    const submitBtn = form.querySelector('.submit-btn');
    const progressFill = document.getElementById('quant-progress');
    const partIndicator = document.getElementById('quant-part');
    
    let currentPart = 1;
    const totalParts = 8;

    function updateProgress() {
        const progress = (currentPart / totalParts) * 100;
        progressFill.style.width = `${progress}%`;
        partIndicator.textContent = currentPart;
    }

    function showPart(partNum) {
        parts.forEach(part => {
            part.classList.remove('active');
            if (parseInt(part.dataset.part) === partNum) {
                part.classList.add('active');
            }
        });

        prevBtn.disabled = partNum === 1;
        
        if (partNum === totalParts) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }

        updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', function() {
        if (currentPart > 1) {
            currentPart--;
            showPart(currentPart);
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentPart < totalParts) {
            currentPart++;
            showPart(currentPart);
        }
    });

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const responses = {};

        // Process form data
        for (let [key, value] of formData.entries()) {
            if (responses[key]) {
                if (Array.isArray(responses[key])) {
                    responses[key].push(value);
                } else {
                    responses[key] = [responses[key], value];
                }
            } else {
                responses[key] = value;
            }
        }

        // Add ranking data
        const rankingItems = document.querySelectorAll('#quant-ranking .ranking-item');
        responses.q_q17_ranking = Array.from(rankingItems).map((item, index) => ({
            rank: index + 1,
            value: item.dataset.value
        }));

        // Submit to API
        try {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            
            const response = await fetch('/api/survey/quantitative', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ responses })
            });

            if (response.ok) {
                form.parentElement.classList.add('hidden');
                document.getElementById('success-message').classList.remove('hidden');
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            alert('Failed to submit survey. Please try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Survey ✨';
        }
    });

    updateProgress();
}

// ===== Drag and Drop Ranking =====
function initRankingDragDrop() {
    const containers = document.querySelectorAll('.ranking-container');

    containers.forEach(container => {
        const items = container.querySelectorAll('.ranking-item');
        
        items.forEach(item => {
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragend', handleDragEnd);
            item.addEventListener('dragover', handleDragOver);
            item.addEventListener('drop', handleDrop);
            item.addEventListener('dragenter', handleDragEnter);
            item.addEventListener('dragleave', handleDragLeave);
        });
    });
}

let draggedItem = null;

function handleDragStart(e) {
    draggedItem = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    updateRankNumbers(this.parentElement);
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    if (draggedItem !== this) {
        const container = this.parentElement;
        const items = Array.from(container.children);
        const draggedIdx = items.indexOf(draggedItem);
        const targetIdx = items.indexOf(this);
        
        if (draggedIdx < targetIdx) {
            this.parentNode.insertBefore(draggedItem, this.nextSibling);
        } else {
            this.parentNode.insertBefore(draggedItem, this);
        }
    }
}

function updateRankNumbers(container) {
    const items = container.querySelectorAll('.ranking-item');
    items.forEach((item, index) => {
        item.querySelector('.rank-number').textContent = index + 1;
    });
}
