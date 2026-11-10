# Расписание НХМТ — Website

Official landing page for **Расписание НХМТ** — a local schedule for Новочебоксарский химико-механический техникум.

**by St1c1n**

## Links

| | URL |
|---|-----|
| 🌐 **Website** | https://st1c1nofficial.github.io/NHMT24_site/ |
| 📦 Website repository | https://github.com/St1c1nOfficial/NHMT24_site |
| 💻 App source code | https://github.com/St1c1nOfficial/NHMT24 |
| ⬇️ Download `.apk` | https://github.com/St1c1nOfficial/NHMT24/releases |
| 📄 College schedule | https://nhmt.ru/student/raspisanie-zanyatiy/ |

> GitHub account: **[St1c1nOfficial](https://github.com/St1c1nOfficial)**  
> Brand / author: **St1c1n**

## About the app

Расписание НХМТ shows one group's day: pair, time, subject, room, and teacher. Replacements from the college site sit on the same card. This is not an official college client.

- Android `.apk`, version 2.0.0
- Campuses 1–2 and 3
- Replacements, practice, light and dark theme
- Data stays on the device

## Repository structure

```
├── index.html      # Main page
├── styles.css      # Styles
├── i18n.js         # RU/EN language switcher
├── assets/         # Logo and screenshots
│   ├── logo.png
│   ├── logo-source.png
│   ├── day.png
│   ├── today.png
│   ├── settings.png
│   └── setup.png
└── README.md
```

`assets/logo-source.png` is the original 1890×1890 mark. The page uses `logo.png`.

## Local preview

Open `index.html` in a browser or start a simple server:

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

Then open: http://localhost:8080

## GitHub Pages

Pages are already enabled.

- **Branch:** `main`
- **Folder:** `/ (root)`
- **URL:** https://st1c1nofficial.github.io/NHMT24_site/

If the site has not updated yet — wait 1–2 minutes or hard-refresh with Ctrl+F5.

## License

Website content is for the Расписание НХМТ project.  
App license: see the [license in the main repository](https://github.com/St1c1nOfficial/NHMT24).
