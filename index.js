setInterval(function () {
  // Zurich
  let zurichElement = document.querySelector("#zurich");
  let zurichDateElement = zurichElement.querySelector(".date");
  let zurichTimeElement = zurichElement.querySelector(".time");
  let zurichZone = moment().tz("Europe/Zurich");

  zurichTimeElement.innerHTML = `${zurichZone.format("hh:mm:ss")} <small>${zurichZone.format("A")}</small>`
  zurichDateElement.innerHTML = zurichZone.format("dddd, MMMM Do YYYY");

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


let select = document.querySelector("#select");
select.addEventListener("change", function (event) {
  let timeZone = event.target.value;
  let cityTime = moment().tz(timeZone);
  let cityMainElement = document.querySelector("#zurich")

  let cityName = timeZone.split("/")[1];


  cityMainElement.innerHTML = `<div class="main-city">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
        <div class="time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format("A")}</small></div>
      </div>`
  console.log(cityTime)
})
