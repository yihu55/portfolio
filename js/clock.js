function ticklandeClock() {
    let today = new Date()
    let graduateDate = new Date("Jul 1 2023")
    let dif = graduateDate - today;

    let day = parseInt(dif / 1000 / 60 / 60 / 24)
    let hour = parseInt(dif / 1000 / 60 / 60 % 24)
    let minute = parseInt(dif / 1000 / 60 % 60)
    let second = parseInt(dif / 1000 % 60)

    // if (hour < 10) {
    //     hour = "0" + hour
    // }
    // if (minute < 10) {
    //     minute = "0" + minute
    // }
    // if (second < 10) {
    //     second = "0" + second
    // }
    hour < 10 ? hour = "0" + hour : hour
    minute < 10 ? minute = "0" + minute : minute
    second < 10 ? second = "0" + second : second

    document.getElementById("day").innerHTML = day
    document.getElementById("hour").innerHTML = hour
    document.getElementById("minute").innerHTML = minute
    document.getElementById("second").innerHTML = second

}
setInterval(ticklandeClock, 1000)