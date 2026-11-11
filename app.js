/* ============================================================
   MIDTERM PLANNER · خطة ميدتيرم لكل المواد
   app logic — multi-subject
   ============================================================ */
'use strict';
/* ============================================================
   0) i18n - AR / EN
   ============================================================ */
const I18N = {
  ar: {
    k239:'المهمة الحالية: ',
    k238:'مسح خطة اليوم؟',
    k237:'جنب فولدر الموقع وشغّل <b>افتح-الموقع.bat</b> عشان كل الروابط تشتغل.',
    k236:' فالروابط هترجع 404. نزّل مجلدات الكورسات (Calc 2 / Database / Data Structrures / Probability / Circuits) ',
    k235:'ℹ️ نسخة GitHub: ملفات المحاضرات والـSheets والـLabs (PDF) <b>مش مرفوعة</b> في المستودع، ',
    k234:'والفيديوهات هتشتغل، والروابط هتفتح عادي.',
    k233:'افتح الموقع من ملف <b>افتح-الموقع.bat</b> في نفس الفولدر (أو من http://localhost) — ',
    k232:'⚠️ فتحت الملف مباشرة، فمش هتشتغل فيديوهات يوتيوب جوّه الصفحة. ',
    k231:'↗ افتح البلاي ليست',
    k230:'↗ افتح على يوتيوب',
    k229:'ركّز وامشي مع الخطة',
    k228:'افتح المحاضرة من اللينك تحت 👇',
    k227:'جلسة تركيز',
    k226:'<div class="video-placeholder"><div class="vp-ico">▶</div><p>مفيش فيديو متحدّد</p></div>',
    k225:'جلسة تركيز',
    k224:'جلسة عامة',
    k223:'☕ خلص البريك — يلا نرجع نشتغل',
    k222:' د) — برااايك! ☕',
    k221:'✅ خلصت جلسة تركيز (',
    k220:'Midterm Planner · خطة الميدتيرم',
    k219:'مفيش مهمة شغالة',
    k218:'جلسة ',
    k217:'بريك طويل',
    k216:'بريك قصير',
    k215:'تركيز',
    k214:'تم المسح',
    k213:'متأكد؟ هيمسح كل التقدّم والخطة.',
    k212:'ملف غير صالح',
    k211:'تم الاستيراد',
    k210:'تم حفظ الإعدادات',
    k208:'⚙ الإعدادات',
    k207:'تم حفظ البلاي ليست',
    k205:'▶ بلاي ليست يوتيوب — Calculus 2',
    k203:'تم الحفظ',
    k202:'تمت إضافة الفيديو',
    k201:'لينك يوتيوب غير صحيح',
    k199:'<div class="hint">مفيش توبيكس في قائمة المراجعة. لو محتاج حاجة تُعاد، افتح التوبك واختار حالة "محتاج مراجعة".</div>',
    k198:'لا يوجد فيديو',
    k197:' فيديو',
    k196:'<span class="vid-count">🎬 الفيديو هو المصدر (مفيش PDF محلي)</span>',
    k195:'محتاج مراجعة',
    k194:'خلص ✅',
    k193:'شغّال',
    k192:'لسه مبدأتش',
    k191:'📚 التوبيكس — ',
    k190:'📚 كل المواد',
    k189:'تم الحفظ',
    k188:'مهمة',
    k186:'✎ تعديل المهمة',
    k185:'＋ مهمة جديدة',
    k184:'<option value="">— بدون توبيك —</option>',
    k183:' يوم لكل المواد 🔥',
    k182:'تم توليد خطة ',
    k180:'🔥 خطة الميدتيرم — كل المواد',
    k178:' يوم',
    k177:'باقي ',
    k176:'باقي ',
    k175:'امتحن ✅',
    k174:'<div class="hint">مفيش أيام متبقية (أو التواريخ عدّت). حدّث مواعيد الميدتيرم من الإعدادات.</div>',
    k173:'🔥 خطة الميدتيرم',
    k172:'راجع ورقة الملخص بس ونام بدري.',
    k171:'🌙 مراجعة خفيفة قبل النوم',
    k170:'ركّز على الأخطاء اللي وقعت فيها، مش على الجديد.',
    k169:'🎯 مراجعة نهائية: ملخص + 30 سؤال من كل الـSheets',
    k168:'بعدها رجوع بالتركيز.',
    k167:'🍽️ غدا — كلّي وامشي شوية',
    k166:'الهدف: ',
    k165:'أولوية أخيرة — لو الوقت سمح. ',
    k164:'قوم اتمشّى، اشرب مية، بُص بعيد عن الشاشة.',
    k163:'☕ بريك',
    k162:'☕ بريك طويل',
    k161:' جلسة',
    k160:'تم توليد خطة: ',
    k159:'اشرب مية، قوم اتمشّى، بُص بعيد عن الشاشة.',
    k158:'☕ بريك قصير',
    k157:'☕ بريك طويل',
    k156:'الهدف: ',
    k154:'⚡ توليد خطة اليوم',
    k153:'<option value="urgent">الأقرب ميدتيرم الأول</option>',
    k152:'<option value="review">المراجعة أولاً</option>',
    k151:'<option value="weak">الأضعف الأول (اللي فاضل)</option>',
    k150:'<option value="seq">التسلسل العادي</option>',
    k149:'<button class="mini-btn" data-act="del" title="مسح">🗑</button>',
    k148:'<button class="mini-btn" data-act="edit" title="تعديل">✎</button>',
    k147:'" data-act="toggle" title="خلصت">✓</button>',
    k146:'مهمة عامة',
    k145:' د',
    k144:' مهمة · ',
    k143:' يوم',
    k142:'امتحن',
    k141:'ميدتيرم',
    k140:'\u0623\u0642\u0631\u0628 \u0645\u064A\u062F\u062A\u064A\u0631\u0645',
    k139:' د',
    k138:'\u064A',
    k137:'\u0627\u0644\u064A\u0648\u0645',
    k136:'\u062F',
    k135:'\u0633',
    k134:'\u0633',
    k133:'\u064A ',
    k132:'\u0627\u0645\u062A\u062D\u0646',
    k131:'\u062F',
    k130:'\u0633',
    k129:'\u064A',
    k128:'\u0627\u0645\u062A\u062D\u0646',
    k127:'السبت',
    k126:'الجمعة',
    k125:'الخميس',
    k124:'الأربعاء',
    k123:'الثلاثاء',
    k122:'الإثنين',
    k121:'الأحد',
    k120:'خلي عينك على الهدف: الدرجات هي اللي بتفرق.',
    k119:'الفرق بين ٩٠٪ و١٠٠٪ هو الراحة الصح في الوقت الصح.',
    k118:'امتحن نفسك في كل مادة — المذاكرة مش بتبقى مذاكرة لحد ما تختبر.',
    k117:'لو مفيش وقت، اعمل بومودورو واحد بس — المهم تبتدي.',
    k116:'الـSheet هو اللي بيخليك تجيب صح في الامتحان.',
    k115:'سؤال واحد صعب النهارده أحسن من عشرة أسئلة سهلة بكره.',
    k114:'خد 5 دقايق بريك، مخك بيحتاجها أكتر منك.',
    k113:'مفيش عبقري، فيه بس حد اتعلم صبر.',
    k112:'اللي فاهمه دلوقتي أحسن من اللي حفظته امبارح.',
    k111:'كل سطر بتكتبه بيم الساعة — أحسن من ساعتين مذاكرة وبلا فايدة.',
    k110:'مهمة',
    k109:'اختبار ذاتي',
    k108:'المحاضرة',
    k107:'فيديو الشرح',
    k106:'اختبار ذاتي',
    k105:'المحاضرة',
    k104:'نظريات الدوائر (Chapter 4)',
    k103:'اختبار ذاتي',
    k102:'المحاضرة',
    k101:'تحليل العقد والشبكات (Chapter 3)',
    k100:'اختبار ذاتي',
    k99:'المحاضرة',
    k98:'قانون أوم وقوانين كيرشوف والتبسيط',
    k97:'اختبار ذاتي',
    k96:'المحاضرة',
    k95:'عناصر الدائرة: شحنة وتيار وجهود وطاقة',
    k94:'اختبار ذاتي',
    k93:'المحاضرة',
    k92:'توزيع poisson وتطبيقات',
    k91:'اختبار ذاتي',
    k90:'المحاضرة',
    k89:'دالةMoment Generating والتوزيعات المتقطعة',
    k88:'اختبار ذاتي',
    k87:'المحاضرة',
    k86:'المتغيرات العشوائية والتوقع والتباين',
    k85:'اختبار ذاتي',
    k84:'المحاضرة',
    k83:'الاستقلال واحتمال الإجمالي وbayes',
    k82:'اختبار ذاتي',
    k81:'المحاضرة',
    k80:'الاحتمال الشرطي',
    k79:'اختبار ذاتي',
    k78:'المحاضرة',
    k77:'احتمال الحدث وقوانين الاحتمال',
    k76:'اختبار ذاتي',
    k75:'المحاضرة',
    k74:'فضاء العينة والأحداث وقواعد العد',
    k73:'اختبار ذاتي',
    k72:'المحاضرة',
    k71:'الطوابير والطوابير الدائرية',
    k70:'اختبار ذاتي',
    k69:'المحاضرة',
    k68:'المكدسات: LIFO والتطبيقات',
    k67:'اختبار ذاتي',
    k66:'المحاضرة',
    k65:'القوائم المرتبطة المزدوجة والدائرية',
    k64:'اختبار ذاتي',
    k63:'المحاضرة',
    k62:'القوائم المرتبطة الأحادية',
    k61:'اختبار ذاتي',
    k60:'المحاضرة',
    k59:'مراجعة OOP و C++ (الجزء الثاني)',
    k58:'اختبار ذاتي',
    k57:'المحاضرة',
    k56:'مراجعة OOP و C++ (الجزء الأول)',
    k55:'اختبار ذاتي',
    k54:'المحاضرة',
    k53:'نظرة عامة: الخوارزميات مقابل هياكل البيانات',
    k52:'اختبار ذاتي',
    k51:'المحاضرة',
    k50:'إدخال وتعديل واستعلام البيانات',
    k49:'اختبار ذاتي',
    k48:'المحاضرة',
    k47:'أساسيات SQL وتعريف الجداول والقيود',
    k46:'اختبار ذاتي',
    k45:'المحاضرة',
    k44:'الجبر العلائقي والعمليات والـjoins',
    k43:'اختبار ذاتي',
    k42:'المحاضرة',
    k41:'تحويل ER/EER لجداول علائقية (١٠ حالات)',
    k40:'اختبار ذاتي',
    k39:'المحاضرة',
    k38:'التصميم المنطقي والنموذج العلائقي',
    k37:'اختبار ذاتي',
    k36:'المحاضرة',
    k35:'النموذج المحسّن EER والقيود',
    k34:'اختبار ذاتي',
    k33:'المحاضرة',
    k32:'نموذج الكيانات والعلاقات ER',
    k31:'اختبار ذاتي',
    k30:'المحاضرة',
    k29:'بيئة قاعدة البيانات وخريطة الكورس',
    k28:'اختبار ذاتي',
    k27:'فيديو الشرح',
    k26:'تطبيقات التكامل المحدود (طول القوس ومساحة السطح)',
    k25:'اختبار ذاتي',
    k24:'فيديو الشرح',
    k23:'التكاملات غير المحدودة',
    k22:'اختبار ذاتي',
    k21:'فيديو الشرح',
    k20:'التكامل العددي (ترابيزول + سيمبسون)',
    k19:'اختبار ذاتي',
    k18:'المحاضرة',
    k17:'فيديو الشرح',
    k16:'الكسور الجزئية',
    k15:'اختبار ذاتي',
    k14:'المحاضرة',
    k13:'فيديو الشرح',
    k12:'التكاملات المثلثية والتعويض المثلثي',
    k11:'اختبار ذاتي',
    k10:'المحاضرة',
    k9:'التكامل بالجزء وصيغة الاختزال',
    k8:'اختبار ذاتي',
    k7:'المحاضرة',
    k6:'فيديو الشرح',
    k5:'التعويض وإكمال المربع',
    k4:'اختبار ذاتي',
    k3:'المحاضرة',
    k2:'فيديو الشرح',
    k1:'المراجعة والتكامل غير المحدد',
    h34:"📚 التوبيكس",
    h8:"⚠️ فتحت الموقع بـ",
    h27:"⚡ ولّد خطة",
    a5:"التوبيكس اللي خلصتها",
    a10:"إعادة (R)",
    a12:"ملاحظات",
    h2:"خطة ميدتيرم لكل المواد",
    h32:"عشان يوزّع الساعات على كل المواد حسب قرب كل امتحان.",
    h28:"＋ مهمة",
    h31:"و هو يقسّم يومك على التوبيكس (فيديو شرح ← محاضرة ← Sheet/Lab) في جلسات 25 دقيقة مع استراحات — أو",
    a1:"اليوم السابق",
    h15:"مفيش مهمة شغالة",
    h1:"Midterm Planner · خطة الميدتيرم لكل المواد",
    h9:"— الفيديوهات مش هتشتغل. شغّل",
    h10:"افتح-الموقع.bat",
    h33:"لسه مفيش خطة لليوم ده.",
    h22:"مهمة خلصتها",
    a11:"تخطي (Session)",
    h24:"🗓 خطة اليوم",
    a14:"الفيديو السابق",
    h25:"0 مهمة · 0 د",
    h35:"اضغط على الكارت عشان تفتح",
    a7:"البلاي ليست",
    h38:"مفيش فيديو متحدّد",
    h4:"/ 240 د",
    h14:"تركيز",
    h23:"ساعة مخططة",
    a4:"أيام متتالية",
    h16:"ساعات التركيز النهارده",
    h20:"📊 إحصائيات اليوم",
    a15:"الفيديو التالي",
    h21:"جلسة pomodoro",
    h37:"جلسة تركيز",
    h6:"توبيكس",
    h41:"↗ افتح على يوتيوب",
    a3:"ساعات التركيز النهارده",
    h11:"بدل كده.",
    h40:"📄 المحاضرة",
    h17:"د",
    h29:"مسح",
    h39:"اختار فيديو من التوبيك أو افتح البلاي ليست",
    h7:"للميدتيرم",
    h19:"⏳ الميدتيرمات",
    a13:"خروج (Esc)",
    h26:"🔥 خطة الميدتيرم",
    h3:"النهارده",
    a9:"تشغيل / إيقاف (Space)",
    h36:"🔁 قائمة المراجعة (Spaced Review)",
    h5:"يوم متتالي",
    a8:"الإعدادات",
    a16:"اكتب ملاحظاتك على التوبيك ده… (بتتحفظ لوحدها)",
    a2:"اليوم التالي",
    h12:"⏱ تايمر بومودورو",
    h18:"دقيقة تركيز",
    a6:"أقرب ميدتيرم",
    h30:"اضغط",
    h13:"جلسة 0"
  },
  en: {
    k239:"Current task: ",
    k238:"Clear today\u0027s plan?",
    k237:"next to the site folder and run \u003cb\u003eافتح-الموقع.bat\u003c/b\u003e so every link works.",
    k236:" so the links will 404. Download the course folders (Calc 2 / Database / Data Structrures / Probability / Circuits) ",
    k235:"ℹ️ GitHub version: the lecture, Sheet and Lab files (PDF) are \u003cb\u003enot included\u003c/b\u003e in the repo, ",
    k234:"and the videos will play and the links will work.",
    k233:"Open the site from \u003cb\u003eافتح-الموقع.bat\u003c/b\u003e in the same folder (or from http://localhost) — ",
    k232:"⚠️ You opened the file directly, so YouTube videos won\u0027t play inside the page. ",
    k231:"↗ Open the playlist",
    k230:"↗ Open on YouTube",
    k229:"Focus and follow the plan",
    k228:"Open the lecture from the link below 👇",
    k227:"Focus session",
    k226:"\u003cdiv class=\"video-placeholder\"\u003e\u003cdiv class=\"vp-ico\"\u003e▶\u003c/div\u003e\u003cp\u003eNo video selected\u003c/p\u003e\u003c/div\u003e",
    k225:"Focus session",
    k224:"General session",
    k223:"☕ Break over — back to work",
    k222:" m) — take a break! ☕",
    k221:"✅ Focus session done (",
    k220:"Midterm Planner · Midterm plan",
    k219:"No active task",
    k218:" session ",
    k217:"Long break",
    k216:"Short break",
    k215:"Focus",
    k214:"Cleared",
    k213:"Are you sure? This clears all progress and the plan.",
    k212:"Invalid file",
    k211:"Imported",
    k210:"Settings saved",
    k208:"⚙ Settings",
    k207:"Playlist saved",
    k205:"▶ YouTube playlist — Calculus 2",
    k203:"Saved",
    k202:"Video added",
    k201:"Invalid YouTube link",
    k199:"\u003cdiv class=\"hint\"\u003eNothing in the review queue. To repeat something, open the topic and set its status to \"Needs review\".\u003c/div\u003e",
    k198:"No video",
    k197:" videos",
    k196:"\u003cspan class=\"vid-count\"\u003e🎬 The video is the source (no local PDF)\u003c/span\u003e",
    k195:"Needs review",
    k194:"Done ✅",
    k193:"In progress",
    k192:"Not started",
    k191:"📚 Topics — ",
    k190:"📚 All subjects",
    k189:"Saved",
    k188:"Task",
    k186:"✎ Edit task",
    k185:"＋ New task",
    k184:"\u003coption value=\"\"\u003e— No topic —\u003c/option\u003e",
    k183:" days, all subjects 🔥",
    k182:"Plan generated for ",
    k180:"🔥 Midterm plan — all subjects",
    k178:" days",
    k177:"Left: ",
    k176:"Left: ",
    k175:"Exam done ✅",
    k174:"\u003cdiv class=\"hint\"\u003eNo days left (or the dates already passed). Update the exam dates in Settings.\u003c/div\u003e",
    k173:"🔥 Midterm plan",
    k172:"Review the summary sheet only and sleep early.",
    k171:"🌙 Light review before bed",
    k170:"Focus on the mistakes you made, not on the new material.",
    k169:"🎯 Final review: summary sheet + 30 questions from each Sheet",
    k168:"Then back to full focus.",
    k167:"🍽️ Tomorrow — finish it up and take a walk",
    k166:"Goal: ",
    k165:"Last priority — if time allows. ",
    k164:"Walk around, drink some water, look away from the screen.",
    k163:"☕ Break",
    k162:"☕ Long break",
    k161:" sessions",
    k160:"Plan generated: ",
    k159:"Drink some water, walk a bit, look away from the screen.",
    k158:"☕ Short break",
    k157:"☕ Long break",
    k156:"Goal: ",
    k154:"⚡ Generate today\u0027s plan",
    k153:"\u003coption value=\"urgent\"\u003eNearest exam first\u003c/option\u003e",
    k152:"\u003coption value=\"review\"\u003eReview first\u003c/option\u003e",
    k151:"\u003coption value=\"weak\"\u003eWeakest first (what\u0027s left)\u003c/option\u003e",
    k150:"\u003coption value=\"seq\"\u003eNormal order\u003c/option\u003e",
    k149:"\u003cbutton class=\"mini-btn\" data-act=\"del\" title=\"Delete\"\u003e🗑\u003c/button\u003e",
    k148:"\u003cbutton class=\"mini-btn\" data-act=\"edit\" title=\"Edit\"\u003e✎\u003c/button\u003e",
    k147:"\" data-act=\"toggle\" title=\"Done\"\u003e✓\u003c/button\u003e",
    k146:"General task",
    k145:" m",
    k144:" tasks · ",
    k143:" day",
    k142:"Passed",
    k141:"midterm",
    k140:"Nearest midterm",
    k139:" m",
    k138:"d",
    k137:"Today",
    k136:"m",
    k135:"h",
    k134:"h",
    k133:"d ",
    k132:"Passed",
    k131:"m",
    k130:"h",
    k129:"d",
    k128:"Passed",
    k127:"Saturday",
    k126:"Friday",
    k125:"Thursday",
    k124:"Wednesday",
    k123:"Tuesday",
    k122:"Monday",
    k121:"Sunday",
    k120:"Keep your eyes on the prize: grades are what make the difference.",
    k119:"The gap between 90% and 100% is resting at the right time.",
    k118:"Test yourself in every subject — study isn\u0027t study until you test.",
    k117:"No time? Do a single Pomodoro — the important part is starting.",
    k116:"The Sheet is what gets you the right answer in the exam.",
    k115:"One hard question today beats ten easy ones tomorrow.",
    k114:"Take a 5-minute break — your brain needs it more than you do.",
    k113:"No genius, just someone who learned patience.",
    k112:"What you understand now beats what you memorised yesterday.",
    k111:"Every line you write costs an hour — better than two hours of study with nothing to show.",
    k110:"Task",
    k109:"Self test",
    k108:"Lecture",
    k107:"Lecture video",
    k106:"Self test",
    k105:"Lecture",
    k104:"Circuit theorems (Chapter 4)",
    k103:"Self test",
    k102:"Lecture",
    k101:"Nodal \u0026 mesh analysis (Chapter 3)",
    k100:"Self test",
    k99:"Lecture",
    k98:"Ohm\u0027s law, Kirchhoff\u0027s laws \u0026 simplification",
    k97:"Self test",
    k96:"Lecture",
    k95:"Circuit elements: charge, current, voltage \u0026 power",
    k94:"Self test",
    k93:"Lecture",
    k92:"Poisson distribution \u0026 applications",
    k91:"Self test",
    k90:"Lecture",
    k89:"Moment generating function \u0026 discrete distributions",
    k88:"Self test",
    k87:"Lecture",
    k86:"Random variables, expectation \u0026 variance",
    k85:"Self test",
    k84:"Lecture",
    k83:"Independence, total probability \u0026 Bayes",
    k82:"Self test",
    k81:"Lecture",
    k80:"Conditional probability",
    k79:"Self test",
    k78:"Lecture",
    k77:"Probability of events \u0026 probability laws",
    k76:"Self test",
    k75:"Lecture",
    k74:"Sample space, events \u0026 counting rules",
    k73:"Self test",
    k72:"Lecture",
    k71:"Queues \u0026 circular queues",
    k70:"Self test",
    k69:"Lecture",
    k68:"Stacks: LIFO \u0026 applications",
    k67:"Self test",
    k66:"Lecture",
    k65:"Doubly \u0026 circular linked lists",
    k64:"Self test",
    k63:"Lecture",
    k62:"Singly linked lists",
    k61:"Self test",
    k60:"Lecture",
    k59:"OOP \u0026 C++ recap (part 2)",
    k58:"Self test",
    k57:"Lecture",
    k56:"OOP \u0026 C++ recap (part 1)",
    k55:"Self test",
    k54:"Lecture",
    k53:"Overview: algorithms vs data structures",
    k52:"Self test",
    k51:"Lecture",
    k50:"Inserting, updating \u0026 querying data",
    k49:"Self test",
    k48:"Lecture",
    k47:"SQL basics, table definition \u0026 constraints",
    k46:"Self test",
    k45:"Lecture",
    k44:"Relational algebra, operations \u0026 joins",
    k43:"Self test",
    k42:"Lecture",
    k41:"ER/EER to relational tables (10 cases)",
    k40:"Self test",
    k39:"Lecture",
    k38:"Logical design \u0026 relational model",
    k37:"Self test",
    k36:"Lecture",
    k35:"Enhanced ER (EER) \u0026 constraints",
    k34:"Self test",
    k33:"Lecture",
    k32:"ER model (entities \u0026 relationships)",
    k31:"Self test",
    k30:"Lecture",
    k29:"Database environment \u0026 course map",
    k28:"Self test",
    k27:"Lecture video",
    k26:"Definite integral applications (arc length \u0026 surface area)",
    k25:"Self test",
    k24:"Lecture video",
    k23:"Improper integrals",
    k22:"Self test",
    k21:"Lecture video",
    k20:"Numerical integration (trapezoid + Simpson)",
    k19:"Self test",
    k18:"Lecture",
    k17:"Lecture video",
    k16:"Partial fractions",
    k15:"Self test",
    k14:"Lecture",
    k13:"Lecture video",
    k12:"Trigonometric integrals \u0026 trig substitution",
    k11:"Self test",
    k10:"Lecture",
    k9:"Integration by parts \u0026 reduction formula",
    k8:"Self test",
    k7:"Lecture",
    k6:"Lecture video",
    k5:"Substitution \u0026 completing the square",
    k4:"Self test",
    k3:"Lecture",
    k2:"Lecture video",
    k1:"Revision \u0026 indefinite integrals",
    h34:"📚 Topics",
    h8:"⚠️ You opened the site with",
    h27:"⚡ Generate plan",
    a5:"topics done",
    a10:"Reset (R)",
    a12:"Notes",
    h2:"Midterm plan for all subjects",
    h32:"to spread your hours across all subjects by exam proximity.",
    h28:"＋ Task",
    h31:"and it splits your day across topics (lecture video ← lecture ← Sheet/Lab) into 25-minute sessions with breaks — or",
    a1:"Previous day",
    h15:"No active task",
    h1:"Midterm Planner · Midterm plan for all subjects",
    h9:"— the videos won\u0027t play. Run",
    h10:"افتح-الموقع.bat",
    h33:"No plan for today yet.",
    h22:"tasks done",
    a11:"Skip (Session)",
    h24:"🗓 Today\u0027s plan",
    a14:"Previous video",
    h25:"0 tasks · 0 m",
    h35:"Click a card to open",
    a7:"Playlist",
    h38:"No video selected",
    h4:"/ 240 m",
    h14:"focus",
    h23:"hours planned",
    a4:"day streak",
    h16:"Focus hours today",
    h20:"📊 Today\u0027s stats",
    a15:"Next video",
    h21:"pomodoro session",
    h37:"Focus session",
    h6:"topics",
    h41:"↗ Open on YouTube",
    a3:"Focus hours today",
    h11:"instead.",
    h40:"📄 Lecture",
    h17:"m",
    h29:"Clear",
    h39:"Pick a video from the topic or open the playlist",
    h7:"to midterm",
    h19:"⏳ Midterms",
    a13:"Exit (Esc)",
    h26:"🔥 Midterm plan",
    h3:"Today",
    a9:"Start / pause (Space)",
    h36:"🔁 Review queue (Spaced Review)",
    h5:"day streak",
    a8:"Settings",
    a16:"Write your notes on this topic... (saved automatically)",
    a2:"Next day",
    h12:"⏱ Pomodoro timer",
    h18:"focus minutes",
    a6:"Nearest midterm",
    h30:"Press",
    h13:"0 sessions"
  }
};
let LANG = (function () {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'ar' || q === 'en') return q;
    const raw = localStorage.getItem('midtermplanner.v1');
    if (raw) {
      const sv = JSON.parse(raw);
      if (sv && sv.settings && (sv.settings.lang === 'ar' || sv.settings.lang === 'en')) return sv.settings.lang;
    }
  } catch (e) { }
  const h = (location.hostname || '').toLowerCase();
  const local = !h || h === 'localhost' || h === '127.0.0.1' || h === '::1';
  return local ? 'ar' : 'en';
})();
function T(key) {
  const d = I18N[LANG] || I18N.ar;
  if (d[key] !== undefined) return d[key];
  return I18N.ar[key] !== undefined ? I18N.ar[key] : key;
}
const AR2K = Object.create(null), EN2K = Object.create(null);
(function () {
  for (const k in I18N.ar) {
    const c = k.charAt(0);
    if (c !== 'h' && c !== 'a') continue;
    AR2K[I18N.ar[k]] = k;
    if (I18N.en[k] !== undefined) EN2K[I18N.en[k]] = k;
  }
})();
function applyStaticLang() {
  if (!document.body) return;
  const map = LANG === 'en' ? AR2K : EN2K;
  const target = I18N[LANG];
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  let node;
  while ((node = w.nextNode())) {
    const raw = node.nodeValue;
    if (!raw) continue;
    const t = raw.trim();
    if (!t) continue;
    const key = map[t];
    if (!key) continue;
    const at = raw.indexOf(t);
    node.nodeValue = raw.slice(0, at) + target[key] + raw.slice(at + t.length);
  }
  const els = document.body.querySelectorAll('[title],[placeholder],[aria-label]');
  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    const attrs = ['title', 'placeholder', 'aria-label'];
    for (let j = 0; j < attrs.length; j++) {
      const attr = attrs[j];
      if (!el.hasAttribute(attr)) continue;
      const v = el.getAttribute(attr);
      const key = map[v];
      if (!key) continue;
      el.setAttribute(attr, target[key]);
    }
  }
  if (document.title) {
    const key = map[document.title.trim()];
    if (key) document.title = target[key];
  }
}
function updateLangBtn() {
  const b = document.getElementById('langBtn');
  if (!b) return;
  b.textContent = LANG === 'en' ? '\u0639' : 'EN';
  b.title = LANG === 'en' ? 'Switch to Arabic' : 'Switch to English';
}
function setLang(l) {
  LANG = (l === 'en') ? 'en' : 'ar';
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'en' ? 'ltr' : 'rtl';
  try { if (typeof S !== 'undefined' && S.settings) { S.settings.lang = LANG; save(); } } catch (e) { }
  try { initData(); } catch (e) { }
  applyStaticLang();
  updateLangBtn();
  try { renderAll(); } catch (e) { }
}

