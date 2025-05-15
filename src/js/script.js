const ratingForm = document.getElementById("rating-form");
const ratingCard = document.querySelector(".rating-card--rating-state");
const thankyouRatingCard = document.querySelector(".rating-card--thankyou-state");
const selectedRating = document.getElementById("selected-rating");
const ratingLabels = document.querySelectorAll(".rating-card__rating-label");
const ratingRadioInputs = document.querySelectorAll(".rating-card__rating-input");
const errorEl = document.getElementById("error");

function showThankyouState(rating) {
    ratingCard.classList.toggle("active");
    thankyouRatingCard.classList.toggle("active");
    thankyouRatingCard.setAttribute("aria-hidden", "false");
    selectedRating.textContent = rating;
}

function showError() {
    errorEl.setAttribute("aria-hidden", "false");
    errorEl.classList.toggle("hidden", false);
}

ratingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    if (Object.keys(data).length !== 0) {
        errorEl.classList.toggle("hidden");
        showThankyouState(data.rating);
    } else {
        showError();
    }
});

for (const radio of ratingRadioInputs) {
    radio.addEventListener("change", () => {
        errorEl.classList.toggle("hidden", true);
    });
}


// keyboard accessibility
ratingForm.addEventListener("keydown", (e) => {
    const key = e.key;
    if ((key == " " || key == "Enter") &&
        (e.target.classList.contains("rating-card__rating-label"))
    ) {
        e.target.click();
    }
});