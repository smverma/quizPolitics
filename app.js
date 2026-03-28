// app.js — Quiz Politics: India Quiz Challenge
// Vanilla JS — no dependencies — GitHub Pages compatible

'use strict';

// ─── Constants ────────────────────────────────────────────────────────────────
const QUESTIONS_PER_LEVEL = 10;
const TOTAL_LEVELS = 10;
const TIMER_SECONDS = 15;
const PASS_SCORE = 6; // minimum correct answers required to pass a level
const LEADERBOARD_KEY = 'quizPolitics_leaderboard';
const PROGRESS_KEY = 'quizPolitics_progress';

// Difficulty labels per level
const LEVEL_DIFFICULTY = {
  1: 'Easy', 2: 'Easy', 3: 'Easy',
  4: 'Medium', 5: 'Medium', 6: 'Medium', 7: 'Medium',
  8: 'Hard', 9: 'Hard', 10: 'Hard'
};

// ─── State ────────────────────────────────────────────────────────────────────
let state = {};

function initialState() {
  return {
    playerName: '',
    currentLevel: 1,
    currentQuestionIndex: 0,
    levelScore: 0,          // correct answers in current level
    totalScore: 0,          // cumulative across all levels
    levelQuestions: [],     // 10 active questions for the level
    swapPool: [],           // 3 extra questions available for swapping
    usedQuestionIds: new Set(), // across entire game session
    lifelines: { fiftyFifty: false, doubleChoice: false, swapQuestion: false },
    doubleChoiceActive: false,
    firstDoubleChoiceSelection: null,
    timerHandle: null,
    timeLeft: TIMER_SECONDS,
    answeredCorrect: 0,
    answeredTotal: 0,
    answered: false,         // has the current question been answered?
    unlockedLevels: 1,
  };
}

// ─── Audio (Web Audio API — no external files needed) ─────────────────────────
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (_) { return null; }
  }
  return audioCtx;
}

function playTone(frequency, duration, type = 'sine', volume = 0.3) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  try {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch (_) { /* silently ignore */ }
}

function soundCorrect() {
  playTone(523, 0.1); // C5
  setTimeout(() => playTone(659, 0.1), 110); // E5
  setTimeout(() => playTone(784, 0.2), 220); // G5
}

function soundWrong() {
  playTone(220, 0.15, 'sawtooth', 0.2);
  setTimeout(() => playTone(180, 0.25, 'sawtooth', 0.2), 160);
}

function soundTick() {
  playTone(880, 0.05, 'square', 0.1);
}

function soundLevelComplete() {
  [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => playTone(f, 0.15), i * 130));
}

function soundLevelFail() {
  [400, 350, 300, 250].forEach((f, i) => setTimeout(() => playTone(f, 0.15, 'sawtooth', 0.2), i * 130));
}

function soundLifeline() {
  playTone(1000, 0.08, 'sine', 0.2);
  setTimeout(() => playTone(1200, 0.08, 'sine', 0.2), 90);
}

// ─── Utilities ────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getLevelQuestions(level) {
  // Get all questions for this level, exclude already used IDs
  const pool = ALL_QUESTIONS.filter(q => q.level === level && !state.usedQuestionIds.has(q.id));
  const shuffled = shuffle(pool);
  // Mark all as used
  shuffled.forEach(q => state.usedQuestionIds.add(q.id));
  const active = shuffled.slice(0, QUESTIONS_PER_LEVEL);
  const swaps = shuffled.slice(QUESTIONS_PER_LEVEL); // may be empty if pool < 13
  return { active, swaps };
}

// ─── Persistence ──────────────────────────────────────────────────────────────
function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : { unlockedLevels: 1, totalScore: 0 };
  } catch (_) {
    return { unlockedLevels: 1, totalScore: 0 };
  }
}

function saveProgress(unlockedLevels, totalScore) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ unlockedLevels, totalScore }));
  } catch (_) { /* ignore */ }
}

function loadLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || '[]');
  } catch (_) { return []; }
}

function saveLeaderboard(entry) {
  const board = loadLeaderboard();
  board.push(entry);
  board.sort((a, b) => b.score - a.score);
  const top = board.slice(0, 10);
  try { localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(top)); } catch (_) { /* ignore */ }
  return top;
}

// ─── Screen Management ────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ─── Welcome Screen ───────────────────────────────────────────────────────────
function startGame() {
  const nameInput = document.getElementById('player-name');
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.classList.add('shake');
    nameInput.placeholder = 'Please enter your name!';
    setTimeout(() => nameInput.classList.remove('shake'), 600);
    return;
  }
  state = initialState();
  state.playerName = name;
  const progress = loadProgress();
  state.unlockedLevels = progress.unlockedLevels;
  renderLevelSelect();
  showScreen('level-screen');
}

