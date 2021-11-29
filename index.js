const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  resultsContainer.classList.add("show");
  results[0].textContent = formName.value;
  results[1].textContent = formSurName.value;
  results[2].textContent = formAdress.value;
  results[3].textContent = formDate.value;
  results[4].textContent = formCity.value;
  results[5].textContent = formIsVaccinated.checked ? "Tak" : "Nie";
  e.preventDefault();
});
const CloseBtn = document.querySelector(".closeBtn"),
  formName = document.querySelector('input[name="imie"]'),
  formSurName = document.querySelector('input[name="nazwisko"]'),
  formAdress = document.querySelector('input[name="adres"]'),
  formDate = document.querySelector('input[name="data"]'),
  formCity = document.querySelector('select[name="miasto"]'),
  formIsVaccinated = document.querySelector('input[name="czySzczepiony"]');

const resultsContainer = document.querySelector(".results");
const results = document.querySelectorAll(".results span");

CloseBtn.addEventListener("click", () => {
  resultsContainer.classList.remove("show");
  form.reset();
});
