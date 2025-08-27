
  // Delegate clicks for all cards/swatches
  document.addEventListener('click', (e) => {
    const swatch = e.target.closest('.swatch');
    if (!swatch) return;

    // limit scope to the clicked card
    const card = swatch.closest('.p-card');
    const img = card.querySelector('.p-img');

    // swap image
    const newSrc = swatch.dataset.img;
    if (newSrc) img.src = newSrc;

    // update active state within this card only
    card.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
  });

