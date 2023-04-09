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










 // 89c4250809c202e3e1990eca9d40606  (my api key)