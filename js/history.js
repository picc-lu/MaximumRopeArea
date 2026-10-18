// { n: 10, exact: "", approx: "1.23456", image: "data/10.png", note: "John Doe", date: "2026-Jan-01" },
const historyData = [

];

(function renderHistory() {
    const tbody = document.getElementById('history-body');
    if (!tbody) return;

    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const searchParams = new URLSearchParams(window.location.search);
    const nParam = hashParams.get('n') || searchParams.get('n');

    let filteredData = historyData;

    if (nParam) {
        document.getElementById('page-title').textContent = `History for n = ${nParam}`;
        filteredData = historyData.filter(item => String(item.n) === String(nParam));
    }

    if (filteredData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #888; font-style: italic;">No history records found.</td></tr>';
        return;
    }

    filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));

    filteredData.forEach(item => {
        const tr = document.createElement('tr');

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
            img.alt = `Historical configuration`;
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

        tbody.appendChild(tr);
    });
})();