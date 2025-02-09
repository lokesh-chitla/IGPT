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
  selectedText.innerHTML = selectedCategories.length > 0 
    ? selectedCategories.map(cat => `<span class="highlight">${cat}</span>`).join(", ")
    : "None";
}

document.getElementById("user-input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    processUserQuery();
  }
});

function processUserQuery() {
  const query = document.getElementById("user-input").value;
  const outputBox = document.getElementById("output-box");

  if (!query.trim()) {
    outputBox.innerHTML = "<p>Please enter a query.</p>";
    return;
  }

  outputBox.innerHTML = "<p>Processing...</p>";

  fetch(`http://127.0.0.1:8081/query?q=${encodeURIComponent(query)}`)
    .then(response => response.json())
	.then(data => {
	  let output = data.length 
		? data.map(item => `
			<div class="result-item">
			  <strong>${item.Title.replace("Wikipedia: ", "")}</strong><br>
			  ${item.Abstract.split(".")[0]}.
			</div>
		  `).join("")
		: "<p>No results found.</p>";

	  outputBox.innerHTML = output;
	})
}
