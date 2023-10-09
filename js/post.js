function insertRec(event) {
    event.preventDefault()
    let heading = document.getElementById("heading").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("image").value;
    let tag = document.getElementById("tag").value;
    let slug = document.getElementById("slug").value;

    let url = `http://localhost:3000/database`;

    fetch(url, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            heading: heading,
            content: content,
            image: image,
            tag: tag,
            slug: slug
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => res.json())
        .then(() => { alert("data save") })

}