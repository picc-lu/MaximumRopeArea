const translations = {
    en: {
        title: "Maximum Rope Area",
        subtitle: "How much area can <em>n</em> unit-length soft ropes enclose?",
        rulesHeading: "Rules",
        rules: [
            "Each rope has length <strong>1</strong> and cannot be stretched.",
            "Rope ends <strong>cannot be left dangling</strong>; every end must be connected to another rope end, attach to the same rope, or rest on another rope.",
            "Ropes may touch or overlap one another, but they <strong>cannot cross through</strong> each other (no transverse intersection).",
            "The maximum area of any single enclosed region <strong>cannot exceed 1</strong>.",
            "The goal is to <strong>maximize the total enclosed area</strong>."
        ],
        labelTouch: "✔️ Allowed: Touch / Overlap",
        labelEnd: "✔️ Allowed: End rests on rope",
        labelCross: "❌ Not Allowed: Cross through",
        labelDangling: "❌ Not Allowed: Dangling end",
        configsHeading: "Best Known Configurations",
        thN: "n", thExact: "Exact Area", thApprox: "Approx. Area", thConfig: "Configuration", thNotes: "Notes / Found by", thDate: "Date", thHistory: "History",
        footerContribTitle: "How to Contribute",
        footerContribDesc: "We welcome contributions of new configurations or improved exact bounds for any value of <em>n</em>!",
        footerOpt1Title: "Option 1: Submit a Pull Request (Recommended)",
        footerOpt1List: [
            "Fork this repository.",
            "Add your configuration to the <code>ropeData</code> array in <code>js/script.js</code>.",
            "If you have an image (e.g., <code>10.png</code>), upload it to the <code>data/</code> folder.",
            "Commit your changes and submit a Pull Request."
        ],
        footerOpt2Title: "Option 2: Send an Email",
        footerOpt2Desc: "If you are not familiar with GitHub, you can simply send your configuration, mathematical bounds, and images via email to:",
        footerOpt2Include: "Please include:",
        footerOpt2List: [
            "The number of ropes (<em>n</em>)",
            "The exact area (if known)",
            "The approximate area (to 5 decimal places)",
            "A brief description or proof of the configuration",
            "Any diagrams or images"
        ],
        footerCredit: 'Inspired by <a href="https://erich-friedman.github.io/packing/fence/" target="_blank" rel="noopener">Erich Friedman’s Maximum Fence Area</a>. Hosted on GitHub Pages.'
    },
    zh: {
        title: "软绳最大面积",
        subtitle: "<em>n</em> 条长度为 1 的软绳最多能围成多大面积？",
        rulesHeading: "规则",
        rules: [
            "每根绳子的长度为 <strong>1</strong> 且不可拉伸。",
            "绳头 <strong>不能悬空</strong>；每个绳头必须连接到另一个绳头、连接到自己，或者搭在另一根绳子上。",
            "绳子之间可以接触或重叠，但 <strong>不能相互穿透</strong>（禁止十字交叉）。",
            "任何单个封闭区域的最大面积 <strong>不能超过 1</strong>。",
            "目标是 <strong>最大化总封闭面积</strong>。"
        ],
        labelTouch: "✔️ 允许：接触 / 重叠",
        labelEnd: "✔️ 允许：绳头搭在绳子上",
        labelCross: "❌ 不允许：相互穿透",
        labelDangling: "❌ 不允许：绳头悬空",
        configsHeading: "已知最佳构型",
        thN: "n", thExact: "精确面积", thApprox: "近似面积", thConfig: "构型图", thNotes: "发现者 / 备注", thDate: "日期", thHistory: "历史记录",
        footerContribTitle: "如何贡献",
        footerContribDesc: "我们欢迎任何关于 <em>n</em> 的新构型或更好的精确边界！",
        footerOpt1Title: "方式 1：提交 Pull Request（推荐）",
        footerOpt1List: [
            "Fork 本仓库。",
            "在 <code>js/script.js</code> 的 <code>ropeData</code> 数组中添加你的构型。",
            "如果你有图片（如 <code>10.png</code>），请上传到 <code>data/</code> 文件夹。",
            "提交更改并发起 Pull Request。"
        ],
        footerOpt2Title: "方式 2：发送邮件",
        footerOpt2Desc: "如果你不熟悉 GitHub，可以直接将你的构型、数学边界和图片发送至：",
        footerOpt2Include: "请在邮件中包含以下信息：",
        footerOpt2List: [
            "绳索数量 (<em>n</em>)",
            "精确面积（如已知）",
            "近似面积（保留小数点后 5 位）",
            "该构型的简要说明或证明过程",
            "相关的图表或图片"
        ],
        footerCredit: '灵感来源于 <a href="https://erich-friedman.github.io/packing/fence/" target="_blank" rel="noopener">Erich Friedman 的最大栅栏面积问题</a>。托管于 GitHub Pages。'
    }
};

