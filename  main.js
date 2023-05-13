fetch("http://localhost:3000/artdata")
.then(res => res.json())
.then(artData =>  {
    artistsDisplay(artData),
    showCaseArtist([0]),
    console.log(artData)
})

const artistDisplay = document.querySelector("#artists-display")
const artistName = documewnt.querySelector("name")
const artistdate = document.querySelector("date")
const artistImage = document.querySelector(".detail-image")
const artistTitle = document.querySelector("title")

function artistsDisplay(artwork){
    artData.forEach(artData => {
        const eachArtist = document.createElement("img")
        eachArtist.src = artistImage
        artistDisplay.appendChild(eachArtist)
        eachArtist.addEventListener('click', event => {
            showCaseArtist(artwork)
        })
        eachArtist.addEventListener('mouseover', event => {
            addGlow(event, eachArtist)
        })
        
    });
}




