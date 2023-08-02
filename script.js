// document.getElementById("full-location").innerHTML="Kolkata, West Bengal, India";

// document.getElementById("main-temp").innerHTML="32";
// document.getElementById("curr-stat").innerHTML="Cloudy";

// document.getElementById("curr-loc").innerHTML="Kolkata";
// document.getElementById("max").innerText="34";
// document.getElementById("min").innerHTML="28";
// document.getElementById("date").innerHTML="July 27";
// document.getElementById("day").innerHTML="Thursday";

let data;

//temp details section
const searchBox = document.getElementById("searchbox");
const name = document.getElementById("name");
const region = document.getElementById("region");
const country = document.getElementById("country");
const mainTemp = document.getElementById("main-temp");
const status = document.getElementById("curr-stat");
const currLoc = document.getElementById("curr-loc");
const maxTemp = document.getElementById("max");
const minTemp = document.getElementById("min");
const toDate = document.getElementById("curr-date");
const mainIcon = document.getElementById("main-icon");

//forecast day section
const t1=document.getElementById("time1");
const i1=document.getElementById("icon1");
const tmp1=document.getElementById("temp1");

const t2=document.getElementById("time2");
const i2=document.getElementById("icon2");
const tmp2=document.getElementById("temp2");

const t3=document.getElementById("time3");
const i3=document.getElementById("icon3");
const tmp3=document.getElementById("temp3");

const t4=document.getElementById("time4");
const i4=document.getElementById("icon4");
const tmp4=document.getElementById("temp4");

const t5=document.getElementById("time5");
const i5=document.getElementById("icon5");
const tmp5=document.getElementById("temp5");

const t6=document.getElementById("time6");
const i6=document.getElementById("icon6");
const tmp6=document.getElementById("temp6");

const t7=document.getElementById("time7");
const i7=document.getElementById("icon7");
const tmp7=document.getElementById("temp7");

const t8=document.getElementById("time8");
const i8=document.getElementById("icon8");
const tmp8=document.getElementById("temp8");

const t9=document.getElementById("time9");
const i9=document.getElementById("icon9");
const tmp9=document.getElementById("temp9");

const t10=document.getElementById("time10");
const i10=document.getElementById("icon10");
const tmp10=document.getElementById("temp10");

const t11=document.getElementById("time11");
const i11=document.getElementById("icon11");
const tmp11=document.getElementById("temp11");

const t12=document.getElementById("time12");
const i12=document.getElementById("icon12");
const tmp12=document.getElementById("temp12");

const t13=document.getElementById("time13");
const i13=document.getElementById("icon13");
const tmp13=document.getElementById("temp13");

const t14=document.getElementById("time14");
const i14=document.getElementById("icon14");
const tmp14=document.getElementById("temp14");

const t15=document.getElementById("time15");
const i15=document.getElementById("icon15");
const tmp15=document.getElementById("temp15");

const t16=document.getElementById("time16");
const i16=document.getElementById("icon16");
const tmp16=document.getElementById("temp16");

const t17=document.getElementById("time17");
const i17=document.getElementById("icon17");
const tmp17=document.getElementById("temp17");

const t18=document.getElementById("time18");
const i18=document.getElementById("icon18");
const tmp18=document.getElementById("temp18");

const t19=document.getElementById("time19");
const i19=document.getElementById("icon19");
const tmp19=document.getElementById("temp19");

const t20=document.getElementById("time20");
const i20=document.getElementById("icon20");
const tmp20=document.getElementById("temp20");

const t21=document.getElementById("time21");
const i21=document.getElementById("icon21");
const tmp21=document.getElementById("temp21");

const t22=document.getElementById("time22");
const i22=document.getElementById("icon22");
const tmp22=document.getElementById("temp22");

const t23=document.getElementById("time23");
const i23=document.getElementById("icon23");
const tmp23=document.getElementById("temp23");

const t24=document.getElementById("time24");
const i24=document.getElementById("icon24");
const tmp24=document.getElementById("temp24");

const ptc= document.getElementById("sunny");
const video = document.getElementById("bg-video");

//7 day forecast 
//date
const date0 = document.getElementById("date0");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const date3 = document.getElementById("date3");
const date4 = document.getElementById("date4");
const date5 = document.getElementById("date5");
const date6 = document.getElementById("date6");

