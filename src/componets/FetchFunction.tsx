import React, {Component} from 'react';
import CurrentWeatherDisplay from './DisplayFunction';



type WeatherState = {
    weatherLocation: {
        main: {
            temp: string;
            feels_like: string;
            humidity: string
        },
        weather: {
            description: string
        },
        
    }
    currentLat: number;
    currentLong: number;
}

type Geolocation={
    coords: {
        latitude: number;
        longitude: number;
    }; 
}
export default class CurrentWeather extends Component<{}, WeatherState>{
    constructor(props: {}){
        super(props);
        this.state = { 
            weatherLocation:{
                main:{
                    temp:'', feels_like:'', humidity:''
                },
                weather:{
                    description:''
                },
            }, 
            currentLat: 1, 
            currentLong: 2, 
            }
        this.success = this.success.bind(this)
    }
    success(pos: Geolocation) {
        console.log(pos);
        let crd = pos.coords;
        this.setState({currentLat: crd.latitude, currentLong: crd.longitude});
        console.log(this.state.currentLat, this.state.currentLong);
    }
    
    weatherFetch (){
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.currentLat}&lon=${this.state.currentLong}&units=imperial&appid=5e43c13207b044185638b14869331fda`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then((resData) =>{
            this.setState({weatherLocation: resData})
        })
        .then(()=>{console.log('location weather:', this.state.weatherLocation)})
        .catch(err => console.log(err))
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.success);
        this.weatherFetch();
    }

    render(){
        return(
            <div>
            <CurrentWeatherDisplay weatherLocation={this.state.weatherLocation}/> 
            </div>
        )
    }
}