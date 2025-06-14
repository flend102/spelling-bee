
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("wordInput");
  const result = document.getElementById("result");

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const word = input.value.trim();
      if (word) {
        result.textContent = "You entered: " + word;
        input.value = "";
      } else {
        result.textContent = "Please type a word.";
      }
    }
  });
});
