function clock(){

    let now = new Date();
    
    let hrs = now.getHours();

    let min = now.getMinutes();

    let sec = now.getSeconds();

    let session = document.querySelector('.ampm');

    if(hrs >= 12){

        session.innerHTML='PM'
    }else{

        session.innerHTML='AM'
    }
    // add 0s in min sec hours
    // if(sec <10){
    //     sec = '0' + sec;
    // } or ternary operator ?:
//use this if for railway time to normal time
    if(hrs > 12){
        hrs = hrs - 12;
    }
    document.querySelector('.hours').innerHTML = hrs < 10 ? '0' + hrs : hrs;

    document.querySelector('.minutes').innerHTML = min < 10 ? '0' + min : min;

    document.querySelector('.seconds').innerHTML = sec < 10 ? '0' + sec :  sec;
}
setInterval(clock,10)

clock();