// ─── Level Select ─────────────────────────────────────────────────────────────
function renderLevelSelect() {
  const grid = document.getElementById('level-grid');
  grid.innerHTML = '';
  for (let lvl = 1; lvl <= TOTAL_LEVELS; lvl++) {
    const btn = document.createElement('button');
    btn.className = 'level-btn';
    const unlocked = lvl <= state.unlockedLevels;
    if (!unlocked) btn.classList.add('locked');
    btn.setAttribute('aria-label', `Level ${lvl} – ${LEVEL_DIFFICULTY[lvl]}${unlocked ? '' : ' (locked)'}`);
    btn.innerHTML = `
      <span class="lvl-num">Level ${lvl}</span>
      <span class="lvl-diff ${LEVEL_DIFFICULTY[lvl].toLowerCase()}">${LEVEL_DIFFICULTY[lvl]}</span>
      ${unlocked ? '' : '<span class="lock-icon">🔒</span>'}
    `;
    if (unlocked) btn.addEventListener('click', () => startLevel(lvl));
    grid.appendChild(btn);
  }
}

function goToLevelSelect() {
  clearTimer();
  renderLevelSelect();
  showScreen('level-screen');
}

// ─── Quiz Logic ───────────────────────────────────────────────────────────────
function startLevel(level) {
  state.currentLevel = level;
  state.currentQuestionIndex = 0;
  state.levelScore = 0;
  state.lifelines = { fiftyFifty: false, doubleChoice: false, swapQuestion: false };
  state.doubleChoiceActive = false;
  state.firstDoubleChoiceSelection = null;

  const { active, swaps } = getLevelQuestions(level);
  state.levelQuestions = active;
  state.swapPool = swaps;

  renderLifelines();
  loadQuestion(0);
  showScreen('quiz-screen');
}

function loadQuestion(index) {
  state.answered = false;
  state.doubleChoiceActive = false;
  state.firstDoubleChoiceSelection = null;
  clearTimer();

  const q = state.levelQuestions[index];
  state.currentQuestion = q;

  // Header
  document.getElementById('current-level').textContent = state.currentLevel;
  document.getElementById('question-num').textContent = `${index + 1} / ${QUESTIONS_PER_LEVEL}`;
  document.getElementById('current-score').textContent = state.totalScore + state.levelScore;
  const diffEl = document.getElementById('level-difficulty');
  const diff = LEVEL_DIFFICULTY[state.currentLevel];
  diffEl.textContent = diff;
  diffEl.className = 'value difficulty-badge ' + diff.toLowerCase();

  // Progress bar
  const pct = (index / QUESTIONS_PER_LEVEL) * 100;
  document.getElementById('progress-fill').style.width = `${pct}%`;

  // Category badge
  document.getElementById('category-badge').textContent = q.category;

  // Question text
  document.getElementById('question-text').textContent = q.text;

  // Options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.dataset.index = i;
    btn.addEventListener('click', () => onOptionClick(i));
    grid.appendChild(btn);
  });

  // Reset double choice UI hint
  document.getElementById('double-hint').style.display = 'none';

  startTimer();
}

function onOptionClick(selectedIndex) {
  if (state.answered) return;
  const q = state.currentQuestion;

  if (state.doubleChoiceActive) {
    if (state.firstDoubleChoiceSelection === null) {
      // First pick
      state.firstDoubleChoiceSelection = selectedIndex;
      highlightSelected(selectedIndex);
      document.getElementById('double-hint').textContent = 'Now pick your SECOND option';
      document.getElementById('double-hint').style.display = 'block';
    } else {
      // Second pick — evaluate
      const second = selectedIndex;
      const first = state.firstDoubleChoiceSelection;
      const correct = q.correct;
      const isCorrect = first === correct || second === correct;
      state.answered = true;
      state.doubleChoiceActive = false;
      clearTimer();
      revealAnswerUI(isCorrect, correct, [first, second]);
      recordAnswer(isCorrect);
    }
  } else {
    state.answered = true;
    clearTimer();
    const isCorrect = selectedIndex === q.correct;
    revealAnswerUI(isCorrect, q.correct, [selectedIndex]);
    recordAnswer(isCorrect);
  }
}

function highlightSelected(index) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons[index].classList.add('selected');
}

function revealAnswerUI(isCorrect, correctIndex, selectedIndices) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);
  buttons[correctIndex].classList.add('correct');
  selectedIndices.forEach(i => {
    if (i !== correctIndex) buttons[i].classList.add('wrong');
  });
  if (isCorrect) soundCorrect(); else soundWrong();

  // Show feedback overlay
  const fb = document.getElementById('feedback-overlay');
  fb.className = 'feedback-overlay ' + (isCorrect ? 'correct' : 'wrong');
  fb.textContent = isCorrect ? '✅ Correct!' : '❌ Wrong!';
  fb.style.display = 'flex';
  setTimeout(() => { fb.style.display = 'none'; }, 900);

  // Auto-advance
  setTimeout(advanceQuestion, 1200);
}

