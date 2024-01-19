const demo = document.getElementById("article-secion");

async function GetData() {
    let URL = `http://localhost:3000/database`
    let myObj = await fetch(URL);
    let myData = await myObj.json();

    var cat = document.getElementById("cat").value;

    var cats = String(cat);

    let Search = document.getElementById("search-input").value;
    let searchs = String(Search);

    // var filteredData = myData.filter(item => {
    //     if (cat === 'all') {
    //         return true; // Show all items
    //     } else {
    //         return item.category === cat;
    //     }
    // })

    var filteredData = myData.filter(item => {

        if (cat === 'all') {
            return item.heading.toLowerCase().includes(searchs.toLowerCase());
        } else {
            return (
                item.category === cat &&
                item.heading.toLowerCase().includes(searchs.toLowerCase())
            );
        }
    });

    console.log(filteredData);
    // function searchf() {
    //     let filterSearch = myData.filter(item =>{
    //         return item.heading === search;
    //     })

    //     console.log(filterSearch);
    // }
    // 
    let myTab = `<div id="demo">`;
    // console.log(filteredData)

    filteredData.map((ele, index) => {
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


GetData()


function toggle() {
    const toggles = document.getElementById("div");

    if (toggles.style.display == "none") {
        toggles.style.display = "block"
    }
    else{
        toggles.style.display = "none"
    }
}