const ropeData = [
    {n: 1, exact: "1 / (4π)", approx: "0.07958", image: "data/1.png", note: "Trivial", date: null},
    {n: 2, exact: "1 / π", approx: "0.31831", image: "data/2.png", note: "Trivial", date: null},
    {n: 3, exact: "9 / (4π)", approx: "0.71620", image: "data/3.png", note: "Trivial", date: null},
    {n: 4, exact: null, approx: "1.03006", image: "data/4.png", note: "Lu ZeShen", date: "2026-Oct-18"},
    {n: 5, exact: null, approx: "1.26969", image: "data/5.png", note: "Lu ZeShen", date: "2026-Oct-18"},
    {n: 6, exact: null, approx: null, image: null, note: "", date: null},
    {n: 7, exact: null, approx: null, image: null, note: "", date: null},
    {n: 8, exact: null, approx: null, image: null, note: "", date: null},
    {n: 9, exact: null, approx: null, image: null, note: "", date: null},
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
        if (item.exact !== null && item.exact !== undefined && item.exact !== '') {
            tdExact.textContent = item.exact;
        } else {
            tdExact.textContent = '—';
            tdExact.classList.add('empty');
        }
        tr.appendChild(tdExact);

        const tdApprox = document.createElement('td');
        tdApprox.className = 'approx';
        if (item.approx !== null && item.approx !== undefined && item.approx !== '') {
            tdApprox.textContent = item.approx;
        } else {
            tdApprox.textContent = '—';
            tdApprox.classList.add('empty');
        }
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
        if (item.date !== null && item.date !== undefined && item.date !== '') {
            tdDate.textContent = item.date;
        } else {
            tdDate.textContent = '—';
            tdDate.classList.add('empty');
        }
        tr.appendChild(tdDate);

        tbody.appendChild(tr);
    });
})();