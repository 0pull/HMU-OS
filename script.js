// Звук щелчка
function playClickSound() {
  const clickSound = document.getElementById('clickSound');
  clickSound.play();
}

// Открытие окон
function openWindow(windowId) {
  playClickSound();
  const window = document.getElementById(windowId);
  window.classList.add('visible');
  makeWindowDraggable(window);
}

// Закрытие окон
function closeWindow(windowId) {
  playClickSound();
  const window = document.getElementById(windowId);
  window.classList.remove('visible');
}

// Открытие ссылок
function openLink(url) {
  playClickSound();
  window.open(url, '_blank');
}

// Переключение меню "Пуск"
function toggleStartMenu() {
  playClickSound();
  const startMenu = document.getElementById('startMenu');
  startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
}

// Перетаскивание окон
function makeWindowDraggable(window) {
  const header = window.querySelector('.window-header');
  let isDragging = false;
  let offsetX, offsetY;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - window.offsetLeft;
    offsetY = e.clientY - window.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      window.style.left = `${e.clientX - offsetX}px`;
      window.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

// Paint
const paintCanvas = document.getElementById('paintCanvas');
const paintCtx = paintCanvas.getContext('2d');
let isDrawing = false;
let brushSize = 5;
let brushColor = '#ffffff';
let lastX = 0;
let lastY = 0;

paintCanvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
paintCanvas.addEventListener('mouseup', () => isDrawing = false);
paintCanvas.addEventListener('mousemove', draw);

function draw(e) {
  if (!isDrawing) return;
  paintCtx.strokeStyle = brushColor;
  paintCtx.lineWidth = brushSize;
  paintCtx.lineCap = 'round';
  paintCtx.beginPath();
  paintCtx.moveTo(lastX, lastY);
  paintCtx.lineTo(e.offsetX, e.offsetY);
  paintCtx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function clearCanvas() {
  paintCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
}

document.getElementById('paintColor').addEventListener('input', (e) => {
  brushColor = e.target.value;
});

document.getElementById('brushSize').addEventListener('input', (e) => {
  brushSize = e.target.value;
});

// Змейка
const snakeCanvas = document.getElementById('snakeGame');
const snakeCtx = snakeCanvas.getContext('2d');
const gridSize = 20;
const tileCount = snakeCanvas.width / gridSize;
let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = { x: 5, y: 5 };
let score = 0;
let level = 1;
let gameSpeed = 150;

function resetSnakeGame() {
  snake = [{ x: 10, y: 10 }];
  direction = { x: 0, y: 0 };
  food = { x: 5, y: 5 };
  score = 0;
  level = 1;
  gameSpeed = 150;
  document.getElementById('snakeScore').textContent = score;
  document.getElementById('snakeLevel').textContent = level;
}

function drawSnake() {
  snakeCtx.fillStyle = 'purple';
  snake.forEach(segment => snakeCtx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize));
}

function drawFood() {
  snakeCtx.fillStyle = 'white';
  snakeCtx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function updateSnake() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
    document.getElementById('gameOverSound').play();
    resetSnakeGame();
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    document.getElementById('eatSound').play();
    score++;
    if (score % 5 === 0) {
      level++;
      gameSpeed -= 10;
    }
    food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
    document.getElementById('snakeScore').textContent = score;
    document.getElementById('snakeLevel').textContent = level;
  } else {
    snake.pop();
  }
}

function gameLoop() {
  snakeCtx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);
  drawSnake();
  drawFood();
  updateSnake();
  setTimeout(() => requestAnimationFrame(gameLoop), gameSpeed);
}

document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp': if (direction.y === 0) direction = { x: 0, y: -1 }; break;
    case 'ArrowDown': if (direction.y === 0) direction = { x: 0, y: 1 }; break;
    case 'ArrowLeft': if (direction.x === 0) direction = { x: -1, y: 0 }; break;
    case 'ArrowRight': if (direction.x === 0) direction = { x: 1, y: 0 }; break;
  }
});

gameLoop();

// Сапер
const minesweeperGrid = document.getElementById('minesweeperGrid');
const gridSizeMinesweeper = 10;
const mineCount = 15;
let mines = [];

function resetMinesweeper() {
  minesweeperGrid.innerHTML = '';
  mines = [];
  generateMines();
  renderGrid();
}