function recordAnswer(isCorrect) {
  if (isCorrect) {
    state.levelScore++;
  }
}

function advanceQuestion() {
  state.currentQuestionIndex++;
  if (state.currentQuestionIndex >= QUESTIONS_PER_LEVEL) {
    endLevel();
  } else {
    loadQuestion(state.currentQuestionIndex);
  }
}

function endLevel() {
  clearTimer();
  const passed = state.levelScore >= PASS_SCORE;
  state.totalScore += state.levelScore * 10; // 10 points per correct

  if (passed) {
    soundLevelComplete();
    if (state.currentLevel < TOTAL_LEVELS && state.currentLevel >= state.unlockedLevels) {
      state.unlockedLevels = state.currentLevel + 1;
    }
  } else {
    soundLevelFail();
  }
  saveProgress(state.unlockedLevels, state.totalScore);

  // Result screen
  document.getElementById('result-level').textContent = state.currentLevel;
  document.getElementById('result-score').textContent = state.levelScore;
  document.getElementById('result-total').textContent = QUESTIONS_PER_LEVEL;
  document.getElementById('result-points').textContent = state.levelScore * 10;
  document.getElementById('result-cumulative').textContent = state.totalScore;

  const badge = document.getElementById('result-badge');
  if (passed) {
    badge.textContent = '🎉 Level Passed!';
    badge.className = 'result-badge passed';
  } else {
    badge.textContent = '😔 Level Failed';
    badge.className = 'result-badge failed';
  }

  const nextBtn = document.getElementById('btn-next-level');
  if (passed && state.currentLevel < TOTAL_LEVELS) {
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = `Next Level (${state.currentLevel + 1}) ▶`;
  } else if (passed && state.currentLevel === TOTAL_LEVELS) {
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = '🏆 See Final Score';
    nextBtn.onclick = showFinalScore;
  } else {
    nextBtn.style.display = 'none';
  }

  showScreen('result-screen');
}

// ─── Timer ────────────────────────────────────────────────────────────────────
function startTimer() {
  state.timeLeft = TIMER_SECONDS;
  updateTimerUI();
  state.timerHandle = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 5) soundTick();
    if (state.timeLeft <= 0) {
      clearTimer();
      if (!state.answered) {
        state.answered = true;
        revealAnswerUI(false, state.currentQuestion.correct, []);
        recordAnswer(false);
      }
    }
  }, 1000);
}

function clearTimer() {
  if (state.timerHandle) {
    clearInterval(state.timerHandle);
    state.timerHandle = null;
  }
}

function updateTimerUI() {
  const el = document.getElementById('timer-display');
  const fill = document.getElementById('timer-fill');
  const pct = (state.timeLeft / TIMER_SECONDS) * 100;
  el.textContent = state.timeLeft;
  fill.style.width = `${pct}%`;
  const bar = fill.parentElement;
  if (state.timeLeft <= 5) {
    bar.classList.add('danger');
    fill.classList.add('danger');
  } else {
    bar.classList.remove('danger');
    fill.classList.remove('danger');
  }
}

// ─── Lifelines ────────────────────────────────────────────────────────────────
function renderLifelines() {
  const ll = state.lifelines;
  const ffBtn = document.getElementById('lifeline-fifty');
  const dcBtn = document.getElementById('lifeline-double');
  const sqBtn = document.getElementById('lifeline-swap');
  ffBtn.disabled = ll.fiftyFifty;
  dcBtn.disabled = ll.doubleChoice;
  sqBtn.disabled = ll.swapQuestion;
  ffBtn.classList.toggle('used', ll.fiftyFifty);
  dcBtn.classList.toggle('used', ll.doubleChoice);
  sqBtn.classList.toggle('used', ll.swapQuestion);
}

function useFiftyFifty() {
  if (state.lifelines.fiftyFifty || state.answered) return;
  soundLifeline();
  state.lifelines.fiftyFifty = true;
  renderLifelines();

  const q = state.currentQuestion;
  const buttons = document.querySelectorAll('.option-btn');
  // Collect wrong indices and remove 2 at random
  const wrongIndices = q.options.map((_, i) => i).filter(i => i !== q.correct);
  const toRemove = shuffle(wrongIndices).slice(0, 2);
  toRemove.forEach(i => {
    buttons[i].disabled = true;
    buttons[i].classList.add('eliminated');
  });
}

