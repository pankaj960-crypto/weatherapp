# Weather App

A simple browser-based weather app that lets you search for a city and view its current weather conditions. It displays the temperature in Celsius, a short weather description, humidity, and wind speed, with an image that changes according to the weather.

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

