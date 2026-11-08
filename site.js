(() => {
  const typing = document.getElementById('typing');
  const greeting = document.getElementById('typed-text');
  const text = greeting.textContent;
  const letters = Array.from(text);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let timer = null;
  function finishGreeting() {
    if (timer !== null) window.clearTimeout(timer);
    timer = null;
    greeting.textContent = text;
    typing.classList.remove('is-playing');
  }
  function typeGreeting() {
    if (reduced.matches) return;
    greeting.textContent = '';
    typing.classList.add('is-playing');
    let count = 0;
    function nextCharacter() {
      if (reduced.matches) { finishGreeting(); return; }
      greeting.textContent = letters.slice(0, ++count).join('');
      if (count === letters.length) { finishGreeting(); return; }
      timer = window.setTimeout(nextCharacter, letters[count - 1] === ',' ? 100 : 38);
    }
    nextCharacter();
  }
  const respectMotionChange = () => { if (reduced.matches) finishGreeting(); };
  if (reduced.addEventListener) reduced.addEventListener('change', respectMotionChange);
  else if (reduced.addListener) reduced.addListener(respectMotionChange);
  const dialog = document.getElementById('photo-dialog');
  const full = document.getElementById('photo-full');
  const caption = document.getElementById('photo-caption');
  let photoOpener = null;

  document.querySelectorAll('[data-photo]').forEach((control) => control.addEventListener('click', () => {
    const image = control.querySelector('img');
    photoOpener = control;
    full.src = image.currentSrc || image.src;
    full.alt = image.alt;
    caption.textContent = control.dataset.photo;
    dialog.showModal();
  }));
  dialog.addEventListener('close', () => {
    photoOpener?.focus({ preventScroll: true });
    photoOpener = null;
  });

  typeGreeting();
})();