let currentLang = 'en';

const ropeData = [
    {n: 1, exact: "\\frac{1}{4\\pi}", approx: "0.07958", image: "data/1.png", note: "Trivial", date: null},
    {n: 2, exact: "\\frac{1}{\\pi}", approx: "0.31831", image: "data/2.png", note: "Trivial", date: null},
    {n: 3, exact: "\\frac{9}{4\\pi}", approx: "0.71620", image: "data/3.png", note: "Trivial", date: null},
    {n: 4, exact: null, approx: "1.03006", image: "data/4.png", note: "Lu ZeShen", date: "2026-Oct-18"},
    {n: 5, exact: null, approx: "1.26969", image: "data/5.png", note: "Lu ZeShen", date: "2026-Oct-18"},
    {n: 6, exact: "\\frac{9}{2\\pi}", approx: "1.43239", image: "data/6.png", note: "Trivial", date: null},
    {n: 7, exact: null, approx: "1.74626", image: "data/7.png", note: "Lu ZeShen", date: "2026-Oct-21"},
    {n: 8, exact: null, approx: "2.06012", image: "data/8.png", note: "Lu ZeShen", date: "2026-Oct-22"},
    {n: 9, exact: "\\frac{45 + 6\\sqrt{3}}{8\\pi}", approx: "2.20399", image: "data/9.png", note: "Trivial", date: null},
    {n: 10, exact: null, approx: null, image: null, note: "", date: null},
    {n: 11, exact: null, approx: null, image: null, note: "", date: null},
    {n: 12, exact: null, approx: null, image: null, note: "", date: null},
    {n: 13, exact: null, approx: null, image: null, note: "", date: null},
    {n: 14, exact: null, approx: null, image: null, note: "", date: null},
    {n: 15, exact: null, approx: null, image: null, note: "", date: null},
    {n: 16, exact: null, approx: null, image: null, note: "", date: null},
    {n: 17, exact: null, approx: null, image: null, note: "", date: null},
    {n: 18, exact: null, approx: null, image: null, note: "", date: null},
    {n: 19, exact: null, approx: null, image: null, note: "", date: null},
    {n: 20, exact: null, approx: null, image: null, note: "", date: null}
];

