const likeBtn = document.getElementById("likeBtn");
const scrapBtn = document.getElementById("scrapBtn");

let count = 0;

button.addEventListener("click", function () {
  count++;
  likeBtn.textContent = count;
});
