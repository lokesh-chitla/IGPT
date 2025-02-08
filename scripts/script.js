function goToHome() {
  window.location.href = "index.html";
}

let selectedCategories = [];

function toggleCategory(button, category) {
  if (selectedCategories.includes(category)) {
    selectedCategories = selectedCategories.filter(item => item !== category);
    button.classList.remove("selected");
  } else {
    selectedCategories.push(category);
    button.classList.add("selected");
  }

  updateCategoryTitle();
}

function updateCategoryTitle() {
  const selectedText = document.getElementById("selected-text");

  if (selectedCategories.length > 0) {
    selectedText.innerHTML = selectedCategories.map(cat => `<span class="highlight">${cat}</span>`).join(", ");
  } else {
    selectedText.innerHTML = "None";
  }
}

document.getElementById("user-input").addEventListener("input", function () {
  const outputBox = document.getElementById("output-box");
  let result = "";

  if (selectedCategories.length > 0) {
    result = `Answer for (${selectedCategories.join(", ")}) query: ${this.value}`;
  } else {
    result = "Please select at least one category.";
  }

  outputBox.innerHTML = `<p>${result}</p>`;
});
