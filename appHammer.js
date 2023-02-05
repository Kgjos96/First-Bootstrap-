let btnH = document.getElementById("bidPlaceHammer");
let inputH = document.getElementById("bidInputHammer");
let stateWH = document.getElementById("bidStateHammerW");
let stateLH = document.getElementById("bidStateHammerL");


const bidPriceH = (a) => {
    return inputH.value;
}

btnH.addEventListener('click', function() {
    if(bidPriceH() > 412000) {
        return stateWH.insertAdjacentHTML('beforeend', "You will be contacted if bid wins, thank you.")
    } else {
        return stateLH.insertAdjacentHTML('beforeend', "Sorry bid too low.");
    }
},{once : true});