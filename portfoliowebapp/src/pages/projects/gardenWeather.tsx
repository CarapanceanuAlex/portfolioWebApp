import { useState, useEffect } from "react";

interface WeatherData{
    location: {
        name: string,
        region: string,
        country: string,
        localtime: string
    };
    current: {
        temp_c: number,
        condition: {
            text: string,
            icon: string,
        },
        humidity: number,
        wind_kph: number,
    };
}


export default function GardenWeather (){
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState('');

    const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;

    useEffect(() => {fetchWeather();}, []);

    const fetchWeather = async () => {
        try{
            setError('');

            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Rasuceni,Giurgiu,Romania&aqi=no`)

            if(!response.ok){
                throw new Error('The error is with the API buddy :3')
            }

            const data = await response.json();
            console.log('Am primit datele baby:', data)
            setWeather(data);
        } 
        catch (err) {
            setError(err instanceof Error ? err.message: 'Avem eroare de s-a bulit baaa');
            console.log('EROARE CUMETRE!!!', err)
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-black bg-[url('./assets/woodlandGardenBg.png')] 
        bg-cover gap-4 md:gap-6 p-8">
            <div className="flex flex-col items-center justify-center bg-Bone text-5xl font-bold p-5 rounded-2xl border-6 border-black">
                <h1 className="mb-5">Răsuceni, Giurgiu, Romania</h1>

                {error && <div className="text-red-700 text-xl mt-4">{error}</div>}

                {!weather && !error && <div className="text-2xl mt-4">Checking thermometers and calibrating stuff...</div>}

                {weather && (
                    <>  
                        <div className="flex flex-row items-center justify-center">
                            <img src={weather.current.condition.icon} alt="weather" className="w-24 h-24"/>
                            <p>{weather.current.condition.text}</p>
                        </div>
                        <div className="flex flex-row items-center justify-center text-2xl">
                            <p className="ml-7">Temp: {weather.current.temp_c}°C</p>
                            <p className="ml-7">Humidity: {weather.current.humidity}%</p>
                            <p className="ml-7">Wind speed: {Math.round(weather.current.wind_kph)} km/h</p>
                        </div>
                    </>)
                }

            </div>
        </div>
    );
}