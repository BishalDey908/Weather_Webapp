


let a = 0
window.addEventListener("load", () => {
    let loa = document.querySelector(".load")
        setTimeout(() => {
            loa.style.display = "none"
    }, 2500);
a = a + 1
})

window.onload = function(){  
    document.querySelector(".loading1").innerHTML= "Please enter a location";  
    }  


let a1 =document.querySelector("i")

let a2 =document.querySelector(".sunWithClouds")

let count=0
a1.addEventListener("click",()=>{
    
    
    let a2 =document.querySelector(".sunWithClouds")
    let text =document.querySelector(".hw")
    text.innerHTML=""
    a2.style.display="none"
    document.querySelector(".loading1").innerHTML=""
    document.querySelector(".loading1").style.display="none"
    document.querySelector(".firstcard").style.display="none"
    document.querySelector(".secondcard").style.display="none"
    count=count+1

    if(count===2){
        let a2 =document.querySelector(".sunWithClouds")
        a2.style.display="block"
        let text =document.querySelector(".hw")
        text.innerHTML="Current Weather"
        document.querySelector(".loading1").innerHTML="Please enter a location"
        document.querySelector(".loading1").style.display="block"
        document.querySelector(".firstcard").style.display="none"
    document.querySelector(".secondcard").style.display="none"
        count=0
    
}



})







let count1=0
a1.addEventListener("click",()=>{
    let  Val1 = document.querySelector("#myInput").value
    // if(Val1===""){
    // document.querySelector(".loading1").style.display="none"
    // document.querySelector(".loading1").innerHTML=""

    // document.querySelector(".firstcard").style.display="none"
    //     document.querySelector(".secondcard").style.display="none"
    // count1=count1+1
    // if(count1===2){
    //     document.querySelector(".loading1").style.display="block"
    //     loadtext = document.querySelector(".loading1")
    //     loadtext.innerHTML="Please enter a location"
    //     document.querySelector(".firstcard").style.display="block"
    //     document.querySelector(".secondcard").style.display="block"
    //     count1=0
    // }
    // }

    if(Val1!=""){
        console.log("hi")
        document.querySelector(".loading1").innerHTML=""
        document.querySelector(".firstcard").style.display="none"
        document.querySelector(".secondcard").style.display="none"
        count1=count1+1
    
        if(count1===2){
            
            document.querySelector(".loading1").style.display="none"
            document.querySelector(".loading1").innerHTML=""
            document.querySelector(".firstcard").style.display="block"
            document.querySelector(".secondcard").style.display="block"
            count1=0
        }
    }
})




