// ハンバーガーメニュー開閉処理
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navList = document.getElementById('navList');

hamburgerBtn.addEventListener('click', () => {
  const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
  hamburgerBtn.setAttribute('aria-expanded', !expanded);
  navList.classList.toggle('open');
});

// キーボード操作対応
hamburgerBtn.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamburgerBtn.click();
  }
});

// ページトップボタン表示制御
const pageTopBtn = document.getElementById('pageTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    pageTopBtn.style.display = 'flex';
  } else {
    pageTopBtn.style.display = 'none';
  }
});
pageTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
