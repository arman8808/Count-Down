console.log("Count Down!")
let end=new Date("Oct 5,2022").getTime();

let x= setInterval(function count(){
    let now=new Date().getTime();
    let diffrence=Math.floor(end-now)
    let days=Math.floor(diffrence/(1000*24*60*60))
    let hr=Math.floor(((diffrence)%(1000*60*60*24))/(1000*60*60))
    let min=Math.floor(((diffrence)%(1000*60*60))/(1000*60))
    let sec=Math.floor(((diffrence)%(1000*60))/(1000))
    // console.log(((diffrence)%(1000*60*60*24))/(1000*60*60))
    document.getElementById("days").innerHTML=days+'d'
    document.getElementById("hr").innerHTML=hr
    document.getElementById("min").innerHTML=min
    document.getElementById("sec").innerHTML=sec
    if(diffrence<=0){
        clearInterval(x);
        document.getElementsByClassName(".container").innerHTML="Sales Ends!"
    }

},1000)