//weather
const max1 = document.getElementById("forecast-max1");
const min1 = document.getElementById("forecast-min1");

const max2 = document.getElementById("forecast-max2");
const min2 = document.getElementById("forecast-min2");

const max3 = document.getElementById("forecast-max3");
const min3 = document.getElementById("forecast-min3");

const max4 = document.getElementById("forecast-max4");
const min4 = document.getElementById("forecast-min4");

const max5 = document.getElementById("forecast-max5");
const min5 = document.getElementById("forecast-min5");

const max6 = document.getElementById("forecast-max6");
const min6 = document.getElementById("forecast-min6");

const max7 = document.getElementById("forecast-max7");
const min7 = document.getElementById("forecast-min7");

//weather details
const appTemp = document.getElementById("app-temp");
const humidity = document.getElementById("humid");
const windDir = document.getElementById("wind-dir");
const windSpeed = document.getElementById("wind-speed");
const uv = document.getElementById("uv");
const visibility = document.getElementById("visibility");
const airPressure = document.getElementById("air-pressure");

//other details
const sunRise = document.getElementById("sun-rise");
const sunSet = document.getElementById("sun-set");
const moonRise = document.getElementById("moon-rise");
const moonSet = document.getElementById("moon-set");
const moonPhase = document.getElementById("moon-phase");
const illumination = document.getElementById("illumination");


