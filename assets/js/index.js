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
                 }; cityHist.push(city);

                 localStorage.setItem('citu', JSON.stringify(cityHist));
                 fiveForecastEl.empy(); getHistory(); getWeatherToday();

             });












         // 89c4250809c202e3e1990eca9d40606  (my api key)