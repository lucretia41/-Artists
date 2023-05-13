fetch("http://localhost:3000/artdata")
.then(res => res.json())
.then(artData =>  {
    artistsDisply(artData),
    showCaseArtist([0]),
    console.log(artData)
})

const artistDisplay = document.querySelector("#artists-display")
const artistName = documewnt.querySelector("name")
const artistdate = document.querySelector("date")
const artistImage = document.querySelector(".detail-image")
const artistTitle = document.querySelector("title")