/* ============================================================
   1) المواد والتوبيكس
   ============================================================ */
/* ملاحظة: كل مادة ليها topics بتاعتها + مواد (PDFs) + تاريخ ميدتيرم.
   قاعدة المجلد: Midterm Planner/ — فالمسارات النسبية '../<مادة>/<مجلد>/<ملف>'.
   subject.examTaken = هل خلص امتحانه (يتحسب من التاريخ).
   subject.core = التوبيكس الأساسية اللي لازم تتغطي، optional = بونص. */

let SUBJECTS = [], STEP_META = {}, QUOTES = [], DAY_NAMES = [];
const STORE_KEY = 'midtermplanner.v1';
function initData() {
SUBJECTS = [
  {
    id: 'calc2',
    name: 'CALC 2',
    full: 'Calculus II — Integration',
    code: 'MATH 122',
    c: '#22d3ee', c2: '#818cf8',
    exam: '2026-11-10', examTime: '10:30',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLhS6ICSV4wuWys61gxA-4r00UJF48QUAm',
    hasVideos: true,
    topics: [
      {
        id: 'c1', n: 1, title: 'Revision & Indefinite Integral', ar: T('k1'),
        c: '#22d3ee', c2: '#818cf8', glow: 'rgba(34,211,238,.20)',
        lectures: ['../Calc 2/Lectures/Lec 1.pdf'],
        ws: ['../Calc 2/Tutorials & Worksheets/Ws_1.pdf'],
        steps: ['video', 'lecture', 'ws', 'test'],
        stepLabels: { video: T('k2'), lecture: T('k3'), ws: 'Sheet', test: T('k4') },
        kw: ['revision', 'indefinite', 'integral', 'antiderivative', 'basic']
      },
      {
        id: 'c2', n: 2, title: 'Substitution & Completing the Square', ar: T('k5'),
        c: '#a855f7', c2: '#f472b6', glow: 'rgba(168,85,247,.20)',
        lectures: ['../Calc 2/Lectures/Lec2 summer 25 _part1 substitutin.pdf'],
        ws: ['../Calc 2/Tutorials & Worksheets/Ws_2.pdf'],
        steps: ['video', 'lecture', 'ws', 'test'],
        stepLabels: { video: T('k6'), lecture: T('k7'), ws: 'Sheet', test: T('k8') },
        kw: ['substitution', 'completing', 'square', 'u-sub']
      },
      {
        id: 'c3', n: 3, title: 'Integration by Parts & Reduction Formula', ar: T('k9'),
        c: '#fbbf24', c2: '#fb923c', glow: 'rgba(251,191,36,.18)',
        lectures: ['../Calc 2/Lectures/lec_2 -summer25 part2 byparts.pdf', '../Calc 2/Lectures/Lec_4-reduction.pdf'],
        ws: ['../Calc 2/Tutorials & Worksheets/Ws_3 by Parts and reduction formula.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k10'), ws: 'Sheet', test: T('k11') },
        kw: ['parts', 'part', 'reduction', 'ibp', 'by parts']
      },
      {
        id: 'c4', n: 4, title: 'Trigonometric Integrals & Trig Substitution', ar: T('k12'),
        c: '#34d399', c2: '#22d3ee', glow: 'rgba(52,211,153,.18)',
        lectures: ['../Calc 2/Lectures/Lecture 3 part 2.pdf', '../Calc 2/Lectures/Lec_4-Trig integral_trig sub.pdf'],
        ws: ['../Calc 2/Tutorials & Worksheets/Ws_4 Trig Integrals and Trig Substitution.pdf'],
        steps: ['video', 'lecture', 'ws', 'test'],
        stepLabels: { video: T('k13'), lecture: T('k14'), ws: 'Sheet', test: T('k15') },
        kw: ['trig', 'trigonometric', 'sin', 'cos', 'tan', 'substitution']
      },
      {
        id: 'c5', n: 5, title: 'Partial Fractions', ar: T('k16'),
        c: '#fb7185', c2: '#f472b6', glow: 'rgba(251,113,133,.18)',
        lectures: ['../Calc 2/Lectures/Lec_5-patrial fractions.pdf'],
        ws: ['../Calc 2/Tutorials & Worksheets/Ws_5 Partial fractions.pdf'],
        steps: ['video', 'lecture', 'ws', 'test'],
        stepLabels: { video: T('k17'), lecture: T('k18'), ws: 'Sheet', test: T('k19') },
        kw: ['partial', 'fraction', 'fractions']
      },
      {
        id: 'c6', n: 6, title: 'Numerical Integration', ar: T('k20'),
        c: '#38bdf8', c2: '#818cf8', glow: 'rgba(56,189,248,.18)',
        lectures: [], ws: [],
        steps: ['video', 'test'],
        stepLabels: { video: T('k21'), test: T('k22') },
        kw: ['numerical', 'trapezoidal', 'simpson']
      },
      {
        id: 'c7', n: 7, title: 'Improper Integrals', ar: T('k23'),
        c: '#c084fc', c2: '#f0abfc', glow: 'rgba(192,132,252,.18)',
        lectures: [], ws: [],
        steps: ['video', 'test'],
        stepLabels: { video: T('k24'), test: T('k25') },
        kw: ['improper', 'infinity', 'discontinuous']
      },
      {
        id: 'c8', n: 8, title: 'Applications of Definite Integral', ar: T('k26'),
        c: '#fb923c', c2: '#fbbf24', glow: 'rgba(251,146,60,.18)',
        lectures: [], ws: [],
        steps: ['video', 'test'],
        stepLabels: { video: T('k27'), test: T('k28') },
        kw: ['applications', 'arc', 'length', 'surface', 'revolution']
      }
    ],
    core: ['c1', 'c2', 'c3', 'c5', 'c4'],
    optional: ['c7', 'c6', 'c8']
  },

  {
    id: 'db',
    name: 'DATABASE',
    full: 'Database Systems',
    code: 'CSC 221',
    c: '#a855f7', c2: '#f472b6',
    exam: '2026-11-12', examTime: '10:30',
    hasVideos: false,
    topics: [
      {
        id: 'd1', n: 1, title: 'Database Environment & Course Roadmap', ar: T('k29'),
        c: '#a855f7', c2: '#f472b6', glow: 'rgba(168,85,247,.18)',
        lectures: ['../Database/Lectures/Introduction -Fall2026.pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: T('k30'), test: T('k31') },
        kw: ['introduction', 'roadmap', 'overview']
      },
      {
        id: 'd2', n: 2, title: 'The ER Model — Concepts, Notation & Design Guidelines', ar: T('k32'),
        c: '#f472b6', c2: '#fb7185', glow: 'rgba(244,114,182,.18)',
        lectures: ['../Database/Lectures/Lecture 2 -ER - Scenario2.pdf'],
        ws: ['../Database/Labs/Lab 1.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k33'), ws: 'Lab', test: T('k34') },
        kw: ['er', 'entity', 'relationship', 'diagram']
      },
      {
        id: 'd3', n: 3, title: 'Enhanced ER Model — Specialization, Generalization & Constraints', ar: T('k35'),
        c: '#fb7185', c2: '#f43f5e', glow: 'rgba(251,113,133,.18)',
        lectures: ['../Database/Lectures/Lecture 3 (2) (1).pdf'],
        ws: ['../Database/Labs/lab 2.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k36'), ws: 'Lab', test: T('k37') },
        kw: ['eer', 'supertype', 'subtype', 'generalization', 'specialization']
      },
      {
        id: 'd4', n: 4, title: 'Logical Design & the Relational Model', ar: T('k38'),
        c: '#c084fc', c2: '#a855f7', glow: 'rgba(192,132,252,.18)',
        lectures: ['../Database/Lectures/Lecture 4.pdf'],
        ws: ['../Database/Labs/lab 3.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k39'), ws: 'Lab', test: T('k40') },
        kw: ['relational', 'mapping', 'schema', 'logical']
      },
      {
        id: 'd5', n: 5, title: 'ER/EER → Relational Schema: The 10 Mapping Cases', ar: T('k41'),
        c: '#818cf8', c2: '#22d3ee', glow: 'rgba(129,140,248,.18)',
        lectures: ['../Database/Lectures/Lecture 4.pdf'],
        ws: ['../Database/Labs/lab 3.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k42'), ws: 'Lab', test: T('k43') },
        kw: ['mapping', 'cases', 'foreign', 'primary', 'referential']
      },
      {
        id: 'd6', n: 6, title: 'Relational Algebra — Operators, Set Operations & Joins', ar: T('k44'),
        c: '#22d3ee', c2: '#38bdf8', glow: 'rgba(34,211,238,.18)',
        lectures: ['../Database/Lectures/Lec (Relational Algebra) (2).pdf', '../Database/Lectures/Lec (Relational Algebra Exercise).pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: T('k45'), test: T('k46') },
        kw: ['relational', 'algebra', 'join', 'sigma', 'projection', 'division']
      },
      {
        id: 'd7', n: 7, title: 'SQL Foundations — Schema Definition & Constraints (DDL)', ar: T('k47'),
        c: '#34d399', c2: '#10b981', glow: 'rgba(52,211,153,.18)',
        lectures: ['../Database/Lectures/Lecture Sql Part 1 mod (1).pdf'],
        ws: ['../Database/Labs/Lab 4.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k48'), ws: 'Lab', test: T('k49') },
        kw: ['sql', 'ddl', 'create', 'alter', 'constraint', 'primary', 'foreign']
      },
      {
        id: 'd8', n: 8, title: 'SQL Data Manipulation & Querying (DML / DQL)', ar: T('k50'),
        c: '#fbbf24', c2: '#f59e0b', glow: 'rgba(251,191,36,.18)',
        lectures: ['../Database/Lectures/Lecture Sql Part 1 mod (1).pdf'],
        ws: ['../Database/Labs/Lab 5.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k51'), ws: 'Lab', test: T('k52') },
        kw: ['sql', 'select', 'insert', 'update', 'delete', 'join', 'group', 'having', 'union']
      }
    ],
    core: ['d2', 'd3', 'd4', 'd7', 'd8'],
    optional: ['d1', 'd6', 'd5']
  },

  {
    id: 'ds',
    name: 'DATA STRUCTURES',
    full: 'Data Structures & Algorithms',
    code: 'CSC 204',
    c: '#34d399', c2: '#10b981',
    exam: '2026-11-19', examTime: '10:30',
    hasVideos: false,
    topics: [
      {
        id: 's1', n: 1, title: 'Course Overview — Algorithms vs Data Structures', ar: T('k53'),
        c: '#34d399', c2: '#10b981', glow: 'rgba(52,211,153,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 0 - Course Overview.pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: T('k54'), test: T('k55') },
        kw: ['overview', 'algorithm', 'efficiency', 'memory']
      },
      {
        id: 's2', n: 2, title: 'OOP & C++ Review I — Classes, Encapsulation, Constructors', ar: T('k56'),
        c: '#22d3ee', c2: '#818cf8', glow: 'rgba(34,211,238,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 01.pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: T('k57'), test: T('k58') },
        kw: ['class', 'object', 'encapsulation', 'constructor', 'destructor']
      },
      {
        id: 's3', n: 3, title: 'OOP & C++ Review II — Templates, Inheritance, Polymorphism', ar: T('k59'),
        c: '#818cf8', c2: '#a855f7', glow: 'rgba(129,140,248,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 02.pdf'],
        ws: ['../Data Structrures/Labs/Lab 02.zip'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k60'), ws: 'Lab', test: T('k61') },
        kw: ['template', 'inheritance', 'polymorphism', 'overriding', 'generic']
      },
      {
        id: 's4', n: 4, title: 'Singly Linked Lists — Traversal, Insertion & Deletion', ar: T('k62'),
        c: '#fbbf24', c2: '#f59e0b', glow: 'rgba(251,191,36,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 03 - liked list p1 new.pdf'],
        ws: ['../Data Structrures/Labs/Lab 03.zip'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k63'), ws: 'Lab', test: T('k64') },
        kw: ['linked', 'list', 'sll', 'node', 'traversal']
      },
      {
        id: 's5', n: 5, title: 'Doubly & Circular Linked Lists', ar: T('k65'),
        c: '#fb923c', c2: '#f472b6', glow: 'rgba(251,146,60,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 04 - liked list p2 new.pdf'],
        ws: ['../Data Structrures/Labs/Lab 04.zip'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k66'), ws: 'Lab', test: T('k67') },
        kw: ['doubly', 'circular', 'dll', 'tail']
      },
      {
        id: 's6', n: 6, title: 'Stacks — LIFO, Implementations & Applications', ar: T('k68'),
        c: '#f472b6', c2: '#ec4899', glow: 'rgba(244,114,182,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 05 - Stacks new.pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: T('k69'), test: T('k70') },
        kw: ['stack', 'lifo', 'push', 'pop', 'delimiter', 'postfix']
      },
      {
        id: 's7', n: 7, title: 'Queues & Circular Queues', ar: T('k71'),
        c: '#ec4899', c2: '#a855f7', glow: 'rgba(236,72,153,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 06 - Queues new.pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: T('k72'), test: T('k73') },
        kw: ['queue', 'fifo', 'circular', 'enqueue', 'dequeue']
      }
    ],
    core: ['s4', 's5', 's6', 's3', 's7'],
    optional: ['s1', 's2']
  },

  {
    id: 'prob',
    name: 'PROBABILITY',
    full: 'Introduction to Probability & Statistics',
    code: 'MATH 202',
    c: '#fbbf24', c2: '#fb923c',
    exam: '2026-11-15', examTime: '10:30',
    hasVideos: false,
    topics: [
      {
        id: 'p1', n: 1, title: 'Sample Space, Events & Counting Rules', ar: T('k74'),
        c: '#fbbf24', c2: '#f59e0b', glow: 'rgba(251,191,36,.18)',
        lectures: ['../Probability/lectures/Lec 1.pdf'],
        ws: ['../Probability/Tutorial/Sheet 1.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k75'), ws: 'Sheet', test: T('k76') },
        kw: ['sample', 'space', 'event', 'counting']
      },
      {
        id: 'p2', n: 2, title: 'Probability of an Event & Probability Laws', ar: T('k77'),
        c: '#fb923c', c2: '#f472b6', glow: 'rgba(251,146,60,.18)',
        lectures: ['../Probability/lectures/lec_2.pdf'],
        ws: ['../Probability/Tutorial/Sheet 2_update.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k78'), ws: 'Sheet', test: T('k79') },
        kw: ['probability', 'laws', 'axiom', 'addition']
      },
      {
        id: 'p3', n: 3, title: 'Conditional Probability', ar: T('k80'),
        c: '#f472b6', c2: '#ec4899', glow: 'rgba(244,114,182,.18)',
        lectures: ['../Probability/lectures/lec_2.pdf'],
        ws: ['../Probability/Tutorial/Sheet 3.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k81'), ws: 'Sheet', test: T('k82') },
        kw: ['conditional', 'given']
      },
      {
        id: 'p4', n: 4, title: 'Independence, Total Probability & Bayes’ Theorem', ar: T('k83'),
        c: '#ec4899', c2: '#a855f7', glow: 'rgba(236,72,153,.18)',
        lectures: ['../Probability/lectures/lec_3.pdf'],
        ws: ['../Probability/Tutorial/Sheet 3.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k84'), ws: 'Sheet', test: T('k85') },
        kw: ['independence', 'bayes', 'total', 'probability', 'reliability']
      },
      {
        id: 'p5', n: 5, title: 'Random Variables — PDF, CDF, Expectation & Variance', ar: T('k86'),
        c: '#a855f7', c2: '#818cf8', glow: 'rgba(168,85,247,.18)',
        lectures: ['../Probability/lectures/lec_4.pdf'],
        ws: ['../Probability/Tutorial/Sheet 4.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k87'), ws: 'Sheet', test: T('k88') },
        kw: ['random', 'variable', 'expectation', 'variance', 'cdf']
      },
      {
        id: 'p6', n: 6, title: 'MGF & Discrete Distributions — Bernoulli & Binomial', ar: T('k89'),
        c: '#818cf8', c2: '#22d3ee', glow: 'rgba(129,140,248,.18)',
        lectures: ['../Probability/lectures/lec_5.pdf'],
        ws: ['../Probability/Tutorial/Sheet 5.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k90'), ws: 'Sheet', test: T('k91') },
        kw: ['mgf', 'bernoulli', 'binomial', 'discrete']
      },
      {
        id: 'p7', n: 7, title: 'Poisson Distribution & Counting-Process Applications', ar: T('k92'),
        c: '#22d3ee', c2: '#38bdf8', glow: 'rgba(34,211,238,.18)',
        lectures: ['../Probability/lectures/lec_5.pdf'],
        ws: ['../Probability/Tutorial/Sheet 6.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k93'), ws: 'Sheet', test: T('k94') },
        kw: ['poisson', 'counting', 'process']
      }
    ],
    core: ['p1', 'p2', 'p4', 'p5', 'p6'],
    optional: ['p3', 'p7']
  },

  {
    id: 'circ',
    name: 'CIRCUITS',
    full: 'Electric & Electronic Circuits',
    code: 'ECEN 111',
    c: '#38bdf8', c2: '#818cf8',
    exam: '2026-11-17', examTime: '10:30',
    hasVideos: false,
    topics: [
      {
        id: 'e1', n: 1, title: 'Circuit Elements — Charge, Current, Voltage, Power & Energy', ar: T('k95'),
        c: '#38bdf8', c2: '#818cf8', glow: 'rgba(56,189,248,.18)',
        lectures: ['../Circuits/Lectures/Lecture1 (Chapter 1).pdf'],
        ws: ['../Circuits/Tutorials/Sheet 1.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k96'), ws: 'Sheet', test: T('k97') },
        kw: ['charge', 'current', 'voltage', 'power', 'energy']
      },
      {
        id: 'e2', n: 2, title: "Ohm's Law, Kirchhoff's Laws & Series/Parallel Reduction", ar: T('k98'),
        c: '#818cf8', c2: '#a855f7', glow: 'rgba(129,140,248,.18)',
        lectures: ['../Circuits/Lectures/Lecture2 (Chapter 2).pdf'],
        ws: ['../Circuits/Tutorials/Sheet 2.pdf', '../Circuits/Tutorials/Sheet 3.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k99'), ws: 'Sheet', test: T('k100') },
        kw: ['ohm', 'kirchhoff', 'kcl', 'kvl', 'series', 'parallel', 'dependent']
      },
      {
        id: 'e3', n: 3, title: 'Nodal & Mesh Analysis Techniques', ar: T('k101'),
        c: '#a855f7', c2: '#f472b6', glow: 'rgba(168,85,247,.18)',
        lectures: ['../Circuits/Lectures/Lecture3 (Chapter 3).pdf', '../Circuits/Lectures/Lecture4 (Chapter 3).pdf'],
        ws: ['../Circuits/Tutorials/Sheet 4.pdf', '../Circuits/Tutorials/Sheet 5.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k102'), ws: 'Sheet', test: T('k103') },
        kw: ['nodal', 'mesh', 'supernode', 'supermesh', 'cramer']
      },
      {
        id: 'e4', n: 4, title: 'Circuit Theorems — Superposition, Thévenin/Norton, Max Power', ar: T('k104'),
        c: '#f472b6', c2: '#fb7185', glow: 'rgba(244,114,182,.18)',
        lectures: ['../Circuits/Lectures/Lecture5 (Chapter 4).pdf'],
        ws: ['../Circuits/Tutorials/Sheet 6.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: T('k105'), ws: 'Sheet', test: T('k106') },
        kw: ['superposition', 'thevenin', 'norton', 'transformation', 'maximum', 'power']
      }
    ],
    core: ['e2', 'e3', 'e1', 'e4'],
    optional: []
  }
];

