// Аккордеон
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion')
  const accordion = document.querySelector('.accordion');
  const content = accordion.querySelector('.accordion__content');
  // Чтобы одна колонка по умолчанию была открыта
  if (accordion.classList.contains('open')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  }

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      // document.querySelectorAll('.accordion').forEach((block) => block.classList.remove('open')); этот код для толго, чтобы открывался только один пункт аккордеона за раз. Ниже toggle меняем на add
      self.classList.toggle('open');
      // Ниже код для скрин-ридеров
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});