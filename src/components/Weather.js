import React from 'react';
import Loader from "react-loader-spinner";

class Weather extends React.Component {
    render() {
        if(!this.props.loading) {
            return (
                <div className="infoWeath">
                    {this.props.city &&
                        <div>
                            <p>Location: {this.props.city}</p>
                            <p>Temperature: {this.props.temp}</p>
                            <p>Sunrise: {this.props.sunrise}</p>
                            <p>Sunset: {this.props.sunset}</p>
                        </div>
                    }
                    <p className="error">{this.props.error}</p>
                </div>
            );
        } else {
            return (
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            );
        }

    }
}

export default Weather;