/* ============================================================
   2) الثوابت العامة
   ============================================================ */
STEP_META = {
  video: { label: T('k107'), icon: '▶', c: '#22d3ee' },
  lecture: { label: T('k108'), icon: '📄', c: '#a855f7' },
  ws: { label: 'Sheet / Lab', icon: '📝', c: '#fbbf24' },
  test: { label: T('k109'), icon: '🧠', c: '#34d399' },
  custom: { label: T('k110'), icon: '•', c: '#94a3b8' }
};
QUOTES = [
  T('k111'),
  T('k112'),
  T('k113'),
  T('k114'),
  T('k115'),
  T('k116'),
  T('k117'),
  T('k118'),
  T('k119'),
  T('k120')
];
  DAY_NAMES = [T('k121'), T('k122'), T('k123'), T('k124'), T('k125'), T('k126'), T('k127')];
  /* في النسخة الإنجليزية: عنوان التوبك بالإنجليزي عشان يت consistent مع الكارت */
  if (LANG === 'en') SUBJECTS.forEach(s => s.topics.forEach(t => { t.ar = t.title; }));
}
initData();


/* فيديوهات البلاي ليست بتاعة Calc 2 (15 فيديو) — موزّعة على التوبيكس.
   sec = مدة الفيديو بالثواني عشان حساب الساعات يظبط. */