function useDoubleChoice() {
  if (state.lifelines.doubleChoice || state.answered || state.doubleChoiceActive) return;
  soundLifeline();
  state.lifelines.doubleChoice = true;
  state.doubleChoiceActive = true;
  state.firstDoubleChoiceSelection = null;
  renderLifelines();
  document.getElementById('double-hint').textContent = 'Double Choice active — pick your FIRST option';
  document.getElementById('double-hint').style.display = 'block';
}

function useSwapQuestion() {
  if (state.lifelines.swapQuestion || state.answered) return;
  if (state.swapPool.length === 0) {
    showToast('No swap questions available for this level!');
    return;
  }
  soundLifeline();
  state.lifelines.swapQuestion = true;
  renderLifelines();

  // Replace current question with one from swap pool
  const newQ = state.swapPool.shift();
  state.levelQuestions[state.currentQuestionIndex] = newQ;
  loadQuestion(state.currentQuestionIndex);
}

// ─── Toast notification ───────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

// ─── Final Score ──────────────────────────────────────────────────────────────
function showFinalScore() {
  const entry = {
    name: state.playerName,
    score: state.totalScore,
    levels: state.unlockedLevels,
    date: new Date().toLocaleDateString()
  };
  const board = saveLeaderboard(entry);

  document.getElementById('final-name').textContent = state.playerName;
  document.getElementById('final-score').textContent = state.totalScore;
  document.getElementById('final-rank').textContent = board.findIndex(e => e.name === entry.name && e.score === entry.score) + 1;
  document.getElementById('final-max').textContent = TOTAL_LEVELS * QUESTIONS_PER_LEVEL * 10;

  showScreen('final-screen');
}

// ─── Leaderboard ──────────────────────────────────────────────────────────────
function showLeaderboard() {
  const board = loadLeaderboard();
  const tbody = document.getElementById('leaderboard-tbody');
  tbody.innerHTML = '';
  if (board.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:#888">No scores yet. Play to be the first!</td></tr>';
  } else {
    board.forEach((entry, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${['🥇', '🥈', '🥉'][i] || (i + 1)}</td>
        <td>${escapeHtml(entry.name)}</td>
        <td>${entry.score}</td>
        <td>${entry.date || ''}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  showScreen('leaderboard-screen');
}

function clearLeaderboard() {
  if (confirm('Clear all leaderboard data?')) {
    localStorage.removeItem(LEADERBOARD_KEY);
    showLeaderboard();
  }
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(String(str)));
  return d.innerHTML;
}

// ─── Restart ──────────────────────────────────────────────────────────────────
function restartGame() {
  clearTimer();
  const previousName = state.playerName;
  localStorage.removeItem(PROGRESS_KEY);
  state = initialState();
  // Pre-fill the name field so the player doesn't have to retype it
  const nameInput = document.getElementById('player-name');
  if (nameInput) nameInput.value = previousName;
  showScreen('welcome-screen');
}

function retryLevel() {
  // Re-run the same level without consuming extra lives
  startLevel(state.currentLevel);
}

function goNextLevel() {
  startLevel(state.currentLevel + 1);
}

// ─── Event wiring on DOMContentLoaded ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  state = initialState();

  // Welcome
  document.getElementById('btn-start').addEventListener('click', startGame);
  document.getElementById('player-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') startGame();
  });
  document.getElementById('btn-leaderboard-welcome').addEventListener('click', showLeaderboard);

  // Level select
  document.getElementById('btn-back-welcome').addEventListener('click', () => showScreen('welcome-screen'));

  // Lifelines
  document.getElementById('lifeline-fifty').addEventListener('click', useFiftyFifty);
  document.getElementById('lifeline-double').addEventListener('click', useDoubleChoice);
  document.getElementById('lifeline-swap').addEventListener('click', useSwapQuestion);

  // Quit during game
  document.getElementById('btn-quit-game').addEventListener('click', () => {
    clearTimer();
    goToLevelSelect();
  });

  // Result screen
  document.getElementById('btn-retry-level').addEventListener('click', retryLevel);
  document.getElementById('btn-next-level').addEventListener('click', () => {
    if (state.currentLevel < TOTAL_LEVELS) goNextLevel();
    else showFinalScore();
  });
  document.getElementById('btn-level-select-result').addEventListener('click', goToLevelSelect);

  // Final screen
  document.getElementById('btn-play-again').addEventListener('click', restartGame);
  document.getElementById('btn-leaderboard-final').addEventListener('click', showLeaderboard);

  // Leaderboard
  document.getElementById('btn-back-leaderboard').addEventListener('click', () => showScreen('welcome-screen'));
  document.getElementById('btn-clear-leaderboard').addEventListener('click', clearLeaderboard);
});
