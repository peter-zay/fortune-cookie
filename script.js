// Fortune cookie phrase generator
function generatePhrase() {

    const arrA = ["Stay positive,", "Follow your dreams,", "Embrace change,", "Think big,", "Never give up,", "Be kind,", "Live in the present,", "Take  risks,", "Find joy in the little things,", "Keep learning,"]
    const arrB = ["enjoy the journey,", "believe in yourself,", "make it  happen,", "seize the day,", "find your passion,", "create your own path,", "stay focused,", "love what you do,", "chase your goals,", "stay  motivated,"]
    const arrC = ["every day is a new beginning.", "live life to the fullest.", "dream big, achieve bigger.", "success starts with a vision.", "be  fearless.", "stay hungry., stay foolish.", "you are capable of amazing things.", "make each day count.", "the future is yours to create.", "take  action now."]

    const randomA = Math.floor(Math.random() * arrA.length)
    const randomB = Math.floor(Math.random() * arrB.length)
    const randomC = Math.floor(Math.random() * arrC.length)

    return `${arrA[randomA]} ${arrB[randomB]} ${arrC[randomC]}`
}

generatePhrase();
console.log(generatePhrase());