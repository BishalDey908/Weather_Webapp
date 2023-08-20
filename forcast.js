
let button = document.querySelector(".button")
button.addEventListener("click",()=>{
    document.querySelector(".content1").style.display="block"
    let inputVal = document.querySelector("#myInput").value
    console.log(inputVal)


    async function forcastdata(){
    let url = (`https://api.openweathermap.org/data/2.5/forecast?appid=4007fb888a8ab27e36a84a57afd2d404&q=${inputVal}&units=metric`)
    let data = await fetch(url)
    let convert=await data.json();
    console.log(convert)
    document.querySelector(".location").innerHTML=`Location - ${inputVal}`
    document.querySelector(".location1").innerHTML=`Location - ${inputVal}`
    document.querySelector(".location2").innerHTML=`Location - ${inputVal}`
    document.querySelector(".location3").innerHTML=`Location - ${inputVal}`


    document.querySelector(".date_time_1").innerHTML=convert.list[0].dt_txt
    document.querySelector(".date_time_2").innerHTML=convert.list[1].dt_txt
    document.querySelector(".date_time_3").innerHTML=convert.list[2].dt_txt
    document.querySelector(".date_time_4").innerHTML=convert.list[3].dt_txt
    

    document.querySelector(".temp_1").innerHTML=`Temparature - ${parseInt(convert.list[0].main.temp)}&#x2103`
    document.querySelector(".temp_2").innerHTML=`Temparature - ${parseInt(convert.list[1].main.temp)}&#x2103`
    document.querySelector(".temp_3").innerHTML=`Temparature - ${parseInt(convert.list[2].main.temp)}&#x2103`
    document.querySelector(".temp_4").innerHTML=`Temparature - ${parseInt(convert.list[3].main.temp)}&#x2103`
    

    document.querySelector(".weat_1").innerHTML=`${convert.list[0].weather[0].description}`
    document.querySelector(".weat_2").innerHTML=`${convert.list[1].weather[0].description}`
    document.querySelector(".weat_3").innerHTML=`${convert.list[2].weather[0].description}`
    document.querySelector(".weat_4").innerHTML=`${convert.list[3].weather[0].description}`


    document.querySelector(".windspeed_1").innerHTML=`Wind - ${convert.list[0].wind.speed} meter/sec`
    document.querySelector(".windspeed_2").innerHTML=`Wind - ${convert.list[1].wind.speed} meter/sec`
    document.querySelector(".windspeed_3").innerHTML=`Wind - ${convert.list[2].wind.speed} meter/sec`
    document.querySelector(".windspeed_4").innerHTML=`Wind - ${convert.list[3].wind.speed} meter/sec`

    document.querySelector(".cloud_1").innerHTML=`Clouds - ${convert.list[0].clouds.all}%`
    document.querySelector(".cloud_2").innerHTML=`Clouds - ${convert.list[1].clouds.all}%`
    document.querySelector(".cloud_3").innerHTML=`Clouds - ${convert.list[2].clouds.all}%`
    document.querySelector(".cloud_4").innerHTML=`Clouds - ${convert.list[3].clouds.all}%`
    

    document.querySelector(".hig_1").innerHTML=`Max temp - ${parseInt(convert.list[0].main.temp_max)}&#x2103`
    document.querySelector(".hig_2").innerHTML=`Max temp - ${parseInt(convert.list[1].main.temp_max)}&#x2103`
    document.querySelector(".hig_3").innerHTML=`Max temp - ${parseInt(convert.list[2].main.temp_max)}&#x2103`
    document.querySelector(".hig_4").innerHTML=`Max temp - ${parseInt(convert.list[3].main.temp_max)}&#x2103`
    

    document.querySelector(".lo_1").innerHTML=`Min temp - ${parseInt(convert.list[0].main.temp_min)}&#x2103`
    document.querySelector(".lo_2").innerHTML=`Min temp - ${parseInt(convert.list[1].main.temp_min)}&#x2103`
    document.querySelector(".lo_3").innerHTML=`Min temp - ${parseInt(convert.list[2].main.temp_min)}&#x2103`
    document.querySelector(".lo_4").innerHTML=`Min temp - ${parseInt(convert.list[3].main.temp_min)}&#x2103`
    }
    forcastdata()

})

let butt =document.querySelector(".button")
butt.addEventListener("click",()=>{
    let inpu=document.querySelector("#myInput")
    inpu.value=""
})