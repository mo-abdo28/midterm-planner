/* ============================================================
   MIDTERM PLANNER · خطة ميدتيرم لكل المواد
   app logic — multi-subject
   ============================================================ */
'use strict';

/* ============================================================
   1) المواد والتوبيكس
   ============================================================ */
/* ملاحظة: كل مادة ليها topics بتاعتها + مواد (PDFs) + تاريخ ميدتيرم.
   قاعدة المجلد: Midterm Planner/ — فالمسارات النسبية '../<مادة>/<مجلد>/<ملف>'.
   subject.examTaken = هل خلص امتحانه (يتحسب من التاريخ).
   subject.core = التوبيكس الأساسية اللي لازم تتغطي، optional = بونص. */

const SUBJECTS = [
  {
    id: 'calc2',
    name: 'CALC 2',
    full: 'Calculus II — Integration',
    code: 'MTH 112',
    c: '#22d3ee', c2: '#818cf8',
    exam: '2026-11-10', examTime: '10:30',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLhS6ICSV4wuWys61gxA-4r00UJF48QUAm',
    hasVideos: true,
    topics: [
      {
        id: 'c1', n: 1, title: 'Revision & Indefinite Integral', ar: 'المراجعة والتكامل غير المحدد',
        c: '#22d3ee', c2: '#818cf8', glow: 'rgba(34,211,238,.20)',
        lectures: ['../Calc 2/Lectures/Lec 1.pdf'],
        ws: ['../Calc 2/Tutorials & Worksheets/Ws_1.pdf'],
        steps: ['video', 'lecture', 'ws', 'test'],
        stepLabels: { video: 'فيديو الشرح', lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['revision', 'indefinite', 'integral', 'antiderivative', 'basic']
      },
      {
        id: 'c2', n: 2, title: 'Substitution & Completing the Square', ar: 'التعويض وإكمال المربع',
        c: '#a855f7', c2: '#f472b6', glow: 'rgba(168,85,247,.20)',
        lectures: ['../Calc 2/Lectures/Lec2 summer 25 _part1 substitutin.pdf'],
        ws: ['../Calc 2/Tutorials & Worksheets/Ws_2.pdf'],
        steps: ['video', 'lecture', 'ws', 'test'],
        stepLabels: { video: 'فيديو الشرح', lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['substitution', 'completing', 'square', 'u-sub']
      },
      {
        id: 'c3', n: 3, title: 'Integration by Parts & Reduction Formula', ar: 'التكامل بالجزء وصيغة الاختزال',
        c: '#fbbf24', c2: '#fb923c', glow: 'rgba(251,191,36,.18)',
        lectures: ['../Calc 2/Lectures/lec_2 -summer25 part2 byparts.pdf', '../Calc 2/Lectures/Lec_4-reduction.pdf'],
        ws: ['../Calc 2/Tutorials & Worksheets/Ws_3 by Parts and reduction formula.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['parts', 'part', 'reduction', 'ibp', 'by parts']
      },
      {
        id: 'c4', n: 4, title: 'Trigonometric Integrals & Trig Substitution', ar: 'التكاملات المثلثية والتعويض المثلثي',
        c: '#34d399', c2: '#22d3ee', glow: 'rgba(52,211,153,.18)',
        lectures: ['../Calc 2/Lectures/Lecture 3 part 2.pdf', '../Calc 2/Lectures/Lec_4-Trig integral_trig sub.pdf'],
        ws: ['../Calc 2/Tutorials & Worksheets/Ws_4 Trig Integrals and Trig Substitution.pdf'],
        steps: ['video', 'lecture', 'ws', 'test'],
        stepLabels: { video: 'فيديو الشرح', lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['trig', 'trigonometric', 'sin', 'cos', 'tan', 'substitution']
      },
      {
        id: 'c5', n: 5, title: 'Partial Fractions', ar: 'الكسور الجزئية',
        c: '#fb7185', c2: '#f472b6', glow: 'rgba(251,113,133,.18)',
        lectures: ['../Calc 2/Lectures/Lec_5-patrial fractions.pdf'],
        ws: ['../Calc 2/Tutorials & Worksheets/Ws_5 Partial fractions.pdf'],
        steps: ['video', 'lecture', 'ws', 'test'],
        stepLabels: { video: 'فيديو الشرح', lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['partial', 'fraction', 'fractions']
      },
      {
        id: 'c6', n: 6, title: 'Numerical Integration', ar: 'التكامل العددي (ترابيزول + سيمبسون)',
        c: '#38bdf8', c2: '#818cf8', glow: 'rgba(56,189,248,.18)',
        lectures: [], ws: [],
        steps: ['video', 'test'],
        stepLabels: { video: 'فيديو الشرح', test: 'اختبار ذاتي' },
        kw: ['numerical', 'trapezoidal', 'simpson']
      },
      {
        id: 'c7', n: 7, title: 'Improper Integrals', ar: 'التكاملات غير المحدودة',
        c: '#c084fc', c2: '#f0abfc', glow: 'rgba(192,132,252,.18)',
        lectures: [], ws: [],
        steps: ['video', 'test'],
        stepLabels: { video: 'فيديو الشرح', test: 'اختبار ذاتي' },
        kw: ['improper', 'infinity', 'discontinuous']
      },
      {
        id: 'c8', n: 8, title: 'Applications of Definite Integral', ar: 'تطبيقات التكامل المحدود (طول القوس ومساحة السطح)',
        c: '#fb923c', c2: '#fbbf24', glow: 'rgba(251,146,60,.18)',
        lectures: [], ws: [],
        steps: ['video', 'test'],
        stepLabels: { video: 'فيديو الشرح', test: 'اختبار ذاتي' },
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
    code: 'CSCI 305',
    c: '#a855f7', c2: '#f472b6',
    exam: '2026-11-18', examTime: '12:00',
    hasVideos: false,
    topics: [
      {
        id: 'd1', n: 1, title: 'Database Environment & Course Roadmap', ar: 'بيئة قاعدة البيانات وخريطة الكورس',
        c: '#a855f7', c2: '#f472b6', glow: 'rgba(168,85,247,.18)',
        lectures: ['../Database/Lectures/Introduction -Fall2026.pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: 'المحاضرة', test: 'اختبار ذاتي' },
        kw: ['introduction', 'roadmap', 'overview']
      },
      {
        id: 'd2', n: 2, title: 'The ER Model — Concepts, Notation & Design Guidelines', ar: 'نموذج الكيانات والعلاقات ER',
        c: '#f472b6', c2: '#fb7185', glow: 'rgba(244,114,182,.18)',
        lectures: ['../Database/Lectures/Lecture 2 -ER - Scenario2.pdf'],
        ws: ['../Database/Labs/Lab 1.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Lab', test: 'اختبار ذاتي' },
        kw: ['er', 'entity', 'relationship', 'diagram']
      },
      {
        id: 'd3', n: 3, title: 'Enhanced ER Model — Specialization, Generalization & Constraints', ar: 'النموذج المحسّن EER والقيود',
        c: '#fb7185', c2: '#f43f5e', glow: 'rgba(251,113,133,.18)',
        lectures: ['../Database/Lectures/Lecture 3 (2) (1).pdf'],
        ws: ['../Database/Labs/lab 2.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Lab', test: 'اختبار ذاتي' },
        kw: ['eer', 'supertype', 'subtype', 'generalization', 'specialization']
      },
      {
        id: 'd4', n: 4, title: 'Logical Design & the Relational Model', ar: 'التصميم المنطقي والنموذج العلائقي',
        c: '#c084fc', c2: '#a855f7', glow: 'rgba(192,132,252,.18)',
        lectures: ['../Database/Lectures/Lecture 4.pdf'],
        ws: ['../Database/Labs/lab 3.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Lab', test: 'اختبار ذاتي' },
        kw: ['relational', 'mapping', 'schema', 'logical']
      },
      {
        id: 'd5', n: 5, title: 'ER/EER → Relational Schema: The 10 Mapping Cases', ar: 'تحويل ER/EER لجداول علائقية (١٠ حالات)',
        c: '#818cf8', c2: '#22d3ee', glow: 'rgba(129,140,248,.18)',
        lectures: ['../Database/Lectures/Lecture 4.pdf'],
        ws: ['../Database/Labs/lab 3.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Lab', test: 'اختبار ذاتي' },
        kw: ['mapping', 'cases', 'foreign', 'primary', 'referential']
      },
      {
        id: 'd6', n: 6, title: 'Relational Algebra — Operators, Set Operations & Joins', ar: 'الجبر العلائقي والعمليات والـjoins',
        c: '#22d3ee', c2: '#38bdf8', glow: 'rgba(34,211,238,.18)',
        lectures: ['../Database/Lectures/Lec (Relational Algebra) (2).pdf', '../Database/Lectures/Lec (Relational Algebra Exercise).pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: 'المحاضرة', test: 'اختبار ذاتي' },
        kw: ['relational', 'algebra', 'join', 'sigma', 'projection', 'division']
      },
      {
        id: 'd7', n: 7, title: 'SQL Foundations — Schema Definition & Constraints (DDL)', ar: 'أساسيات SQL وتعريف الجداول والقيود',
        c: '#34d399', c2: '#10b981', glow: 'rgba(52,211,153,.18)',
        lectures: ['../Database/Lectures/Lecture Sql Part 1 mod (1).pdf'],
        ws: ['../Database/Labs/Lab 4.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Lab', test: 'اختبار ذاتي' },
        kw: ['sql', 'ddl', 'create', 'alter', 'constraint', 'primary', 'foreign']
      },
      {
        id: 'd8', n: 8, title: 'SQL Data Manipulation & Querying (DML / DQL)', ar: 'إدخال وتعديل واستعلام البيانات',
        c: '#fbbf24', c2: '#f59e0b', glow: 'rgba(251,191,36,.18)',
        lectures: ['../Database/Lectures/Lecture Sql Part 1 mod (1).pdf'],
        ws: ['../Database/Labs/Lab 5.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Lab', test: 'اختبار ذاتي' },
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
    exam: '2026-11-19', examTime: '09:00',
    hasVideos: false,
    topics: [
      {
        id: 's1', n: 1, title: 'Course Overview — Algorithms vs Data Structures', ar: 'نظرة عامة: الخوارزميات مقابل هياكل البيانات',
        c: '#34d399', c2: '#10b981', glow: 'rgba(52,211,153,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 0 - Course Overview.pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: 'المحاضرة', test: 'اختبار ذاتي' },
        kw: ['overview', 'algorithm', 'efficiency', 'memory']
      },
      {
        id: 's2', n: 2, title: 'OOP & C++ Review I — Classes, Encapsulation, Constructors', ar: 'مراجعة OOP و C++ (الجزء الأول)',
        c: '#22d3ee', c2: '#818cf8', glow: 'rgba(34,211,238,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 01.pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: 'المحاضرة', test: 'اختبار ذاتي' },
        kw: ['class', 'object', 'encapsulation', 'constructor', 'destructor']
      },
      {
        id: 's3', n: 3, title: 'OOP & C++ Review II — Templates, Inheritance, Polymorphism', ar: 'مراجعة OOP و C++ (الجزء الثاني)',
        c: '#818cf8', c2: '#a855f7', glow: 'rgba(129,140,248,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 02.pdf'],
        ws: ['../Data Structrures/Labs/Lab 02.zip'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Lab', test: 'اختبار ذاتي' },
        kw: ['template', 'inheritance', 'polymorphism', 'overriding', 'generic']
      },
      {
        id: 's4', n: 4, title: 'Singly Linked Lists — Traversal, Insertion & Deletion', ar: 'القوائم المرتبطة الأحادية',
        c: '#fbbf24', c2: '#f59e0b', glow: 'rgba(251,191,36,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 03 - liked list p1 new.pdf'],
        ws: ['../Data Structrures/Labs/Lab 03.zip'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Lab', test: 'اختبار ذاتي' },
        kw: ['linked', 'list', 'sll', 'node', 'traversal']
      },
      {
        id: 's5', n: 5, title: 'Doubly & Circular Linked Lists', ar: 'القوائم المرتبطة المزدوجة والدائرية',
        c: '#fb923c', c2: '#f472b6', glow: 'rgba(251,146,60,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 04 - liked list p2 new.pdf'],
        ws: ['../Data Structrures/Labs/Lab 04.zip'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Lab', test: 'اختبار ذاتي' },
        kw: ['doubly', 'circular', 'dll', 'tail']
      },
      {
        id: 's6', n: 6, title: 'Stacks — LIFO, Implementations & Applications', ar: 'المكدسات: LIFO والتطبيقات',
        c: '#f472b6', c2: '#ec4899', glow: 'rgba(244,114,182,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 05 - Stacks new.pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: 'المحاضرة', test: 'اختبار ذاتي' },
        kw: ['stack', 'lifo', 'push', 'pop', 'delimiter', 'postfix']
      },
      {
        id: 's7', n: 7, title: 'Queues & Circular Queues', ar: 'الطوابير والطوابير الدائرية',
        c: '#ec4899', c2: '#a855f7', glow: 'rgba(236,72,153,.18)',
        lectures: ['../Data Structrures/Lectrures/Lecture 06 - Queues new.pdf'],
        ws: [],
        steps: ['lecture', 'test'],
        stepLabels: { lecture: 'المحاضرة', test: 'اختبار ذاتي' },
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
        id: 'p1', n: 1, title: 'Sample Space, Events & Counting Rules', ar: 'فضاء العينة والأحداث وقواعد العد',
        c: '#fbbf24', c2: '#f59e0b', glow: 'rgba(251,191,36,.18)',
        lectures: ['../Probability/lectures/Lec 1.pdf'],
        ws: ['../Probability/Tutorial/Sheet 1.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['sample', 'space', 'event', 'counting']
      },
      {
        id: 'p2', n: 2, title: 'Probability of an Event & Probability Laws', ar: 'احتمال الحدث وقوانين الاحتمال',
        c: '#fb923c', c2: '#f472b6', glow: 'rgba(251,146,60,.18)',
        lectures: ['../Probability/lectures/lec_2.pdf'],
        ws: ['../Probability/Tutorial/Sheet 2_update.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['probability', 'laws', 'axiom', 'addition']
      },
      {
        id: 'p3', n: 3, title: 'Conditional Probability', ar: 'الاحتمال الشرطي',
        c: '#f472b6', c2: '#ec4899', glow: 'rgba(244,114,182,.18)',
        lectures: ['../Probability/lectures/lec_2.pdf'],
        ws: ['../Probability/Tutorial/Sheet 3.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['conditional', 'given']
      },
      {
        id: 'p4', n: 4, title: 'Independence, Total Probability & Bayes’ Theorem', ar: 'الاستقلال واحتمال الإجمالي وbayes',
        c: '#ec4899', c2: '#a855f7', glow: 'rgba(236,72,153,.18)',
        lectures: ['../Probability/lectures/lec_3.pdf'],
        ws: ['../Probability/Tutorial/Sheet 3.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['independence', 'bayes', 'total', 'probability', 'reliability']
      },
      {
        id: 'p5', n: 5, title: 'Random Variables — PDF, CDF, Expectation & Variance', ar: 'المتغيرات العشوائية والتوقع والتباين',
        c: '#a855f7', c2: '#818cf8', glow: 'rgba(168,85,247,.18)',
        lectures: ['../Probability/lectures/lec_4.pdf'],
        ws: ['../Probability/Tutorial/Sheet 4.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['random', 'variable', 'expectation', 'variance', 'cdf']
      },
      {
        id: 'p6', n: 6, title: 'MGF & Discrete Distributions — Bernoulli & Binomial', ar: 'دالةMoment Generating والتوزيعات المتقطعة',
        c: '#818cf8', c2: '#22d3ee', glow: 'rgba(129,140,248,.18)',
        lectures: ['../Probability/lectures/lec_5.pdf'],
        ws: ['../Probability/Tutorial/Sheet 5.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['mgf', 'bernoulli', 'binomial', 'discrete']
      },
      {
        id: 'p7', n: 7, title: 'Poisson Distribution & Counting-Process Applications', ar: 'توزيع poisson وتطبيقات',
        c: '#22d3ee', c2: '#38bdf8', glow: 'rgba(34,211,238,.18)',
        lectures: ['../Probability/lectures/lec_5.pdf'],
        ws: ['../Probability/Tutorial/Sheet 6.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
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
        id: 'e1', n: 1, title: 'Circuit Elements — Charge, Current, Voltage, Power & Energy', ar: 'عناصر الدائرة: شحنة وتيار وجهود وطاقة',
        c: '#38bdf8', c2: '#818cf8', glow: 'rgba(56,189,248,.18)',
        lectures: ['../Circuits/Lectures/Lecture1 (Chapter 1).pdf'],
        ws: ['../Circuits/Tutorials/Sheet 1.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['charge', 'current', 'voltage', 'power', 'energy']
      },
      {
        id: 'e2', n: 2, title: "Ohm's Law, Kirchhoff's Laws & Series/Parallel Reduction", ar: 'قانون أوم وقوانين كيرشوف والتبسيط',
        c: '#818cf8', c2: '#a855f7', glow: 'rgba(129,140,248,.18)',
        lectures: ['../Circuits/Lectures/Lecture2 (Chapter 2).pdf'],
        ws: ['../Circuits/Tutorials/Sheet 2.pdf', '../Circuits/Tutorials/Sheet 3.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['ohm', 'kirchhoff', 'kcl', 'kvl', 'series', 'parallel', 'dependent']
      },
      {
        id: 'e3', n: 3, title: 'Nodal & Mesh Analysis Techniques', ar: 'تحليل العقد والشبكات (Chapter 3)',
        c: '#a855f7', c2: '#f472b6', glow: 'rgba(168,85,247,.18)',
        lectures: ['../Circuits/Lectures/Lecture3 (Chapter 3).pdf', '../Circuits/Lectures/Lecture4 (Chapter 3).pdf'],
        ws: ['../Circuits/Tutorials/Sheet 4.pdf', '../Circuits/Tutorials/Sheet 5.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
        kw: ['nodal', 'mesh', 'supernode', 'supermesh', 'cramer']
      },
      {
        id: 'e4', n: 4, title: 'Circuit Theorems — Superposition, Thévenin/Norton, Max Power', ar: 'نظريات الدوائر (Chapter 4)',
        c: '#f472b6', c2: '#fb7185', glow: 'rgba(244,114,182,.18)',
        lectures: ['../Circuits/Lectures/Lecture5 (Chapter 4).pdf'],
        ws: ['../Circuits/Tutorials/Sheet 6.pdf'],
        steps: ['lecture', 'ws', 'test'],
        stepLabels: { lecture: 'المحاضرة', ws: 'Sheet', test: 'اختبار ذاتي' },
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
const STEP_META = {
  video: { label: 'فيديو الشرح', icon: '▶', c: '#22d3ee' },
  lecture: { label: 'المحاضرة', icon: '📄', c: '#a855f7' },
  ws: { label: 'Sheet / Lab', icon: '📝', c: '#fbbf24' },
  test: { label: 'اختبار ذاتي', icon: '🧠', c: '#34d399' },
  custom: { label: 'مهمة', icon: '•', c: '#94a3b8' }
};
const QUOTES = [
  'كل سطر بتكتبه بيم الساعة — أحسن من ساعتين مذاكرة وبلا فايدة.',
  'اللي فاهمه دلوقتي أحسن من اللي حفظته امبارح.',
  'مفيش عبقري، فيه بس حد اتعلم صبر.',
  'خد 5 دقايق بريك، مخك بيحتاجها أكتر منك.',
  'سؤال واحد صعب النهارده أحسن من عشرة أسئلة سهلة بكره.',
  'الـSheet هو اللي بيخليك تجيب صح في الامتحان.',
  'لو مفيش وقت، اعمل بومودورو واحد بس — المهم تبتدي.',
  'امتحن نفسك في كل مادة — المذاكرة مش بتبقى مذاكرة لحد ما تختبر.',
  'الفرق بين ٩٠٪ و١٠٠٪ هو الراحة الصح في الوقت الصح.',
  'خلي عينك على الهدف: الدرجات هي اللي بتفرق.'
];
const STORE_KEY = 'midtermplanner.v1';
const DAY_NAMES = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

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
const EXAM_DATE_FIX = { calc2: ['2026-11-12', '2026-11-10'] };
const fmtLeft = ms => {
  if (ms == null) return '-';
  if (ms <= 0) return '\u0627\u0645\u062A\u062D\u0646';
  const tm = Math.floor(ms / 60000);
  const d = Math.floor(tm / 1440), h = Math.floor((tm % 1440) / 60), m = tm % 60;
  const p = [];
  if (d) p.push(d + '\u064A');
  if (d || h) p.push(h + '\u0633');
  p.push(m + '\u062F');
  return p.join(' ');
};
const fmtLeftShort = ms => {
  if (ms == null) return '-';
  if (ms <= 0) return '\u0627\u0645\u062A\u062D\u0646';
  const tm = Math.floor(ms / 60000);
  const d = Math.floor(tm / 1440), h = Math.floor((tm % 1440) / 60);
  if (d) return d + '\u064A ' + h + '\u0633';
  if (h) return h + '\u0633';
  return (tm % 60) + '\u062F';
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
    return new Date(iso + 'T00:00:00').toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' });
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
      (_passed ? '<span class="st-badge">&#10003;</span>' : (dl !== null && dl >= 0 ? '<span class="st-badge">' + (dl === 0 ? '\u0627\u0644\u064A\u0648\u0645' : dl + '\u064A') + '</span>' : '<span class="st-badge">\u2014</span>'));
    b.onclick = () => { activeSubject = sub.id; renderAll(); };
    box.appendChild(b);
  });
}
function renderTop() {
  const st = todayStats();
  const goal = S.settings.goalHours * 60;
  $('#statFocus').textContent = st.focusMin;
  $('#statFocusGoal').textContent = '/ ' + goal + ' د';
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
      $('#nextExamClock').textContent = '\u0623\u0642\u0631\u0628 \u0645\u064A\u062F\u062A\u064A\u0631\u0645';
    }
  } else {
    if (chip) { chip.textContent = '-'; sub.textContent = 'ميدتيرم'; }
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
      '<div class="ex-left">' + (dt ? (dt.getTime() <= Date.now() ? 'امتحن' : fmtLeft(dt.getTime() - Date.now())) : (d === null ? '-' : d + ' يوم')) +
      '<small>' + esc(s.code) + '</small></div>';
    el.onclick = () => { activeSubject = s.id; renderAll(); };
    el.style.cursor = 'pointer';
    box.appendChild(el);
  });
}

/* ============================================================
   7) TIMELINE
   ============================================================ */
function renderTimeline() {
  const box = $('#timeline');
  const plan = dayPlan().plan.slice().sort((a, b) => a.start - b.start);
  box.innerHTML = '';
  $('#timelineEmpty').hidden = plan.length > 0;
  $('#planBadge').textContent = plan.length + ' مهمة · ' + Math.round(plan.reduce((a, b) => a + (b.min || 0), 0)) + ' د';

  plan.forEach(item => {
    const meta = STEP_META[item.step] || STEP_META.custom;
    const tp = item.topicId ? topicById(item.topicId) : null;
    const sub = tp ? subjectOfTopic(tp.id) : null;
    const el = document.createElement('div');
    el.className = 'slot' + (item.done ? ' done' : '');
    el.style.setProperty('--c', tp ? tp.c : meta.c);
    const titleHtml = tp
      ? ltr(tp.n + '. ' + tp.title) + (item.step !== 'custom' ? ' — ' + esc(STEP_META[item.step].label) : '')
      : esc(item.title);
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
        '<div class="slot-sub">' + (item.note ? esc(item.note) : (tp ? esc(tp.ar) : 'مهمة عامة')) + '</div>' +
      '</div>' +
      '<div class="slot-actions">' +
        fileLink +
        '<button class="chk' + (item.done ? ' on' : '') + '" data-act="toggle" title="خلصت">✓</button>' +
        '<button class="mini-btn" data-act="edit" title="تعديل">✎</button>' +
        '<button class="mini-btn" data-act="del" title="مسح">🗑</button>' +
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
  const orderOpts = '<option value="seq">التسلسل العادي</option>' +
    '<option value="weak">الأضعف الأول (اللي فاضل)</option>' +
    '<option value="review">المراجعة أولاً</option>' +
    '<option value="urgent">الأقرب ميدتيرم الأول</option>';
  openModal('⚡ توليد خطة اليوم', `
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
    </div>`);
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
        note: 'الهدف: ' + STEP_META[step].label + ' (' + tp.ar + ')',
        done: false
      });
      t += len; made++;
      const isLong = (topicIdx % 2 === 1);
      plan.push({
        id: uid(), start: t, end: t + (isLong ? S.settings.long : S.settings.short),
        min: isLong ? S.settings.long : S.settings.short,
        topicId: null, step: 'custom', title: isLong ? '☕ بريك طويل' : '☕ بريك قصير',
        note: 'اشرب مية، قوم اتمشّى، بُص بعيد عن الشاشة.', done: false, isBreak: true
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
  toast('تم توليد خطة: ' + plan.filter(p => !p.isBreak).length + ' جلسة');
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
      title: isLong ? '☕ بريك طويل' : '☕ بريك',
      note: 'قوم اتمشّى، اشرب مية، بُص بعيد عن الشاشة.', done: false, isBreak: true
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
            note: (isOptional ? 'أولوية أخيرة — لو الوقت سمح. ' : '') +
              'الهدف: ' + STEP_META[st.step].label + ' (' + tp.ar + ')', done: false
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
      title: '🍽️ غدا — كلّي وامشي شوية', note: 'بعدها رجوع بالتركيز.', done: false, isBreak: true
    });
    for (let i = li + 1; i < plan.length; i++) { plan[i].start += 60; plan[i].end += 60; }
  }
  if (isLast) {
    plan.push({
      id: uid(), start: t, end: t + 90, min: 90, topicId: null, step: 'custom',
      title: '🎯 مراجعة نهائية: ملخص + 30 سؤال من كل الـSheets',
      note: 'ركّز على الأخطاء اللي وقعت فيها، مش على الجديد.', done: false
    });
    t += 90;
    plan.push({
      id: uid(), start: t, end: t + 30, min: 30, topicId: null, step: 'custom',
      title: '🌙 مراجعة خفيفة قبل النوم', note: 'راجع ورقة الملخص بس ونام بدري.', done: false
    });
  }
  return plan;
}
function openSprintModal() {
  let capH = Math.max(3, Math.min(12, S.settings.goalHours));
  let sp = sprintPlan(capH * 60);
  if (!sp.days.length) {
    openModal('🔥 خطة الميدتيرم', '<div class="hint">مفيش أيام متبقية (أو التواريخ عدّت). حدّث مواعيد الميدتيرم من الإعدادات.</div>');
    return;
  }
  const startAtDefault = parseHM(S.settings.dayStart);
  let startAt = startAtDefault;
  const perSubRows = () => sp.subs.map(sub => {
    const ps = sp.perSubject[sub.id];
    const done = subProgress(sub).pct;
    const leftTxt = ps.past ? 'امتحن ✅' : (ps.dt ? 'باقي ' + fmtLeft(ps.dt.getTime() - Date.now()) : (ps.left === null ? '-' : 'باقي ' + ps.left + ' يوم'));
    return `<div class="sprint-subject" style="--c:${sub.c}">
      <div class="ss-head"><b>${esc(sub.name)}</b><span class="badge ghost">${esc(sub.code)}</span>
        <span class="ss-meta">${esc(arDate(ps.exam))} · ${esc(examTimeOf(sub.id))} · ${esc(leftTxt)}</span>
        <span class="badge ghost" style="margin-inline-start:auto">${done}% خلص</span></div>
      <div class="hint" style="margin-top:2px">⏳ متبقي ≈ <b>${(ps.coreMin / 60).toFixed(1)} س</b> أساسية${ps.optMin ? ' + ' + (ps.optMin / 60).toFixed(1) + ' س بونص' : ''}</div>
    </div>`;
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
    openModal('🔥 خطة الميدتيرم — كل المواد', `
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
            <div class="sd-head"><b>${i + 1}. ${r.day} ${r.date}</b><span class="badge">${r.hours} س</span></div>
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
      </div>`);
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
      toast('تم توليد خطة ' + sp.days.length + ' يوم لكل المواد 🔥');
    };
  };
  render();
}

/* ============================================================
   10) TASK EDIT MODAL
   ============================================================ */
function openTaskModal(item) {
  const isNew = !item;
  const tpOpts = '<option value="">— بدون توبيك —</option>' + allTopics().map(t => {
    const sub = subjectOfTopic(t.id);
    return '<option value="' + t.id + '"' + (item && item.topicId === t.id ? ' selected' : '') + '>' +
      esc(sub.name) + ' · ' + t.n + '. ' + esc(t.title) + '</option>';
  }).join('');
  const stepOpts = Object.keys(STEP_META).map(k =>
    '<option value="' + k + '"' + (item && item.step === k ? ' selected' : '') + '>' + STEP_META[k].icon + ' ' + STEP_META[k].label + '</option>').join('');
  openModal(isNew ? '＋ مهمة جديدة' : '✎ تعديل المهمة', `
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
    </div>`);
  $('#tSave').onclick = () => {
    const title = $('#tTitle').value.trim() || 'مهمة';
    const s = parseHM($('#tStart').value), e = parseHM($('#tEnd').value);
    const obj = {
      id: item ? item.id : uid(), title, start: s, end: e > s ? e : s + 30,
      min: (e > s ? e : s + 30) - s, topicId: $('#tTopic').value || null,
      step: $('#tStep').value, note: $('#tNote').value.trim(), done: item ? item.done : false
    };
    const p = dayPlan().plan;
    if (item) Object.assign(p.find(x => x.id === item.id), obj);
    else p.push(obj);
    save(); renderAll(); closeModal(); toast('تم الحفظ');
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
  mk('📚 كل المواد', 'all', '#a855f7');
  SUBJECTS.forEach(s => mk(s.name, s.id, s.c));
}
function renderTopics() {
  const grid = $('#topicsGrid');
  grid.innerHTML = '';
  const sub = subjectById(activeSubject);
  $('#topicsTitle').innerHTML = '📚 التوبيكس — ' + esc(sub.name);
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
      const statusMap = { new: ['st-new', 'لسه مبدأتش'], progress: ['st-progress', 'شغّال'], done: ['st-done', 'خلص ✅'], review: ['st-review', 'محتاج مراجعة'] };
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
        (!t.lectures.length && !t.ws.length ? '<span class="vid-count">🎬 الفيديو هو المصدر (مفيش PDF محلي)</span>' : '') +
        '</div>' +
        (s.hasVideos ? '<div class="vid-count">▶ ' + (st.videos.length ? st.videos.length + ' فيديو' : 'لا يوجد فيديو') + '</div>' : '') +
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
    box.innerHTML = '<div class="hint">مفيش توبيكس في قائمة المراجعة. لو محتاج حاجة تُعاد، افتح التوبك واختار حالة "محتاج مراجعة".</div>';
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
  openModal(t.n + '. ' + t.title, `
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
    </div>`);
  $('#tmStatus').onchange = e => { S.topics[id].status = e.target.value; save(); renderTopics(); renderReview(); renderTop(); };
  if (sub.hasVideos) {
    $('#tmAddVid').onclick = () => {
      const raw = $('#tmVidUrl').value.trim();
      const vId = parseVideoId(raw);
      if (!vId) { toast('لينك يوتيوب غير صحيح'); return; }
      S.topics[id].videos.push({ id: vId, title: 'Video ' + vId });
      save(); openTopicModal(id); toast('تمت إضافة الفيديو');
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
    save(); renderAll(); closeModal(); toast('تم الحفظ');
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
  openModal('▶ ' + esc(v.title || v.id), `
    <div class="video-box" style="height:340px;border-radius:16px;overflow:hidden;border:1px solid var(--stroke)">
      <iframe src="https://www.youtube-nocookie.com/embed/${v.id}?rel=0" allowfullscreen allow="encrypted-media; picture-in-picture"></iframe>
    </div>
    <div class="form-actions">
      <a class="soft-btn" href="https://www.youtube.com/watch?v=${v.id}" target="_blank">فتح على يوتيوب</a>
      <button class="primary-btn" id="vmFocus">🎯 شغّله في Focus Mode</button>
    </div>`);
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
  openModal('▶ بلاي ليست يوتيوب — Calculus 2', `
    <div class="field"><label>رابط البلاي ليست</label>
      <input id="plUrl" value="${esc(sub.playlistUrl || '')}" placeholder="https://www.youtube.com/playlist?list=..."></div>
    <div class="hint">الطريقة السهلة: افتح البلاي ليست في يوتيوب → Copy → Copy playlist ID (أول حروف PL...) والصقه هنا.</div>
    <div id="plPlayer" style="margin-top:10px"></div>
    <div class="form-actions">
      <button class="primary-btn" id="plSave">احفظ وارسم الفيديوهات</button>
      <button class="soft-btn" data-close="1">إغلاق</button>
    </div>`);
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
    toast('تم حفظ البلاي ليست');
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
  openModal('⚙ الإعدادات', `
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
    <input type="file" id="stFile" accept="application/json" hidden>`);
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
    save(); renderAll(); closeModal(); toast('تم حفظ الإعدادات');
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
        save(); renderAll(); closeModal(); toast('تم الاستيراد');
      } catch (err) { toast('ملف غير صالح'); }
    };
    r.readAsText(f);
  };
  $('#stReset').onclick = () => {
    if (!confirm('متأكد؟ هيمسح كل التقدّم والخطة.')) return;
    localStorage.removeItem(STORE_KEY);
    S = defaultState();
    syncExamDefaults();
    SUBJECTS.forEach(sub => {
      S.exams[sub.id] = sub.exam;
      sub.topics.forEach(t => {
        S.topics[t.id] = { status: 'new', steps: {}, videos: (SEED_VIDEOS[t.id] || []).slice(), notes: '' };
      });
    });
    save(); renderAll(); closeModal(); toast('تم المسح');
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
  const label = m === 'focus' ? 'تركيز' : m === 'short' ? 'بريك قصير' : 'بريك طويل';
  const t = fmtClock(timer.remaining);
  $('#modeLabel').textContent = label;
  $('#timeLeft').textContent = t;
  $('#focusMode').textContent = label;
  $('#focusTime').textContent = t;
  const total = (m === 'focus' ? S.settings.focus : m === 'short' ? S.settings.short : S.settings.long) * 60;
  const off = 552.9 * (1 - timer.remaining / total);
  $('#ringFg').style.strokeDashoffset = off;
  $('#focusRingFg').style.strokeDashoffset = off;
  $('#cycleBadge').textContent = 'جلسة ' + timer.cycle;
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
  $('#taskLabel').textContent = p ? p.title : 'مفيش مهمة شغالة';
  document.title = timer.running ? t + ' · ' + label + ' · Midterm Planner' : 'Midterm Planner · خطة الميدتيرم';
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
    toast('✅ خلصت جلسة تركيز (' + S.settings.focus + ' د) — برااايك! ☕');
    setMode(timer.cycle % S.settings.cycles === 0 ? 'long' : 'short');
    if (S.settings.autoContinue) setTimeout(startTimer, 1200);
  } else {
    toast('☕ خلص البريك — يلا نرجع نشتغل');
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
  $('#focusTopicBadge').innerHTML = t ? ltr(t.n + '. ' + t.title) : 'جلسة عامة';
  const plan = dayPlan().plan;
  const cur = plan.find(x => x.id === currentTaskId);
  if (cur && cur.topicId) {
    const ct = topicById(cur.topicId);
    $('#focusTaskTitle').innerHTML = ltr(ct.n + '. ' + ct.title) + ' — ' + esc(STEP_META[cur.step] ? STEP_META[cur.step].label : cur.title);
  } else {
    $('#focusTaskTitle').textContent = cur ? cur.title : (t ? t.title : 'جلسة تركيز');
  }
  const box = $('#focusVideoBox');
  const vids = t ? S.topics[t.id].videos : [];
  if (vids.length) {
    const v = vids[Math.min(focusCtx.videoIdx, vids.length - 1)];
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + v.id + '?rel=0&autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  } else if (sub && sub.hasVideos && sub.playlistUrl) {
    const pid = playlistIdFrom(sub.playlistUrl);
    if (pid) box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=' + pid + '" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    else box.innerHTML = '<div class="video-placeholder"><div class="vp-ico">▶</div><p>مفيش فيديو متحدّد</p></div>';
  } else {
    /* مادة من غير فيديو: نعرض المحاضرة كـplaceholder مفيد */
    const firstLec = t && t.lectures[0];
    box.innerHTML = '<div class="video-placeholder" style="place-content:center;text-align:center;gap:10px">' +
      '<div class="vp-ico" style="font-size:34px">📚</div>' +
      '<p>' + (t ? esc(t.ar) : 'جلسة تركيز') + '</p>' +
      '<small>' + (firstLec ? 'افتح المحاضرة من اللينك تحت 👇' : 'ركّز وامشي مع الخطة') + '</small>' +
      '</div>';
  }
  $('#focusLec').href = (t && t.lectures[0]) ? enc(t.lectures[0]) : '#';
  $('#focusWs').href = (t && t.ws[0]) ? enc(t.ws[0]) : '#';
  $('#focusLec').style.display = (t && t.lectures[0]) ? '' : 'none';
  $('#focusWs').style.display = (t && t.ws[0]) ? '' : 'none';
  const curVid = vids.length ? vids[Math.min(focusCtx.videoIdx, vids.length - 1)] : null;
  const plUrl = sub ? sub.playlistUrl : '';
  $('#focusYT').href = curVid ? 'https://www.youtube.com/watch?v=' + curVid.id : (plUrl || '#');
  $('#focusYT').textContent = curVid ? '↗ افتح على يوتيوب' : '↗ افتح البلاي ليست';
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
    bar.innerHTML = '⚠️ فتحت الملف مباشرة، فمش هتشتغل فيديوهات يوتيوب جوّه الصفحة. ' +
      'افتح الموقع من ملف <b>افتح-الموقع.bat</b> في نفس الفولدر (أو من http://localhost) — ' +
      'والفيديوهات هتشتغل، والروابط هتفتح عادي.';
    document.body.insertBefore(bar, document.body.firstChild);
  }

  // نسخة مستضافة (GitHub Pages / أي دومين): ملفات الـPDF مش موجودة على السيرفر
  const _host = (location.hostname || '').toLowerCase();
  if (location.protocol !== 'file:' && _host && _host !== 'localhost' && _host !== '127.0.0.1' && _host !== '::1') {
    const bar = document.createElement('div');
    bar.className = 'file-warn';
    bar.innerHTML = 'ℹ️ نسخة GitHub: ملفات المحاضرات والـSheets والـLabs (PDF) <b>مش مرفوعة</b> في المستودع، ' +
      ' فالروابط هترجع 404. نزّل مجلدات الكورسات (Calc 2 / Database / Data Structrures / Probability / Circuits) ' +
      'جنب فولدر الموقع وشغّل <b>افتح-الموقع.bat</b> عشان كل الروابط تشتغل.';
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
    if (!confirm('مسح خطة اليوم؟')) return;
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
      if (p) { currentTaskId = p.id; renderTimer(); toast('المهمة الحالية: ' + p.title); }
    }
  });

  renderAll();
  console.log('Midterm planner ready — ' + SUBJECTS.length + ' subjects, ' + allTopics().length + ' topics');
}
document.addEventListener('DOMContentLoaded', init);
