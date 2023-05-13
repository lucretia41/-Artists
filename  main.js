fetch("http://localhost:3000/artdata")
.then(res => res.json())
.then(artData =>  {
    artistsDisply(artData),
    showCaseArtist([0]),
    console.log(artData)
})
