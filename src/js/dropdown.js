const mainBtn = document.getElementById('mainBtn');
const dropdown = document.getElementById('dropdown');

mainBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('hidden');
    mainBtn.classList.toggle('open');
});

const nestedBtns = dropdown.querySelectorAll('.btn-arrow');

nestedBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        const currentSublist = btn.parentElement.querySelector('.sublist');

        dropdown.querySelectorAll('.sublist').forEach(list => {
            if (list !== currentSublist) list.classList.add('hidden');
        });
        dropdown.querySelectorAll('.btn-arrow').forEach(b => {
            if (b !== btn) b.classList.remove('open');
        });

        btn.classList.toggle('open');
        if (currentSublist) currentSublist.classList.toggle('hidden');
    });
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== mainBtn) {
        dropdown.classList.add('hidden');
        mainBtn.classList.remove('open');

        nestedBtns.forEach(btn => {
            btn.classList.remove('open');
            const sublist = btn.parentElement.querySelector('.sublist');
            if (sublist) sublist.classList.add('hidden');
        });
    }
});