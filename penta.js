let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let pentaDots = [];
    if (Number.isInteger(+input.value)) {
        for(let i = 0; i < +input.value; i++) {
            pentaDots.push(i);
        }
        let res = pentaDots.reduce((el, sum) => el + sum)*5 + 1;
        document.querySelector("#res").innerHTML = res;
        document.querySelector("label").style.color = "green"
        document.querySelector("label").innerHTML = "Success"
        document.querySelector("input").classList.remove("is-invalid");
        document.querySelector("input").classList.add("is-valid");
    } else {
        document.querySelector("label").style.color = "red"
        document.querySelector("label").innerHTML = "It must be integer";
        document.querySelector("#res").innerHTML = "Something were wrong";
        document.querySelector("input").classList.remove("is-valid");
        document.querySelector("input").classList.add("is-invalid");
    }
    console.log(Number.isInteger(+input.value))
})