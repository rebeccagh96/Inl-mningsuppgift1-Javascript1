const imgArrayBack = [
    document.getElementById('img-back'),
    document.getElementById('img-back1'),
    document.getElementById('img-back2'),
    document.getElementById('img-back3'),
    document.getElementById('img-back4'),
    document.getElementById('img-back5'),
    document.getElementById('img-back6'),
    document.getElementById('img-back7'),
    document.getElementById('img-back8'),
    document.getElementById('img-back9'),
    document.getElementById('img-back10'),
    document.getElementById('img-back11')
]

const cardDivArray = [
    document.getElementById('card0'),
    document.getElementById('card1'),
    document.getElementById('card2'),
    document.getElementById('card3'),
    document.getElementById('card4'),
    document.getElementById('card5'),
    document.getElementById('card6'),
    document.getElementById('card7'),
    document.getElementById('card8'),
    document.getElementById('card9'),
    document.getElementById('card10'),
    document.getElementById('card11')
]

const arrayIMages = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg",
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg"
]
const imgId = [
    document.getElementById('img'),
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3'),
    document.getElementById('img4'),
    document.getElementById('img5'),
    document.getElementById('img6'),
    document.getElementById('img7'),
    document.getElementById('img8'),
    document.getElementById('img9'),
    document.getElementById('img10'),
    document.getElementById('img11')
]

function shuffle(arrayIMages){
    for(let i = arrayIMages.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arrayIMages[i], arrayIMages[j]] = [arrayIMages[j], arrayIMages[i]];
    }
    return arrayIMages;
}

function gameOver(){
    alert('Game over! Time has run out!');
}

const select = document.getElementById('time-dropdown');
let timeout;

select.addEventListener('change', function(){
    if(select.value === "15s"){
        timeout = setTimeout(gameOver, 15000);
    }
    else if(select.value === "30s"){
        timeout = setTimeout(gameOver, 30000);
    }
    else if(select.value === "60s"){
        timeout = setTimeout(gameOver, 60000);
    }
});

let antal = document.getElementById('antal');
let antalPar = 0;
let clickCounter = 0;
let click1 = null;
let click2 = null;
let index1 = null;
let index2 = null;
let match = false;

for(let i = 0;i < cardDivArray.length;i++){
    cardDivArray[i].addEventListener('click', function(){
        if(click1 === null){
        imgArrayBack[i].style.display = "flex";
        click1 = imgId[i].src;
        index1 = i;
        }
        else if(click2 === null){
            imgArrayBack[i].style.display = "flex";
            click2 = imgId[i].src;
            index2 = i;
            if(click1 === click2){
                match = true;
            }
        }
        clickCounter++;
        if(clickCounter === 2 && match === false){
            setTimeout(function(){
                imgArrayBack[index1].style.display = "none";
                imgArrayBack[index2].style.display = "none";
                clickCounter = 0;
                click1 = null;
                click2 = null;
                index1 = null;
                index2 = null;
            },1000);
        }
        else if(clickCounter === 2 && match === true){
            setTimeout(function(){
                imgArrayBack[index1].style.display = "flex";
                imgArrayBack[index2].style.display = "flex";
                clickCounter = 0;
                click1 = null;
                click2 = null;
                index1 = null;
                index2 = null;
                match = false;
                antalPar = antalPar + 1;
                antal.innerText = antalPar;
                if(antalPar === 6){
                alert('Congratulations! You won!');
                clearTimeout(timeout);
                }
            },1000);
        }
    });
}

const button = document.getElementById('starta-om');
button.addEventListener('click', function(){
    antalPar = 0;
    antal.innerText = 0;
    select.value = "välj";
    for(let i = 0;i < imgArrayBack.length;i++){
        imgArrayBack[i].style.display = "none";
    }
    const shuffladeBilder = shuffle(arrayIMages);
    for(let i = 0; i < imgId.length;i++){
        imgId[i].src = shuffladeBilder[i];
    }
});
