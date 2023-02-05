let btn = document.getElementById("bidPlace124");
let input = document.getElementById("bidInput124");
let stateW = document.getElementById("bidState124W");
let stateL = document.getElementById("bidState124L");


const bidPrice124 = (a) => {
    return input.value;
}

btn.addEventListener('click', function() {
    if(bidPrice124() > 12000) {
        return stateW.insertAdjacentHTML('beforeend', "You will be contacted if bid wins, thank you.")
    } else {
        return stateL.insertAdjacentHTML('beforeend', "Sorry bid too low.");
    }
},{once : true});
