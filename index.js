
const state = {
    start: [],
    target: {
    odds: [],
    evens: [],
    },
};

const numberBankOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
const form = document.querySelector("form");
const sortOneButton = document.querySelector("#sortOne");
const sortAllButton = document.querySelector("#sortAll");


render();

form.addEventListener("submit", addNumber);

function addNumber(event) {
    event.preventDefault();

    const number = form.elements.number.value;
    state.start.push(number);
    render();
}

sortOneButton.addEventListener("click", sortOne);

function sortOne(){

    const lastNum = state.start.pop()
    if (lastNum % 2 ===1){
        state.target.odds.push(lastNum);
    } else {
        state.target.evens.push(lastNum);
    }
    render();
}


function render() {
    numberBankOutput.textContent = state.start.join(" ");
    oddsOutput.textContent = state.target.odds.join(" ");
    evensOutput.textContent = state.target.evens.join(" ");
}

sortAllButton.addEventListener("click", sortAll);

function sortAll(){
    while (state.start.length>0){
        const num = state.start.pop()
        if (num %2 ===1){
            state.target.odds.push(num);
        } else {
            state.target.evens.push(num);
        }
    }   
    render();
}
