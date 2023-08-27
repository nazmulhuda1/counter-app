

// Reviews functions


document.querySelector('#submit_btn').addEventListener('click', function () {
    const textAreaElement = document.querySelector('#review_text');
    const textValue = textAreaElement.value;

    const p = document.createElement('p')
    p.innerHTML = textValue;

    const textContainer = document.querySelector('#text_container')
    textContainer.appendChild(p)
    console.log(p)

})
document.querySelector('#review_text').addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        const textAreaElement = document.querySelector('#review_text');
        const textValue = textAreaElement.value;

        const p = document.createElement('p')
        p.innerHTML = textValue;

        const textContainer = document.querySelector('#text_container')
        textContainer.appendChild(p)
        console.log(p)
    }
})