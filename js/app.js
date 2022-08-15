const arrows = document.querySelectorAll(".button-arrow");
const movieLists = document.querySelectorAll('.content__movie-list__container')
const pageZoom = document.querySelector('html').style.fontSize;
const imgWidth = document.querySelector('.content__movie-list__container-items__img').width;

movieLists.forEach(movie => {
    movie.style.transform = `translateX${'100px'}`
})

arrows.forEach((arrow, i)=>{
    const itemNum = movieLists[i].querySelectorAll('img').length;
    const activeImage = movieLists[i].querySelector('img').dataset.image
    // const imgNum = Math.floor(window.innerWidth/imgWidth);
    let clickCount = 0;
    arrow.addEventListener('click', ()=>{
        clickCount++;

        console.log(imgWidth)
        console.log(itemNum)

        if(itemNum - (6 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(-${imgWidth}px)`;
        }
        else if(itemNum - (5 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(-${imgWidth}px)`;
        }
        else if(itemNum - (4 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(-${imgWidth}px)`;
        }
        else if(itemNum - (4 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(-${imgWidth}px)`;
        }
        else if(itemNum - (4 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(-${imgWidth}px)`;
        }
        else if(itemNum - (4 + clickCount) >= 0){
            movieLists[i].style.transform = `translateX(-${imgWidth}px)`;
        }
        else{
            movieLists[i].style.transform = 'translateX(0)'
            clickCount = 0;
        }
    })
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