function generateMines() {
  while (mines.length < mineCount) {
    const x = Math.floor(Math.random() * gridSizeMinesweeper);
    const y = Math.floor(Math.random() * gridSizeMinesweeper);
    if (!mines.some(mine => mine.x === x && mine.y === y)) {
      mines.push({ x, y });
    }
  }
}

function renderGrid() {
  for (let y = 0; y < gridSizeMinesweeper; y++) {
    for (let x = 0; x < gridSizeMinesweeper; x++) {
      const cell = document.createElement('div');
      cell.classList.add('minesweeper-cell');
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.addEventListener('click', handleCellClick);
      minesweeperGrid.appendChild(cell);
    }
  }
}

function handleCellClick(e) {
  const x = parseInt(e.target.dataset.x);
  const y = parseInt(e.target.dataset.y);
  if (mines.some(mine => mine.x === x && mine.y === y)) {
    document.getElementById('mineSound').play();
    e.target.classList.add('mine');
    alert('Вы проиграли!');
    resetMinesweeper();
  } else {
    e.target.classList.add('revealed');
    const count = countAdjacentMines(x, y);
    if (count > 0) {
      e.target.textContent = count;
    }
  }
}

function countAdjacentMines(x, y) {
  let count = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (mines.some(mine => mine.x === nx && mine.y === ny)) {
        count++;
      }
    }
  }
  return count;
}

resetMinesweeper();

// Блокнот
function saveNotepad() {
  const text = document.getElementById('notepadText').value;
  localStorage.setItem('notepad', text);
  alert('Заметка сохранена!');
}

function loadNotepad() {
  const text = localStorage.getItem('notepad');
  if (text) {
    document.getElementById('notepadText').value = text;
    alert('Заметка загружена!');
  } else {
    alert('Сохраненных заметок нет.');
  }
}

// Музыкальный плеер
const musicPlayer = document.getElementById('musicPlayer');
const musicCover = document.getElementById('musicCover');
const musicTitle = document.getElementById('musicTitle');
const musicProgress = document.getElementById('musicProgress');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const playPauseBtn = document.getElementById('playPauseBtn');
let tracks = [];
let currentTrack = 0;

// Пример загрузки треков (добавь свои треки и обложки)
tracks = [
  {
    file: new File([], 'I Just Wanna Die'),
    url: 'media/tracks/track1.mp3', // Путь к треку
    cover: 'media/covers/cover1.jpg', // Путь к обложке
  },
  {
    file: new File([], 'Разорвать небо руками'),
    url: 'media/tracks/track2.mp3', // Путь к треку
    cover: 'media/covers/cover1.jpg', // Путь к обложке
  },
  {
    file: new File([], 'синяя сепия'),
    url: 'media/tracks/track3.mp3', // Путь к треку
    cover: 'media/covers/cover1.jpg', // Путь к обложке
  },
];

function playTrack(index) {
  if (index < 0 || index >= tracks.length) return;
  currentTrack = index;
  musicPlayer.src = tracks[currentTrack].url;
  musicCover.src = tracks[currentTrack].cover;
  musicTitle.textContent = tracks[currentTrack].file.name;
  musicPlayer.play();
}

function prevTrack() {
  playTrack(currentTrack - 1);
}

function nextTrack() {
  playTrack(currentTrack + 1);
}

function shuffleTracks() {
  const randomIndex = Math.floor(Math.random() * tracks.length);
  playTrack(randomIndex);
}

function togglePlay() {
  if (musicPlayer.paused) {
    musicPlayer.play();
    playPauseBtn.textContent = '⏸';
  } else {
    musicPlayer.pause();
    playPauseBtn.textContent = '⏵';
  }
}

musicPlayer.addEventListener('timeupdate', () => {
  const progress = (musicPlayer.currentTime / musicPlayer.duration) * 100;
  musicProgress.value = progress;
  currentTime.textContent = formatTime(musicPlayer.currentTime);
  totalTime.textContent = formatTime(musicPlayer.duration);
});

musicProgress.addEventListener('input', () => {
  const time = (musicProgress.value / 100) * musicPlayer.duration;
  musicPlayer.currentTime = time;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Смена обоев
function changeWallpaper() {
  const wallpaperInput = document.createElement('input');
  wallpaperInput.type = 'file';
  wallpaperInput.accept = 'image/*';
  wallpaperInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById('desktop').style.backgroundImage = `url(${event.target.result})`;
      };
      reader.readAsDataURL(file);
    }
  };
  wallpaperInput.click();
}