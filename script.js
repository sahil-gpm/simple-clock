let slot = document.getElementById('slot');
let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds')
let date = document.getElementById('date')

let currentDate = new Date()
let tempSeconds = currentDate.getSeconds()
let tempMins = currentDate.getMinutes()
let tempHours = currentDate.getHours()

seconds.innerHTML = tempSeconds < 9 ? '0' + tempSeconds : tempSeconds
minutes.innerHTML = tempMins < 9 ? '0' + tempMins : tempMins
hour.innerHTML = tempHours < 9 ? '0' + tempHours : tempHours
date.innerHTML = String(currentDate).substring(0, 10)

let setClockTime = () => {
    setInterval(() => {
        seconds.innerHTML = tempSeconds < 9 ? '0' + ++tempSeconds : ++tempSeconds

        if (seconds.innerHTML > 59 && minutes.innerHTML >= 59) {
            if (minutes.innerHTML >= 59 && hour.innerHTML < 12) { hour.innerHTML = tempHours < 9 ? '0' + ++tempHours : ++tempHours }
            if (minutes.innerHTML >= 59 && hour.innerHTML >= 12) {
                hour.innerHTML = tempHours = '0' + 0
            }
            seconds.innerHTML = tempSeconds = '0' + 0
            minutes.innerHTML = tempMins = '0' + 0
        }
        if (seconds.innerHTML > 59 && minutes.innerHTML < 59) {
            seconds.innerHTML = tempSeconds = '0' + 0
            minutes.innerHTML = tempMins < 9 ? '0' + ++tempMins : ++tempMins
        }
    }, 1000)
    // slot.innerHTML = zone;
    if (currentDate.getHours() >= 12) {
        slot.innerHTML = 'PM'
    } else {
        slot.innerHTML = 'AM'
    }
}
// hour.innerHTML = "sahil"
setClockTime()

