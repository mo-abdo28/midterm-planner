# 🗓 Midterm Planner — خطة الميدتيرم

**🌐 Live site (open it on any phone): https://mo-abdo28.github.io/midterm-planner/**

**A single, dependency-free study planner for every Fall 2026 midterm subject at Nile University**
(Calculus II, Database Systems, Data Structures, Probability, Circuits) — **bilingual: العربية / English**.

> 🌐 **Two languages, one click.** The `EN` / `ع` button in the top bar switches the whole app
> (Arabic ⇄ English) — including the layout direction (RTL ⇄ LTR), dates, and every modal.
> On `localhost` it opens in Arabic; on any hosted domain it opens in English.
> You can also force a language with `?lang=ar` or `?lang=en`.

---

## ✨ Features

| Feature | What it does |
|---|---|
| 🌐 **Bilingual AR / EN** | Full UI translation + automatic RTL/LTR flip + locale-aware dates |
| ⏱ **Pomodoro timer** | 25/5 sessions (configurable) + progress ring + session counter + daily stats + 🔥 streak |
| ⏳ **Midterm countdown** | Live **days / hours / minutes** to the nearest exam, with each exam's date & time, refreshed every 30s |
| 🎯 **Focus Mode** | Full-screen focus view: autosaving notes, lecture/Sheet links, and the lecture video (Calc 2 only) |
| 🔥 **Midterm plan** | A **shared** generator that spreads your hours across *all* subjects by exam proximity — not one subject |
| ⚡ **Generate today's plan** | Splits one day across topics: lecture video ← lecture ← Sheet/Lab ← self test |
| 📚 **34 topics** | 5 subjects, subject tabs + "All subjects" filter + search + per-subject progress |
| 🔁 **Review queue** | Spaced review for finished topics that need another pass |
| 💾 **Auto-save** | Everything (plan, topics, hours, streak) lives in `localStorage` |

---

## 📚 Subjects

| Subject | Code | Midterm date | Time | Topics | Video |
|---|---|---|---|---|---|
| Calculus II | MATH 122 | **10 / 11 / 2026** | 10:30 | 8 | ✅ 15 videos |
| Database Systems | CSC 221 | **12 / 11 / 2026** | 10:30 | 8 | ❌ |
| Probability | MATH 202 | **15 / 11 / 2026** | 10:30 | 7 | ❌ |
| Circuits | ECEN 111 | **17 / 11 / 2026** | 10:30 | 4 | ❌ |
| Data Structures | CSC 204 | **19 / 11 / 2026** | 10:30 | 7 | ❌ |

> Dates come from the Nile University midterm schedule (Fall 2026). You can edit **the date and
> time** of every subject from the **⚙ Settings** button.

**Lecture videos exist for Calc 2 only** (the course YouTube playlist). The other subjects have no
lecture-video links — their steps are the lecture itself plus the Sheet/Lab.

---

## 🚀 Running it locally

### Quick way (Windows)
```
افتح-الموقع.bat
```
Starts the local server and opens the planner automatically.

### Manual
```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File server.ps1
```
Then open:
```
http://localhost:8935/Midterm%20Planner/index.html
```

### ⚠️ A server is required — not `file://`
YouTube **refuses** to embed when the page is opened via `file://`. Double-clicking `index.html`
shows a warning banner at the top and the videos will not play — use `افتح-الموقع.bat`.

---

## 📁 Course folders (needed for the links)

Links are **relative** (`../Calc 2/Lectures/...`) so the site stays light and nobody downloads
40 MB from GitHub. The course folders must sit **next to** the planner folder:

```
Sophomore semester1/
├── Midterm Planner/      ← the app (index.html, app.js, styles.css)
├── Calc 2/               ← Lectures/ + Tutorials & Worksheets/
├── Database/             ← Lectures/ + Labs/
├── Data Structrures/     ← Lectrures/ + Labs/
├── Probability/          ← lectures/ + Tutorial/
└── Circuits/             ← Lectures/ + Tutorials/
```

The server serves `Sophomore semester1` as its root so the `../` paths resolve.

> 🔒 **The lecture / Sheet / Lab PDFs are NOT in this repository** — they belong to Nile University
> and are 40+ MB. On the GitHub Pages copy a clear banner explains that the PDF links will 404.

