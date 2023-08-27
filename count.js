
// Counter app row javascript
let count = 0;
function clickMe() {
    const element = document.getElementById('count_total');
    count += 1;
    element.innerHTML = count;
}

const decrement = document.getElementById('minus_btn');
decrement.addEventListener('click', function () {
    const element = document.getElementById('count_total');
    count -= 1;
    element.innerHTML = count;
})

