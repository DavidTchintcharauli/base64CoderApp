const submitBtn = document.getElementById('submitBtn')
const textInput = document.getElementById('text')
const resultTextarea = document.getElementById('result')

submitBtn.addEventListener('click', function () {
    const inputText = textInput.value.trim()
    if (inputText === '') {
        alert('please enter some text.')
        return
    }

    if (/^[A-Za-z0-9+/=]+$/.test(inputText) && inputText.length % 4 === 0) {
        const decodedText = atob(inputText)
        resultTextarea.value = decodedText
    } else {
        const encodedText = btoa(inputText)
        resultTextarea.value = encodedText
    }
})