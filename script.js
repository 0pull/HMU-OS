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
      8: "\n",
      9: "\n",
      10: "\n",
      11: "\n",
      12: "\n",
      13: "\n",
      14: "\n",
      15: "\n",
    },
  },
  2: {
    pages: {
      1: "\n",
      2: " То этот  Тайлер устраивает меня  на  работу  официантом,  то пихает мне\nствол в  рот  и заявляет,  что  для  того, чтобы  обрести жизнь вечную, надо\nсначала  умереть. Сказать по правде, долгое время мы с Тайлером были лучшими\nдрузьями. Кого я ни встречу,  все меня спрашивают, не знаком ли я с Тайлером\nДерденом.\n     Ствол пистолета утыкается мне в гланды. А Тайлер говорит:\n     - Мы умрем не на самом деле.\n     Я  ощупываю языком  отверстия  в глушителе пистолета.  Эти отверстия мы\nпросверлили  сами.  Шум выстрела производят,  во-первых,  пороховые газы,  а\nво-вторых - пуля, когда  пересекает  звуковой барьер. Поэтому, чтобы сделать\nглушитель,  нужно  просверлить отверстия  в  стволе пистолета -  много-много\nотверстий.  Через  них  выходят  газы,  а  скорость  пули становится  меньше\nскорости звука.\n     Если отверстия просверлить неправильно, пистолет взорвется прямо у тебя\nв руке.\n     - Смерти  на самом деле  не существует, - говорит Тайлер. - Мы войдем в\nлегенду. Мы останемся навсегда молодыми.\n     Я отодвигаю ствол языком, так чтобы он упирался в щеку, и говорю:\n     - Тайлер, что ты городишь! Мы же не вампиры!\n     Здание,  в  котором  мы находимся, исчезнет с  лица земли  через десять\nминут. Возьмите  одну часть  98%-ной дымящей азотной  кислоты, и смешайте  с\nтремя  частями концентрированной серной кислоты. Делать это надо на  ледяной\nбане.  Затем  добавляйте глицерин по капле из глазной  пипетки.  Вы получили\nнитроглицерин.\n     Я знаю это, потому что это знает Тайлер.\n     Смешайте нитроглицерин  с  опилками,  и вы  получите отличный  пластит.\nНекоторые предпочитают  смешивать нитроглицерин с ватой и английской  солью.\nЭто тоже дает неплохой  результат. А некоторые мешают нитру  с парафином. Но\nпри этом получается ненадежная взрывчатка.\n     Мы с Тайлером находимся  на вершине небоскреба  "Паркер-Моррис".  Ствол\nпистолета засунут  мне  в рот.  Издалека доносится  звук  бьющегося  стекла.\nЗагляни за край крыши. День пасмурный, даже  на этой высоте солнца не видно.\nЭто самое высокое здание в мире, так что на вершине его холодно  даже летом.\nКругом царит космическое безмолвие.  Такое ощущение, что ты - дрессированная\nобезьянка-астронавт. Чему тебя научили, то и делаешь.\n     Потяни за рычажок.\n     Нажми на кнопочку.\n     Сам не ведаешь, что творишь, и вот - ты уже покойник.\n     Взгляните вниз, туда, за край крыши.\n     Даже  с высоты  сто  девяносто  первого  этажа видно, что  улица  внизу\nпокрыта  густой  колышущейся  толпой.  Люди  стоят,  смотрят  вверх. А  звук\nбьющегося стекла доносится с того этажа, который  под нами.  Там разбивается\nокно  и  из него вылетает шкаф  с документами,  похожий  на  большой  черный\nхолодильник. Из  других окон  вылетают маленькие тумбочки  на  шесть ящиков,\nкоторые, по мере приближения к  земле, все больше и больше напоминают черные\nкапли  дождя.  Капли  становятся   все  меньше  и  меньше.  Они  исчезают  в\nколышущемся людском море.\n     Где-то  под  нами,  на  одном  из  ста  девяноста   этажей  небоскреба,\nобезьянки-астронавты  из  Комитета  Неповиновения  "Проекта Разгром" впали в\nбезумие и приступили к уничтожению истории.\n     Кто-то сказал когда-то давно,  что людям свойственно убивать  тех, кого\nлюбишь. Что ж, верно и обратное.\n     Когда у тебя во рту пистолет, и ты сжимаешь зубами его ствол,  говорить\nудается только одними гласными.\n     Нам осталось жить не более десяти минут.\n     Еще одно окно разбито.  Осколки стекла прыскают в воздух, словно стайка\nптиц,  а затем  из окна показывается  край  длинного черного стола,  который\nчлены Комитета  Неповиновения выбрасывают  из здания. Стол долго качается  в\nнеустойчивом  равновесии  на  подоконнике, затем  вываливается и,  вертясь в\nвоздухе, планирует на толпу, как таинственный летательный аппарат.\n     Через   девять   минут   небоскреб   "Паркер-Моррис"   прекратит   свое\nсуществование. Если взять достаточное количество пластита, чтобы обмазать им\nколонны фундамента, - ни одно здание в мире не устоит. Конечно в том случае,\nесли вы  не забыли  тщательно  обложить колонны  со  всех сторон  мешками  с\nпеском, чтобы  взрывная  волна ударила в бетон,  а не разошлась по помещению\nподземного гаража.\n     Ни в одном учебнике истории не отыщешь подобных полезных сведений.\n     Напалм можно изготовить тремя способами. Первый: смешайте  равные части\nбензина и замороженного концентрата апельсинового сока. Второй: то же самое,\nно  вместо апельсинового  сока  -  диетическая  кола.  Ну и,  наконец, можно\nрастворять высушенный и измельченный  кошачий помет в бензине, пока смесь не\nзагустеет.\n     Спросите  меня, и я объясню, как приготовить нервно-паралитический газ.\nИли автомобильную бомбу.\n     Осталось девять минут.\n     Небоскреб "Паркер-Моррис" упадет, все его сто девяносто этажей медленно\nобрушатся  как срубленное дерево. Уничтожить можно все, что  хочешь. Страшно\nподумать,  но  то  место,  где  мы  сейчас находимся,  скоро  превратится  в\nматематическую точку в воздухе.\n     Мы стоим на  краю крыши, я  и Тайлер, и ствол пистолета у меня  во рту.\nХотелось бы знать, насколько он чистый.\n     Мы чуть  не  позабыли  обо всей этой  тайлеровской философии касательно\nубийства  и самоубийства, зачарованно  глядя на то, как еще  один конторский\nшкаф  вывалился  из  здания.  Ящики открылись в  полете, рассыпая  в воздухе\nворохи белой писчей бумаги, тут же подхваченной воздушными потоками.\n     Осталось восемь минут.\n     И тут дым повалил клубами из разбитых окон. Через восемь минут  команда\nподрывников  приведет в  действие инициирующий  заряд, тот  воздействует  на\nосновной заряд, колонны,  на  которых покоится здание,  рухнут и фотографии,\nзапечатлевшие гибель  небоскреба  "Паркер-Моррис"  войдут  во  все  учебники\nистории.\n     Моментальные  фотографии,   запечатлевшие  различные   стадии   падения\nнебоскреба.  На первой  здание  еще  стоит.  На второй - оно отклонилось  от\nвертикали на десять градусов. На третьей  - уже  на  двадцать.  На следующей\nугол  наклона  составляет уже сорок пять градусов,  причем арматура начинает\nсдавать, так  что  накренившееся здание  прогибается  дугой. На последнем же\nснимке сто  девяносто  этажей  небоскреба обрушиваются всей  своей массой на\nНациональный музей. Он-то и является подлинной мишенью в плане Тайлера.\n     - Этот мир отныне принадлежит нам, нам и только нам,  - говорит Тайлер.\n- Древние давно в могилах.\n     Если  бы  я  знал, чем  все это  обернется, я  бы предпочел сейчас быть\nмертвым вместе с древними на небесах.\n     Осталось семь минут.\n     Я  стою на краю  крыши  с пистолетом Тайлера  во  рту.  Шкафы,  столы и\nкомпьютеры летят из окон небоскреба на толпу, собравшуюся вокруг здания, дым\nвырывается  из разбитых  окон, а за три квартала отсюда команда  подрывников\nпосматривает на часы. Но  я знаю - подлинную причину всего, что происходит -\nпистолета во рту, анархии, взрыва - зовут Марла Зингер.\n     Осталось шесть минут.\n     У нас здесь нечто вроде любовного треугольника. Я люблю Тайлера. Тайлер\nлюбит Марлу. Марла любит меня.\n     А  я  Марлу не люблю, да  и Тайлер меня больше не любит. Когда я говорю\n"любить", я  имею  в  виду  "любить" не  в смысле "заботиться", а  в  смысле\n"обладать".\n     Без Марлы Тайлер был бы никем.\n     Осталось пять минут.\n     Быть может,  мы  войдем в легенду, а может,  и  нет. Скорее всего, нет,\nговорю я, но продолжаю чего-то ждать.\n     Кто бы узнал об Иисусе, если бы не было евангелистов?\n     Осталось четыре минуты.\n     Я отодвигаю ствол языком, так чтобы он уперся в щеку, и говорю:\n     - Ты хочешь войти в  легенду, Тайлер, дружище? Я помогу тебе. Я-то ведь\nзнаю всю историю с самого начала.\n     Я помню все.\n     Осталось три минуты.\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
      1: "\n",
    },
  },
  3: {
    pages: {
      1: "\n",
      2: "\n",
    },
  },
  4: {
    pages: {
      1: ".",
      2: "Table of Contents\n\n1.Counterfeiting Money\n\n2.Credit Card Fraud\n\n3.Making Plastic Explosives\n\n4.Picking Master Locks\n\n5.The Arts of Lockpicking I\n\n6.The Arts of Lockpicking II\n\n7.Solidox Bombs\n\n8.High Tech Revenge: The Beigebox\n\n9.COý Bombs\n\n10.Thermite II Bombs\n\n11.Touch Explosives\n\n12.Letter Bombs\n\n13.Paint Bombs\n\n14.Ways to send a car to HELL\n\n15.Do you hate school?\n\n16.Phone related vandalism\n\n17.Highway police radar jamming\n\n18.Smoke Bombs\n\n19.Mail Box Bombs\n\n20.Hot-wiring cars\n\n21.Napalm\n\n22.Fertilizer Bomb\n\n23.Tennis Ball Bomb\n\n24.Diskette Bombs\n\n25.Unlisted Phone Numbers\n\n26.Fuses\n\n27.How to make Potassium Nitrate\n\n28.Exploding Light bulbs\n\n29.Under water igniters\n\n30.Home-brew blast cannon\n\n31.Chemical Equivalency List\n\n32.Phone Taps\n\n33.Landmines\n\n34.A different Molitov Cocktail\n\n35.Phone Systems Tutorial I\n\n36.Phone Systems Tutorial II\n\n37.Basic Alliance Teleconferencing\n\n38.Aqua Box Plans\n\n39.Hindenberg Bomb\n\n40.How to Kill Someone\n\n41.Phone Systems Tutorial III\n\n42.Black Box Plans\n\n43.The Blotto Box\n\n44.Blowgun\n\n45.Brown Box Plans\n\n46.Calcium Carbide Bomb\n\n47.More Ways to Send a Car to Hell\n\n48.Ripping off Change Machines\n\n49.Clear Box Plans\n\n50.CNA Number Listing\n\n51.Electronic Terrorism\n\n52.Start a Conf. w/o 2600hz or MF\n\n53.Dynamite\n\n54.Auto Exhaust Flame Thrower\n\n55.How to Break into BBs Express\n\n56.Firebomb\n\n57.Fuse Bomb\n\n58.Generic Bomb\n\n59.Green Box Plans\n\n60.Portable Grenade Launcher\n\n61.Basic Hacking Tutorial I\n\n62.Basic Hacking Tutorial II\n\n63.Hacking DEC's\n\n64.Harmless Bombs\n\n65.Breaking into Houses\n\n66.Hypnotism\n\n67.Remote Informer Issue #1\n\n68.Jackpotting ATM Machines\n\n69.Jug Bomb\n\n70.Fun at K-Mart\n\n71.Mace Substitute\n\n72.How to Grow Marijuana\n\n73.Match Head Bomb\n\n74.Terrorizing McDonalds\n\n75.\"Mentor's\" Last Words\n\n76.The Myth of the 2600hz Detector\n\n77.Blue Box Plans\n\n78.Napalm II\n\n79.Nitroglycerin Recipe\n\n80.Operation: Fuckup\n\n81.Stealing Calls from Payphones\n\n82.Pool Fun\n\n83.Free Postage\n\n84.Unstable Explosives\n\n85.Weird Drugs\n\n86.The Art of Carding\n\n87.Recognizing Credit Cards\n\n88.How to Get a New Identity\n\n89.Remote Informer Issue #2\n\n90.Remote Informer Issue #3\n\n91.Remote Informer Issue #4\n\n92.Remote Informer Issue #5\n\n93.Phreaker's Guide to Loop Lines\n\n94.Ma-Bell Tutorial\n\n95.Getting Money out of Pay Phones\n\n96.Computer-based PBX\n\n97.PC-Pursuit Port Statistics\n\n98.Pearl Box Plans\n\n99.The Phreak File\n\n100.Red Box Plans\n\n101.RemObS\n\n102.Scarlet Box Plans\n\n103.Silver Box Plans\n\n104.Bell Trashing\n\n105.Canadian WATS Phonebook\n\n106.Hacking TRW\n\n107.Hacking VAX & UNIX\n\n108.Verification Circuits\n\n109.White Box Plans\n\n110.The BLAST Box\n\n111.Dealing with the R&R Operator\n\n112.Cellular Phone Phreaking\n\n113.Cheesebox Plans\n\n114.Start Your Own Conferences\n\n115.Gold Box Plans\n\n116.The History of ESS\n\n117.The Lunch Box\n\n118.Olive Box Plans\n\n119.The Tron Box\n\n120.More TRW Info\n\n121.\"Phreaker's Phunhouse\"\n\n122.Phrack Magazine-Vol. 3, Issue 27\n\n123.Phrack Magazine-Vol. 3, Issue 27\n\n124.Phrack Magazine-Vol. 3, Issue 28\n\n125.Phrack Magazine-Vol. 3, Issue 28\n\n126.Phrack Magazine-Vol. 3, Issue 28\n\n127.Phrack Magazine-Vol. 3, Issue 30\n\n128.Phrack Magazine-Vol. 3, Issue 30\n\n129.Phrack Magazine-Vol. 3, Issue 30\n\n130.Sodium Chlorate\n\n131.Mercury Fulminate\n\n132.Improvised Black Powder\n\n133.Nitric Acid\n\n134.Dust Bomb Instructions\n\n135.Carbon-Tet Explosive\n\n136.Making Picric Acid from Aspirin\n\n137.Reclamation of RDX from C-4\n\n138.Egg-based Gelled Flame Fuels\n\n139.Clothespin Switch\n\n140.Flexible Plate Switch\n\n141.Low Signature System [Silencers]\n\n142.Delay Igniter From Cigarette\n\n143.Nicotine\n\n144.Dried Seed Timer\n\n145.Nail Grenade\n\n146.Bell Glossary\n\n147.Phone Dial Locks -- Beat'em\n\n148.Exchange Scanning\n\n149.A Short History of Phreaking\n\n150.\"Secrets of the Little Blue Box\"\n\n151.The History of British Phreaking\n\n152.\"Bad as Shit\"\n\n153.Telenet\n\n154.Fucking with the Operator\n\n155.Phrack Magazine-Vol. 1, Issue 1\n\n156.International Country Codes List\n\n157.Infinity Transmitter Plans\n\n158.LSD\n\n159.Bananas160.Yummy Marihuana Recipes\n\n161.Peanuts\n\n162.Chemical Fire Bottle\n\n163.Igniter from Book Matches\n\n164.\"Red or White Powder\" Propellant\n\n165.Pipe Hand Grenade\n\n166.European Credit Card Fraud\n\n167.Potassium Bomb\n\n168.Your Legal Rights\n\n169.Juvenile Offenders' Rights\n\n170.Down The Road Missle\n\n171.Fun With Shotgun Shells\n\n172.Surveillance Equipment\n\n173.Drip Timer\n\n174.Stealing\n\n175.Miscellaneous\n\n176.Shaving cream bomb\n\n177.Ripping off change machines II\n\n178.Lockpicking the EASY way\n\n179.Anarchy 'N' Explosives Prelude\n\n180.Anarchy 'N' Explosives Vol. 1\n\n181.Anarchy 'N' Explosives Vol. 2\n\n182.Anarchy 'N' Explosives Vol. 3\n\n183.Anarchy 'N' Explosives Vol. 4\n\n184.Anarchy 'N' Explosives Vol. 5\n\n185.Explosives and Propellants\n\n186.Lockpicking III\n\n187.Chemical Equivalent List II\n\n188.Nitroglycerin II\n\n189.Cellulose Nitrate\n\n190.Starter Explosives\n\n191.Flash Powder\n\n192.Exploding Pens\n\n193.Revised Pipe Bombs\n\n194.* SAFETY * A MUST READ!\n\n195.Ammonium TriIodide\n\n196.Sulfuric Acid & Amm. Nitrate III\n\n197.Black Powder III\n\n198.Nitrocellulose\n\n199.RDX\n\n200.The Black Gate BBS\n\n201.ANFOS\n\n202.Picric Acid II\n\n203.Bottled Explosives\n\n204.Dry Ice\n\n205.Fuses / Ignitors / Delays\n\n206.Film Canister Bombs\n\n207.Book Bombs\n\n208.Phone Bombs\n\n209.Special Ammunition\n\n210.Rocketry\n\n211.Pipe Cannon II\n\n212.Smoke Bombs\n\n213.Firecrackers\n\n214.Suppliers II\n\n215.Lab-Raid Checklist\n\n216.Misc Anarchy\n\n217.Combo Locks II\n\n218.Misc Anarchy II\n\n219.Thermite IV",
      3: "1. Counterfeiting Money by The Jolly Roger\n\nBefore reading this article, it would be a very good idea to get a book on photo offset printing, for this is the method used in counterfeiting US\n\ncurrency. If you are familiar with this method of printing, counterfeiting should be a simple task for you.\n\nGenuine currency is made by a process called \"gravure\", which involves etching a metal block. Since etching a metal block is impossible to do\n\nby hand, photo offset printing comes into the process.\n\nPhoto offset printing starts by making negatives of the currency with a camera, and putting the negatives on a piece of masking material\n\n(usually orange in color). The stripped negatives, commonly called \"flats\", are then exposed to a lithographic plate with an arc light plate maker.\n\nThe burned plates are then developed with the proper developing chemical. One at a time, these plates are wrapped around the plate cylinder\n\nof the press.\n\nThe press to use should be an 11 by 14 offset, such as the AB Dick 360. Make 2 negatives of the portrait side of the bill, and 1 of the back\n\nside. After developing them and letting them dry, take them to a light table. Using opaque on one of the portrait sides, touch out all the green,\n\nwhich is the seal and the serial numbers. The back side does not require any retouching, because it is all\n\none color. Now, make sure all of the negatives are registered (lined up correctly) on the flats. By the way, every time you need another serial\n\nnumber, shoot 1 negative of the portrait side, cut out the serial number, and remove the old serial number from the flat replacing it with the new\n\none.\n\nNow you have all 3 flats, and each represents a different color: black, and 2 shades of green (the two shades of green are created by mixing\n\ninks). Now you are ready to burn the plates. Take a lithographic plate and etch three marks on it. These marks must be 2 and 9/16 inches apart,\n\nstarting on one of the short edges. Do the same thing to 2 more plates. Then, take 1 of the flats and place it on the plate, exactly lining the short\n\nedge up with the edge of the plate. Burn it, move it up to the next mark, and cover up the exposed area you have already burned. Burn that,\n\nand do the same thing 2 more times, moving the flat up one more mark. Do the same process with the other 2 flats (each on a separate plate).\n\nDevelop all three plates. You should now have 4 images on each plate with an equal space between each bill.\n\nThe paper you will need will not match exactly, but it will do for most situations. The paper to use should have a 25% rag content. By the way,\n\nDisaperf computer paper (invisible perforation) does the job well. Take the paper and load it into the press. Be sure to set the air, buckle, and\n\npaper thickness right. Start with the black plate (the plate without the serial numbers). Wrap it around the cylinder and load black ink in. Make\n\nsure you run more than you need because there will be a lot of rejects. Then, while that is printing, mix the inks for the serial numbers and the\n\nback side. You will need to add some white and maybe yellow to the serial number ink. You also need to add black to the back side. Experiment\n\nuntil you get it right. Now, clean the press and print the other side. You will now have a bill with no green seal or serial numbers. Print a few\n\nwith one serial number, make another and repeat. Keep doing this until you have as many different numbers as you want. Then cut the bills to\n\nthe exact size with a paper cutter. You should have printed a large amount of money by now, but there is still one problem; the paper is pure\n\nwhite. To dye it, mix the following in a pan: 2 cups of hot water, 4 tea bags, and about 16 to 20 drops of green food coloring (experiment with\n\nthis). Dip one of the bills in and compare it to a genuine US bill. Make the necessary adjustments, and dye all the bills. Also, it is a good idea to\n\nmake them look used. For example, wrinkle them, rub coffee grinds on them, etc.\n\nAs before mentioned, unless you are familiar with photo offset printing, most of the information in this article will be fairly hard to understand.\n\nAlong with getting a book on photo offset printing, try to see the movie \"To Live and Die in LA\". It is about a counterfeiter, and the producer\n\ndoes a pretty good job of showing how to counterfeit. A good book on the subject is \"The Poor Man's James Bond\".\n\nIf all of this seems too complicated to you, there is one other method available for counterfeiting: The Canon color laser copier. The Canon can\n\nreplicate ANYTHING in vibrant color, including US currency. But, once again, the main problem in counterfeiting is the paper used. So,\n\nexperiment, and good luck!\n\n",
      4: "2. Credit Card Fraud by The Jolly Roger\n\nFor most of you out there, money is hard to come by. Until now:\n\nWith the recent advent of plastic money (credit cards), it is easy to use someone else's credit card to order the items you have always desired\n\nin life. The stakes are high, but the payoff is worth it.\n\nStep One: Getting the credit card information\n\nFirst off, you must obtain the crucial item: someone's credit card number. The best way to get credit card numbers is to take the blue carbons\n\nused in a credit card transaction at your local department store. These can usually be found in the garbage can next to the register, or for the\n\nmore daring, in the garbage dumpster behind the store. But, due to the large amount of credit card fraud, many stores have opted to use a\n\ncarbonless transaction sheet, making things much more difficult. This is where your phone comes in handy.\n\nFirst, look up someone in the phone book, and obtain as much information as possible about them. Then, during business hours, call in a very\n\nconvincing voice - \"Hello, this is John Doe from the Visa Credit Card Fraud Investigations Department. We have been informed that your credit\n\ncard may have been used for fraudulent purposes, so will you please read off the numbers appearing on your Visa card for verification.\" Of\n\ncourse, use your imagination! Believe it or not, many people will fall for this ploy and give out their credit information.\n\nNow, assuming that you have your victim's credit card number, you should be able to decipher the information given.\n\nStep Two: Recognizing information from carbon copies\n\nCard example:\n\n[American Express]\n\nXXXX XXXXXX XXXXX\n\nMM/Y1 THRU MM/Y2\n\nJOE SHMOE\n\nExplanation:\n\nMM/Y1 is the date the card was issued, and MM/Y2 is the expiration date. The American Express Gold Card has numbers XXXXXX XXXXXXXX\n\nXXXXXXXX, and is covered for up to $5000.00, even if the card holder is broke.\n\n[Mastercard]\n\n5XXX XXXX XXXX XXXX\n\nXXXX AAA DD-MM-YY MM/YY\n\nJOE SHMOE\n\nExplanation:\n\nXXXX in the second row may be asked for during the ordering process. The first date is when the card was new, and the second is when the\n\ncard expires. The most frequent number combination used is 5424 1800 XXXX XXXX. There are many of these cards in circulation, but many of\n\nthese are on wanted lists, so check these first.\n\n[Visa]\n\n4XXX XXX(X) XXX(X) XXX(X)\n\nMM/YY MM/YY*VISA\n\nJOE SHMOE\n\nExplanation:\n\nVisa is the most abundant card, and is accepted almost everywhere. The \"*VISA\" is sometimes replaced with \"BWG\", or followed with a\n\nspecial code. These codes are as follows:\n\n [1] MM/YY*VISA V - Preferred Card\n\n [2] MM/YY*VISA CV - Classic Card\n\n [3] MM/YY*VISA PV - Premier Card\n\nPreferred Cards are backed with money, and are much safer to use. Classic Cards are newer, harder to reproduce cards with decent\n\nbacking. Premier Cards are Classic Cards with Preferred coverage. Common numbers are 4448 020 XXX XXX, 4254 5123 6000 XXXX, and\n\n4254 5123 8500 XXXX. Any 4712 1250 XXXX XXXX cards are IBM Credit Union cards, and are risky to use, although they are usually covered\n\nfor large purchases.\n\nStep Three: Testing credit\n\nYou should now have a Visa, Mastercard, or American Express credit card number, with the victim's address, zip code, and phone number.\n\nBy the way, if you have problems getting the address, most phone companies offer the Address Tracking Service, which is a special number\n\nyou call that will give you an address from a\n\nphone number, at a nominal charge. Now you need to check the balance of credit on the credit card (to make sure you don't run out of money),\n\nand you must also make sure that the card isn't stolen. To do this you must obtain a phone number that businesses use to check out credit\n\ncards during purchases. If you go to a department store, watch the cashier when someone makes a credit card purchase. He/she will usually\n\ncall a phone number, give the credit information, and then give what is called a \"Merchant Number\". These numbers are usually written down\n\non or around the register. It is easy to either find these numbers and copy them, or to wait until they call one in. Watch what they dial and wait\n\nfor the 8 digit (usually) merchant number. Once you call the number, in a calm voice, read off the account number, merchant number, amount,\n\nand expiration date. The credit bureau will tell you if it is OK, and will give you an authorization number. Pretend you are writing this number\n\ndown, and repeat it back to them to check it. Ignore this number completely, for it serves no real purpose. However, once you do this, the bank\n\nremoves dollars equal to what you told them, because the card was supposedly used to make a purchase. Sometimes you can trick the\n\noperator by telling her the customer changed his mind and decided not to charge it. Of course, some will not allow this. Remember at all times\n\nthat you are supposed to be a store clerk calling to check out the card for a purchase. Act like you are talking with a customer when he/she\n\n\"cancels\".\n\nStep Four: The drop\n\nOnce the cards are cleared, you must find a place to have the package sent. NEVER use a drop more than once. The following are typical drop\n\nsites:\n\n [1] An empty house\n\nAn empty house makes an excellent place to send things. Send the package UPS, and leave a note on the door saying, \"UPS. I work days, 8 to\n\n6. Could you please leave the package on the back door step?\" You can find dozens of houses from a real estate agent by telling them you\n\nwant to look around for a house. Ask for a list of twenty houses for sale, and tell them you will check out the area. Do so, until you find one\n\nthat suits your needs.\n\n [2] Rent A Spot\n\nU-Haul sometimes rents spaces where you can have packages sent and signed for. End your space when the package arrives.\n\n [3] People's houses\n\nFind someone you do not know, and have the package sent there. Call ahead saying that \"I called the store and they sent the package to the\n\nwrong address. It was already sent, but can you keep it there for me?\" This is a very reliable way if you keep calm when talking to the people.\n\nDo NOT try post office boxes. Most of the time, UPS will not deliver to a post office box, and many people have been caught in the past\n\nattempting to use a post office box. Also, when you have determined a drop site, keep an eye on it for suspicious characters and cars that\n\nhave not been there before.\n\nStep Five: Making the transaction\n\nYou should now have a reliable credit card number with all the necessary billing information, and a good drop site.\n\nThe best place to order from is catalogues, and mail order houses. It is in your best interest to place the phone call from a pay phone,\n\nespecially if it is a 1-800 number. Now, when you call, don't try to disguise your voice, thinking you will trick the salesperson into believing you\n\nare an adult. These folks are trained to detect this, so your best bet is to order in your own voice. They will ask for the following: name, name\n\nas it appears on card, phone number, billing address, expiration date, method of shipping, and product. Ask if they offer UPS Red shipping\n\n(next day arrival), because it gives them less time to research an order. If you are using American Express, you might have a bit of a problem\n\nshipping to an address other than the billing address. Also, if the salesperson starts to ask questions, do NOT hang up. Simply talk your way\n\nout of the situation, so you won't encourage investigation on the order.\n\nIf everything goes right, you should have the product, free of charge. Insurance picks up the tab, and no one is any wiser. Be careful, and try\n\nnot to order anything over $500. In some states, UPS requires a signature for anything over $200, not to mention that anything over $200 is\n\ndefined as grand theft, as well as credit fraud. Get caught doing this, and you will bite it for a couple of years. Good luck!\n\n",
      5: ".",
      6: ".",
      7: ".",
      8: ".",
      9: ".",
    },
  },
  5: {
    pages: {
      1: "\n",
      2: "\n",
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
  { name: 'Da Funk', url: 'media/tracks/track13.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Depravity', url: 'media/tracks/track14.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Quixotic', url: 'media/tracks/track15.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Ебучее техно', url: 'media/tracks/track16.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Drown', url: 'media/tracks/track17.mp3', cover: 'media/covers/cover12.jpg' },
  { name: '666', url: 'media/tracks/track18.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Not Comfortable, Pt. 1', url: 'media/tracks/track19.mp3', cover: 'media/covers/cover12.jpg' },
  { name: '404 Not Found', url: 'media/tracks/track20.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Больно', url: 'media/tracks/track21.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'We Have Arrived', url: 'media/tracks/track22.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Blood For Blood', url: 'media/tracks/track23.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Error', url: 'media/tracks/track24.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Nuclear Icebreaker', url: 'media/tracks/track25.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Hydra', url: 'media/tracks/track26.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Yurei', url: 'media/tracks/track27.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Tranquilizer', url: 'media/tracks/track28.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Black Magic', url: 'media/tracks/track29.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Daze', url: 'media/tracks/track30.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Morphy', url: 'media/tracks/track31.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'She Likes It Hard', url: 'media/tracks/track32.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Arrakis', url: 'media/tracks/track33.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Necronomicon', url: 'media/tracks/track34.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Exposure', url: 'media/tracks/track35.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Chrome.exe', url: 'media/tracks/track36.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Extreme Terror III', url: 'media/tracks/track37.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Seismic Fall', url: 'media/tracks/track38.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Ritual Of Tears', url: 'media/tracks/track39.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Fahrradsattel', url: 'media/tracks/track40.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Splash Damage', url: 'media/tracks/track41.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Selector', url: 'media/tracks/track42.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Стиморол', url: 'media/tracks/track43.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'No Escape', url: 'media/tracks/track44.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Im dem Laken', url: 'media/tracks/track45.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Soinc Destroyer', url: 'media/tracks/track46.mp3', cover: 'media/covers/cover12.jpg' },
  { name: 'Primal', url: 'media/tracks/track47.mp3', cover: 'media/covers/cover12.jpg' },
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

function nextTrack() {
  playTrack((currentTrack + 1) % tracks.length);
}

// Автовоспроизведение следующего трека
musicPlayer.addEventListener('ended', () => {
  nextTrack();
});

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
