let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getTime = () => {
    const date = new Date()
    let minutes = date.getMinutes()
    const hour = date.getHours()
    const day = date.getDate()
    const month = date.getMonth()

    let frase = 'Happy coding!'

    if (hour >= 0 && hour < 5) frase = `Shouldn't you be sleeping?`
    if (hour == minutes) frase = `OMG palindromic number! Make a wish.`
    if (month == 1 && day == 14) frase = `Oh... love. It's a great feeling.`
    if (hour >= 6 && hour < 8)
        frase = 'You wake up really early, want a coffee?'

    if (minutes < 10) minutes = `0${minutes}`

    let time = `Today is ${day} of ${months[month]}, ${hour}:${minutes}.`

    return `${time}\n${frase}`
}

getTime()

module.exports.months = months
module.exports.getTime = getTime
