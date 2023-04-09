 // My API key 89c4250809c202e3e1990eca9d40606 

 var key = "89c4250809c202e3e1990eca9d40606"
 Var city = "Heber"

 var date = moment().format("dddd, mmmm, Do, YYYY");
 var dateTime = moment().format("YYYY-MMMM-DD HH:MM:SS")

 // bellow is going to save the search history
 var cityHist = [];
 $('.searc').on("click", function (event) {
     event.preventDefault();
     city = $(this).parent(".btnPar").siblings(".textVal").val().trim();
     if (city === "") {
         return;
     };
     cityHist.push(city);

     localStorage.setItem('citu', JSON.stringify(cityHist));
     fiveForecastEl.empy();
     getHistory();
     getWeatherToday();

 });
 // below are buttons from the search history
 var contHistEl = $(".cityHistory");

 function getHistory() {
     contHistEl.empty();

     for (let i = 0; i < cityHist.length; i++) {
         var rowEl = $('<row>');
         var btnEl = $('<button>').text('${cityHist[i]')

         rowEl.addClass('row histBtnRow');
         btnEl.addClass('btn btn-outline-secondary histBtn');

         contHistEl.prepend(rowEl);
         rowEl.append(btnEl);
     }

     if (!city) {
         return;
     }

     // adding the start search button
     $(".hisBtn").on("click", function (event) {
         event.preventDefault();
         city = $(this).text();
         fiveForecastEl.empty();
         getWeatherToday();
     });
 };

 //  below I applied the weather info to the today card/ gives a 5 day forcast
 var cardTodayBody = $(".cardTodayBody")

 function getWeatherToday() {
     var getUrlCurrent = "`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;"

     $(cardTodayBody).empty;

     $.ajax({
             url: getUrlCurrent,
             method: "GET",
         }).then(function (response) {
             $('.cardTodayCityName').text(response.name);
             $('.cardTodayDate').text(date);
             $('.icons').attr('src', `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`);
             //  just wanted to put in how excited I was to learn the option+shift+8 method for °F.  That's all:)
             var pEl = $('<p>').text(`Temerature: ${response.main.temp} °F`);
             cardTodayBody.append(pEl);
             var pEl = $('<p>').text(`Feels like: ${response.main.feels_like} °F`);
             cardTodayBody.append(pElTemp);
             var pElHumid = $('<p>').text(`Humidity: ${response.main.humidity} %`);
             cardTodayBody.append(pElHumid);
             var pElWind = $('<p>').text(`Wind Speed: ${response.wind.speed} MPH`);
             cardTodayBody.append(pElWind);
             var cityLon = response.coord.lon;
             var cityLat = response.coord.lat;
             //applied all the detailed icon data (temp, feels like, humidity, wind speed, Lat & Lon)

             var getUrlUvi = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=hourly,daily,minutely&appid=${key}`;

             $.ajax({
                 url: getUrlUvi,
                 method: 'GET',
             }).then(function (response) {
                 var pElUvi = $('<p>').text(`UV Index; `);
                 var uviSpan = $('<span>').text(response.current.uvi);
                 var uvi = reponse.current.uvi;
                 pElUvi.append(uviSpan);
                 cardTodayBody.append(pEluvi);

                 if (uvi >= 0 && uvi <= 2) {
                     uviSpan.attr('class', 'green');
                 } else if (uvi > 2 && uvi <= 5) {
                     uviSpan.attr('class', "yellow");
                 } else if (uvi > 5 && uvi <= 7) {
                     uviSpan.attr("class", "red")
                 } else {
                     uviSpan.attr("class", "purple")
                 }
                 //  created and if/else if for the UVI and colors to display the extremeness
             });
         }):

         getFiveDayForecast();
 };

 var fiveForecastEl = $('.fiveForecast');

 function getFiveDayForecast() {
     var getUrlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${key}`;

     $.ajax({
         url: getUrlFiveDay,
         method: "GET",
     }).then(function (response) {
         var fiveDayArray = reponse.list;
         var myWeather = [];

         $.each(fiveDayArray, function (index, value) {
             testObj = {
                 date: value.dt_txt.split(' ')[0],
                 time: value.dt_txt.split(' ')[1],
                 temp: value.main.temp,
                 feels_like: value.main.feels_like,
                 icon: value.weather[0].icon,
                 humidity: value.main.humidity
             }
             if (value.dt_text.split('')[1] === "12:00:00") {
                 myWeather.push(testObj);
             }
         })
         // above is an object array for easy reading in console


         //  creating the info cards
         for (let i = 0; i < myWeather.length; i++) {

             var divElCard = $('<div>');
             divElCard.attr("class", "card test-white bg-primary mb-3 cardOne");
             divElCard.attr("style", 'max-width: 200px');
             fiveForecastEl.append(divElCard);

             var divElHeader = $('<div>');
             divElHeader.attr('class', 'card-header')
             var m = moment(`${myWeather[i].date}`).format('MM-DD-YYYY');
             divElHeader.text(m);
             divElCard.append(divElHeader);

             var divElBody = $('<div>');
             divElBody.attr('class', 'card-body');
             divElCard.append(divElBody);

             var divElIcon = $('<img>');
             divElIcon.attr('class', 'icons');
             divElIcon.attr('src', `https://openweathermap.org/img/wn/${myWeather[i].icon}@2x.png`);
             divElBody.append(divElIcon);

             var pElTemp = $('<p>').text(`Temperature: ${myWeather[i].temp} °F`);
             divElBody.append(pElTemp);
             var pElFeel = $('<p>').text(`Feels Loke: ${myWeather[i].feels_like} °F`);
             divElBody.append(pElFeel);
             var pElHumid = $('<p>').text(`Humidity: ${myWeather[i].humidity} %`);
             divElBody.append(pElHumid);
         }
     });
 };









 // 89c4250809c202e3e1990eca9d40606  (my api key)