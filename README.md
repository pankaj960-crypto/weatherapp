# Weather App

A simple browser-based weather app that lets you search for a city and view its current weather conditions. It displays the temperature in Celsius, a short weather description, humidity, and wind speed, with an image that changes according to the weather.

## Features

- Search for current weather by city name
- View temperature in Celsius, weather description, humidity, and wind speed
- Weather illustration changes based on the returned conditions
- Lightweight app built with browser-native technologies

## Technologies used

- **HTML5** for the page structure
- **CSS3** for styling and layout
- **Vanilla JavaScript** for search interactions, fetching weather data, and updating the page
- **OpenWeatherMap Current Weather API** for weather data
- **SVG and WebP images** for weather and detail icons

## Run the project

1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. Enter a city name and select **Search**.

The app needs an OpenWeatherMap API key to retrieve weather data. In `weather.js`, set the `api_Key` value to your own key. Keep private API keys out of public repositories; for a production app, use a backend to protect the key.

## Project files

- `index.html` — weather app page and display elements
- `weather.css` — styles for the weather app
- `weather.js` — city search, API request, and display updates
- `*.webp`, `*.svg` — weather illustrations and icons

## Screenshot

Add a screenshot of the app here to show its interface:

```md
![Weather App screenshot](path/to/screenshot.png)
```

## Live demo: https://pankaj960-crypto.github.io/weatherapp/

Add a link to the deployed app here when one is available.
