
const select_options = document.getElementById("select-options")




const sliderContainer = document.querySelector('.slider-container');
const images = document.querySelectorAll('#slider img');

let currentIndex = 0;
const intervalTime = 4000; // Change image every 4 seconds

function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, intervalTime);


const demo = document.getElementById("article-secion");

async function GetData() {
    let URL = `http://localhost:3000/database`
    let myObj = await fetch(URL);
    let myData = await myObj.json();

    let myTab = `<div id="demo">`;
    console.log(myData)

    myData.map((ele, index) => {
        myTab += `
        <a href="./html/read.html?id=${ele.id}" id="article" key=${index}>
            <article >
                <img src="${ele.image}" alt="">
                <div class="">
                    <h1>${ele.heading}</h1>
                    <p>${ele.content}</p>
                    <p>${ele.slug}</p>
                </div>
            </article>
            </a>
        `
    })

    myTab += `</div>`
    demo.innerHTML = myTab;
}


