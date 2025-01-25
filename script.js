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
  if (windowId === 'musicWindow') {
    playTrack(0); // Автоматически воспроизводить первую песню
  }
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

// Объявляем переменные только один раз
let currentBook = 1;
let currentPage = 1;
const books = {
  1: {
    pages: {
      1: "Кулинарная книга великих мудростей\n\nСОДЕРЖАНИЕ:\n\n\nБлины: 2-3\nРис на пару: 4-5\nБорщ: 6-7",
      2: "Блины\n\nCalories [823kJ / 197kcal] \nProtein [7g]\nCarbohydrates [21g]\nFat [9g]\nFiber [0.7g]",
      3: "50 г сливочного масла, плюс немного для жарки\n600г молока\n250г пшеничной муки\n4 яйца\n1 щепотка соли\n\n\nПоместите масло в Миксерную чашу и растапливайте 2 мин/70°C/скорость 2.\n\nДобавьте молоко, муку, яйца и соль в Миксерную чашу и перемешивайте 20 сек/скорость 4. Смесь должна иметь консистенцию жидких сливок. Если смесь выглядит слишком густой, добавьте немного молока. Оставьте смесь минимум на 30 минут, прежде чем приступать к следующему шагу.\n\nСлегка смажьте сковороду сливочным маслом и разогрейте на среднем огне. Налейте маленьким половником смесь на сковороду, при этом поворачивая ее так, чтобы дно было полностью покрыто (блины должны получиться Ø 22 см и очень тонкими). Жарьте в течение 2-3 минут или до тех пор, пока на краях блина не образуется золотистая корочка. Переверните блин и жарьте его еще 1 минуту. Переложите готовый блин на тарелку и накройте кухонным полотенцем, чтобы он не остыл. Повторите те же действия с оставшейся смесью. Подавайте блины теплыми.",
      4: "Рис на пару\n\nCalories [857kJ / 205kcal]\nProtein [4g]\nCarbohydrates [45g]\nFat [0g]\nFiber [1.2g]",
      5: "1000г воды\n1 - 1,5 ч.л. соли\n20 г оливкового масла (optional) or 20 г сливочного масла (optional)\n50 - 350 г длиннозерного белого риса (время приготовления 12-16 мин)\n\n\nПоместите воду, соль и оливковое масло в Миксерную чашу. Установите Паровую корзину, положите в нее рис и готовьте 20 мин/100°C/скорость 4. Извлеките Паровую корзину при помощи Лопатки. Переложите рис в блюдо и подавайте горячим.",
      6: "Борщ\n\nCalories [513kJ / 123kcal]\nProtein [2g]\nCarbohydrates [12g]\nFat [7g]\nFiber [4g]",
      7: "3 - 5 веточек свежей петрушки, только листья\n200г помидоров, нарезанных кусочками\n100г лука, нарезанного половинками\n100г моркови, нарезанной кусочками\n200г свеклы, нарезанной кусочками (2 см)\n40г растительного масла\n150г картофеля, нарезанного кусочками(2 см)\n100г красного перца, нарезанного кусочками (2 см)\n200г белокочанной капусты, нарезанной полосками\n1000г воды\n2 ч.л. соли\n0,5 ч.л. молотого черного перца\n\n\nПоместите листья петрушки в Миксерную чашу и измельчайте 3 сек/скорость 7.\n\nДобавьте помидоры и измельчайте 10 сек/скорость 4, затем выложите в миску и отставьте в сторону.\n\nПоместите лук и морковь в Миксерную чашу и измельчайте 5 сек/скорость 5.\n\nДобавьте свеклу и растительное масло и пассеруйте 5 мин/скорость 1.5.\n\nДобавьте картофель, красный перец, капусту и воду и готовьте 17 мин/100°C/скорость 1.\n\nДобавьте отложенные измельченные помидоры и петрушку, соль и черный перец и готовьте 5 мин/100°C/скорость 1. Оставьте настояться 10 минут перед подачей на стол.\n\n",
      8: ".",
      9: ".",
      10: ".",
      11: "й",
      12: ".",
      13: ".",
      14: ".",
      15: "попа",
    },
  },
  2: {
    pages: {
      1: "Содержимое страницы 1 книги 2.",
      2: "Содержимое страницы 2 книги 2.",
    },
  },
  3: {
    pages: {
      1: "Содержимое страницы 1 книги 3.",
      2: "Содержимое страницы 2 книги 3.",
    },
  },
  4: {
    pages: {
      1: "Содержимое страницы 1 книги 4.",
      2: "Содержимое страницы 2 книги 4.",
    },
  },
  5: {
    pages: {
      1: "Содержимое страницы 1 книги 5.",
      2: "Содержимое страницы 2 книги 5.",
    },
  },
};

