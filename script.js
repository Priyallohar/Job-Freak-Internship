const navItems = document.querySelectorAll('.nav-item');
const contentContainers = document.querySelectorAll('.content-container');

navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    const content = navItem.dataset.content;
    contentContainers.forEach(container => {
      container.classList.remove('show');
    });
    document.getElementById(`${content}-content`).classList.add('show');
  });
});
