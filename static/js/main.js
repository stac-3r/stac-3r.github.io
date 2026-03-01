document.addEventListener('DOMContentLoaded', function () {
  var copyBtn = document.getElementById('copy-btn');
  var bibtexText = document.getElementById('bibtex-text');

  if (copyBtn && bibtexText) {
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(bibtexText.innerText).then(function () {
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        copyBtn.classList.add('copied');
        setTimeout(function () {
          copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    });
  }
});
