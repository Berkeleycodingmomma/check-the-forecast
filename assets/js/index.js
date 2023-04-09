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

 //  below applies the weather info to the today car and the gives a 5 day forcast
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
         var pEl = $('<p>').text('Temerature: ${response.main.temp} °F');
         )


     })














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




         }





     })



 }










 // 89c4250809c202e3e1990eca9d40606  (my api key)