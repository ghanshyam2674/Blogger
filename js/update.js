function hide() {
    let button = document.getElementById("img-div-hover")
    if (button.style.display === "none") {
        button.style.display = "none"
    }else{
        alert("hello")
    }
}

const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get("id");

function updateSave(cardId) {
    let id = cardId;

    // alert(id)

    let heading = document.getElementById("heading").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("image").value;
    let tag = document.getElementById("tag").value;
    let slug = document.getElementById("slug").value;

    let url = `http://localhost:3000/database/${id}`

    fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            heading: heading,
            content: content,
            image: image,
            tag: tag,
            slug: slug
        }),
        headers: {
            'Content-type': "application/json; charset=UTF-8"
        }
    })
        .then((Response) => Response.json())
        .then((json) => {
            alert("Succesfully Updated!!");
        })
}


async function updateData(cardId) {
    let url = `http://localhost:3000/database/${cardId}`;
    let myObj = await fetch(url);
    let myData = await myObj.json();

    const demo = document.getElementById("demo");
    demo.innerHTML = `
    <nav class="navbar">
        <div class="div1">
            <img src="../img/logo_blogger_40px_2x.png" alt="">
        </div>
        <div class="s-div">
            <button type="button" class="btn btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
            <input type="search" placeholder="Search">
        </div>

        <button type="button" class="btn">+ New Post</a></button>
    </nav>

    <section id="post-post-section">
        <form>
            <div class="post-post-div1">
                <div class="post-post-div2">
                    <label for="heading">Heading</label>
                    <input type="text" id="heading" value="${myData.heading}">
                    <label for="image" id="hoverImage">Image</label>
                    <input type="text" id="image" value="${myData.image}">
                    <label for="slug">Slug</label>
                    <input type="text" id="slug" value="${myData.slug}">
                    <label for="tag">Slug</label>
                    <input type="text" id="tag" value="${myData.tag}">
                </div>
                <button type="button" onclick="updateSave(${cardId})">submit!!</button>
                <div id="img-div-hover">
                    <button type="button" onclick="hide()">x</button>
                    <img src="${myData.image}" alt="">
                </div>
            </div>
            <textarea name="" id="content">${myData.content} </textarea>
        </form>
    </section>
    <footer>
        <p>Copyright © 2021 Blogger Inc., All Rights Reserved.</br></br>
            </p>
    </footer>
    
    `
}


updateData(cardId);