const SEED_VIDEOS = {
  c1: [{ id: 'aNyiclEX8ww', title: 'Introduction to indefinite integral', sec: 1976 }],
  c2: [
    { id: 'JV4SBipuKdc', title: 'Integration: Integration by Substitution', sec: 2603 },
    { id: 'tNrVO8NmtPA', title: 'Integration: Completing the Square', sec: 527 }
  ],
  c3: [],
  c4: [{ id: 'gZZZ-vPzihY', title: 'Integration: Trigonometric Substitution', sec: 1309 }],
  c5: [
    { id: 'oeIzvvFzCQs', title: 'Partial Fractions 1 (introduction + case 1 simple factors)', sec: 1349 },
    { id: '3psbyJ8HgMM', title: 'Partial Fractions 2 (long division)', sec: 354 },
    { id: 'Id_DMlFmlQ0', title: 'Partial Fraction 3 (Repeated Factors)', sec: 1179 },
    { id: 'B9uEHIqyuaA', title: 'Partial Fraction 4 (Quadratic Factors)', sec: 813 }
  ],
  c6: [
    { id: 'i6sNEYwXtLo', title: 'Numerical Integration: Trapezoidal Rule', sec: 857 },
    { id: 'QUMtx9C9rIw', title: "Numerical Integration: Simpson's Rule", sec: 496 },
    { id: 'ZL-XqtqlSkU', title: "Numerical Integration: Simpson's Rule (Proof)", sec: 287 }
  ],
  c7: [
    { id: 'vuhQdH8A2dA', title: 'Improper Integrals: Type 1 (Infinity at Limits)', sec: 1194 },
    { id: 'v-4N6qAdXI8', title: 'Improper Integrals: Type 2 (Discontinuous Integrand)', sec: 682 }
  ],
  c8: [
    { id: 'SlZq3XOJ6bQ', title: 'Applications of Definite Integral: Arc Length', sec: 1450 },
    { id: 'UDswuclUlXo', title: 'Applications of Definite Integral: Area of Surface of Revolution', sec: 866 }
  ]
};

/* ============================================================
   3) الحالة (state)
   ============================================================ */
const pad2 = n => String(n).padStart(2, '0');
const isoLocal = d => d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
const todayISO = () => isoLocal(new Date());
const uid = () => Math.random().toString(36).slice(2, 9);

const defaultState = () => ({
  settings: {
    focus: 25, short: 5, long: 15, cycles: 4, goalHours: 4,
    dayStart: '09:00', dayEnd: '23:00', autoContinue: true
  },
  days: {},     // ISO -> { plan:[...] }
  topics: {},   // topicId -> { status, steps:{}, videos:[], notes:'' }
  stats: {},    // ISO -> { focusMin, sessions, tasksDone }
  exams: {},     // subjectId -> ISO
  examTimes: {}  // subjectId -> HH:MM
});
let S = defaultState();
let currentDay = todayISO();
let activeSubject = 'calc2';
let timer = { mode: 'focus', remaining: 25 * 60, running: false, endAt: 0, cycle: 0, tick: null };
let currentTaskId = null;
let focusCtx = { topicId: null, videoIdx: 0 };
let SPRINT_LIGHT = false;
let SPRINT_SKIP_WEEKEND = false;

/* ============================================================
   4) Helpers
   ============================================================ */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const enc = p => encodeURI(p);
const pad = n => String(n).padStart(2, '0');
const fmtClock = m => pad(Math.floor(m / 60)) + ':' + pad(Math.floor(m % 60));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ltr = s => '<bdi dir="ltr">' + esc(s) + '</bdi>';

const subjectById = id => SUBJECTS.find(s => s.id === id);
const allTopics = () => SUBJECTS.flatMap(s => s.topics);
const topicById = id => allTopics().find(t => t.id === id);
const subjectOfTopic = id => SUBJECTS.find(s => s.topics.some(t => t.id === id));

const examOf = subId => (S.exams && S.exams[subId]) || (subjectById(subId) ? subjectById(subId).exam : null);
const examTimeOf = subId => (S.exams && S.examTimes && S.examTimes[subId]) || (subjectById(subId) ? subjectById(subId).examTime : null) || '10:30';
const examDateTime = subId => {
  const d = examOf(subId);
  if (!d) return null;
  const t = examTimeOf(subId) || '10:30';
  const dt = new Date(d + 'T' + (t.length === 5 ? t : '10:30') + ':00');
  return isNaN(dt.getTime()) ? null : dt;
};
const EXAM_DATE_FIX = { calc2: ['2026-11-12', '2026-11-10'], db: ['2026-11-18', '2026-11-12'] };
const EXAM_TIME_FIX = { db: ['12:00', '10:30'], ds: ['09:00', '10:30'] };
const fmtLeft = ms => {
  if (ms == null) return '-';
  if (ms <= 0) return T('k128');
  const tm = Math.floor(ms / 60000);
  const d = Math.floor(tm / 1440), h = Math.floor((tm % 1440) / 60), m = tm % 60;
  const p = [];
  if (d) p.push(d + T('k129'));
  if (d || h) p.push(h + T('k130'));
  p.push(m + T('k131'));
  return p.join(' ');
};
const fmtLeftShort = ms => {
  if (ms == null) return '-';
  if (ms <= 0) return T('k132');
  const tm = Math.floor(ms / 60000);
  const d = Math.floor(tm / 1440), h = Math.floor((tm % 1440) / 60);
  if (d) return d + T('k133') + h + T('k134');
  if (h) return h + T('k135');
  return (tm % 60) + T('k136');
};
const nextExam = () => {
  const now = Date.now();
  let best = null;
  SUBJECTS.forEach(s => {
    const dt = examDateTime(s.id);
    if (!dt) return;
    const diff = dt.getTime() - now;
    if (diff > 0 && (!best || diff < best.diff)) best = { s, dt, diff };
  });
  return best;
};
function syncExamDefaults() {
  S.exams = S.exams || {};
  S.examTimes = S.examTimes || {};
  SUBJECTS.forEach(sub => {
    const fix = EXAM_DATE_FIX[sub.id];
    if (fix && S.exams[sub.id] === fix[0]) S.exams[sub.id] = fix[1];
    if (!S.exams[sub.id]) S.exams[sub.id] = sub.exam;
    const tfix = EXAM_TIME_FIX[sub.id];
    if (tfix && S.examTimes[sub.id] === tfix[0]) S.examTimes[sub.id] = tfix[1];
    if (!S.examTimes[sub.id]) S.examTimes[sub.id] = sub.examTime || '10:30';
  });
}
const daysLeft = iso => {
  if (!iso) return null;
  return Math.ceil((new Date(iso + 'T00:00:00') - new Date(todayISO() + 'T00:00:00')) / 864e5);
};
const todayStats = () => (S.stats[currentDay] = S.stats[currentDay] || { focusMin: 0, sessions: 0, tasksDone: 0 });
const dayPlan = () => (S.days[currentDay] = S.days[currentDay] || { plan: [] });
const parseHM = s => { const [h, m] = String(s || '00:00').split(':').map(Number); return (h || 0) * 60 + (m || 0); };
const hmText = m => fmtClock(((m % 1440) + 1440) % 1440);
const arDate = iso => {
  try {
    const loc = (typeof LANG !== 'undefined' && LANG === 'en') ? 'en-GB' : 'ar-EG';
    return new Date(iso + 'T00:00:00').toLocaleDateString(loc, { day: 'numeric', month: 'long', year: 'numeric' });
  } catch (e) { return iso; }
};
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ============================================================
   5) Persistence
   ============================================================ */
function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      S = Object.assign(defaultState(), p);
      S.settings = Object.assign(defaultState().settings, p.settings || {});
      S.days = p.days || {};
      S.topics = p.topics || {};
      S.stats = p.stats || {};
      S.exams = p.exams || {};
      S.examTimes = p.examTimes || {};
    }
  } catch (e) { console.warn('load failed', e); }
  syncExamDefaults();
  SUBJECTS.forEach(sub => {
    sub.topics.forEach(t => {
      if (!S.topics[t.id]) S.topics[t.id] = { status: 'new', steps: {}, videos: [], notes: '' };
      t.steps.forEach(s => { if (S.topics[t.id].steps[s] === undefined) S.topics[t.id].steps[s] = false; });
      if (!S.topics[t.id].videos.length && SEED_VIDEOS[t.id] && SEED_VIDEOS[t.id].length) {
        S.topics[t.id].videos = SEED_VIDEOS[t.id].slice();
      }
      const seed = SEED_VIDEOS[t.id] || [];
      S.topics[t.id].videos.forEach(v => {
        if (!v.sec) { const m = seed.find(s => s.id === v.id); if (m && m.sec) v.sec = m.sec; }
      });
    });
  });
}
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { } }

/* ============================================================
   6) TOP BAR + SUBJECT TABS
   ============================================================ */
