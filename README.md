# 🧮 Midterm Planner — خطة ميدتيرم لكل المواد

> بلانر واحد بيوزّع وقت المذاكرة على **كل مواد الترم الثاني** حسب قرب كل امتحان.
> Vanilla HTML/CSS/JS — بدون build، بدون سيرفر، بدون تسجيل دخول.

[English version](#english)

---

## 🎯 إيه اللي بيعمله الموقع

| الميزة | الوصف |
|---|---|
| ⏱ **تايمر بومودورو** | جلسات 25/5 (قابلة للتغيير) + حلقة تقدّم + عدّاد جلسات + إحصائيات يومية + 🔥 Streak |
| 🎯 **Focus Mode** | شاشة تركيز كاملة: ملاحظات بتتحفظ، روابط المحاضرة/Sheet، وفيديو الشرح (Calc 2 بس) |
| 🔥 **خطة الميدتيرم** | مولّد خطة **مشترك** بيوزّع ساعاتك على كل المواد حسب قرب كل امتحان — مش مادة واحدة |
| ⚡ **ولّد خطة** | بيقسّم يوم واحد على التوبيكس: فيديو شرح ← محاضرة ← Sheet/Lab ← اختبار ذاتي |
| 📚 **34 توبيك** | 5 مواد، تابات + فلتر "كل المواد" + بحث + شريط تقدّم لكل مادة |
| 🔁 **قائمة المراجعة** | Spaced Review للتوبيكس اللي خلصتها ومحتاجة تكرار |
| 💾 **حفظ تلقائي** | كل حاجة (الخطة، التوبيكسات، الساعات، الـstreak) في `localStorage` |

---

## 📚 المواد Covered

| المادة | الكود | تاريخ الميدتيرم | توبيكس | فيديو |
|---|---|---|---|---|
| Calculus II | MTH 112 | **12 / 11 / 2026** | 8 | ✅ 15 فيديو |
| Probability | MATH 202 | **15 / 11 / 2026** | 7 | ❌ |
| Circuits | ECEN 111 | **17 / 11 / 2026** | 4 | ❌ |
| Database Systems | CSCI 305 | **18 / 11 / 2026** | 8 | ❌ |
| Data Structures | CSC 204 | **19 / 11 / 2026** | 7 | ❌ |

> التواريخ دي من جدول ميدتيرم جامعة نايل — Fall 2026. تقدر تعدّلها من زر **⚙ الإعدادات**.

**فيديوهات الشرح موجودة لـ Calc 2 بس** (playlist يوتيوب الكورس). باقي المواد مفيهاش لينك شرح — خطوات الشغل فيها هي المحاضرة والـSheet/الـLab.

---

## 🚀 التشغيل (محلي)

### الطريقة السريعة (Windows)
```
افتح-الموقع.bat
```
بيشغّل سيرفر محلي وبيفتح الموقع أوتوماتيك.

### الطريقة اليدوية
```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File server.ps1
```
ثم افتح:
```
http://localhost:8935/Midterm%20Planner/index.html
```

### ⚠️ لازم سيرفر — مش `file://`
يوتيوب **رافض** الـembed لما الصفحة تفتح بـ`file://`. لما تفتح `index.html` مباشرة بالم double-click هتشوف تحذير في أول الصفحة، والفيديوهات مش هتشتغل. استخدم `افتح-الموقع.bat`.

---

## 📁 فولدرات الكورسات (مهمة للروابط)

الروابط **نسبية** (`../Calc 2/Lectures/...`) عشان الموقع يفضل خفيف ومحدش ينزّل 40 ميجا على GitHub.
لازم فولدرات الكورسات تكون **جنب** فولدر الموقع بالشكل ده:

```
Sophomore semester1/
├── Midterm Planner/      ← الموقع (index.html, app.js, styles.css)
├── Calc 2/               ← Lectures/ + Tutorials & Worksheets/
├── Database/             ← Lectures/ + Labs/
├── Data Structrures/     ← Lectrures/ + Labs/
├── Probability/          ← lectures/ + Tutorial/
└── Circuits/             ← Lectures/ + Tutorials/
```

السيرفر بيخدم فولدر `Sophomore semester1` كـroot عشان الـ`../` يشتغل.

> 🔒 **ملفات الـPDF (محاضرات / Sheets / Labs) مش مرفوعة في المستودع** — حقوقها لـ Nile University وحجمها 40+ ميجا.
> على نسخة GitHub هتلاقي تحذير واضح في أول الصفحة يقولك إن روابط الـPDF مش هتفتح.

---

## 🧠 كيف بيشتغل **خطة الميدتيرم**؟

دي مش خطة ليوم واحد — دي خطة **الفترة كلها** لحد آخر امتحان:

1. لكل مادة: **التوبيكس الأساسية** (core) بتتوزّع بالتساوي على الأيام المتاحة بين النهارده ويوم الامتحان.
2. بعد ما الأساسيات تتغطى، **التوبيكس الاختيارية** (optional) تدخل.
3. لو يوم عدّى السقف اليومي (3–12 ساعة) — التوبيك **يتأجل** ليوم بعده، مش بيتشال.
4. أي توبيك مالوش مكان في الوقت المتاح بيظهر في قائمة **"مش هيتغطى"** عشان تعرفه قبل الامتحان.

الإعدادات: أقصى ساعات مذاكرة في اليوم، استثناء الجمعة والسبت، **🧪 وضع الـCrush** (ضغط كل التوبيكس في آخر الأيام قبل الامتحان).

---

## ⌨️ اختصارات الكيبورد

| المفتاح | الوظيفة |
|---|---|
| `Space` | تشغيل / إيقاف التايمر |
| `R` | إعادة التايمر |
| `F` | فتح Focus Mode |
| `Esc` | إغلاق الـFocus / المودال |
| `←` / `→` | تبديل الفيديو (جوّه Focus Mode) |

---

## 🗂 ملفات المشروع

| الملف | الوصف |
|---|---|
| `index.html` | الهيكل كامل (تابات، تايمر، كروت، مودالز، Focus overlay) |
| `styles.css` | الدارك نيون/جلاس — كل الـCSS (≈28 KB) |
| `app.js` | كل الـlogic: البيانات، الـstate، المولّدات، الـmodals (≈88 KB) |
| `server.ps1` | سيرفر PowerShell بسيط (ASCII-only) بيخدم فولدر `Sophomore semester1` على بورت 8935 |
| `افتح-الموقع.bat` | اختصار تشغيل السيرفر + فتح المتصفح |

---

## 🛠 Tech

- HTML + CSS + JavaScript خالص — **صفر dependencies**، صفر build step.
- RTL كامل (`dir="rtl"`, `lang="ar"`).
- Line endings: CRLF (Windows).
- الخطوط: Cairo + JetBrains Mono من Google Fonts (مع fallback).
- التخزين: `localStorage` بمفتاح `midtermplanner.v1`.

---

## ⚖️ License

الكود (HTML/CSS/JS) — للاستخدام الشخصي والدراسة. ملفات المحاضرات والـSheets والـLabs مملوكة لـ
Nile University وغير مرفوعة في هذا المستودع.

---

<a name="english"></a>

## English

**Midterm Planner** — a single, dependency-free study planner for all Fall 2026 midterm subjects
at Nile University (Calculus II, Probability, Circuits, Database Systems, Data Structures).

**Features:** Pomodoro timer with streak tracking, Focus Mode with embedded YouTube lecture
videos (Calculus II only), a shared midterm plan generator that distributes study hours across
all subjects based on exam proximity, a per-day plan generator, 34 topics with per-subject
progress, spaced-review queue, and full `localStorage` persistence.

**Run it:** `افتح-الموقع.bat` (Windows) — it starts a local PowerShell server on port `8935`
and opens the planner. A local server is required because YouTube refuses to embed on `file://`.

**Course files are not included:** lecture/Sheet/Lab PDFs stay on your machine because of
copyright and size. The app links to them with relative paths, so place the course folders
(`Calc 2`, `Database`, `Data Structrures`, `Probability`, `Circuits`) next to the planner
folder. When the app is served from GitHub Pages, a banner explains that PDF links will 404.

**Privacy:** no account, no backend, no tracking — everything lives in your browser.

MIT-style personal-use license for the code. Course materials belong to Nile University.
