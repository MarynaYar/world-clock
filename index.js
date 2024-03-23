let clockIntervalId;
let clockIntervalTime;
let clockIntervalMainTime;
function updateTimeCities() {
  clockIntervalId = setInterval(function () {
    // Zurich
    let zurichElement = document.querySelector("#zurich");
    let zurichDateElement = zurichElement.querySelector(".date");
    let zurichTimeElement = zurichElement.querySelector(".time");
    let zurichZone = moment().tz("Europe/Zurich");

    zurichTimeElement.innerHTML = `${zurichZone.format("hh:mm:ss")} <small>${zurichZone.format("A")}</small>`
    zurichDateElement.innerHTML = zurichZone.format("dddd, MMMM Do YYYY");
  }, 1000)
  setInterval(function () {
    // London
    let londonElement = document.querySelector("#london");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonZone = moment().tz("Europe/London");

    londonTimeElement.innerHTML = `${londonZone.format("hh:mm:ss")} <small>${londonZone.format("A")}</small>`

    // Sydney
    let sydneyElement = document.querySelector("#sydney");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyZone = moment().tz("Australia/Sydney");

    sydneyTimeElement.innerHTML = `${sydneyZone.format("hh:mm:ss")} <small>${sydneyZone.format("A")}</small>`

    // New York
    let newYorkElement = document.querySelector("#new-york");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkZone = moment().tz("America/New_York");

    newYorkTimeElement.innerHTML = `${newYorkZone.format("hh:mm:ss")} <small>${newYorkZone.format("A")}</small>`
  }, 1000)
};

// Clock 
function updateClock() {
  clockIntervalTime = setInterval(function () {
    let now = moment();
    let hour = now.hours();
    let minute = now.minutes();
    let second = now.seconds();

    let handHour = document.querySelector('.hour-hand');
    let hourDegrees = ((hour % 12) / 12) * 360 + (minute / 60) * 30 + 360;
    handHour.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;

    let secondHand = document.querySelector('.second-hand')
    let secondDegrees = (second / 60) * 360 + 360;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;

    let minuteHand = document.querySelector('.minute-hand')
    let minuteDegrees = (minute / 60) * 360 + 356;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    if (second === 59) {
      secondHand.style.transition = 'none';
    }
  }, 1000)
}


function updateMainCity(event) {
  clearInterval(clockIntervalId);
  clearInterval(clockIntervalMainTime);
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  clockIntervalMainTime = setInterval(function () {
    let cityTime = moment().tz(timeZone);
    let cityMainElement = document.querySelector("#zurich")

    let cityName = timeZone.split("/")[1];

    cityMainElement.innerHTML = `
        <div class="zurich">
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
          <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
 `
    console.log(timeZone)
    console.log(cityTime.format("hh:mm:ss"))
  }, 1000)
};




updateTimeCities();
updateClock();

let select = document.querySelector("#select");
select.addEventListener("change", updateMainCity);

