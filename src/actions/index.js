
import axios    from 'axios'

const OPENWEATHER_API_KEY = 'af30b24711f958d06595e0c36e2a257d'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHER_API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATER'

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},au`

    const request = axios.get(url)

    console.log('Request:', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }

}
