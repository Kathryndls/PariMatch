import React from 'react';
import classes from './WeeklyForecastItem.module.scss';

const WeeklyForecastItem = ({date, forecast}) => {
   const formatTemp = (temperature) => {
      const tempCelsius = Math.round(temperature - 273.15);
      const tempFormat = tempCelsius > 0 ? `+${tempCelsius}` : tempCelsius;

      return tempFormat + '°С';
   }

   const convertDate = (date) => {
      const dateInputTA = new Date(date).toLocaleDateString().split('.').join('/');
      let editedDate = dateInputTA.split('/').reverse();
      editedDate[1] = +editedDate[1] - 1;

      const formatedDate = new Date(...editedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

      return formatedDate
   }

   const formatWindDirection = (dir) => {
      if (dir >= 348.75 && dir >= 11.25) {
         return 'N'
      } else if (dir >= 11.25 && dir <= 33.75) {
         return 'NNE'
      } else if (dir >= 33.75 && dir <= 56.25) {
         return 'NE'
      } else if (dir >= 56.25 && dir <= 78.75) {
         return 'ENE'
      } else if (dir >= 78.75 && dir <= 101.25) {
         return 'E'
      } else if (dir >= 101.25 && dir <= 123.75) {
         return 'ESE'
      } else if (dir >= 123.75 && dir <= 146.25) {
         return 'SE'
      } else if (dir >= 146.25 && dir <= 168.75) {
         return 'SSE'
      } else if (dir >= 168.75 && dir <= 191.25) {
         return 'S'
      } else if (dir >= 191.25 && dir <= 213.75) {
         return 'SSW'
      } else if (dir >= 213.75 && dir <= 236.25) {
         return 'SW'
      } else if (dir >= 236.25 && dir <= 258.75) {
         return 'WSW'
      } else if (dir >= 258.75 && dir <= 281.25) {
         return 'W'
      } else if (dir >= 281.25 && dir <= 303.75) {
         return 'WNW'
      } else if (dir >= 303.75 && dir <= 326.25) {
         return 'NW'
      } else if (dir >= 326.25 && dir <= 348.75) {
         return 'NNW'
      }
   }

   const dayOfTheWeek = new Date(date.slice(0, 10)).getDay();

   const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
   ];
   // console.log(forecast);
   return (
      <div className={classes['WeeklyForecastItem']}>
         <ul className="info">
            <li>{days[dayOfTheWeek]}</li>
            <li>Date: {convertDate(forecast.dt_txt)}</li>
            <li>
               <img 
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  alt={forecast.weather[0].description}
               />
            </li>
            <li>Description: {forecast.weather[0].description}</li>
            <li>Max temp: {formatTemp(forecast.main.temp_max)}</li>
            <li>Min temp: {formatTemp(forecast.main.temp_min)}</li>
            <li>Pressure: {forecast.main.pressure} mm</li>
            <li>Humidity: {forecast.main.humidity} %</li>
            <li>Wind Speed: {forecast.wind.speed} km/h</li>
            <li>Wind Direction: {formatWindDirection(forecast.wind.deg)}</li>
         </ul>
      </div>
   );
};

export default WeeklyForecastItem;