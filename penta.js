let input = document.querySelector("input");
let btn = document.querySelector("button");
let resultLabel = document.querySelector("label");
let result = document.querySelector("#res");

/*Step 1. We should create a function to calculate number of dots in pentagong
for 1, 2, 3... iterations. In simply words, our work looks like we should create an array with 
iteration numbers, summ all them and multiply by 5 (because pentagon). Totally, we have 
add our result to 1 (because we have always 1 dot in the pentagon center*/
const combinatoricsChallenge = num => {
    let pentaDots = [];
    for (let j = 0; j < num; j++) {
        pentaDots.push(j);
    }
    let counterDots = pentaDots.reduce((el, sum) => el + sum)*5 + 1;
    return counterDots;
}
/*Step 2. Add our previous function to event listener and pass her input value as argument.
Regarding to the best practices for UX, we should improve input settings by adding features for 
valid and invalid values.*/
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