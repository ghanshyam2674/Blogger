// Get the id from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get("id");

function redDel(cardId) {
    confirm("are you sure want to delete");

    let url = `http://localhost:3000/database/${cardId}`;

    fetch(url, { method: "DELETE" })
        .then(response => {
            alert("record delete");
            window.location.href = 'index.html';
        });
}


async function readCard(cardId) {
    let URL = `http://localhost:3000/database/${cardId}`;
    let myObj = await fetch(URL);
    let myData = await myObj.json();

    const card = document.getElementById("demo");
    card.innerHTML = `
    <nav class="navbar">
        <div class="div1">
            <img src="../img/logo_blogger_40px_2x.png" alt="">
        </div>
        <div class="s-div">
            <button type="button" class="btn btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
            <input type="search" placeholder="Search">
        </div>

        <button type="button" class="btn"><a href="./update.html?id=${cardId}">+ Update Post</a></a></button>
    </nav>
    <section id="post-read-secion">
            <div class="post-read">
                <h1>${myData.heading} </h1>
                <img src="${myData.image}" alt="">
                <p>${myData.content}</p>
                <div class="">
                    <p id="read-tag">${myData.tag}</p>
                    <p id="read-slug">${myData.slug}</p>
                    <button type="button" onclick="redDel(${cardId})">Dleate</button>
                </div>
            </div>
    </section>
    <footer>
    <p>Copyright © 2021 Blogger Inc., All Rights Reserved.</br></br></p>
    </footer>
    `;
}

readCard(cardId);
