const ropeData = [
    {n: 1, exact: "1 / (4π)", approx: "0.07958", image: "data/1.png", note: "Trivial", date: null, hasHistory: false},
    {n: 2, exact: "1 / π", approx: "0.31831", image: "data/2.png", note: "Trivial", date: null, hasHistory: false},
    {n: 3, exact: "9 / (4π)", approx: "0.71620", image: "data/3.png", note: "Trivial", date: null, hasHistory: false},
    {
        n: 4,
        exact: null,
        approx: "1.03006",
        image: "data/4.png",
        note: "Lu ZeShen",
        date: "2026-Oct-18",
        hasHistory: true
    },
    {
        n: 5,
        exact: null,
        approx: "1.26969",
        image: "data/5.png",
        note: "Lu ZeShen",
        date: "2026-Oct-18",
        hasHistory: true
    },
    {n: 6, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 7, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 8, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 9, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 10, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 11, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 12, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 13, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 14, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 15, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 16, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 17, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 18, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 19, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false},
    {n: 20, exact: null, approx: null, image: null, note: "", date: null, hasHistory: false}
];

(function renderTable() {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;

    ropeData.sort((a, b) => a.n - b.n);

    ropeData.forEach(item => {
        const tr = document.createElement('tr');

        const tdN = document.createElement('td');
        tdN.className = 'n';
        tdN.textContent = item.n;
        tr.appendChild(tdN);

        const tdExact = document.createElement('td');
        tdExact.className = 'exact';
        tdExact.textContent = item.exact !== null && item.exact !== undefined && item.exact !== '' ? item.exact : '—';
        if (!item.exact) tdExact.classList.add('empty');
        tr.appendChild(tdExact);

        const tdApprox = document.createElement('td');
        tdApprox.className = 'approx';
        tdApprox.textContent = item.approx !== null && item.approx !== undefined && item.approx !== '' ? item.approx : '—';
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

        // 新增：History 列
        const tdHistory = document.createElement('td');
        tdHistory.className = 'history-link';
        if (item.hasHistory) {
            const a = document.createElement('a');
            a.href = `history.html#n=${item.n}`; // 这里改成了 #
            a.textContent = 'View';
            tdHistory.appendChild(a);
        } else {
            tdHistory.textContent = '—';
            tdHistory.classList.add('empty');
        }
        tr.appendChild(tdHistory);

        tbody.appendChild(tr);
    });
})();