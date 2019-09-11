class Weather {
    constructor(id) {
        this.apiKey = '6495c0bed31e3c8d0022aa330f58dbb1';
        this.id = id;
    }


//fetch weather from API
async getWeather() {
    //response request
    const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${this.id}&units=imperial&APPID=${this.apiKey}`
    );

    //test: status code:  console.log(response);
    
    //response data
    const responseData = await response.json();

    //return responedata and the exact object from the api
    return responseData;
}

//Change Weather Location
changeWeather(cityId){
    this.id = cityId;
}
}