function computeStreak() {
  let streak = 0;
  const d = new Date();
  for (let i = 0; i < 400; i++) {
    const key = isoLocal(d);
    const st = S.stats[key];
    if (st && st.focusMin > 0) streak++;
    else if (i === 0) { }
    else break;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}
function subProgress(sub) {
  let done = 0, total = 0;
  sub.topics.forEach(t => {
    const st = S.topics[t.id];
    total += t.steps.length;
    done += t.steps.filter(s => st.steps[s]).length;
  });
  return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
}
function renderSubTabs() {
  const box = $('#subTabs');
  box.innerHTML = '';
  SUBJECTS.forEach(sub => {
    const p = subProgress(sub);
    const dl = daysLeft(examOf(sub.id));
    const _dt = examDateTime(sub.id);
    const _passed = !!(_dt && _dt.getTime() <= Date.now());
    const b = document.createElement('button');
    b.className = 'subtab' + (sub.id === activeSubject ? ' on' : '');
    b.style.setProperty('--c', sub.c);
    b.style.setProperty('--c2', sub.c2);
    b.innerHTML =
      '<span class="st-dot"></span>' + esc(sub.name) +
      '<small>' + p.pct + '%</small>' +
      (_passed ? '<span class="st-badge">&#10003;</span>' : (dl !== null && dl >= 0 ? '<span class="st-badge">' + (dl === 0 ? T('k137') : dl + T('k138')) + '</span>' : '<span class="st-badge">\u2014</span>'));
    b.onclick = () => { activeSubject = sub.id; renderAll(); };
    box.appendChild(b);
  });
}
function renderTop() {
  const st = todayStats();
  const goal = S.settings.goalHours * 60;
  $('#statFocus').textContent = st.focusMin;
  $('#statFocusGoal').textContent = '/ ' + goal + T('k139');
  $('#statStreak').textContent = computeStreak();
  const sub = subjectById(activeSubject);
  if (sub) {
    const p = subProgress(sub);
    $('#statTopics').textContent = p.done + '/' + p.total;
  } else {
    const all = allTopics();
    const d = all.filter(t => S.topics[t.id].status === 'done').length;
    $('#statTopics').textContent = d + '/' + all.length;
  }
  $('#sSessions').textContent = st.sessions;
  $('#sTasks').textContent = st.tasksDone;
  $('#sFocus').textContent = st.focusMin;
  const planned = dayPlan().plan.reduce((a, b) => a + (b.min || 0), 0);
  $('#sPlanned').textContent = Math.round(planned / 60 * 10) / 10;
  $('#goalMin').textContent = goal;
  $('#todayMin').textContent = st.focusMin;
  $('#dayProgress').style.width = Math.min(100, (st.focusMin / goal) * 100) + '%';
  $('#quote').textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  /* أقرب ميدتيرم */
    renderMidCountdown();
}

function renderMidCountdown() {
  const chip = $('#statMid'), sub = $('#statMidSub');
  const box = $('#nextExamBox');
  const nx = nextExam();
  if (nx) {
    if (chip) { chip.textContent = fmtLeftShort(nx.diff); sub.textContent = nx.s.name; }
    const cl = $('#chipMid');
    if (cl) cl.title = nx.s.name + ' (' + nx.s.code + ') - ' + fmtLeft(nx.diff);
    if (box) {
      box.hidden = false;
      $('#nextExamName').textContent = nx.s.name + ' · ' + nx.s.code;
      $('#nextExamLeft').textContent = fmtLeft(nx.diff);
      $('#nextExamWhen').textContent = arDate(examOf(nx.s.id)) + ' · ' + examTimeOf(nx.s.id);
      $('#nextExamClock').textContent = T('k140');
    }
  } else {
    if (chip) { chip.textContent = '-'; sub.textContent = T('k141'); }
    if (box) box.hidden = true;
  }
}
function renderExams() {
  const box = $('#examList');
  box.innerHTML = '';
  const rows = SUBJECTS.map(s => ({ s, d: daysLeft(examOf(s.id)), dt: examDateTime(s.id) }))
    .sort((a, b) => (a.d === null ? 999 : a.d) - (b.d === null ? 999 : b.d));
  rows.forEach(({ s, d, dt }) => {
    const el = document.createElement('div');
    el.className = 'exam-row';
    el.style.setProperty('--c', s.c);
    el.innerHTML =
      '<span class="ex-ico">' + (s.hasVideos ? '📐' : '📚') + '</span>' +
      '<div class="ex-main"><span class="ex-name">' + esc(s.name) + '</span>' +
      '<span class="ex-date">' + esc(arDate(examOf(s.id))) + ' · ' + esc(examTimeOf(s.id)) + '</span></div>' +
      '<div class="ex-left">' + (dt ? (dt.getTime() <= Date.now() ? T('k142') : fmtLeft(dt.getTime() - Date.now())) : (d === null ? '-' : d + T('k143'))) +
      '<small>' + esc(s.code) + '</small></div>';
    el.onclick = () => { activeSubject = s.id; renderAll(); };
    el.style.cursor = 'pointer';
    box.appendChild(el);
  });
}

/* ============================================================
   7) TIMELINE
   ============================================================ */
function planNote(item, tp) {
  if (item.autoNote !== false) {
    if (item.isBreak) return T('k159');
    if (tp && item.step && item.step !== 'custom') {
      return (item.optional ? T('k165') : '') + T('k166') +
        STEP_META[item.step].label + ' (' + tp.ar + ')';
    }
  }
  return item.note || (tp ? tp.ar : T('k146'));
}
function planTitle(item, tp) {
  if (tp) {
    return ltr(tp.n + '. ' + tp.title) + (item.step !== 'custom' ? ' — ' + esc(STEP_META[item.step].label) : '');
  }
  if (item.isBreak) {
    const kind = item.bKind || (item.min >= S.settings.long ? 'long' : 'short');
    return kind === 'long' ? T('k157') : T('k158');
  }
  return esc(item.title);
}
function renderTimeline() {
  const box = $('#timeline');
  const plan = dayPlan().plan.slice().sort((a, b) => a.start - b.start);
  box.innerHTML = '';
  $('#timelineEmpty').hidden = plan.length > 0;
  $('#planBadge').textContent = plan.length + T('k144') + Math.round(plan.reduce((a, b) => a + (b.min || 0), 0)) + T('k145');

  plan.forEach(item => {
    const meta = STEP_META[item.step] || STEP_META.custom;
    const tp = item.topicId ? topicById(item.topicId) : null;
    const sub = tp ? subjectOfTopic(tp.id) : null;
    const el = document.createElement('div');
    el.className = 'slot' + (item.done ? ' done' : '');
    el.style.setProperty('--c', tp ? tp.c : meta.c);
    const titleHtml = planTitle(item, tp);
    let fileLink = '';
    if (tp && item.step === 'lecture' && tp.lectures[0]) fileLink = '<a class="slot-file" href="' + enc(tp.lectures[0]) + '" target="_blank">📄</a>';
    if (tp && item.step === 'ws' && tp.ws[0]) fileLink = '<a class="slot-file" href="' + enc(tp.ws[0]) + '" target="_blank">📝</a>';
    el.innerHTML =
      '<div class="slot-time">' + fmtClock(item.start) + ' → ' + fmtClock(item.end) + '</div>' +
      '<div class="slot-main">' +
        '<div class="slot-title">' + titleHtml +
          '<span class="tag">' + meta.icon + ' ' + meta.label + '</span>' +
          (sub ? '<span class="sub-tag" style="--c:' + sub.c + '">' + esc(sub.name) + '</span>' : '') +
        '</div>' +
        '<div class="slot-sub">' + esc(planNote(item, tp)) + '</div>' +
      '</div>' +
      '<div class="slot-actions">' +
        fileLink +
        '<button class="chk' + (item.done ? ' on' : '') + T('k147') +
        T('k148') +
        T('k149') +
      '</div>';
    el.querySelector('[data-act=toggle]').onclick = () => toggleTask(item.id);
    el.querySelector('[data-act=edit]').onclick = () => openTaskModal(item);
    el.querySelector('[data-act=del]').onclick = () => {
      dayPlan().plan = dayPlan().plan.filter(x => x.id !== item.id); save(); renderAll();
    };
    box.appendChild(el);
  });
}
function toggleTask(id) {
  const p = dayPlan().plan.find(x => x.id === id);
  if (!p) return;
  p.done = !p.done;
  if (p.done) {
    todayStats().tasksDone++;
    if (p.topicId && p.step && p.step !== 'custom') {
      S.topics[p.topicId].steps[p.step] = true;
      syncTopicStatus(p.topicId);
    }
  } else {
    todayStats().tasksDone = Math.max(0, todayStats().tasksDone - 1);
    if (p.topicId && p.step && p.step !== 'custom') {
      S.topics[p.topicId].steps[p.step] = false;
      syncTopicStatus(p.topicId);
    }
  }
  save(); renderAll();
}
function syncTopicStatus(id) {
  const tp = topicById(id);
  const st = S.topics[id].steps;
  const done = tp.steps.filter(s => st[s]).length;
  if (done === tp.steps.length) S.topics[id].status = 'done';
  else S.topics[id].status = 'progress';
}
function topicProgress(id) {
  const tp = topicById(id), st = S.topics[id].steps;
  return tp.steps.filter(s => st[s]).length / tp.steps.length;
}

/* ============================================================
   8) PLAN GENERATOR (يوم واحد)
   ============================================================ */
function openGenModal() {
  const subjects = SUBJECTS;
  const opts = subjects.map(sub =>
    '<div style="margin-bottom:10px"><div class="hint" style="margin-bottom:5px;color:' + sub.c + '">' +
    esc(sub.name) + ' (' + esc(sub.code) + ')</div><div class="step-pick">' +
    sub.topics.map(t => '<label><input type="checkbox" name="gt" value="' + t.id + '" checked> ' + t.n + '. ' + esc(t.title) + '</label>').join('') +
    '</div></div>').join('');
  const orderOpts = T('k150') +
    T('k151') +
    T('k152') +
    T('k153');
  openModal(T('k154'), (LANG === 'en' ? `
    <div class="field"><label>Start at</label>
      <input type="time" id="genStart" value="${S.settings.dayStart}"></div>
    <div class="field"><label>Focus session length</label>
      <select id="genLen">
        <option value="25"${S.settings.focus === 25 ? ' selected' : ''}>25 min</option>
        <option value="30"${S.settings.focus === 30 ? ' selected' : ''}>30 min</option>
        <option value="45"${S.settings.focus === 45 ? ' selected' : ''}>45 min</option>
        <option value="60"${S.settings.focus === 60 ? ' selected' : ''}>60 min</option>
      </select></div>
    <div class="field"><label>Total hours needed</label>
      <input type="number" id="genHours" min="1" max="14" step="1" value="${S.settings.goalHours}"></div>
    <div class="field"><label>Topic order</label><select id="genOrder">${orderOpts}</select></div>
    <div class="field"><label>Topics to include</label>${opts}</div>
    <div class="hint">The plan follows this order for every topic: <b>Lecture video ← Lecture ← Sheet/Lab ← Self test</b>,
      and every Pomodoro session is followed by a break.</div>
    <div class="form-actions">
      <button class="primary-btn" id="genRun">Generate the plan</button>
      <button class="soft-btn" data-close="1">Cancel</button>
    </div>` : `
    <div class="field"><label>ابدأ من الساعة</label>
      <input type="time" id="genStart" value="${S.settings.dayStart}"></div>
    <div class="field"><label>طول جلسة التركيز</label>
      <select id="genLen">
        <option value="25"${S.settings.focus === 25 ? ' selected' : ''}>25 دقيقة</option>
        <option value="30"${S.settings.focus === 30 ? ' selected' : ''}>30 دقيقة</option>
        <option value="45"${S.settings.focus === 45 ? ' selected' : ''}>45 دقيقة</option>
        <option value="60"${S.settings.focus === 60 ? ' selected' : ''}>60 دقيقة</option>
      </select></div>
    <div class="field"><label>إجمالي الساعات المطلوبة</label>
      <input type="number" id="genHours" min="1" max="14" step="1" value="${S.settings.goalHours}"></div>
    <div class="field"><label>ترتيب التوبيكس</label><select id="genOrder">${orderOpts}</select></div>
    <div class="field"><label>التوبيكس المطلوبة</label>${opts}</div>
    <div class="hint">الخطة بتتبني بالترتيب ده لكل توبيك: <b>فيديو الشرح ← المحاضرة ← Sheet/Lab ← اختبار ذاتي</b>،
      وكل جلسة Pomodoro متبوعة بـ break.</div>
    <div class="form-actions">
      <button class="primary-btn" id="genRun">ولّد الخطة</button>
      <button class="soft-btn" data-close="1">إلغاء</button>
    </div>`));
  $('#genRun').onclick = () => {
    const picked = Array.from(document.querySelectorAll('input[name=gt]:checked')).map(i => i.value);
    const hours = parseFloat($('#genHours').value) || 4;
    const len = parseInt($('#genLen').value, 10);
    const order = $('#genOrder').value;
    const startAt = parseHM($('#genStart').value);
    buildPlan(picked, order, hours, len, startAt);
    closeModal();
  };
}
function buildPlan(topicIds, order, hours, len, startAt) {
  let list = topicIds.slice();
  if (order === 'weak') {
    list.sort((a, b) => topicProgress(a) - topicProgress(b));
  } else if (order === 'review') {
    list.sort((a, b) => (S.topics[a].status === 'review' ? -1 : 1) - (S.topics[b].status === 'review' ? -1 : 1));
  } else if (order === 'urgent') {
    list.sort((a, b) => {
      const da = daysLeft(examOf(subjectOfTopic(a).id));
      const db = daysLeft(examOf(subjectOfTopic(b).id));
      return (da === null ? 999 : da) - (db === null ? 999 : db);
    });
  }
  const blocks = Math.max(1, Math.round((hours * 60) / len));
  const plan = [];
  let t = startAt, made = 0, topicIdx = 0;
  for (const tid of list) {
    const tp = topicById(tid);
    for (const step of tp.steps) {
      if (made >= blocks) break;
      plan.push({
        id: uid(), start: t, end: t + len, min: len, topicId: tid, step,
        title: tp.n + '. ' + tp.title + ' — ' + STEP_META[step].label,
        note: T('k156') + STEP_META[step].label + ' (' + tp.ar + ')',
        autoNote: true,
        done: false
      });
      t += len; made++;
      const isLong = (topicIdx % 2 === 1);
      plan.push({
        id: uid(), start: t, end: t + (isLong ? S.settings.long : S.settings.short),
        min: isLong ? S.settings.long : S.settings.short,
        topicId: null, step: 'custom', title: isLong ? T('k157') : T('k158'),
        note: T('k159'), autoNote: true, done: false, isBreak: true, bKind: isLong ? 'long' : 'short'
      });
      t += isLong ? S.settings.long : S.settings.short;
    }
    topicIdx++;
    if (made >= blocks) break;
  }
  while (plan.length && plan[plan.length - 1].isBreak) plan.pop();
  S.days[currentDay] = { plan: plan };
  const first = plan.find(p => !p.isBreak);
  if (first) currentTaskId = first.id;
  save(); renderAll();
  toast(T('k160') + plan.filter(p => !p.isBreak).length + T('k161'));
}

/* ============================================================
   9) خطة الميدتيرم — لكل المواد معاً
   ============================================================ */
function topicMinutes(id) {
  const t = topicById(id);
  const st = S.topics[id];
  const vids = (st && st.videos && st.videos.length) ? st.videos : (SEED_VIDEOS[id] || []);
  const video = vids.length ? Math.ceil(vids.reduce((a, v) => a + (v.sec || 0), 0) / 60) : 0;
  const lecture = t.lectures.length * 55;
  const sheet = t.ws.length * 75;
  const test = (t.lectures.length || t.ws.length) ? (SPRINT_LIGHT ? 15 : 30) : (SPRINT_LIGHT ? 25 : 45);
  return { video, lecture, sheet, test, total: video + lecture + sheet + test };
}
/* كل يوم: التوبيكس المتبقية لكل مادة + الساعات
   الخوارزمية: لكل مادة نحسب "ضغط"ها = الساعات المتبقية ÷ الأيام المتاحة قبل امتحانها.
   الأيام بتتوزّع بالتساوي بين المواد حسب الضغط، مع سقف يومي (capMin) و أولوية للمادة
   اللي امتحانها أقرب (بتاخد الأولوية لما تتزاحم). */
function sprintPlan(capMin) {
  const today = todayISO();
  const cap = capMin || (S.settings.goalHours * 60);
  /* اجمع كل الأيام من النهارده لحد آخر ميدتيرم */
  let maxExam = null;
  SUBJECTS.forEach(s => {
    const e = examOf(s.id);
    if (e && (!maxExam || e > maxExam)) maxExam = e;
  });
  if (!maxExam) return { days: [], perSubject: {}, assign: {}, leftovers: {}, subs: [] };
  const days = [];
  const d = new Date(today + 'T00:00:00');
  const end = new Date(maxExam + 'T00:00:00');
  const skipWeekend = SPRINT_SKIP_WEEKEND;
  while (d <= end && days.length < 21) {
    const dow = d.getDay();   /* 5 = الجمعة, 6 = السبت */
    if (!(skipWeekend && (dow === 5 || dow === 6))) days.push(isoLocal(d));
    d.setDate(d.getDate() + 1);
  }

  /* لكل مادة: التوبيكس المتبقية (core) + الاختيارية */
  const perSubject = {};
  SUBJECTS.forEach(sub => {
    const core = sub.core.filter(id => topicProgress(id) < 1);
    const opt = sub.optional.filter(id => topicProgress(id) < 1);
    const coreMin = core.reduce((a, id) => a + topicMinutes(id).total, 0);
    const optMin = opt.reduce((a, id) => a + topicMinutes(id).total, 0);
    const ex = examOf(sub.id);
    const dt = examDateTime(sub.id);
    const past = !!(dt && dt.getTime() <= Date.now());
    const usable = days.filter(dd => !ex || dd <= ex).length;   /* أيام متاحة قبل الامتحان */
    perSubject[sub.id] = { core, opt, coreMin, optMin, usable, exam: ex, left: daysLeft(ex), dt, past };
  });

  /* ترتيب المواد: الأقرب امتحاناً أولاً */
  const subs = SUBJECTS.slice().sort((a, b) => {
    const la = perSubject[a.id].left === null ? 999 : perSubject[a.id].left;
    const lb = perSubject[b.id].left === null ? 999 : perSubject[b.id].left;
    return la - lb;
  });

  const assign = {};   /* day -> { subId -> [topicIds] } */
  days.forEach(dd => assign[dd] = {});
  const passed = [];
  const remaining = {};
  subs.forEach(s => remaining[s.id] = perSubject[s.id].core.slice());

  /* الخطوة 1: كل مادة توزّع توبيكسها الأساسية بالتساوي على الأيام المتاحة قبل امتحانها.
     التوبيك رقم j يروح لليوم رقم ceil((j+1)*D/T)-1 من أيام المادة. */
  const dropped = [];   /* توبيكس مش 월ينفعش تتحط في اليوم (تجاوز السقف) */
  subs.forEach(sub => {
    const ps = perSubject[sub.id];
    const list = remaining[sub.id];
    if (!list.length) return;
    if (ps.past) { passed.push(...list); remaining[sub.id] = []; return; }
    const subDays = days.filter(dd => !ps.exam || dd <= ps.exam);
    if (!subDays.length) { dropped.push(...list); return; }
    const T = list.length, D = subDays.length;
    list.forEach((id, j) => {
      let di = Math.ceil((j + 1) * D / T) - 1;
      if (di < 0) di = 0;
      if (di >= D) di = D - 1;
      const dd = subDays[di];
      if (!assign[dd][sub.id]) assign[dd][sub.id] = [];
      assign[dd][sub.id].push(id);
    });
  });

  /* الخطوة 2: احترام السقف اليومي — لو اليوم زاد، نشيل التوبيكس الأبعد امتحاناً
     (والاختيارية أولاً) ونبلّغ把它们 كـ"مش هيتغطى". */
  days.forEach(dd => {
    let used = 0;
    /* نحسب الساعات المستخدمة */
    Object.keys(assign[dd]).forEach(sid => {
      (assign[dd][sid] || []).forEach(id => { used += topicMinutes(id).total; });
    });
    if (used <= cap) return;
    /* نرتب المواد بالأولوية: الأقرب امتحاناً يفضل، والأبعد ينشال */
    const order = subs.slice().sort((a, b) => {
      const la = perSubject[a.id].left === null ? 999 : perSubject[a.id].left;
      const lb = perSubject[b.id].left === null ? 999 : perSubject[b.id].left;
      return lb - la;   /* الأبعد امتحاناً أول */
    });
    order.forEach(sub => {
      const list = assign[dd][sub.id];
      if (!list || !list.length) return;
      while (list.length && used > cap) {
        const id = list.pop();
        const m = topicMinutes(id).total;
        used -= m;
        /* ندور على يوم بعده (قبل امتحان المادة) فيه مكان — مش نشيل التوبيك */
        let placed = false;
        const ps2 = perSubject[sub.id];
        for (let i = days.indexOf(dd) + 1; i < days.length; i++) {
          const nx = days[i];
          if (ps2.exam && nx > ps2.exam) continue;
          let nu = 0;
          Object.keys(assign[nx]).forEach(sid => {
            (assign[nx][sid] || []).forEach(x => { nu += topicMinutes(x).total; });
          });
          if (nu + m <= cap) {
            if (!assign[nx][sub.id]) assign[nx][sub.id] = [];
            assign[nx][sub.id].push(id);
            placed = true; break;
          }
        }
        if (!placed) dropped.push(id);
      }
      if (!list.length) delete assign[dd][sub.id];
    });
  });

  /* البونص + المتبقي: يدخل أي يوم فيه مساحة — بس بعد ما الأساسيات تخلص */
  const leftovers = {};
  subs.forEach(sub => {
    const ps = perSubject[sub.id];
    if (ps.past) { passed.push(...ps.opt.filter(id => topicProgress(id) < 1)); return; }
    const optList = ps.opt.slice();
    /* رتّب الأيام: الأقرب لامتحان المادة أولاً */
    const subDays = days.filter(dd => !ps.exam || dd <= ps.exam);
    subDays.sort((a, b) => (a < b ? 1 : -1));
    subDays.forEach(dd => {
      if (!optList.length) return;
      /* البونص مينفعش يسبق الأساسيات — لازم الأساسيات تكون اتغطت */
      const coreDone = ps.core.every(cid => {
        for (let i = 0; i < days.length; i++) {
          const x = days[i];
          if (x > dd) break;
          if ((assign[x][sub.id] || []).indexOf(cid) !== -1) return true;
        }
        return false;
      });
      if (!coreDone) return;
      let used = 0;
      Object.keys(assign[dd] || {}).forEach(sid => {
        (assign[dd][sid] || []).forEach(id => { used += topicMinutes(id).total; });
      });
      const free = cap - used;
      const id = optList[0];
      const m = topicMinutes(id).total;
      if (free >= m) {
        if (!assign[dd][sub.id]) assign[dd][sub.id] = [];
        assign[dd][sub.id].push(id);
        optList.shift();
      }
    });
    if (optList.length) leftovers[sub.id] = optList.slice();
  });
  /* التوبيكس اللي اتشالت (التجاوز للسقف) */
  if (dropped.length) leftovers.__dropped = dropped;
  return { days, perSubject, assign, leftovers, subs, dropped, passed };
}
function sprintDayPlan(topicIds, startAt, isLast, optionalIds, sub) {
  const plan = [];
  let t = startAt, blocks = 0;
  const addBreak = () => {
    const isLong = blocks % S.settings.cycles === 0;
    const brk = isLong ? S.settings.long : S.settings.short;
    plan.push({
      id: uid(), start: t, end: t + brk, min: brk, topicId: null, step: 'custom',
      title: isLong ? T('k162') : T('k163'),
      note: T('k164'), autoNote: true, done: false, isBreak: true, bKind: isLong ? 'long' : 'short'
    });
    t += brk;
  };
  const build = (ids, isOptional) => {
    for (const id of ids) {
      const tp = topicById(id), m = topicMinutes(id);
      const steps = [];
      if (m.video) steps.push({ step: 'video', min: m.video });
      if (m.lecture) steps.push({ step: 'lecture', min: m.lecture });
      if (m.sheet) steps.push({ step: 'ws', min: m.sheet });
      steps.push({ step: 'test', min: m.test });
      for (const st of steps) {
        let left = st.min, i = 0;
        const nBlocks = Math.max(1, Math.ceil(st.min / S.settings.focus));
        while (left > 0) {
          const len = Math.min(S.settings.focus, left);
          i++;
          plan.push({
            id: uid(), start: t, end: t + len, min: len, topicId: id, step: st.step,
            title: (isOptional ? '⏳ ' : '') + tp.n + '. ' + tp.title + ' — ' + STEP_META[st.step].label +
              (nBlocks > 1 ? ' (' + i + '/' + nBlocks + ')' : ''),
            note: (isOptional ? T('k165') : '') +
              T('k166') + STEP_META[st.step].label + ' (' + tp.ar + ')',
            autoNote: true, optional: isOptional, done: false
          });
          t += len; left -= len; blocks++;
          if (left > 0) addBreak();
        }
        if (st.step !== 'test') addBreak();
      }
    }
  };
  build(topicIds, false);
  if (optionalIds && optionalIds.length) build(optionalIds, true);

  /* 🍽️ غدا — بيتحط أول ميعاد بعد 1 ظهر */
  const lunchAt = 13 * 60;
  const li = plan.findIndex(p => !p.isBreak && p.start >= lunchAt);
  if (li >= 0) {
    const at = plan[li].start;
    plan.splice(li, 0, {
      id: uid(), start: at, end: at + 60, min: 60, topicId: null, step: 'custom',
      title: T('k167'), note: T('k168'), done: false, isBreak: true
    });
    for (let i = li + 1; i < plan.length; i++) { plan[i].start += 60; plan[i].end += 60; }
  }
  if (isLast) {
    plan.push({
      id: uid(), start: t, end: t + 90, min: 90, topicId: null, step: 'custom',
      title: T('k169'),
      note: T('k170'), done: false
    });
    t += 90;
    plan.push({
      id: uid(), start: t, end: t + 30, min: 30, topicId: null, step: 'custom',
      title: T('k171'), note: T('k172'), done: false
    });
  }
  return plan;
}
function openSprintModal() {
  let capH = Math.max(3, Math.min(12, S.settings.goalHours));
  let sp = sprintPlan(capH * 60);
  if (!sp.days.length) {
    openModal(T('k173'), T('k174'));
    return;
  }
  const startAtDefault = parseHM(S.settings.dayStart);
  let startAt = startAtDefault;
  const perSubRows = () => sp.subs.map(sub => {
    const ps = sp.perSubject[sub.id];
    const done = subProgress(sub).pct;
    const leftTxt = ps.past ? T('k175') : (ps.dt ? T('k176') + fmtLeft(ps.dt.getTime() - Date.now()) : (ps.left === null ? '-' : T('k177') + ps.left + T('k178')));
    return (LANG === 'en' ? `<div class="sprint-subject" style="--c:${sub.c}">
      <div class="ss-head"><b>${esc(sub.name)}</b><span class="badge ghost">${esc(sub.code)}</span>
        <span class="ss-meta">${esc(arDate(ps.exam))} · ${esc(examTimeOf(sub.id))} · ${esc(leftTxt)}</span>
        <span class="badge ghost" style="margin-inline-start:auto">${done}% done</span></div>
      <div class="hint" style="margin-top:2px">⏳ Left ≈ <b>${(ps.coreMin / 60).toFixed(1)} h</b> core${ps.optMin ? ' + ' + (ps.optMin / 60).toFixed(1) + ' h bonus' : ''}</div>
    </div>` : `<div class="sprint-subject" style="--c:${sub.c}">
      <div class="ss-head"><b>${esc(sub.name)}</b><span class="badge ghost">${esc(sub.code)}</span>
        <span class="ss-meta">${esc(arDate(ps.exam))} · ${esc(examTimeOf(sub.id))} · ${esc(leftTxt)}</span>
        <span class="badge ghost" style="margin-inline-start:auto">${done}% خلص</span></div>
      <div class="hint" style="margin-top:2px">⏳ متبقي ≈ <b>${(ps.coreMin / 60).toFixed(1)} س</b> أساسية${ps.optMin ? ' + ' + (ps.optMin / 60).toFixed(1) + ' س بونص' : ''}</div>
    </div>`);
  }).join('');

  const buildRows = () => {
    return sp.days.map((dd, i) => {
      const perSub = sp.assign[dd] || {};
      const ids = [];
      const groups = [];
      sp.subs.forEach(sub => {
        const list = perSub[sub.id] || [];
        if (list.length) { groups.push({ sub, list }); list.forEach(x => ids.push(x)); }
      });
      const plan = sprintDayPlan(ids, startAt, i === sp.days.length - 1, [], null);
      const endT = plan.length ? plan[plan.length - 1].end : startAt;
      const d = new Date(dd + 'T00:00:00');
      return {
        date: dd, day: DAY_NAMES[d.getDay()], groups,
        hours: (ids.reduce((a, id) => a + topicMinutes(id).total, 0) / 60).toFixed(1),
        from: hmText(startAt), to: hmText(endT) + (endT >= 1440 ? ' (+1)' : ''),
        late: endT > 21 * 60,
        blocks: plan.filter(p => !p.isBreak).length,
        empty: !groups.length
      };
    });
  };
  let rows = buildRows();

  const render = () => {
    openModal(T('k180'), (LANG === 'en' ? `
      <div class="hint">The plan spreads your hours over <b>${rows.filter(r => !r.empty).length}</b> days, and the nearest exam comes first.
        Every subject has core topics (must be covered) and optional ones (bonus if time allows).</div>
      <div class="sprint-subject" style="--c:#22d3ee">
        <div class="ss-head"><b>Subject summary</b></div>
        ${perSubRows()}
      </div>
      <div class="field-row">
        <div class="field"><label>Max study hours per day</label>
          <input type="number" id="spCap" min="3" max="12" step="0.5" value="${capH}"></div>
        <div class="field"><label>Start the day at</label><input type="time" id="spStart" value="${S.settings.dayStart}"></div>
      </div>
      <div class="step-pick">
        <label><input type="checkbox" id="spLight"${SPRINT_LIGHT ? ' checked' : ''}> 🧪 Crush mode: less self-testing, focus on lecture + Sheet</label>
        <label><input type="checkbox" id="spWeekend"${SPRINT_SKIP_WEEKEND ? ' checked' : ''}> 🚫 Skip Friday and Saturday (rest days)</label>
      </div>
      ${rows.some(r => r.late) ? `<div class="hint warn">⚠️ One day will finish late (${rows.filter(r => r.late).map(r => r.to).join(' and ')}) — your study time will take more than the available hours, <b>the breaks</b> included. If you cannot handle it: start earlier or turn on Crush mode.</div>` : ''}
      ${(sp.passed && sp.passed.length) ? `<div class="hint">✅ <b>Exam done</b> — these exams already passed, so their topics are not in the plan: ${sp.passed.map(id => esc(subjectOfTopic(id).name + ' · ' + topicById(id).title)).join(' — ')}</div>` : ''}      <div class="sprint-days">
        ${rows.filter(r => !r.empty).map((r, i) => `
          <div class="sprint-day">
            <div class="sd-head"><b>${i + 1}. ${r.day} ${arDate(r.date)}</b><span class="badge">${r.hours} h</span></div>
            <div class="sd-time">🕘 ${r.from} → ${r.to} · ${r.blocks} sessions</div>
            ${r.groups.map(g => `<div class="sprint-subject" style="--c:${g.sub.c};margin-top:7px">
              <div class="ss-head"><b>${esc(g.sub.name)}</b></div>
              <ul>${g.list.map(id => '<li>' + ltr(topicById(id).n + '. ' + topicById(id).title) + '</li>').join('')}</ul>
            </div>`).join('')}
          </div>`).join('')}
      </div>
      <div class="form-actions">
        <button class="primary-btn" id="spRun">Generate daily plans</button>
        <button class="soft-btn" data-close="1">Cancel</button>
      </div>` : `
      <div class="hint">الخطة بتوزّع الساعات على <b>${rows.filter(r => !r.empty).length}</b> يوم، والأقرب امتحاناً ليه الأولوية.
        كل مادة ليها توبيكس أساسية (لازم تتغطي) واختيارية (بونص لو الوقت سمح).</div>
      <div class="sprint-subject" style="--c:#22d3ee">
        <div class="ss-head"><b>ملخص المواد</b></div>
        ${perSubRows()}
      </div>
      <div class="field-row">
        <div class="field"><label>أقصى ساعات مذاكرة في اليوم</label>
          <input type="number" id="spCap" min="3" max="12" step="0.5" value="${capH}"></div>
        <div class="field"><label>ابدأ اليوم الساعة</label><input type="time" id="spStart" value="${S.settings.dayStart}"></div>
      </div>
      <div class="step-pick">
        <label><input type="checkbox" id="spLight"${SPRINT_LIGHT ? ' checked' : ''}> 🧪 وضع الكrush: قلّل التدريب الذاتي وركز على المحاضرة + Sheet</label>
        <label><input type="checkbox" id="spWeekend"${SPRINT_SKIP_WEEKEND ? ' checked' : ''}> 🚫 استثني الجمعة والسبت (أيام راحة)</label>
      </div>
      ${rows.some(r => r.late) ? `<div class="hint warn">⚠️ في يوم هيخلص متأخر (${rows.filter(r => r.late).map(r => r.to).join(' و ')}) — وقتك في المذاكرة بياخد أكتر من المدة بـ<b>الاستراحات</b> كمان. لو مش هتستحمل: ابدأ بدري أو فعّل وضع الكrush.</div>` : ''}
      ${(sp.passed && sp.passed.length) ? `<div class="hint">✅ <b>امتحن وخلص</b> — الامتحان عدّى فالتوبيكس دي ما اتغطّتش في الخطة: ${sp.passed.map(id => esc(subjectOfTopic(id).name + ' · ' + topicById(id).title)).join(' — ')}</div>` : ''}      <div class="sprint-days">
        ${rows.filter(r => !r.empty).map((r, i) => `
          <div class="sprint-day">
            <div class="sd-head"><b>${i + 1}. ${r.day} ${arDate(r.date)}</b><span class="badge">${r.hours} س</span></div>
            <div class="sd-time">🕘 ${r.from} → ${r.to} · ${r.blocks} جلسة</div>
            ${r.groups.map(g => `<div class="sprint-subject" style="--c:${g.sub.c};margin-top:7px">
              <div class="ss-head"><b>${esc(g.sub.name)}</b></div>
              <ul>${g.list.map(id => '<li>' + ltr(topicById(id).n + '. ' + topicById(id).title) + '</li>').join('')}</ul>
            </div>`).join('')}
          </div>`).join('')}
      </div>
      <div class="form-actions">
        <button class="primary-btn" id="spRun">ولّد خطط الأيام</button>
        <button class="soft-btn" data-close="1">إلغاء</button>
      </div>`));
    $('#spStart').oninput = () => {
      const st = parseHM($('#spStart').value) || startAtDefault;
      S.settings.dayStart = $('#spStart').value;
      save();
      startAt = st;
      rows = buildRows();
      clearTimeout(window._spT);
      window._spT = setTimeout(render, 400);
    };
    $('#spCap').oninput = () => {
      capH = Math.max(3, Math.min(12, parseFloat($('#spCap').value) || 6));
      sp = sprintPlan(capH * 60);
      rows = buildRows();
      clearTimeout(window._spT);
      window._spT = setTimeout(render, 500);
    };
    $('#spLight').onchange = e => {
      SPRINT_LIGHT = e.target.checked;
      sp = sprintPlan(capH * 60);
      rows = buildRows();
      render();
    };
    $('#spWeekend').onchange = e => {
      SPRINT_SKIP_WEEKEND = e.target.checked;
      sp = sprintPlan(capH * 60);
      rows = buildRows();
      render();
    };
    $('#spRun').onclick = () => {
      const st = parseHM($('#spStart').value || S.settings.dayStart);
      sp.days.forEach((dd, i) => {
        const perSub = sp.assign[dd] || {};
        const ids = [];
        sp.subs.forEach(sub => { (perSub[sub.id] || []).forEach(x => ids.push(x)); });
        const plan = sprintDayPlan(ids, st, i === sp.days.length - 1, [], null);
        S.days[dd] = { plan: plan };
      });
      save(); closeModal();
      setDay(sp.days[0]);
      renderAll();
      toast(T('k182') + sp.days.length + T('k183'));
    };
  };
  render();
}

/* ============================================================
   10) TASK EDIT MODAL
   ============================================================ */
function openTaskModal(item) {
  const isNew = !item;
  const tpOpts = T('k184') + allTopics().map(t => {
    const sub = subjectOfTopic(t.id);
    return '<option value="' + t.id + '"' + (item && item.topicId === t.id ? ' selected' : '') + '>' +
      esc(sub.name) + ' · ' + t.n + '. ' + esc(t.title) + '</option>';
  }).join('');
  const stepOpts = Object.keys(STEP_META).map(k =>
    '<option value="' + k + '"' + (item && item.step === k ? ' selected' : '') + '>' + STEP_META[k].icon + ' ' + STEP_META[k].label + '</option>').join('');
  openModal(isNew ? T('k185') : T('k186'), (LANG === 'en' ? `
    <div class="field"><label>Title</label><input id="tTitle" value="${item ? item.title : ''}" placeholder="e.g. Lecture 3 + Sheet 3"></div>
    <div class="field-row">
      <div class="field"><label>From</label><input type="time" id="tStart" value="${item ? hmText(item.start) : '09:00'}"></div>
      <div class="field"><label>To</label><input type="time" id="tEnd" value="${item ? hmText(item.end) : '09:30'}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Topic</label><select id="tTopic">${tpOpts}</select></div>
      <div class="field"><label>Type</label><select id="tStep">${stepOpts}</select></div>
    </div>
    <div class="field"><label>Note</label><textarea id="tNote" rows="2" placeholder="optional">${item ? esc(item.note || '') : ''}</textarea></div>
    <div class="form-actions">
      <button class="primary-btn" id="tSave">Save</button>
      <button class="soft-btn" data-close="1">Cancel</button>
    </div>` : `
    <div class="field"><label>العنوان</label><input id="tTitle" value="${item ? item.title : ''}" placeholder="مثال: محاضرة 3 + Sheet 3"></div>
    <div class="field-row">
      <div class="field"><label>من</label><input type="time" id="tStart" value="${item ? hmText(item.start) : '09:00'}"></div>
      <div class="field"><label>إلى</label><input type="time" id="tEnd" value="${item ? hmText(item.end) : '09:30'}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>التوبيك</label><select id="tTopic">${tpOpts}</select></div>
      <div class="field"><label>النوع</label><select id="tStep">${stepOpts}</select></div>
    </div>
    <div class="field"><label>ملاحظة</label><textarea id="tNote" rows="2" placeholder="optional">${item ? esc(item.note || '') : ''}</textarea></div>
    <div class="form-actions">
      <button class="primary-btn" id="tSave">حفظ</button>
      <button class="soft-btn" data-close="1">إلغاء</button>
    </div>`));
  $('#tSave').onclick = () => {
    const title = $('#tTitle').value.trim() || T('k188');
    const s = parseHM($('#tStart').value), e = parseHM($('#tEnd').value);
    const obj = {
      id: item ? item.id : uid(), title, start: s, end: e > s ? e : s + 30,
      min: (e > s ? e : s + 30) - s, topicId: $('#tTopic').value || null,
      step: $('#tStep').value, note: $('#tNote').value.trim(), autoNote: false,
      done: item ? item.done : false
    };
    const p = dayPlan().plan;
    if (item) Object.assign(p.find(x => x.id === item.id), obj);
    else p.push(obj);
    save(); renderAll(); closeModal(); toast(T('k189'));
  };
}

/* ============================================================
   11) TOPICS
   ============================================================ */
function renderFilterChips() {
  const box = $('#filterChips');
  box.innerHTML = '';
  const mk = (label, val, color) => {
    const b = document.createElement('button');
    b.className = 'fchip' + (val === activeSubject ? ' on' : '');
    if (color) b.style.setProperty('--c', color);
    b.textContent = label;
    b.onclick = () => { activeSubject = val; renderAll(); };
    box.appendChild(b);
  };
  mk(T('k190'), 'all', '#a855f7');
  SUBJECTS.forEach(s => mk(s.name, s.id, s.c));
}
function renderTopics() {
  const grid = $('#topicsGrid');
  grid.innerHTML = '';
  const sub = subjectById(activeSubject);
  $('#topicsTitle').innerHTML = T('k191') + esc(sub.name);
  const list = activeSubject === 'all' ? SUBJECTS : [sub];
  list.forEach(s => {
    if (activeSubject === 'all') {
      const h = document.createElement('div');
      h.className = 'topics-sub-head';
      h.innerHTML = '<span style="color:' + s.c + '">' + esc(s.name) + '</span><span class="tsh-line"></span>' +
        '<span class="tsh-cnt">' + subProgress(s).done + '/' + subProgress(s).total + '</span>';
      grid.appendChild(h);
    }
    s.topics.forEach(t => {
      const st = S.topics[t.id];
      const done = t.steps.filter(x => st.steps[x]).length;
      const pct = Math.round((done / t.steps.length) * 100);
      const statusMap = { new: ['st-new', T('k192')], progress: ['st-progress', T('k193')], done: ['st-done', T('k194')], review: ['st-review', T('k195')] };
      const [sc, sl] = statusMap[st.status] || statusMap.new;
      const el = document.createElement('div');
      el.className = 'topic';
      el.style.setProperty('--c', t.c);
      el.style.setProperty('--c2', t.c2);
      el.style.setProperty('--glow', t.glow);
      el.innerHTML =
        '<div class="topic-head"><div class="topic-num">' + t.n + '</div><div><h3>' + esc(t.title) + '</h3></div>' +
        '<span class="status-pill ' + sc + '" style="margin-inline-start:auto">' + sl + '</span></div>' +
        '<div class="topic-ar">' + esc(t.ar) + '</div>' +
        '<div class="topic-steps">' + t.steps.map(x =>
          '<div class="tstep' + (st.steps[x] ? ' on' : '') + '"><span class="chk' + (st.steps[x] ? ' on' : '') + '">✓</span>' +
          STEP_META[x].icon + ' ' + t.stepLabels[x] + '</div>').join('') + '</div>' +
        '<div class="topic-foot">' +
        t.lectures.map(l => '<a href="' + enc(l) + '" target="_blank">📄 ' + esc(l.split('/').pop()) + '</a>').join('') +
        t.ws.map(w => '<a class="ws" href="' + enc(w) + '" target="_blank">📝 ' + esc(w.split('/').pop()) + '</a>').join('') +
        (!t.lectures.length && !t.ws.length ? T('k196') : '') +
        '</div>' +
        (s.hasVideos ? '<div class="vid-count">▶ ' + (st.videos.length ? st.videos.length + T('k197') : T('k198')) + '</div>' : '') +
        '<div class="tprog"><i style="width:' + pct + '%"></i></div>';
      el.onclick = () => openTopicModal(t.id);
      grid.appendChild(el);
    });
  });
}
function renderReview() {
  const box = $('#reviewList');
  const list = allTopics().filter(t => S.topics[t.id].status === 'review');
  box.innerHTML = '';
  if (!list.length) {
    box.innerHTML = T('k199');
    return;
  }
  list.forEach(t => {
    const sub = subjectOfTopic(t.id);
    const d = document.createElement('div');
    d.className = 'rev-chip';
    d.style.setProperty('--c', sub.c);
    d.innerHTML = '🔁 ' + ltr(t.n + '. ' + t.title) + '<small>' + esc(sub.name) + '</small>';
    d.onclick = () => openTopicModal(t.id);
    box.appendChild(d);
  });
}
function openTopicModal(id) {
  const t = topicById(id);
  const sub = subjectOfTopic(id);
  const st = S.topics[id];
  if (activeSubject !== 'all') activeSubject = sub.id;
  else renderTopics();
  const vidRows = st.videos.map((v, i) =>
    '<div class="vid-row"><span class="nm">' + (i + 1) + '. ' + esc(v.title || v.id) + '</span>' +
    '<button class="mini-btn" data-vid="' + v.id + '">▶</button>' +
    '<button class="mini-btn" data-rm="' + i + '">🗑</button></div>').join('');
  const stepBoxes = t.steps.map(x =>
    '<label><input type="checkbox" data-step="' + x + '"' + (st.steps[x] ? ' checked' : '') + '> ' +
    STEP_META[x].icon + ' ' + t.stepLabels[x] + '</label>').join('');
  const lecLinks = t.lectures.map(l => '<a class="soft-btn" href="' + enc(l) + '" target="_blank">📄 ' + esc(l.split('/').pop()) + '</a>').join('');
  const wsLinks = t.ws.map(w => '<a class="soft-btn" href="' + enc(w) + '" target="_blank">📝 ' + esc(w.split('/').pop()) + '</a>').join('');
  openModal(t.n + '. ' + t.title, (LANG === 'en' ? `
    <div class="hint" style="font-size:13px"><span style="color:${sub.c};font-weight:800">${esc(sub.name)}</span> · ${esc(sub.code)} — ${esc(t.title)}</div>
    <div class="field"><label>Status</label>
      <select id="tmStatus">
        <option value="new"${st.status === 'new' ? ' selected' : ''}>Not started</option>
        <option value="progress"${st.status === 'progress' ? ' selected' : ''}>In progress</option>
        <option value="review"${st.status === 'review' ? ' selected' : ''}>Needs review 🔁</option>
        <option value="done"${st.status === 'done' ? ' selected' : ''}>Done ✅</option>
      </select></div>
    <div class="field"><label>Topic steps</label><div class="step-pick" id="tmSteps">${stepBoxes}</div></div>

    ${sub.hasVideos ? `<div class="field"><label>Lecture videos</label>
      <div id="tmVids">${vidRows || '<div class="hint">No videos yet.</div>'}</div>
      <div class="vid-row"><input id="tmVidUrl" placeholder="Paste a YouTube link... (or the video ID)"><button class="soft-btn" id="tmAddVid">+ Add</button></div>
      <div class="hint">You can also load all the videos from the playlist: press the play button above.</div>
    </div>` : ''}

    <div class="field"><label>Your notes on this topic</label><textarea id="tmNotes" rows="3" placeholder="Rules, the mistakes you keep making...">${esc(st.notes || '')}</textarea></div>

    ${(t.lectures.length || t.ws.length) ? `<div class="field"><label>Course files</label>
      <div style="display:flex;gap:8px;flex-wrap:wrap">${lecLinks}${wsLinks}</div></div>` : ''}

    <div class="form-actions">
      <button class="primary-btn" id="tmFocus">🎯 Start a session on this topic</button>
      <button class="soft-btn" id="tmSave">Save</button>
      <button class="soft-btn" data-close="1">Close</button>
    </div>` : `
    <div class="hint" style="font-size:13px"><span style="color:${sub.c};font-weight:800">${esc(sub.name)}</span> · ${esc(sub.code)} — ${esc(t.ar)}</div>
    <div class="field"><label>الحالة</label>
      <select id="tmStatus">
        <option value="new"${st.status === 'new' ? ' selected' : ''}>لسه مبدأتش</option>
        <option value="progress"${st.status === 'progress' ? ' selected' : ''}>شغّال</option>
        <option value="review"${st.status === 'review' ? ' selected' : ''}>محتاج مراجعة 🔁</option>
        <option value="done"${st.status === 'done' ? ' selected' : ''}>خلصت ✅</option>
      </select></div>
    <div class="field"><label>خطوات التوبك</label><div class="step-pick" id="tmSteps">${stepBoxes}</div></div>

    ${sub.hasVideos ? `<div class="field"><label>فيديوهات الشرح</label>
      <div id="tmVids">${vidRows || '<div class="hint">مفيش فيديوهات لسه.</div>'}</div>
      <div class="vid-row"><input id="tmVidUrl" placeholder="الصق لينك يوتيوب… (أو ID الفيديو)"><button class="soft-btn" id="tmAddVid">＋ إضافة</button></div>
      <div class="hint">تقدر كمان تضيف الفيديوهات كلها من البلاي ليست: اضغط ▶ فوق.</div>
    </div>` : ''}

    <div class="field"><label>ملاحظاتك على التوبك</label><textarea id="tmNotes" rows="3" placeholder="القواعد، الأخطاء اللي بتوقعك فيها…">${esc(st.notes || '')}</textarea></div>

    ${(t.lectures.length || t.ws.length) ? `<div class="field"><label>روابط المادة</label>
      <div style="display:flex;gap:8px;flex-wrap:wrap">${lecLinks}${wsLinks}</div></div>` : ''}

    <div class="form-actions">
      <button class="primary-btn" id="tmFocus">🎯 ابدأ جلسة على التوبك</button>
      <button class="soft-btn" id="tmSave">حفظ</button>
      <button class="soft-btn" data-close="1">إغلاق</button>
    </div>`));
  $('#tmStatus').onchange = e => { S.topics[id].status = e.target.value; save(); renderTopics(); renderReview(); renderTop(); };
  if (sub.hasVideos) {
    $('#tmAddVid').onclick = () => {
      const raw = $('#tmVidUrl').value.trim();
      const vId = parseVideoId(raw);
      if (!vId) { toast(T('k201')); return; }
      S.topics[id].videos.push({ id: vId, title: 'Video ' + vId });
      save(); openTopicModal(id); toast(T('k202'));
    };
    $$('#tmVids [data-rm]').forEach(b => b.onclick = () => {
      S.topics[id].videos.splice(parseInt(b.dataset.rm, 10), 1); save(); openTopicModal(id);
    });
    $$('#tmVids [data-vid]').forEach(b => b.onclick = () => {
      openVideoModal(id, S.topics[id].videos.findIndex(v => v.id === b.dataset.vid));
    });
  }
  $('#tmSave').onclick = () => {
    S.topics[id].notes = $('#tmNotes').value;
    $$('#tmSteps input[data-step]').forEach(i => { S.topics[id].steps[i.dataset.step] = i.checked; });
    syncTopicStatus(id);
    save(); renderAll(); closeModal(); toast(T('k203'));
  };
  $('#tmFocus').onclick = () => { closeModal(); openFocus(id); };
}
function parseVideoId(raw) {
  if (!raw) return null;
  if (/^[\w-]{11}$/.test(raw)) return raw;
  const m = raw.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);
  return m ? m[1] : null;
}
function openVideoModal(topicId, idx) {
  const v = S.topics[topicId].videos[idx];
  if (!v) return;
  openModal('▶ ' + esc(v.title || v.id), (LANG === 'en' ? `
    <div class="video-box" style="height:340px;border-radius:16px;overflow:hidden;border:1px solid var(--stroke)">
      <iframe src="https://www.youtube-nocookie.com/embed/${v.id}?rel=0" allowfullscreen allow="encrypted-media; picture-in-picture"></iframe>
    </div>
    <div class="form-actions">
      <a class="soft-btn" href="https://www.youtube.com/watch?v=${v.id}" target="_blank">Open on YouTube</a>
      <button class="primary-btn" id="vmFocus">🎯 Play it in Focus Mode</button>
    </div>` : `
    <div class="video-box" style="height:340px;border-radius:16px;overflow:hidden;border:1px solid var(--stroke)">
      <iframe src="https://www.youtube-nocookie.com/embed/${v.id}?rel=0" allowfullscreen allow="encrypted-media; picture-in-picture"></iframe>
    </div>
    <div class="form-actions">
      <a class="soft-btn" href="https://www.youtube.com/watch?v=${v.id}" target="_blank">فتح على يوتيوب</a>
      <button class="primary-btn" id="vmFocus">🎯 شغّله في Focus Mode</button>
    </div>`));
  $('#vmFocus').onclick = () => { closeModal(); openFocus(topicId, idx); };
}

