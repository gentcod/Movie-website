const arrows = document.querySelectorAll(".button-arrow");
const movieLists = document.querySelectorAll('.content__movie-list__container')
const pageZoom = document.querySelector('html').style.fontSize;
const img = document.querySelector('.content__movie-list__container-items__img').width;

arrows.forEach((arrow, i)=>{
    const itemNum = movieLists[i].querySelectorAll('img').length;
    let clickCount = 0;
    arrow.addEventListener('click', ()=>{
        const imgNum = Math.floor(window.innerWidth/img);
        clickCount++; 

        if(imgNum == 7 && itemNum - (6 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        }
        else if(imgNum == 6 && itemNum - (5 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 220}px)`;
        }
        else if(imgNum == 5 && itemNum - (4 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 220}px)`;
        }
        else if(imgNum == 4 && itemNum - (4 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        }
        else if(imgNum == 3 && itemNum - (4 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 50}px)`;
        }
        else if(imgNum == 2 && itemNum - (4 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 50}px)`;
        }
        else{
            movieLists[i].style.transform = 'translateX(0)'
            clickCount = 0;
        }
        console.log(imgNum)
    })
    console.log(itemNum)
})

const ball = document.querySelector('.navbar-container-profile-toggle-ball');
const items = document.querySelectorAll('body, .navbar, .navbar-container, .sidebar, .sidebar-nav, .content, .content__featured--desc, .content__movie-list__container-items--desc, .content__movie-list__container-items--tag, .navbar-container-profile-toggle');

ball.addEventListener('click', ()=>{
    items.forEach(item => {
        item.classList.toggle('active');
    })

    ball.classList.toggle('active');
})

//let fontSh = document.querySelector('html')
//fontShVal = window.getComputedStyle(document.querySelector('html')).fontSize

//console.log(img)
//console.log(document.querySelector('html').style.fontSize)
//console.log(fontShVal);
//onsole.log(window.getComputedStyle(fontSh))
