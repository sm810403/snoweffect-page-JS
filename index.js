window.addEventListener('DOMContentLoaded', ()=>{
    const snowFlake = document.querySelector('.fa-snowflake');

    const snowMore = ()=> {
        //add more flakes
        let moreSnow = document.createElement('i');
        moreSnow.classList.add('fa-snowflake');
        moreSnow.classList.add('fas');
        moreSnow.style.color = 'white';
        document.body.appendChild(moreSnow);

        //random distance, random speed, random opacity, random size:
        moreSnow.style.left = Math.random() * window.innerWidth +'px';
        moreSnow.style.opacity = Math.random();
        moreSnow.style.fontSize = Math.random()* 14+10+'px';
        moreSnow.style.animationDuration = Math.random()* 6+3+'s';
        moreSnow.style.animationDelay = Math.random()*3+'s';
        
    }

    const displayTime = document.querySelector('h1');
    const displayDate = document.querySelector('.dates')

    const runClock = setInterval(() => {
        //time
        let today = new Date();
        let seconds = today.getSeconds();
         if (seconds < 10){
              let twoSeconds = '0'+seconds
              seconds = twoSeconds;
         }
        let minutes = today.getMinutes();
        if (minutes < 10){
            let twoMinutes = '0'+ minutes;
            minutes = twoMinutes;
        }
        let hours = today.getHours();
        if (hours < 10){
            let twoHours = '0'+ hours;
            hours = twoHours;
        }
        //Get pm and am
        function getPM(){
            if (hours > 12) {
                let span = document.createElement('span');
                let newContent = document.createTextNode(' pm');
                let newEl = span.appendChild(newContent);
                displayTime.appendChild(newEl);
            } else {
                let span = document.createElement('span');
                let newContent = document.createTextNode(' am');
                let newEl = span.appendChild(newContent);
                displayTime.appendChild(newEl);
            }
        }

        //date
        let date = today.getDate();
        let day =today.getDay();
        let days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
        for (var i =0; i < days.length; i++) {
            let dayName = days[i]
            day = dayName;
        }
        let year = today.getFullYear();
        let month = today.getMonth();
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        for (var j = 0; j <months.length; j++){
            let monthName = months[j];
            month = monthName;
        }
        //display date
        let dateSetup = `${month}/${date}/${day}/${year}`;
        displayDate.textContent = dateSetup;

        //display time  
        let setup = `${hours}:${minutes}:${seconds}`;
        displayTime.textContent = setup;
        getPM();
    }, 1000);
        

//activate more flakes
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
snowMore();
})