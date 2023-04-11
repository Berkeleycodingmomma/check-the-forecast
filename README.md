# check-the-forecast

Server-Side APIs Challenge: Weather Dashboard

# Check The Forecast Near You

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
Link to retreive an API for my weather dashboard: https://openweathermap.org/
How API calls work: https://www.cloudflare.com/learning/security/api/what-is-api-call/
Bootstrap cheatsheet: https://bootstrap-cheatsheet.themeselection.com/
Another Bootstrap cheatsheet: https://cheatography.com/masonjo/cheat-sheets/bootstrap/
Local storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
Font Awesome Search Icon: https://www.w3resource.com/icon/font-awesome/web-application-icons/search.php



## Description 
I have built a Third-party API weather dashboard for a user to see the weather outlook for  multiiple cities. User can search for a city and then they will be presented with the current date and weather, along with a five day forecast. This five day forecast will inform them aboaut the temperature, feels like, humidity, wind speed. It will continue to store the users search history below the search bar.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


![Screen Shot 2023-04-10 at 2 41 05 PM](https://user-images.githubusercontent.com/127444682/231057040-d8f34bfc-4d00-4316-b28c-81b5a6c5a422.png)







---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
##  Server-Side APIs Challenge: Weather Dashboard Code examples


--------------------------------------------------------------------------------------------------------------------------------------------------------

 ```sh
   <label>Search for a City:</label>

                <div class="input-group mb-3">
                    <input type="text" class="form-control textVal" placeholder="Heber...">
                    <div class="input-group-append btnPar">
                        <button class="btn btn-primary search" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                    </div>
                </div>

```

**(ABOVE)- This is the search box container of where the user will input the city they are requesting info for.

--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
    
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS')

var cityHist = [];

$('.search').on("click", function (event) {
	event.preventDefault();
	city = $(this).parent('.btnPar').siblings('.textVal').val().trim();
	if (city === "") {
		return;
	};
	cityHist.push(city);

	localStorage.setItem('city', JSON.stringify(cityHist));
	fiveForecastEl.empty();
	getHistory();
        getWeatherToday();
   });


```

**(ABOVE)- This will grab the current time and date and then save the text value of the search and save it to an array in storage.
--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh

	$('.histBtn').on("click", function (event) {
		event.preventDefault();
		city = $(this).text();
		fiveForecastEl.empty();
		getWeatherToday();
	});
};

```
**(ABOVE)- This allows the buttons to start a search as well.
--------------------------------------------------------------------------------------------------------------------------------------------------------

```sh

  body {
  background-image: url(../css/images/weather\ pic.jpeg);
  background-size: contain;
  align-content: center;
  font-family: 'Rubik Pixels';
}

```
**(ABOVE)- I added a background picture for fun. I choose to keep the search history buttons slighlty transparent so it wouldn't look to cluttered, but when you hover over the searched history buttons, the light grey background apears for easier read. 

---------------------------------------------------------------------------------------------------------------------------------------------------------
## Author Info

### Amanda Gray

* [LinkedIn](https://www.linkedin.com/in/amanda-gray-831a65254/)

* [Deployed Application link](https://berkeleycodingmomma.github.io/check-the-forecast/)

## Credits

Shout out to UC Berkeley Instructor Jerome Chenette and his TA's, Manuel Nunes, Kyle Vance, and James Harding! 



© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