function renderTable() {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    ropeData.sort((a, b) => a.n - b.n);

    ropeData.forEach(item => {
        const tr = document.createElement('tr');

        const tdN = document.createElement('td');
        tdN.className = 'n';
        tdN.textContent = item.n;
        tr.appendChild(tdN);

        const tdExact = document.createElement('td');
        tdExact.className = 'exact';
        if (item.exact) {
            tdExact.innerHTML = `$${item.exact}$`;
        } else {
            tdExact.textContent = '—';
            tdExact.classList.add('empty');
        }
        tr.appendChild(tdExact);

        const tdApprox = document.createElement('td');
        tdApprox.className = 'approx';
        tdApprox.textContent = item.approx || '—';
        if (!item.approx) tdApprox.classList.add('empty');
        tr.appendChild(tdApprox);

        const tdFig = document.createElement('td');
        tdFig.className = 'figure';
        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = `Configuration for n = ${item.n}`;
            img.loading = 'lazy';
            tdFig.appendChild(img);
        } else {
            tdFig.textContent = '—';
            tdFig.classList.add('empty');
        }
        tr.appendChild(tdFig);

        const tdNote = document.createElement('td');
        tdNote.className = 'note';
        tdNote.textContent = item.note || '';
        tr.appendChild(tdNote);

        const tdDate = document.createElement('td');
        tdDate.className = 'date';
        tdDate.textContent = item.date || '—';
        if (!item.date) tdDate.classList.add('empty');
        tr.appendChild(tdDate);

        const tdHistory = document.createElement('td');
        tdHistory.className = 'history-link';
        const hasHistory = typeof historyData !== 'undefined' && historyData.some(h => String(h.n) === String(item.n));

        if (hasHistory) {
            const a = document.createElement('a');
            a.href = `history.html#n=${item.n}`;
            a.textContent = currentLang === 'en' ? 'View' : '查看';
            tdHistory.appendChild(a);
        } else {
            tdHistory.textContent = '—';
            tdHistory.classList.add('empty');
        }
        tr.appendChild(tdHistory);

        tbody.appendChild(tr);
    });

    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.getElementById('main-title').textContent = t.title;
    document.getElementById('subtitle-text').innerHTML = t.subtitle;
    document.getElementById('rules-heading').textContent = t.rulesHeading;

    const rulesList = document.getElementById('rules-list');
    rulesList.innerHTML = t.rules.map(r => `<li>${r}</li>`).join('');

    document.getElementById('label-touch').textContent = t.labelTouch;
    document.getElementById('label-end').textContent = t.labelEnd;
    document.getElementById('label-cross').textContent = t.labelCross;
    document.getElementById('label-dangling').textContent = t.labelDangling;

    document.getElementById('configs-heading').textContent = t.configsHeading;
    document.getElementById('th-n').textContent = t.thN;
    document.getElementById('th-exact').textContent = t.thExact;
    document.getElementById('th-approx').textContent = t.thApprox;
    document.getElementById('th-config').textContent = t.thConfig;
    document.getElementById('th-notes').textContent = t.thNotes;
    document.getElementById('th-date').textContent = t.thDate;
    document.getElementById('th-history').textContent = t.thHistory;

    document.getElementById('footer-contrib-title').textContent = t.footerContribTitle;
    document.getElementById('footer-contrib-desc').innerHTML = t.footerContribDesc;
    document.getElementById('footer-opt1-title').textContent = t.footerOpt1Title;
    document.getElementById('footer-opt1-list').innerHTML = t.footerOpt1List.map(item => `<li>${item}</li>`).join('');
    document.getElementById('footer-opt2-title').textContent = t.footerOpt2Title;
    document.getElementById('footer-opt2-desc').textContent = t.footerOpt2Desc;
    document.getElementById('footer-opt2-include').textContent = t.footerOpt2Include;
    document.getElementById('footer-opt2-list').innerHTML = t.footerOpt2List.map(item => `<li>${item}</li>`).join('');
    document.getElementById('footer-credit').innerHTML = t.footerCredit;

    const langSwitch = document.getElementById('lang-toggle');
    const options = langSwitch.querySelectorAll('.lang-option');

    if (lang === 'zh') {
        langSwitch.classList.add('zh');
        options[0].classList.remove('active');
        options[1].classList.add('active');
    } else {
        langSwitch.classList.remove('zh');
        options[0].classList.add('active');
        options[1].classList.remove('active');
    }

    renderTable();
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    updateLanguage(currentLang === 'en' ? 'zh' : 'en');
});

renderTable();