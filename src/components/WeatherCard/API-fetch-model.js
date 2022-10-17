// {location: {…}, current: {…}, forecast: {…}}

let APIweatherDataJSON = 

{
    location: {
        country: "USA",
        name: "Los Angeles", // {data.location.name}
        region: "California",
        localtime: "2022-10-14 19:21",
    },

    current: {
        condition: {
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            text: "Partly cloudy"
        },
    feelslike_f: 68,
    temp_f: 68,
    uv: 4
    },

    forecast: {
        forecastday:{
            0: {
                astro: { 
                    moon_illumination: "84",
                    moon_phase: "Waxing Gibbous",
                    moonrise: "08:11 PM",
                    moonset: "09:47 AM",
                    sunrise: "06:56 AM",
                    sunset: "06:22 PM",
                },
                day: {
                    daily_chance_of_rain: 64,
                    daily_chance_of_snow: 0,
                    maxtemp_f: 83.5,
                    mintemp_f: 61.5
                }
            }
        }
    },

}