/* ============================================================
   12) PLAYLIST (Calc 2 فقط)
   ============================================================ */
function playlistIdFrom(url) {
  if (!url) return null;
  const m = url.match(/[?&]list=([\w-]+)/);
  if (m) return m[1];
  if (/^[\w-]{12,}$/.test(url.trim())) return url.trim();
  return null;
}
function openPlaylistModal() {
  const sub = subjectById('calc2');
  const pid = playlistIdFrom(sub.playlistUrl) || '';
  openModal(T('k205'), (LANG === 'en' ? `
    <div class="field"><label>Playlist link</label>
      <input id="plUrl" value="${esc(sub.playlistUrl || '')}" placeholder="https://www.youtube.com/playlist?list=..."></div>
    <div class="hint">Easiest way: open the playlist on YouTube → Copy → Copy playlist ID (it starts with PL...) and paste it here.</div>
    <div id="plPlayer" style="margin-top:10px"></div>
    <div class="form-actions">
      <button class="primary-btn" id="plSave">Save and load the videos</button>
      <button class="soft-btn" data-close="1">Close</button>
    </div>` : `
    <div class="field"><label>رابط البلاي ليست</label>
      <input id="plUrl" value="${esc(sub.playlistUrl || '')}" placeholder="https://www.youtube.com/playlist?list=..."></div>
    <div class="hint">الطريقة السهلة: افتح البلاي ليست في يوتيوب → Copy → Copy playlist ID (أول حروف PL...) والصقه هنا.</div>
    <div id="plPlayer" style="margin-top:10px"></div>
    <div class="form-actions">
      <button class="primary-btn" id="plSave">احفظ وارسم الفيديوهات</button>
      <button class="soft-btn" data-close="1">إغلاق</button>
    </div>`));
  if (pid) $('#plPlayer').innerHTML =
    '<div class="video-box" style="height:300px;border-radius:16px;overflow:hidden;border:1px solid var(--stroke)">' +
    '<iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=' + pid + '" allowfullscreen></iframe></div>';
  $('#plSave').onclick = () => {
    sub.playlistUrl = $('#plUrl').value.trim();
    save();
    const p = playlistIdFrom(sub.playlistUrl);
    if (p) $('#plPlayer').innerHTML =
      '<div class="video-box" style="height:300px;border-radius:16px;overflow:hidden;border:1px solid var(--stroke)">' +
      '<iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=' + p + '" allowfullscreen></iframe></div>';
    toast(T('k207'));
  };
}