---

## 🧠 How the **midterm plan** works

This is not a one-day plan — it is a plan for **the whole stretch until the last exam**:

1. Per subject, the **core topics** are spread evenly over the days available between today and that exam.
2. Once the core is covered, the **optional topics** enter the plan.
3. If a day goes over the daily cap (3–12 h), the topic **moves to a later day** — it is never dropped.
4. Any topic that still has no room appears in a **"won't be covered"** list so you know before the exam.

Settings: max study hours per day, skip Friday & Saturday, and **🧪 Crush mode** (push every topic
into the last days before the exam).

---

## ⌨️ Keyboard shortcuts

| Key | Action |
|---|---|
| `Space` | Start / pause the timer |
| `R` | Reset the timer |
| `F` | Open Focus Mode |
| `Esc` | Close Focus / modal |
| `←` / `→` | Previous / next video (inside Focus Mode) |

---

## 🗂 Project files

| File | Description |
|---|---|
| `index.html` | Full markup (tabs, timer, cards, modals, focus overlay) |
| `styles.css` | Dark neon / glass theme — the whole CSS (≈30 KB), logical properties only |
| `app.js` | All logic + the AR/EN dictionary: data, state, generators, modals (≈120 KB) |
| `server.ps1` | Tiny ASCII-only PowerShell server serving `Sophomore semester1` on port 8935 |
| `افتح-الموقع.bat` | Shortcut: start the server + open the browser |

---

## 🛠 Tech

- Plain HTML + CSS + JavaScript — **zero dependencies**, zero build step.
- Bilingual by design: one inline `I18N` dictionary (AR + EN), `T('key')` lookups, and a DOM pass
  for the static markup; the whole layout uses CSS logical properties, so RTL ⇄ LTR flips automatically.
- Line endings: CRLF (Windows).
- Fonts: Cairo + JetBrains Mono from Google Fonts (with fallback).
- Storage: `localStorage` under the key `midtermplanner.v1`.

---

## ⚖️ License

The code (HTML/CSS/JS) is for personal study use. Lecture, Sheet and Lab files belong to
Nile University and are not included in this repository.

---

<a name="arabic"></a>

## العربية

**Midterm Planner** — مخطط دراسي واحد بدون أي مكتبات خارجية لكل مواد ترم خريف 2026 في جامعة نايل
(Calculus II, Probability, Circuits, Database Systems, Data Structures).

**المميزات:** تايمر بومودورو مع عدّاد أيام متتالية، Focus Mode بفيديوهات المحاضرة (Calc 2 بس)،
مولّد **خطة ميدتيرم مشتركة** بيوزّع ساعاتك على كل المواد حسب قرب كل امتحان، مولّد خطة يومية،
34 توبيك مع شريط تقدّم لكل مادة، قائمة مراجعة متباعدة، وحفظ كامل في `localStorage`.

**ثنائي اللغة:** زرار `EN` / `ع` فوق بيبدّل الموقع كله بين العربية والإنجليزي (مع قلب الاتجاه
RTL ⇄ LTR والتواريخ). على `localhost` بيفتح عربي، وعلى أي دومين مستضاف بيفتح إنجليزي.

**التشغيل:** `افتح-الموقع.bat` (ويندوز) — بيشغّل سيرفر محلي على بورت `8935` ويفتح الموقع.
سيرفر محلي ضروري لأن يوتيوب رافض الـembed على `file://`.

**🌐 النسخة المنشورة (تفتح من أي موبايل): https://mo-abdo28.github.io/midterm-planner/**
— بتفتح إنجليزي افتراضيًا، وفيه زرار `ع` فوق للرجوع العربي.

**ملفات المحاضرات مش مرفوعة:** PDFs بتفضل على جهازك (حقوق جامعة نايل + حجم 40+ ميجا)، والروابط
نسبية، فلازم فولدرات الكورسات (`Calc 2`, `Database`, `Data Structrures`, `Probability`, `Circuits`)
 تكون جنب فولدر الموقع. لما الموقع يتفتح من GitHub Pages هتلاقي تحذير واضح إن روابط الـPDF هترجع 404.

**الخصوصية:** مفيش حساب، مفيش سيرفر، مفيش تتبع — كل حاجة في المتصفح بتاعك.
