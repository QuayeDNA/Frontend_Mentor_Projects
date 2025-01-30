const dataUrl = "./data.json";
const summaryList = document.querySelector(".summary__list");

fetch(dataUrl)
  .then((response) => response.json())
  .then((jsonData) => {
    summaryList.innerHTML = "";

    const fragment = document.createDocumentFragment();

    jsonData.forEach((item) => {
      const summaryItem = document.createElement("div");
      summaryItem.classList.add("summary__item", `summary__item--${item.category.toLowerCase()}`);
      summaryItem.innerHTML = `
        <div class="summary__item-left">
          <img src="${item.icon}" alt="${item.category} icon" class="summary__item-icon"/>
          <p class="summary__item-title">${item.category}</p>
        </div>
        <p class="summary__item-score"><span>${item.score}</span> / 100</p>
      `;
      fragment.appendChild(summaryItem);
    });

    // Append fragment to container
    summaryList.appendChild(fragment);
  })
  .catch((error) => {
    console.error("Error loading data:", error);
    summaryList.innerHTML = "<p class='error-message'>Failed to load summary data. Please try again later.</p>";
  });