/* ============================================================
   13) SETTINGS
   ============================================================ */
function openSettingsModal() {
  const s = S.settings;
  const examRows = SUBJECTS.map(sub => `
    <div class="field"><label>${esc(sub.name)} (${esc(sub.code)})</label>
      <div class="ex-edit-row">
        <input type="date" data-exam="${sub.id}" value="${examOf(sub.id) || ''}">
        <input type="time" data-examtime="${sub.id}" value="${examTimeOf(sub.id)}">
      </div></div>`).join('');
  openModal(T('k208'), (LANG === 'en' ? `
    <div class="field-row">
      <div class="field"><label>Focus session (minutes)</label><input type="number" id="stFocus" min="5" max="120" value="${s.focus}"></div>
      <div class="field"><label>Short break (minutes)</label><input type="number" id="stShort" min="1" max="30" value="${s.short}"></div>
      <div class="field"><label>Long break (minutes)</label><input type="number" id="stLong" min="5" max="60" value="${s.long}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Daily target hours</label><input type="number" id="stGoal" min="1" max="14" step="0.5" value="${s.goalHours}"></div>
      <div class="field"><label>Sessions before the long break</label><input type="number" id="stCycles" min="1" max="12" value="${s.cycles}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Study day start</label><input type="time" id="stStart" value="${s.dayStart}"></div>
      <div class="field"><label>Study day end</label><input type="time" id="stEnd" value="${s.dayEnd}"></div>
      <div class="field"><label>Start breaks automatically</label>
        <select id="stAuto"><option value="1"${s.autoContinue ? ' selected' : ''}>Yes</option><option value="0"${!s.autoContinue ? ' selected' : ''}>No</option></select></div>
    </div>
    <div class="field"><label>Midterm dates — every subject</label>
      <div class="field-row">${examRows}</div>
      <div class="hint">These dates come from the Nile University Fall 2026 schedule — edit them if anything changed.</div>
    </div>
    <div class="form-actions">
      <button class="primary-btn" id="stSave">Save settings</button>
      <button class="soft-btn" id="stExport">⬇ Export progress</button>
      <button class="soft-btn" id="stImport">⬆ Import</button>
      <button class="soft-btn danger" id="stReset">🗑 Clear all data</button>
    </div>
    <input type="file" id="stFile" accept="application/json" hidden>` : `
    <div class="field-row">
      <div class="field"><label>جلسة التركيز (دقيقة)</label><input type="number" id="stFocus" min="5" max="120" value="${s.focus}"></div>
      <div class="field"><label>بريك قصير (دقيقة)</label><input type="number" id="stShort" min="1" max="30" value="${s.short}"></div>
      <div class="field"><label>بريك طويل (دقيقة)</label><input type="number" id="stLong" min="5" max="60" value="${s.long}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>الساعات المستهدفة يومياً</label><input type="number" id="stGoal" min="1" max="14" step="0.5" value="${s.goalHours}"></div>
      <div class="field"><label>عدد جلسات قبل البريك الطويل</label><input type="number" id="stCycles" min="1" max="12" value="${s.cycles}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>بداية يوم المذاكرة</label><input type="time" id="stStart" value="${s.dayStart}"></div>
      <div class="field"><label>نهاية يوم المذاكرة</label><input type="time" id="stEnd" value="${s.dayEnd}"></div>
      <div class="field"><label>ابدأ البريك أوتوماتيك</label>
        <select id="stAuto"><option value="1"${s.autoContinue ? ' selected' : ''}>أيوه</option><option value="0"${!s.autoContinue ? ' selected' : ''}>لأ</option></select></div>
    </div>
    <div class="field"><label>مواعيد الميدتيرم — كل مادة</label>
      <div class="field-row">${examRows}</div>
      <div class="hint">التواريخ دي من جدول جامعة نILE للفصل الخريف 2026 — عدّلها لو اتغيرت.</div>
    </div>
    <div class="form-actions">
      <button class="primary-btn" id="stSave">حفظ الإعدادات</button>
      <button class="soft-btn" id="stExport">⬇ تصدير التقدم</button>
      <button class="soft-btn" id="stImport">⬆ استيراد</button>
      <button class="soft-btn danger" id="stReset">🗑 مسح كل البيانات</button>
    </div>
    <input type="file" id="stFile" accept="application/json" hidden>`));
  $('#stSave').onclick = () => {
    S.settings.focus = +$('#stFocus').value || 25;
    S.settings.short = +$('#stShort').value || 5;
    S.settings.long = +$('#stLong').value || 15;
    S.settings.goalHours = +$('#stGoal').value || 4;
    S.settings.cycles = +$('#stCycles').value || 4;
    S.settings.dayStart = $('#stStart').value || '09:00';
    S.settings.dayEnd = $('#stEnd').value || '23:00';
    S.settings.autoContinue = $('#stAuto').value === '1';
    $$('#modalBody input[data-exam]').forEach(i => { if (i.value) S.exams[i.dataset.exam] = i.value; });
    $$('#modalBody input[data-examtime]').forEach(i => { if (i.value) { S.examTimes = S.examTimes || {}; S.examTimes[i.dataset.examtime] = i.value; } });
    if (timer.mode === 'focus' && !timer.running) timer.remaining = S.settings.focus * 60;
    save(); renderAll(); closeModal(); toast(T('k210'));
  };
  $('#stExport').onclick = () => {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'midterm-progress-' + todayISO() + '.json';
    a.click();
  };
  $('#stImport').onclick = () => $('#stFile').click();
  $('#stFile').onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        S = Object.assign(defaultState(), JSON.parse(r.result));
        S.settings = Object.assign(defaultState().settings, S.settings || {});
        S.days = S.days || {}; S.topics = S.topics || {}; S.stats = S.stats || {}; S.exams = S.exams || {}; S.examTimes = S.examTimes || {};
        syncExamDefaults();
        SUBJECTS.forEach(sub => {
          sub.topics.forEach(t => {
            if (!S.topics[t.id]) S.topics[t.id] = { status: 'new', steps: {}, videos: [], notes: '' };
            t.steps.forEach(x => { if (S.topics[t.id].steps[x] === undefined) S.topics[t.id].steps[x] = false; });
          });
        });
        save(); renderAll(); closeModal(); toast(T('k211'));
      } catch (err) { toast(T('k212')); }
    };
    r.readAsText(f);
  };
  $('#stReset').onclick = () => {
    if (!confirm(T('k213'))) return;
    localStorage.removeItem(STORE_KEY);
    S = defaultState();
    syncExamDefaults();
    SUBJECTS.forEach(sub => {
      S.exams[sub.id] = sub.exam;
      sub.topics.forEach(t => {
        S.topics[t.id] = { status: 'new', steps: {}, videos: (SEED_VIDEOS[t.id] || []).slice(), notes: '' };
      });
    });
    save(); renderAll(); closeModal(); toast(T('k214'));
  };
}

