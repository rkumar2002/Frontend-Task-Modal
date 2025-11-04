const selectAll = document.getElementById('selectAll');
const pages = Array.from(document.querySelectorAll('.page'));
const doneBtn = document.querySelector('.done-btn');

selectAll.addEventListener('change', () => {
  const checked = selectAll.checked;
  pages.forEach(cb => { cb.checked = checked; });
  updateSelectAllIndeterminate(); 
});

pages.forEach((cb) => {
  cb.addEventListener('change', () => {
    updateSelectAllIndeterminate();
  });
});

function updateSelectAllIndeterminate() {
  const total = pages.length;
  const checkedCount = pages.filter(c => c.checked).length;
  if (checkedCount === 0) {
    selectAll.checked = false;
    selectAll.indeterminate = false;
  } else if (checkedCount === total) {
    selectAll.checked = true;
    selectAll.indeterminate = false;
  } else {
    selectAll.checked = false;
    selectAll.indeterminate = true;
  }
}

doneBtn.addEventListener('click', () => {
  const selected = pages
    .map((c, i) => c.checked ? `Page ${i + 1}` : null)
    .filter(Boolean);

  alert(`Selected: ${selected.length ? selected.join(', ') : 'None'}`);
});

updateSelectAllIndeterminate();