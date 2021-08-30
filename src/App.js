
import React from 'react';
import './App.css';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "105f58d4cedeb3f3e15d9adde170dbb6";

class App extends React.Component {
  state = {
    temp: null,
    city: null,
    country: null,
    sunrise: null,
    sunset: null,
    error: null,
    loading: false
  }

  getWeather = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    })

    const city = e.target.elements.city.value;
    console.log(city);

    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await api_url.json();
    console.log(data);

    function calcTime(time) {
      var date = new Date();
      date.setTime(time);
      let newTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      console.log(newTime)
      return newTime
    };

    if(city) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: calcTime(data.sys.sunrise),
        sunset: calcTime(data.sys.sunset),
        error: null,
        loading: false
      });
      console.log(this.state);
    } else {
      this.setState({
        temp: null,
        city: null,
        country: null,
        sunrise: null,
        sunset: null,
        error: "What`s the city again?",
        loading: false
      });
    }

  }
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info/>
              </div>
              <div className="col-sm-7 form">
                <Form weather={this.getWeather}/>
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  error={this.state.error}
                  loading={this.state.loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
