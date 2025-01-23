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
  
  // Очистка холста в Paint
  function clearCanvas() {
    const canvas = document.getElementById('paintCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  // Игра "Змейка"
  const snakeCanvas = document.getElementById('snakeGame');
  const snakeCtx = snakeCanvas.getContext('2d');
  const gridSize = 20;
  const tileCount = snakeCanvas.width / gridSize;
  let snake = [{ x: 10, y: 10 }];
  let direction = { x: 0, y: 0 };
  let food = { x: 5, y: 5 };
  let score = 0;
  let gameSpeed = 150; // Задержка в миллисекундах (меньше = быстрее)
  
  function resetSnakeGame() {
    snake = [{ x: 10, y: 10 }];
    direction = { x: 0, y: 0 };
    food = { x: 5, y: 5 };
    score = 0;
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
      resetSnakeGame();
      return;
    }
  
    snake.unshift(head);
  
    if (head.x === food.x && head.y === food.y) {
      score++;
      food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
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
  
  // Игра "Сапер"
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
  
  // Paint
  const paintCanvas = document.getElementById('paintCanvas');
  const paintCtx = paintCanvas.getContext('2d');
  let isDrawing = false;
  
  paintCanvas.addEventListener('mousedown', () => isDrawing = true);
  paintCanvas.addEventListener('mouseup', () => isDrawing = false);
  paintCanvas.addEventListener('mousemove', draw);
  
  function draw(e) {
    if (!isDrawing) return;
    paintCtx.fillStyle = 'white';
    paintCtx.fillRect(e.offsetX, e.offsetY, 5, 5);
  }