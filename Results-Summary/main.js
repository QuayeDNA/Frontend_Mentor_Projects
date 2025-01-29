const data = "./data.json";
const summaryList = document.querySelector(".summary__list");

fetch(data)
  .then((response) => response.json())
  .then((data) => {
    summaryList.innerHTML = "";

    data.forEach((item) => {
      const summaryItem = `
             <div class="summary__item summary__item--${item.category.toLowerCase()}">
                    <div class="summary__item-left">
                        <img src="${item.icon}" alt="${
        item.category
      } icon" class="summary__item-icon"/>
                        <p class="summary__item-title">${item.category}</p>
                    </div>
                    <p class="summary__item-score"><span>${
                      item.score
                    }</span> / 100</p>
                </div>
            `;

      // Add to container
      summaryList.insertAdjacentHTML("beforeend", summaryItem);
    });
  })
  .catch((error) => {
    console.error("Error loading data:", error);
  });
