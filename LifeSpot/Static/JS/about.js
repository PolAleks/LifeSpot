
let feedback = new Map();
function getFeedback() {
    let name = prompt("Представьтесь пожалуйста");
    if (isFillData(name)) return;
    feedback.set("name", name);

    let review = prompt("Оставьте свой отзыв");
    if (isFillData(review)) return;
    feedback.set("review", review);

    feedback.set("date", new Date().toLocaleString());

    postFeedback();
}

const postFeedback = () => {
    let elem = document.getElementsByClassName("reviews")[0];
    elem.innerHTML += `<div class="review">\n` +
                        `<p><b>${feedback.get("name")} </b><i>${feedback.get("date")}</i></p>\n` +
                        `<p>${feedback.get("review")}</p>\n` +
                      `</div > `;
}

function isFillData(value) {
    return value === "";
}
