const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);
  const body = document.body;

  modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${time}ms ease-in-out;
  `;
  // Закрытие модального окна при клике на крестик и мимо окна или на клавишу escape
  const closeModal = event => {
    const target = event.target;
    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === 'Escape') {
      modalElem.style.opacity = 0;
      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
      }, time);
      window.removeEventListener('keydown', closeModal);
      body.classList.remove('_lock');
    }
  }

  // Функция открытия модального окна
  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal);
    body.classList.add('_lock');
  }
  //Открываем модальное окна при клике на кнопку
  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal)
  });
  //Закрываем модальное окно
  modalElem.addEventListener('click', closeModal);
}

// В параметры передаем модальное окно, кнопку открытия и закрытия модальных окон, и время закрытия/открытия модальных окон
modalController({
  modal: '.modal1',
  btnOpen: '.modal-btn',
  btnClose: '.modal__close',
  time: 300,
});