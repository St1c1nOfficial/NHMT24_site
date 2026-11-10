(() => {
  const STORAGE_KEY = "nhmt-site-lang";
  const DEFAULT_LANG = "ru";

  const dict = {
    ru: {
      "meta.title": "Расписание НХМТ — пары вашей группы",
      "meta.description":
        "Расписание НХМТ показывает день вашей группы: пары, кабинет, преподаватель и замены. Данные остаются на устройстве. by St1c1n.",
      "nav.why": "Зачем",
      "nav.screens": "Экраны",
      "nav.better": "Удобнее",
      "nav.start": "Запуск",
      "nav.site": "Сайт НХМТ",
      "hero.eyebrow": "Корпуса 1–2 и 3 · Телефон и компьютер",
      "hero.title": "Расписание вашей группы — <em>на одном экране</em>",
      "hero.lead":
        "Приложение читает открытые файлы Новочебоксарского химико-механического техникума и показывает день выбранной группы: пара, время, предмет, кабинет и преподаватель. Замены с сайта подсвечиваются в той же карточке.",
      "hero.download": "Скачать для Android",
      "hero.screens": "Посмотреть экраны",
      "hero.meta1": "Версия 2.0.0",
      "hero.meta2": "Копия остаётся на устройстве",
      "hero.meta3": "Светлая и тёмная тема",
      "hero.shotAlt": "День с тремя заменами",
      "why.title": "Для чего это",
      "why.lead":
        "Файл расписания на сайте техникума — таблица всего корпуса. Здесь остаётся только ваша группа и сегодняшний день.",
      "why.card1.title": "Своя группа",
      "why.card1.text":
        "Корпус 1–2 или корпус 3, короткое имя и код. Неделя листается на прошлую и следующую. Если в ячейке две подгруппы, они показаны отдельно.",
      "why.card2.title": "Замены в дне",
      "why.card2.text":
        "Лист с zamena.nhmt.ru попадает в карточку пары: значок «Замена» и строка «Вместо». Практика выносится отдельно. Свою замену можно добавить вручную.",
      "why.card3.title": "На этом устройстве",
      "why.card3.text":
        "Без аккаунта. Группа, расписание и замены хранятся в браузере. Если сети нет, показывается сохранённая копия. Уведомление приходит, когда файл на сайте обновился.",
      "screens.title": "Как это выглядит",
      "screens.lead": "Четыре экрана версии 2.0.0. Интерфейс приложения на русском.",
      "screens.day.alt": "Суббота, три пары без замен",
      "screens.day.cap": "День группы: время, предмет, кабинет, преподаватель",
      "screens.today.alt": "Четверг с баннером замен",
      "screens.today.cap": "Замены подсвечены, у пары видно, что было вместо",
      "screens.settings.alt": "Экран настроек",
      "screens.settings.cap": "Тема, автообновление, свой xlsx и значок на экран",
      "screens.setup.alt": "Выбор корпуса и группы",
      "screens.setup.cap": "Первый запуск: корпус и группа",
      "better.title": "Чем это удобнее файла",
      "better.lead":
        "Сравниваем не «с другим колледжем», а с тем, как пару ищут сейчас: в xlsx на nhmt.ru и в листе замен.",
      "table.h.xlsx": "Файл на nhmt.ru",
      "table.h.zamena": "Лист замен",
      "table.h.app": "Расписание НХМТ",
      "table.r1.label": "Что открывается",
      "table.r1.xlsx": "Таблица всего корпуса",
      "table.r1.zamena": "Все группы одним листом",
      "table.r1.app": "День вашей группы",
      "table.r2.label": "Замены",
      "table.r2.xlsx": "Отдельным файлом",
      "table.r2.zamena": "Нужно найти свою строку",
      "table.r2.app": "В карточке пары, со строкой «Вместо»",
      "table.r3.label": "Практика",
      "table.r3.xlsx": "В общем файле замен",
      "table.r3.zamena": "Среди остальных строк",
      "table.r3.app": "Баннер и отдельная карточка",
      "table.r4.label": "Телефон",
      "table.r4.xlsx": "Широкая таблица",
      "table.r4.zamena": "Широкая таблица",
      "table.r4.app": "Экран дня и значок на главном",
      "table.r5.label": "Без сети",
      "table.r5.xlsx": "Файл нужно скачать заранее",
      "table.r5.zamena": "Файл нужно скачать заранее",
      "table.r5.app": "Показывается сохранённая копия",
      "table.r6.label": "Обновление",
      "table.r6.xlsx": "Скачать xlsx снова",
      "table.r6.zamena": "Открыть новый лист",
      "table.r6.app": "При открытии, по часам и кнопкой «Проверить сейчас»",
      "use.title": "Где упрощает день",
      "use.lead":
        "Реальные сценарии в техникуме: утро перед парами, день с заменой, практика и телефон в той же Wi‑Fi.",
      "use.card1.title": "Утро перед парами",
      "use.card1.text":
        "Открыли «Сегодня» — видны номер пары, время, кабинет и преподаватель. Листать неделю можно на одну назад и на одну вперёд.",
      "use.card2.title": "День, когда вышла замена",
      "use.card2.text":
        "Баннер говорит, сколько замен на этот день. После «Заменить расписание» пара остаётся со значком, а строка «Вместо» показывает, что стояло в сетке.",
      "use.card3.title": "Практика",
      "use.card3.text":
        "Если группа на практике, это отдельная карточка со сроком, а не строка, которую надо вычитать из общего листа.",
      "use.card4.title": "Свой телефон в техникуме",
      "use.card4.text":
        "Пока на компьютере открыт «Запуск.bat», телефон в той же сети Wi‑Fi открывает адрес из окна сервера. В настройках есть «На главный экран».",
      "compare.title": "Что уже есть без приложения",
      "compare.lead": "Техникум и так публикует расписание. Приложение не заменяет сайт, а читает те же файлы.",
      "compare.similar.title": "Обычные способы",
      "compare.similar.li1":
        "<strong>xlsx на nhmt.ru</strong> — полное расписание корпуса. На телефоне это широкая таблица всех групп.",
      "compare.similar.li2":
        "<strong>Лист на zamena.nhmt.ru</strong> — замены и практика на дату. Свою строку нужно найти среди остальных.",
      "compare.similar.li3":
        "<strong>Сообщение в группе</strong> — быстро, но легко разойтись с файлом и пропустить пару.",
      "compare.similar.li4":
        "<strong>Свой скачанный xlsx</strong> — работает, если сайт не отдал файл браузеру. В приложении для этого есть «Открыть файл .xlsx».",
      "compare.place.title": "Место этого приложения",
      "compare.place.text":
        "Если нужен не второй просмотр Excel, а <strong>одна группа на один день</strong> — экран собирает сетку, замены и практику вместе.",
      "compare.place.li1": "Корпус 1–2 и корпус 3, группа меняется в настройках",
      "compare.place.li2": "Автообновление при открытии и около 9:00, 12:00, 14:00, 16:00, 18:00",
      "compare.place.li3": "Своя замена: дата, пара, предмет, преподаватель, аудитория",
      "compare.place.li4": "«Начать сначала» стирает группу, расписание и замены только на этом устройстве",
      "start.title": "Как запустить",
      "start.lead":
        "Это локальное приложение. Отдельного установщика нет: на компьютере нужен Python 3 и файл «Запуск.bat» из папки программы.",
      "start.s1.title": "Python 3",
      "start.s1.text": "Если Python не установлен, «Запуск.bat» напишет об этом и остановится.",
      "start.s2.title": "Запуск.bat",
      "start.s2.text": "Откройте папку приложения и запустите этот файл. Окно сервера не закрывайте. Остановка — Ctrl+C.",
      "start.s3.title": "Браузер",
      "start.s3.text": "Страница откроется сама: http://127.0.0.1:4173. Файл index.html напрямую браузер не поднимет как приложение.",
      "start.s4.title": "Корпус и группа",
      "start.s4.text": "Выберите корпус 1–2 или корпус 3 и свою группу. Потом это меняется в «Настройках».",
      "start.s5.title": "Телефон",
      "start.s5.text":
        "Компьютер и телефон в одной сети Wi‑Fi. В окне сервера будет адрес вида http://192.168.x.x:4173. Его открывают в браузере телефона и ставят значок через «На главный экран».",
      "cta.title": "Пары группы на экране телефона",
      "cta.text":
        "Скачайте релиз для Android и выберите группу. Расписание берётся с сайта техникума, копия остаётся на устройстве.",
      "cta.download": "Скачать .apk",
      "cta.site": "Страница расписания",
      "footer.note": "Неофициальное приложение. Расписание и замены читаются с открытых файлов техникума.",
      "footer.releases": "Releases",
      "footer.schedule": "Расписание nhmt.ru",
    },
    en: {
      "meta.title": "NHMT Schedule — your group's day",
      "meta.description":
        "NHMT Schedule shows your group's day: lessons, room, teacher, and substitutions. The copy stays on your device. by St1c1n.",
      "nav.why": "Why",
      "nav.screens": "Screens",
      "nav.better": "Compared",
      "nav.start": "Run",
      "nav.site": "NHMT site",
      "hero.eyebrow": "Campuses 1–2 and 3 · Phone and computer",
      "hero.title": "Your group's schedule — <em>on one screen</em>",
      "hero.lead":
        "The app reads the public files of Novocheboksarsk Chemical-Mechanical College and shows the selected group's day: period, time, subject, room, and teacher. Substitutions from the college site are highlighted on the same card.",
      "hero.download": "Download for Android",
      "hero.screens": "See the screens",
      "hero.meta1": "Version 2.0.0",
      "hero.meta2": "The copy stays on the device",
      "hero.meta3": "Light and dark theme",
      "hero.shotAlt": "A day with three substitutions",
      "why.title": "What it's for",
      "why.lead":
        "The schedule file on the college site is a spreadsheet for the whole campus. This keeps only your group and today's classes.",
      "why.card1.title": "Your group",
      "why.card1.text":
        "Campus 1–2 or campus 3, short name and code. The week moves one back and one ahead. Two subgroups in one cell are shown separately.",
      "why.card2.title": "Substitutions in the day",
      "why.card2.text":
        "The sheet from zamena.nhmt.ru lands on the lesson card: a Substitution badge and an Instead-of line. Practice is separate. You can also add your own change.",
      "why.card3.title": "On this device",
      "why.card3.text":
        "No account. Group, schedule, and changes stay in the browser. With no network, the saved copy is what you see. You'll get a notice when the file on the site changes.",
      "screens.title": "What it looks like",
      "screens.lead": "Four screens from version 2.0.0. The app interface is in Russian.",
      "screens.day.alt": "Saturday, three lessons and no substitutions",
      "screens.day.cap": "The group day: time, subject, room, teacher",
      "screens.today.alt": "Thursday with a substitutions banner",
      "screens.today.cap": "Substitutions are highlighted, including what they replace",
      "screens.settings.alt": "Settings screen",
      "screens.settings.cap": "Theme, auto-update, your own xlsx, and a home-screen icon",
      "screens.setup.alt": "Campus and group picker",
      "screens.setup.cap": "First launch: campus and group",
      "better.title": "Easier than the spreadsheet",
      "better.lead":
        "We compare not “to another college”, but to how people find a lesson now: the xlsx on nhmt.ru and the substitution sheet.",
      "table.h.xlsx": "File on nhmt.ru",
      "table.h.zamena": "Substitution sheet",
      "table.h.app": "NHMT Schedule",
      "table.r1.label": "What opens",
      "table.r1.xlsx": "The whole campus grid",
      "table.r1.zamena": "Every group on one sheet",
      "table.r1.app": "Your group's day",
      "table.r2.label": "Substitutions",
      "table.r2.xlsx": "A separate file",
      "table.r2.zamena": "Find your own row",
      "table.r2.app": "On the lesson card, with an Instead-of line",
      "table.r3.label": "Practice",
      "table.r3.xlsx": "Inside the substitution file",
      "table.r3.zamena": "Among the other rows",
      "table.r3.app": "A banner and its own card",
      "table.r4.label": "Phone",
      "table.r4.xlsx": "A wide spreadsheet",
      "table.r4.zamena": "A wide spreadsheet",
      "table.r4.app": "A day screen and a home-screen icon",
      "table.r5.label": "Offline",
      "table.r5.xlsx": "Download the file first",
      "table.r5.zamena": "Download the file first",
      "table.r5.app": "The saved copy stays on screen",
      "table.r6.label": "Updates",
      "table.r6.xlsx": "Download the xlsx again",
      "table.r6.zamena": "Open the new sheet",
      "table.r6.app": "On open, around the clock times, and with Check now",
      "use.title": "Where the day gets easier",
      "use.lead":
        "Real scenarios at college: the morning before class, a substitution day, practice, and a phone on the same Wi-Fi.",
      "use.card1.title": "Morning before class",
      "use.card1.text":
        "Open Today and you see the period, time, room, and teacher. The week moves one back and one ahead.",
      "use.card2.title": "A day with a substitution",
      "use.card2.text":
        "A banner says how many changes landed on that day. After Apply schedule the lesson keeps its badge, and Instead of shows what the grid had.",
      "use.card3.title": "Practice",
      "use.card3.text":
        "If the group is on practice, that is its own card with the date span, not a row to hunt in the shared sheet.",
      "use.card4.title": "Your phone at college",
      "use.card4.text":
        "While Запуск.bat is open on the computer, a phone on the same Wi-Fi opens the address printed in the server window. Settings includes Add to Home Screen.",
      "compare.title": "What already exists without the app",
      "compare.lead":
        "The college already publishes the schedule. The app doesn't replace the site — it reads the same files.",
      "compare.similar.title": "The usual ways",
      "compare.similar.li1":
        "<strong>The xlsx on nhmt.ru</strong> — the full campus schedule. On a phone that is a wide grid of every group.",
      "compare.similar.li2":
        "<strong>The sheet on zamena.nhmt.ru</strong> — substitutions and practice for a date. You still have to find your row.",
      "compare.similar.li3":
        "<strong>A message in the group chat</strong> — fast, and easy to drift away from the file or miss a lesson.",
      "compare.similar.li4":
        "<strong>Your own downloaded xlsx</strong> — the fallback when the site will not hand the file to the browser. The app has Open .xlsx file for that.",
      "compare.place.title": "Where this app fits",
      "compare.place.text":
        "If you don't need another pass through Excel and want <strong>one group for one day</strong> — the screen puts the grid, substitutions, and practice together.",
      "compare.place.li1": "Campus 1–2 and campus 3. The group can be changed in Settings",
      "compare.place.li2": "Auto-update on open and around 9:00, 12:00, 14:00, 16:00, and 18:00",
      "compare.place.li3": "Your own change: date, period, subject, teacher, room",
      "compare.place.li4": "Start over erases the group, schedule, and changes on this device only",
      "start.title": "How to run",
      "start.lead":
        "This is a local app. There's no installer: the computer needs Python 3 and Запуск.bat from the app folder.",
      "start.s1.title": "Python 3",
      "start.s1.text": "If Python is missing, Запуск.bat says so and stops.",
      "start.s2.title": "Запуск.bat",
      "start.s2.text": "Open the app folder and run that file. Leave the server window open. Stop it with Ctrl+C.",
      "start.s3.title": "Browser",
      "start.s3.text": "The page opens by itself at http://127.0.0.1:4173. Opening index.html directly doesn't start the app.",
      "start.s4.title": "Campus and group",
      "start.s4.text": "Pick campus 1–2 or campus 3 and your group. You can change both later in Settings.",
      "start.s5.title": "Phone",
      "start.s5.text":
        "Keep the computer and the phone on the same Wi-Fi. The server window prints an address like http://192.168.x.x:4173. Open it in the phone browser, then use Add to Home Screen.",
      "cta.title": "The group's lessons on a phone screen",
      "cta.text":
        "Download the Android release and pick your group. The schedule comes from the college site, and the copy stays on the device.",
      "cta.download": "Download .apk",
      "cta.site": "Schedule page",
      "footer.note": "Unofficial app. The schedule and substitutions are read from the college's public files.",
      "footer.releases": "Releases",
      "footer.schedule": "Schedule on nhmt.ru",
    },
  };

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && dict[saved]) return saved;
    } catch (_) {
      /* ignore */
    }
    const nav = (navigator.language || "").toLowerCase();
    return nav.startsWith("ru") ? "ru" : "en";
  }

  function applyLang(lang) {
    const pack = dict[lang] || dict[DEFAULT_LANG];
    document.documentElement.lang = lang;

    const title = pack["meta.title"];
    if (title) document.title = title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc && pack["meta.description"]) {
      desc.setAttribute("content", pack["meta.description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = pack[key];
      if (value == null) return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      const value = pack[key];
      if (value != null) el.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }
  }

  function init() {
    const switcher = document.querySelector("[data-lang-switcher]");
    if (switcher) {
      switcher.addEventListener("click", (event) => {
        const btn = event.target.closest("[data-lang]");
        if (!btn) return;
        applyLang(btn.getAttribute("data-lang"));
      });
    }

    applyLang(detectLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
