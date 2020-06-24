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
        moreSnow.style.fontSize = Math.random()* 28+'px';
        moreSnow.style.animationDuration = Math.random()* 6+3+'s';
        moreSnow.style.animationDelay = Math.random()*3+'s';
        
    }

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