function openBook(bookNumber) {
  currentBook = bookNumber;
  currentPage = 1;
  updateBookContent();
}

function updateBookContent() {
  const book = books[currentBook];
  const pageContent = book.pages[currentPage] || "Страница пуста.";
  document.getElementById('bookText').textContent = pageContent;
  document.getElementById('currentPage').textContent = currentPage;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updateBookContent();
  }
}

function nextPage() {
  const book = books[currentBook];
  if (book.pages[currentPage + 1]) {
    currentPage++;
    updateBookContent();
  }
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
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

let tracks = [
  { name: 'I Just Wanna Die', url: 'media/tracks/track1.mp3', cover: 'media/covers/cover1.jpg' },
  { name: 'разорвать небо руками', url: 'media/tracks/track2.mp3', cover: 'media/covers/cover2.jpg' },
  { name: 'синяя сепия', url: 'media/tracks/track3.mp3', cover: 'media/covers/cover3.jpg' },
  { name: 'Стрекоза', url: 'media/tracks/track4.mp3', cover: 'media/covers/cover4.jpg' },
  { name: 'шато', url: 'media/tracks/track5.mp3', cover: 'media/covers/cover5.jpg' },
  { name: 'Стороны', url: 'media/tracks/track6.mp3', cover: 'media/covers/cover6.jpg' },
  { name: 'Стану заботиться', url: 'media/tracks/track7.mp3', cover: 'media/covers/cover7.jpg' },
  { name: 'Майор Том', url: 'media/tracks/track8.mp3', cover: 'media/covers/cover8.jpg' },
  { name: 'Hill', url: 'media/tracks/track9.mp3', cover: 'media/covers/cover9.jpg' },
  { name: 'Камень в Каабе', url: 'media/tracks/track10.mp3', cover: 'media/covers/cover10.jpg' },
  { name: 'Windowz8', url: 'media/tracks/track11.mp3', cover: 'media/covers/cover11.jpg' },
  { name: 'Ублюдок', url: 'media/tracks/track12.mp3', cover: 'media/covers/cover12.jpg' },
];
let currentTrack = 0;

let filteredTracks = []; // Переменная для хранения отфильтрованных треков

function searchTracks() {
  const query = searchInput.value.toLowerCase();
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  filteredTracks = tracks.filter((track) =>
    track.name.toLowerCase().includes(query)
  );

  if (filteredTracks.length > 0) {
    filteredTracks.forEach((track, index) => {
      const result = document.createElement('div');
      result.textContent = track.name;
      result.onclick = () => playTrackFromSearch(index); // Используем новую функцию
      searchResults.appendChild(result);
    });
    searchResults.style.display = 'block'; // Показываем окно подсказок
  } else {
    searchResults.style.display = 'none'; // Скрываем окно подсказок, если результатов нет
  }
}

function playTrackFromSearch(index) {
  if (index < 0 || index >= filteredTracks.length) return;

  // Находим выбранный трек в отфильтрованном списке
  const selectedTrack = filteredTracks[index];

  // Находим индекс этого трека в основном массиве tracks
  const trackIndexInMainList = tracks.findIndex(
    (track) => track.name === selectedTrack.name
  );

  // Воспроизводим трек из основного списка
  playTrack(trackIndexInMainList);
}

function playTrack(index) {
  if (index < 0 || index >= tracks.length) return;
  currentTrack = index;
  musicPlayer.src = tracks[currentTrack].url;
  musicCover.src = tracks[currentTrack].cover;
  musicTitle.textContent = tracks[currentTrack].name;
  musicPlayer.play();
  playPauseBtn.textContent = '⏸';

  // Закрываем окно подсказок
  const searchResults = document.getElementById('searchResults');
  searchResults.style.display = 'none'; // Скрываем окно подсказок
}

function prevTrack() {
  playTrack((currentTrack - 1 + tracks.length) % tracks.length);
}

function nextTrack() {
  playTrack((currentTrack + 1) % tracks.length);
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