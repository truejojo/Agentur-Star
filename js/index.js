const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('.nav');

openIcon.addEventListener('click', () => {
  console.log('openIcon');
  openIcon.style.display = 'none';
  closeIcon.style.display = 'block';

  nav.classList.remove('hide');
});

closeIcon.addEventListener('click', () => {
  console.log('closeIcon');
  closeIcon.style.display = 'none';
  openIcon.style.display = 'block';

  nav.classList.add('hide');
});
