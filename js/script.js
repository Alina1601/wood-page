document.addEventListener("DOMContentLoaded", async function () {
  // Функция для загрузки HTML-контента
  async function loadHTML(url, elementId) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Ошибка при загрузке ${url}`);
      const data = await response.text();
      document.getElementById(elementId).innerHTML = data;
    } catch (error) {
      console.error(error);
    }
  }

  // Загрузка всех компонентов
  await loadHTML('../uk/header.html', 'header');
  await loadHTML('../uk/footer.html', 'footer');
  await loadHTML('../components/slider.html', 'slider');
  await loadHTML('../uk/sticky-header.html', 'sticky');

  // Теперь, когда весь контент загружен, привязываем обработчики событий
  const uaBtn = document.getElementById("ua-btn");
  const plBtn = document.getElementById("pl-btn");
  const enBtn = document.getElementById("en-btn");

  // Добавляем обработчик клика для кнопки "UA"
  if (uaBtn && plBtn && enBtn) {
    uaBtn.addEventListener("click", function () {
      plBtn.classList.toggle("show");  // Переключаем класс "show" на кнопке plBtn
      enBtn.classList.toggle("show");  // Переключаем класс "show" на кнопке enBtn
    });
  }


  const closeBtn = document.querySelector('.close-btn');
  const sidebarMenu = document.querySelector('.sidebar-menu');

  closeBtn.addEventListener('click', function () {
    sidebarMenu.classList.toggle('open');
  });


  // Получаем элементы
  const readMoreButton = document.querySelector('.read-more');
  const hiddenContent = document.querySelector('.content-section__hidden');

  // Добавляем обработчик клика на кнопку
  readMoreButton.addEventListener('click', function () {
    // Переключаем видимость контента
    hiddenContent.classList.toggle('content-section__visible');

    // Изменяем текст кнопки и добавляем/удаляем класс 'top'
    if (hiddenContent.classList.contains('content-section__visible')) {
      readMoreButton.textContent = 'Сховати';  // Меняем текст на "Сховати"
      readMoreButton.classList.add('top');     // Добавляем класс 'top'
    } else {
      readMoreButton.textContent = 'Читати далі'; // Меняем текст обратно на "Читати далі"
      readMoreButton.classList.remove('top');    // Удаляем класс 'top'
    }
  });



});
