# Weather or Not

[Live Site](https://simeonbain.github.io/weather-or-not)

## Overview

A fun way of getting your daily weather update by finding out if you need to bring something.

Features:

- The user can input any city/location and pick an item. The app will determine if the user should bring the item based on the temperature and conditions.
- Supported items: Umbrella, Beanie, Sunnies, or Snowboard
- Display of today's weather: whether to bring the item, current temperature, current conditions, minimum temperature, maximum temperature
- Display of 7 day forecast: whether to bring the item, max temperature, expected conditions
- Responsive design that presents an appropriate UI on both Mobile and Desktop and for any screen size

Limitations:

- If more than one location has the same name, currently only one is returned/selectable.
- Currently there is no way for the user to customize the parameters that determine if an item is required.
- Whether an item is required today depends only on the current weather, and doesn't incorporate the forecast weather for the rest of the day.

## Screenshots

### Desktop:

![Screenshot of the application on desktop](../media/Screenshot-Desktop.png?raw=true)

### Mobile:

![Screenshots of the application on mobile](../media/Screenshot-Mobile.png?raw=true)

## Technologies

- React
- Redux (React-Redux, Redux Toolkit)
- TypeScript
- Vite

## Third-party APIs

- Open Weather Map: GeoCode and OneCall APIs

## Motivation

This project was used to solidify concepts involved with using React, Redux, TypeScript, and Vite along with fetching data from APIs.
