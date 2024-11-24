const seasons = {
    winter: {
      months: ["Декабрь", "Январь", "Февраль"],
      src: ""
    },
    spring: {
      months: ["Март", "Апрель", "Май"],
      image: "spring.jpg", // Ссылка на фото для весны
    },
    summer: {
      months: ["Июнь", "Июль", "Август"],
      image: "summer.jpg", // Ссылка на фото для лета
    },
    autumn: {
      months: ["Сентябрь", "Октябрь", "Ноябрь"],
      Image:""
    },
  };
  
  const seasonButtons = document.querySelectorAll(".season-btn");
  const monthsContainer = document.getElementById("months-container");
  
  seasonButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const season = button.getAttribute("data-season");
      displayMonths(season);
      changeBackground(season);
    });
  });
  
  function displayMonths(season) {
    monthsContainer.innerHTML = ""; // Очистка предыдущих кнопок
    seasons[season].months.forEach((month) => {
      const monthButton = document.createElement("button");
      monthButton.className = "month-btn";
      monthButton.textContent = month;
      monthsContainer.appendChild(monthButton);
    });
  }
  
  function changeBackground(season) {
    document.body.style.backgroundImage = `url('${seasons[season].image}')`;
  }