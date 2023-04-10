# check-the-forecast

Third-Party APIs Work Day Scheduler

# Check The Forecast Near You

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 





## Description 


Screen shot of my final project
![Alt text](https://file%2B.vscode-resource.vscode-cdn.net/Users/Amanda/Desktop/check-the-forecast/assets/css/images/screen-shot.png?version%3D1681159745489)









##  Server-Side APIs Challenge: Weather Dashboard, Code examples


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
---------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
  
			if (uvi >= 0 && uvi <= 2) {
				uviSpan.attr('class', 'green');
			} else if (uvi > 2 && uvi <= 5) {
				uviSpan.attr("class", "yellow")
			} else if (uvi > 5 && uvi <= 7) {
				uviSpan.attr("class", "orange")
			} else if (uvi > 7 && uvi <= 10) {
				uviSpan.attr("class", "red")
			} else {
				uviSpan.attr("class", "purple")
			}
		});
	});

```
**(ABOVE)- This sets the UV Index to match an exposure chart and it's severity based on the color shown.

---------------------------------------------------------------------------------------------------------------------------------------------------------
## Author Info

### Amanda Gray

* [LinkedIn](https://www.linkedin.com/in/amanda-gray-831a65254/)

* [Deployed Application link](


## Credits

Shout out to UC Berkeley Instructor Jerome Chenette and his TA's, Manuel Nunes, Kyle Vance, and James Harding! 



© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


