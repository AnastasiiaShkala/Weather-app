# Weather App

Welcome to the Weather App GitHub repository, a simple application that provides the current weather conditions worldwide.

## Live Demo

Try the Weather App live: [Weather App Demo](https://weatherappjs.glitch.me/)

## Project Overview

This project is a weather application that allows users to get real-time weather information for any city globally. It's powered by the OpenWeatherMap API and is built using HTML, CSS, and JavaScript.

## Usage

To use the app, simply enter the name of the city in the input field and press Enter. The app will fetch the weather data from the OpenWeatherMap API and display the information on the screen.

## API Configuration

The application is configured to use the OpenWeatherMap API. Make sure to replace the API key in the `api` object with your own key if needed.

```javascript
const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "your_openweathermap_api_key_here"
};
 ```

## How to Run

1. Clone the repository:

    ```bash
    git clone https://github.com/weather-app.git
    ```

2. Open the `index.html` file in your browser.

## Features

- **Live Weather Data:** Fetches real-time weather data using the OpenWeatherMap API.
- **Search by City:** Enter the name of the city in the input field and press Enter to get weather information.

## Dependencies

- OpenWeatherMap API
- HTML
- CSS
- JavaScript