/* ============================================================
   14) MODAL helpers
   ============================================================ */
function openModal(title, html) {
  $('#modalTitle').textContent = title;
  $('#modalTitle').setAttribute('dir', /^[\d▶]/.test(String(title)) ? 'ltr' : 'rtl');
  $('#modalBody').innerHTML = html;
  $('#modalWrap').hidden = false;
  $$('#modalWrap [data-close]').forEach(b => b.onclick = closeModal);
}
function closeModal() { $('#modalWrap').hidden = true; }

/* ============================================================
   15) TIMER
   ============================================================ */
function setMode(m) {
  timer.mode = m;
  timer.remaining = (m === 'focus' ? S.settings.focus : m === 'short' ? S.settings.short : S.settings.long) * 60;
  renderTimer();
}
function renderTimer() {
  const m = timer.mode;
  const label = m === 'focus' ? T('k215') : m === 'short' ? T('k216') : T('k217');
  const t = fmtClock(timer.remaining);
  $('#modeLabel').textContent = label;
  $('#timeLeft').textContent = t;
  $('#focusMode').textContent = label;
  $('#focusTime').textContent = t;
  const total = (m === 'focus' ? S.settings.focus : m === 'short' ? S.settings.short : S.settings.long) * 60;
  const off = 552.9 * (1 - timer.remaining / total);
  $('#ringFg').style.strokeDashoffset = off;
  $('#focusRingFg').style.strokeDashoffset = off;
  $('#cycleBadge').textContent = T('k218') + timer.cycle;
  $('#startBtn').textContent = timer.running ? '⏸' : '▶';
  $('#focusStartBtn').textContent = timer.running ? '⏸' : '▶';
  const d = $('#pomoDots');
  d.innerHTML = '';
  for (let i = 0; i < S.settings.cycles; i++) {
    const s = document.createElement('i');
    if (i < timer.cycle % S.settings.cycles || (timer.cycle > 0 && timer.cycle % S.settings.cycles === 0)) s.className = 'on';
    d.appendChild(s);
  }
  const p = dayPlan().plan.find(x => x.id === currentTaskId);
  $('#taskLabel').textContent = p ? p.title : T('k219');
  document.title = timer.running ? t + ' · ' + label + ' · Midterm Planner' : T('k220');
}
function startTimer() {
  if (timer.running) return;
  if (timer.remaining <= 0) timer.remaining = 60;
  timer.endAt = Date.now() + timer.remaining * 1000;
  timer.running = true;
  tick();
  timer.tick = setInterval(tick, 250);
  renderTimer();
  notifyPermission();
}
function pauseTimer() { timer.running = false; clearInterval(timer.tick); renderTimer(); }
function resetTimer() {
  pauseTimer();
  timer.remaining = (timer.mode === 'focus' ? S.settings.focus : timer.mode === 'short' ? S.settings.short : S.settings.long) * 60;
  renderTimer();
}
function tick() {
  if (!timer.running) return;
  const rem = Math.max(0, Math.round((timer.endAt - Date.now()) / 1000));
  if (rem !== timer.remaining) { timer.remaining = rem; renderTimer(); }
  if (rem <= 0) { onSessionEnd(); }
}
function onSessionEnd() {
  pauseTimer();
  beep();
  if (timer.mode === 'focus') {
    const st = todayStats();
    st.focusMin += S.settings.focus;
    st.sessions += 1;
    timer.cycle++;
    if (currentTaskId) {
      const p = dayPlan().plan.find(x => x.id === currentTaskId);
      if (p && !p.done) {
        p.done = true; st.tasksDone++;
        if (p.topicId && p.step !== 'custom') { S.topics[p.topicId].steps[p.step] = true; syncTopicStatus(p.topicId); }
      }
      currentTaskId = null;
    }
    toast(T('k221') + S.settings.focus + T('k222'));
    setMode(timer.cycle % S.settings.cycles === 0 ? 'long' : 'short');
    if (S.settings.autoContinue) setTimeout(startTimer, 1200);
  } else {
    toast(T('k223'));
    setMode('focus');
    if (S.settings.autoContinue) setTimeout(startTimer, 1200);
  }
  save(); renderAll();
}
function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.25, 0.5].forEach((d, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine'; o.frequency.value = [660, 880, 990][i];
      g.gain.setValueAtTime(0.001, ctx.currentTime + d);
      g.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + d + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + d + 0.24);
      o.start(ctx.currentTime + d); o.stop(ctx.currentTime + d + 0.26);
    });
  } catch (e) { }
}
function notifyPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    try { Notification.requestPermission(); } catch (e) { }
  }
}

/* ============================================================
   16) FOCUS MODE
   ============================================================ */
function openFocus(topicId, videoIdx) {
  focusCtx.topicId = topicId || null;
  focusCtx.videoIdx = videoIdx || 0;
  $('#focusOverlay').hidden = false;
  renderFocus();
  if (timer.mode !== 'focus') setMode('focus');
  if (!timer.running) startTimer();
}
function closeFocus() { $('#focusOverlay').hidden = true; }
function renderFocus() {
  const t = focusCtx.topicId ? topicById(focusCtx.topicId) : null;
  const sub = t ? subjectOfTopic(t.id) : null;
  $('#focusTopicBadge').innerHTML = t ? ltr(t.n + '. ' + t.title) : T('k224');
  const plan = dayPlan().plan;
  const cur = plan.find(x => x.id === currentTaskId);
  if (cur && cur.topicId) {
    const ct = topicById(cur.topicId);
    $('#focusTaskTitle').innerHTML = ltr(ct.n + '. ' + ct.title) + ' — ' + esc(STEP_META[cur.step] ? STEP_META[cur.step].label : cur.title);
  } else {
    $('#focusTaskTitle').textContent = cur ? cur.title : (t ? t.title : T('k225'));
  }
  const box = $('#focusVideoBox');
  const vids = t ? S.topics[t.id].videos : [];
  if (vids.length) {
    const v = vids[Math.min(focusCtx.videoIdx, vids.length - 1)];
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + v.id + '?rel=0&autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  } else if (sub && sub.hasVideos && sub.playlistUrl) {
    const pid = playlistIdFrom(sub.playlistUrl);
    if (pid) box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=' + pid + '" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    else box.innerHTML = T('k226');
  } else {
    /* مادة من غير فيديو: نعرض المحاضرة كـplaceholder مفيد */
    const firstLec = t && t.lectures[0];
    box.innerHTML = '<div class="video-placeholder" style="place-content:center;text-align:center;gap:10px">' +
      '<div class="vp-ico" style="font-size:34px">📚</div>' +
      '<p>' + (t ? esc(t.ar) : T('k227')) + '</p>' +
      '<small>' + (firstLec ? T('k228') : T('k229')) + '</small>' +
      '</div>';
  }
  $('#focusLec').href = (t && t.lectures[0]) ? enc(t.lectures[0]) : '#';
  $('#focusWs').href = (t && t.ws[0]) ? enc(t.ws[0]) : '#';
  $('#focusLec').style.display = (t && t.lectures[0]) ? '' : 'none';
  $('#focusWs').style.display = (t && t.ws[0]) ? '' : 'none';
  const curVid = vids.length ? vids[Math.min(focusCtx.videoIdx, vids.length - 1)] : null;
  const plUrl = sub ? sub.playlistUrl : '';
  $('#focusYT').href = curVid ? 'https://www.youtube.com/watch?v=' + curVid.id : (plUrl || '#');
  $('#focusYT').textContent = curVid ? T('k230') : T('k231');
  $('#focusYT').style.display = (curVid || plUrl) ? '' : 'none';
  const notes = t ? S.topics[t.id].notes : '';
  $('#focusNotes').value = notes;
}
$('#focusNotes').addEventListener('input', e => {
  if (focusCtx.topicId) { S.topics[focusCtx.topicId].notes = e.target.value; save(); }
});
$('#focusPrevVid').onclick = () => {
  const vids = focusCtx.topicId ? S.topics[focusCtx.topicId].videos : [];
  if (!vids.length) return;
  focusCtx.videoIdx = (focusCtx.videoIdx - 1 + vids.length) % vids.length; renderFocus();
};
$('#focusNextVid').onclick = () => {
  const vids = focusCtx.topicId ? S.topics[focusCtx.topicId].videos : [];
  if (!vids.length) return;
  focusCtx.videoIdx = (focusCtx.videoIdx + 1) % vids.length; renderFocus();
};

/* ============================================================
   17) DAY SWITCHING + RENDER ALL
   ============================================================ */
function setDay(iso) {
  currentDay = iso;
  $('#dayPicker').value = iso;
  renderAll();
}
function renderAll() {
  renderSubTabs();
  renderTop();
  renderExams();
  renderFilterChips();
  renderTimeline();
  renderTopics();
  renderReview();
  renderTimer();
}

/* ============================================================
   18) INIT
   ============================================================ */
function init() {
  load();
  timer.remaining = S.settings.focus * 60;

  if (location.protocol === 'file:') {
    const bar = document.createElement('div');
    bar.className = 'file-warn';
    bar.innerHTML = T('k232') +
      T('k233') +
      T('k234');
    document.body.insertBefore(bar, document.body.firstChild);
  }

  // نسخة مستضافة (GitHub Pages / أي دومين): ملفات الـPDF مش موجودة على السيرفر
  const _host = (location.hostname || '').toLowerCase();
  if (location.protocol !== 'file:' && _host && _host !== 'localhost' && _host !== '127.0.0.1' && _host !== '::1') {
    const bar = document.createElement('div');
    bar.className = 'file-warn';
    bar.innerHTML = T('k235') +
      T('k236') +
      T('k237');
    document.body.insertBefore(bar, document.body.firstChild);
  }

  setInterval(renderMidCountdown, 30000);
  $('#dayPicker').value = currentDay;
  $('#dayPicker').onchange = e => setDay(e.target.value);
  $('#prevDay').onclick = () => { const d = new Date(currentDay + 'T00:00:00'); d.setDate(d.getDate() - 1); setDay(isoLocal(d)); };
  $('#nextDay').onclick = () => { const d = new Date(currentDay + 'T00:00:00'); d.setDate(d.getDate() + 1); setDay(isoLocal(d)); };
  $('#todayBtn').onclick = () => setDay(todayISO());

  $('#startBtn').onclick = () => timer.running ? pauseTimer() : startTimer();
  $('#focusStartBtn').onclick = () => timer.running ? pauseTimer() : startTimer();
  $('#resetBtn').onclick = resetTimer;
  $('#focusResetBtn').onclick = resetTimer;
  $('#skipBtn').onclick = () => { pauseTimer(); timer.remaining = 1; onSessionEnd(); };

  $('#genPlanBtn').onclick = openGenModal;
  $('#genPlanEmpty').onclick = openGenModal;
  $('#sprintBtn').onclick = openSprintModal;
  $('#addTaskBtn').onclick = () => openTaskModal(null);
  $('#clearDayBtn').onclick = () => {
    if (!confirm(T('k238'))) return;
    S.days[currentDay] = { plan: [] }; save(); renderAll();
  };

  $$('.quick-set button').forEach(b => b.onclick = () => {
    $$('.quick-set button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    S.settings.focus = +b.dataset.min;
    timer.remaining = S.settings.focus * 60;
    save(); renderTimer();
  });

  $('#focusBtn').onclick = () => {
    const t = currentTaskId ? dayPlan().plan.find(x => x.id === currentTaskId) : null;
    let tid = t && t.topicId ? t.topicId : null;
    if (!tid) {
      const pool = activeSubject === 'all' ? allTopics() : subjectById(activeSubject).topics;
      tid = (pool.find(x => S.topics[x.id].status !== 'done') || pool[0]).id;
    }
    openFocus(tid);
  };
  $('#focusExitBtn').onclick = closeFocus;
  $('#settingsBtn').onclick = openSettingsModal;
  $('#playlistBtn').onclick = openPlaylistModal;
  $('#langBtn').onclick = () => setLang(LANG === 'en' ? 'ar' : 'en');
  $('#modalWrap').addEventListener('click', e => { if (e.target.dataset.close) closeModal(); });

  document.addEventListener('keydown', e => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if (e.key === 'Escape') {
      if (!$('#focusOverlay').hidden) closeFocus();
      else if (!$('#modalWrap').hidden) closeModal();
      return;
    }
    if (typing) return;
    if (e.code === 'Space') { e.preventDefault(); timer.running ? pauseTimer() : startTimer(); }
    if (e.key.toLowerCase() === 'r') resetTimer();
    if (e.key.toLowerCase() === 'f') $('#focusBtn').click();
    if (e.key === 'ArrowRight' && !$('#focusOverlay').hidden) $('#focusNextVid').click();
    if (e.key === 'ArrowLeft' && !$('#focusOverlay').hidden) $('#focusPrevVid').click();
  });

  document.addEventListener('click', e => {
    const slot = e.target.closest('.slot');
    if (slot && !e.target.closest('.slot-actions')) {
      const id = Array.from(document.querySelectorAll('.slot')).indexOf(slot);
      const p = dayPlan().plan.slice().sort((a, b) => a.start - b.start)[id];
      if (p) { currentTaskId = p.id; renderTimer(); toast(T('k239') + p.title); }
    }
  });

  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'en' ? 'ltr' : 'rtl';
  applyStaticLang();
  updateLangBtn();
  renderAll();
  console.log('Midterm planner ready — ' + SUBJECTS.length + ' subjects, ' + allTopics().length + ' topics');
}
document.addEventListener('DOMContentLoaded', init);
