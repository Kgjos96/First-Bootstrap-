let btn126 = document.getElementById("bidPlace126");
let input126 = document.getElementById("bidInput126");
let stateW126 = document.getElementById("bidState126W");
let stateL126 = document.getElementById("bidState126L");


const bidPrice126 = (a) => {
    return input126.value;
}

btn126.addEventListener('click', function() {
    if(bidPrice126() > 82000) {
        return stateW126.insertAdjacentHTML('beforeend', "You will be contacted if bid wins, thank you.")
    } else {
        return stateL126.insertAdjacentHTML('beforeend', "Sorry bid too low.");
    }
},{once : true});