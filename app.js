
//init weather object
const weather = new Weather('519188');

//init UI
const ui = new UI();

//change location event based on number typed in form
document.getElementById('w-change-btn').addEventListener('click', () => {
    
    const cityId = document.getElementById('cityId').value;
    
    weather.changeWeather(cityId);

    getWeather();

//close modal JQUERY b/c of bootstrap
$('#locModal').modal('hide');
});


//test it
function getWeather(){
weather.getWeather().then(results => {
    ui.paint(results);
    console.log(results);
})
.catch(err => console.log(err));
}

getWeather();