const getData = async (event) => {
    event.preventDefault();
    if (!searchBox.value) {
      alert("Please Enter The City Name: ");
      return;
    }
  
    //
    const city = searchBox.value;
  
    // Fetch Details
  
    const fetchData = await fetch(
       `https://api.weatherapi.com/v1/forecast.json?key=2c4adba4a9cc4ebfab061657232707&q=${city}&days=8`
    );
  
    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);

    name.innerHTML = data.location.name;
    region.innerHTML = data.location.region;
    country.innerHTML = data.location.country;
    mainTemp.innerHTML = data.current.temp_c;
    status.innerHTML = data.current.condition.text;
    currLoc.innerHTML = data.location.name;
    maxTemp.innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
    minTemp.innerHTML = data.forecast.forecastday[0].day.mintemp_c;
    toDate.innerHTML = data.location.localtime;
    mainIcon.src = data.current.condition.icon;

    const condition = data.current.condition.text;
    const isDay = data.current.is_day;
    const isMoon = data.forecast.forecastday[0].astro.is_moon_up;
    if(condition=="Sunny" && isDay>0){
        video.src="./assets/sunny.mp4";
    }else if(isDay==0){
      video.src = "./assets/moony.mp4";
    }
    if (condition=="Mist"||condition=="Haze"&&isDay>0) {
      video.src = "./assets/mist and haze.mp4";
    }else if(isDay==0){
      video.src = "./assets/moony.mp4";
    }
    if (condition=="Light rain shower" || condition=="Moderate rain" && isDay>0) {
      video.src = "./assets/light rain.mp4";
    }else if(isDay==0){
      video.src = "./assets/moony.mp4";
    }
    if (condition=="Moderate or heavy rain shower" || condition=="Moderate or heavy rain with thunder" || condition=="Torrential rain shower" && isDay>0) {
      video.src = "./assets/heavy rain.mp4";
    }else if(isDay==0){
      video.src = "./assets/moony.mp4";
    }
    if (condition=="Partly cloudy" && isDay>0) {
      video.src = "./assets/partly cloudy.mp4";
    }else if(isDay==0){
      video.src = "./assets/moony.mp4";
    }
    if (condition=="Cloudy" && isDay>0) {
      video.src = "./assets/cloudy day.mp4";
    }else if(isDay==0){
      video.src = "./assets/moony.mp4";
    }
    if (condition=="Overcast" || condition=="Patchy rain possible" && isDay>0) {
      video.src = "./assets/overcast.mp4";
    }else if(isDay==0){
      video.src = "./assets/moony.mp4";
    }

    

    t1.innerHTML = data.forecast.forecastday[0].hour[0].time;
    i1.src = data.forecast.forecastday[0].hour[0].condition.icon;
    tmp1.innerHTML = data.forecast.forecastday[0].hour[0].temp_c;

    t2.innerHTML = data.forecast.forecastday[0].hour[1].time;
    i2.src = data.forecast.forecastday[0].hour[1].condition.icon;
    tmp2.innerHTML = data.forecast.forecastday[0].hour[1].temp_c;

    t3.innerHTML = data.forecast.forecastday[0].hour[2].time;
    i3.src = data.forecast.forecastday[0].hour[2].condition.icon;
    tmp3.innerHTML = data.forecast.forecastday[0].hour[2].temp_c;

    t4.innerHTML = data.forecast.forecastday[0].hour[3].time;
    i4.src = data.forecast.forecastday[0].hour[3].condition.icon;
    tmp4.innerHTML = data.forecast.forecastday[0].hour[3].temp_c;

    t5.innerHTML = data.forecast.forecastday[0].hour[4].time;
    i5.src = data.forecast.forecastday[0].hour[4].condition.icon;
    tmp5.innerHTML = data.forecast.forecastday[0].hour[4].temp_c;

    t6.innerHTML = data.forecast.forecastday[0].hour[5].time;
    i6.src = data.forecast.forecastday[0].hour[5].condition.icon;
    tmp6.innerHTML = data.forecast.forecastday[0].hour[5].temp_c;

    t7.innerHTML = data.forecast.forecastday[0].hour[6].time;
    i7.src = data.forecast.forecastday[0].hour[6].condition.icon;
    tmp7.innerHTML = data.forecast.forecastday[0].hour[6].temp_c;

    t8.innerHTML = data.forecast.forecastday[0].hour[7].time;
    i8.src = data.forecast.forecastday[0].hour[7].condition.icon;
    tmp8.innerHTML = data.forecast.forecastday[0].hour[7].temp_c;

    t9.innerHTML = data.forecast.forecastday[0].hour[8].time;
    i9.src = data.forecast.forecastday[0].hour[8].condition.icon;
    tmp9.innerHTML = data.forecast.forecastday[0].hour[8].temp_c;

    t10.innerHTML = data.forecast.forecastday[0].hour[9].time;
    i10.src = data.forecast.forecastday[0].hour[9].condition.icon;
    tmp10.innerHTML = data.forecast.forecastday[0].hour[9].temp_c;

    t11.innerHTML = data.forecast.forecastday[0].hour[10].time;
    i11.src = data.forecast.forecastday[0].hour[10].condition.icon;
    tmp11.innerHTML = data.forecast.forecastday[0].hour[10].temp_c;

    t12.innerHTML = data.forecast.forecastday[0].hour[11].time;
    i12.src = data.forecast.forecastday[0].hour[11].condition.icon;
    tmp12.innerHTML = data.forecast.forecastday[0].hour[11].temp_c;

    t13.innerHTML = data.forecast.forecastday[0].hour[12].time;
    i13.src = data.forecast.forecastday[0].hour[12].condition.icon;
    tmp13.innerHTML = data.forecast.forecastday[0].hour[12].temp_c;

    t14.innerHTML = data.forecast.forecastday[0].hour[13].time;
    i14.src = data.forecast.forecastday[0].hour[13].condition.icon;
    tmp14.innerHTML = data.forecast.forecastday[0].hour[13].temp_c;

    t15.innerHTML = data.forecast.forecastday[0].hour[14].time;
    i15.src = data.forecast.forecastday[0].hour[14].condition.icon;
    tmp15.innerHTML = data.forecast.forecastday[0].hour[14].temp_c;

    t16.innerHTML = data.forecast.forecastday[0].hour[15].time;
    i16.src = data.forecast.forecastday[0].hour[15].condition.icon;
    tmp16.innerHTML = data.forecast.forecastday[0].hour[15].temp_c;

    t17.innerHTML = data.forecast.forecastday[0].hour[16].time;
    i17.src = data.forecast.forecastday[0].hour[16].condition.icon;
    tmp17.innerHTML = data.forecast.forecastday[0].hour[16].temp_c;

    t18.innerHTML = data.forecast.forecastday[0].hour[17].time;
    i18.src = data.forecast.forecastday[0].hour[17].condition.icon;
    tmp18.innerHTML = data.forecast.forecastday[0].hour[17].temp_c;

    t19.innerHTML = data.forecast.forecastday[0].hour[18].time;
    i19.src = data.forecast.forecastday[0].hour[18].condition.icon;
    tmp19.innerHTML = data.forecast.forecastday[0].hour[18].temp_c;

    t20.innerHTML = data.forecast.forecastday[0].hour[19].time;
    i20.src = data.forecast.forecastday[0].hour[19].condition.icon;
    tmp20.innerHTML = data.forecast.forecastday[0].hour[19].temp_c;

    t21.innerHTML = data.forecast.forecastday[0].hour[20].time;
    i21.src = data.forecast.forecastday[0].hour[20].condition.icon;
    tmp21.innerHTML = data.forecast.forecastday[0].hour[20].temp_c;

    t22.innerHTML = data.forecast.forecastday[0].hour[21].time;
    i22.src = data.forecast.forecastday[0].hour[21].condition.icon;
    tmp22.innerHTML = data.forecast.forecastday[0].hour[21].temp_c;

    t23.innerHTML = data.forecast.forecastday[0].hour[22].time;
    i23.src = data.forecast.forecastday[0].hour[22].condition.icon;
    tmp23.innerHTML = data.forecast.forecastday[0].hour[22].temp_c;

    t24.innerHTML = data.forecast.forecastday[0].hour[23].time;
    i24.src = data.forecast.forecastday[0].hour[23].condition.icon;
    tmp24.innerHTML = data.forecast.forecastday[0].hour[23].temp_c;


    //7 day forecast
    //date
    date0.innerHTML = data.forecast.forecastday[1].date;
    date1.innerHTML = data.forecast.forecastday[2].date;
    date2.innerHTML = data.forecast.forecastday[3].date;
    date3.innerHTML = data.forecast.forecastday[4].date;
    date4.innerHTML = data.forecast.forecastday[5].date;
    date5.innerHTML = data.forecast.forecastday[6].date;
    date6.innerHTML = data.forecast.forecastday[7].date;
    //weather
    max1.innerHTML = data.forecast.forecastday[1].day.maxtemp_c;
    min1.innerHTML = data.forecast.forecastday[1].day.mintemp_c;

    max2.innerHTML = data.forecast.forecastday[2].day.maxtemp_c;
    min2.innerHTML = data.forecast.forecastday[2].day.mintemp_c;

    max3.innerHTML = data.forecast.forecastday[3].day.maxtemp_c;
    min3.innerHTML = data.forecast.forecastday[3].day.mintemp_c;

    max4.innerHTML = data.forecast.forecastday[4].day.maxtemp_c;
    min4.innerHTML = data.forecast.forecastday[4].day.mintemp_c;

    max5.innerHTML = data.forecast.forecastday[5].day.maxtemp_c;
    min5.innerHTML = data.forecast.forecastday[5].day.mintemp_c;

    max6.innerHTML = data.forecast.forecastday[6].day.maxtemp_c;
    min6.innerHTML = data.forecast.forecastday[6].day.mintemp_c;

    max7.innerHTML = data.forecast.forecastday[7].day.maxtemp_c;
    min7.innerHTML = data.forecast.forecastday[7].day.mintemp_c;


    //weather details
    appTemp.innerHTML = data.current.feelslike_c;
    humidity.innerHTML = data.current.humidity;
    windDir.innerHTML = data.current.wind_dir;
    windSpeed.innerHTML = data.current.wind_kph;
    uv.innerHTML = data.current.uv;
    visibility.innerHTML = data.current.vis_km;
    airPressure.innerHTML = data.current.pressure_mb;

    //other details
    sunRise.innerHTML = data.forecast.forecastday[0].astro.sunrise;
    sunSet.innerHTML = data.forecast.forecastday[0].astro.sunset;
    moonRise.innerHTML = data.forecast.forecastday[0].astro.moonrise;
    moonSet.innerHTML = data.forecast.forecastday[0].astro.moonset;
    moonPhase.innerHTML = data.forecast.forecastday[0].astro.moon_phase;
    illumination.innerHTML = data.forecast.forecastday[0].astro.moon_illumination;
}