let input = document.querySelector("input");
let btn = document.querySelector("button");
let resultLabel = document.querySelector("label");
let result = document.querySelector("#res");

const combinatoricsChallenge = num => {
    let pentaDots = [];
    for (let j = 0; j < num; j++) {
        pentaDots.push(j);
    }
    let counterDots = pentaDots.reduce((el, sum) => el + sum)*5 + 1;
    return counterDots;
}

btn.addEventListener("click", () => {
    if (Number.isInteger(+input.value)) {
        result.innerHTML = combinatoricsChallenge(+input.value);
        resultLabel.style.color = "green"
        resultLabel.innerHTML = "Success"
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    } else {
        resultLabel.style.color = "red"
        resultLabel.innerHTML = "It must be integer";
        result.innerHTML = "Something were wrong";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
    console.log(Number.isInteger(+input.value))
})