function getInputValue() {
    let Val = document.querySelector("#myInput").value
    if(Val===""){
        document.querySelector(".loading1").innerHTML="Location not found..😔"
    }
    else{
    setTimeout(()=>{
        document.querySelector(".loading1").style.display="none"
    document.querySelector(".firstcard").style.display="block"
    document.querySelector(".secondcard").style.display="block"
    // Selecting the input element and get its value 
    },7000)

    setTimeout(()=>{
        document.querySelector(".firstcard").style.display="none"
    document.querySelector(".secondcard").style.display="none"
        document.querySelector(".loading1").style.display="block"
        document.querySelector(".loading1").innerHTML="Please wait searching for data."
    },1000)

    setTimeout(()=>{
        document.querySelector(".loading1").style.display="block"
        document.querySelector(".loading1").innerHTML="Please wait searching for data.."
    },2000)

    setTimeout(()=>{
        document.querySelector(".loading1").style.display="block"
        document.querySelector(".loading1").innerHTML="Please wait searching for data..."
    },3000)

    setTimeout(()=>{
        document.querySelector(".loading1").style.display="block"
        document.querySelector(".loading1").innerHTML="Please wait searching for data...."
    },4000)

    let inputVal = document.querySelector("#myInput").value
    async function getdata() {
        let  url=(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4007fb888a8ab27e36a84a57afd2d404&q=${inputVal}&&units=metric`) 
        
        let data = await fetch(url)
        let convert = await data.json()
        console.log(convert)
        let city = convert.name
        console.log(city)
        let temparature = parseInt(convert.main.temp)
        let time = new Date
        let date = time.toLocaleDateString()
        let time1 = time.toLocaleTimeString()
        let weather = convert.weather[0].description
        let wind = parseInt(convert.wind.speed)
        let cloud = convert.clouds.all
        let timezone = convert.sys.country
        let lat = convert.coord.lat
        let lon = convert.coord.lon


        setTimeout(()=>{
        document.querySelector(".city").innerHTML = `${city} ${timezone}`
        document.querySelector(".temp").innerHTML = `Temparature- ${temparature} &#x2103;`
        document.querySelector(".dateandtime").innerHTML = `${date} || ${time1}`
        document.querySelector(".weatherdes").innerHTML = `weather- ${weather}`
        document.querySelector(".windspeed").innerHTML = `wind- ${wind}  meter/sec`
        document.querySelector(".cloud").innerHTML = `clouds- ${cloud}%`
        document.querySelector(".altitute").innerHTML = `Latitude: ${lat}`
        document.querySelector(".longitute").innerHTML = `Longitude: ${lon}`
        },7000)

        
         
    }
    getdata()
    
    

    async function gtdata() {
        let inputVal = document.querySelector("#myInput").value
        let  url=(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4007fb888a8ab27e36a84a57afd2d404&units=metric&q=${inputVal}`) 
        
        let data1 = await fetch(url)
        let convert1 = await data1.json()
        console.log(convert1)
        console.log(convert1.main.feels_like)
        try {
            setTimeout(()=>{
                let dat1 =convert1.main.humidity
                let dat2 =convert1.main.feels_like
            if(dat1==="" || dat2===""){
                document.querySelector(".humidity").innerHTML = `humidity- data not found`
            document.querySelector(".feel").innerHTML = `Feel like- data not found`
            }
            else{
            document.querySelector(".humidity").innerHTML = `humidity- ${convert1.main.humidity}%`
            document.querySelector(".feel").innerHTML = `Feel like- ${convert1.main.feels_like} &#x2103`
            }
            },7000)
        } catch (error) {
            document.querySelector(".humidity").innerHTML = `Data Not found`
            document.querySelector(".feel").innerHTML = `Data not found`
        }
        
    }
    gtdata()

}
}

let butt1 = document.querySelector("#sound")
let value=document.querySelector("#myInput").value


butt1.addEventListener("click",()=>{
    let value=document.querySelector("#myInput").value

    
        getdata(value)
        async function getdata(value){
            
            document.querySelector(".sound").innerHTML=`<i class="fa-solid fa-volume-high fa-2xl"></i>`
            


            let  url1=(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4007fb888a8ab27e36a84a57afd2d404&units=metric&q=${value}`)

 
            let  url=(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4007fb888a8ab27e36a84a57afd2d404&q=${value}&units=metric`)
        let data1 = await fetch(url1)
        let convert = await data1.json()
        
        let city1 = convert.name
        let temparature = convert.main.temp
        
             
        let weather = convert.weather[0].description
        // let wind = parseInt(convert.data[0].wind_spd)
        // let cloud = convert.data[0].clouds

        
        
        let data = await fetch(url)
        let convert1 = await data.json()

        setTimeout(()=>{
        // let feel=convert1.main.feels_like
        let humidity =  convert1.main.humidity
        
        console.log(humidity)
        let text
        text=`The Sky of ${city1} is ${weather}.The temparature is ${temparature}degree Celsius. humidity is ${humidity}%. `
        // feel like ${feel}degree Celsius .Wind speed ${wind} meter/second.  Clouds present ${cloud}%
        
            let speech1 = new SpeechSynthesisUtterance(text)
            speechSynthesis.speak(speech1)
            
            console.log(text)
        
        },1000)
        setTimeout(()=>{
            document.querySelector("#myInput").value =""
            
            document.querySelector(".sound").innerHTML=`<i  class="fa-solid fa-volume-xmark fa-2xl" id="sound" ></i>`
        },11000)
        
        setTimeout(()=>{
            window.location.reload()
        },12000)
    }
    })

    
    
    




let butt =document.querySelector(".button")
// butt.addEventListener("click",()=>{
//     let inpu=document.querySelector("#myInput")
//     inpu.value=""
// })



    let i=0
    butt.addEventListener("click",()=>{
        setTimeout(()=>{
        
        Notification.requestPermission().then(perm =>{
            if(perm === "granted"){
                if(i===0){
                new Notification("From WeatherX",{
                    body:"Thank You For Using WeatherX",
                    // icon:"fi_logo.png",
                    // image:"weatherx-logo (2).png"
                })
                i=i+1
            }
            }
        })
    
    },5000)
    })


  butt.addEventListener("click",()=>{
    
  })

  

