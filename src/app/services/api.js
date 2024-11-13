const getWeatherFromCity = async(city) => {
    const api_data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=es&APPID=6557810176c36fac5f0db536711a6c52`
    ).then(resp => resp.json())

    if (api_data.cod === '200'){
        console.log(api_data)
        return api_data
    }else return []
    
}

export default {
    getWeatherFromCity
}