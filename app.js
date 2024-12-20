let APIkey = "1278b15";
let serachInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");


const getData = async(movie) => {
    try {
        let fetchData = await fetch(`http://www.omdbapi.com/?apikey=${APIkey}&t=${movie}`);
        let jsonData = await fetchData.json();

        console.log(jsonData);
        document.querySelector(".card").innerHTML = ""
        serachInput.value = ""
        let div = document.createElement("div")
        div.classList.add("movieCard");
        div.innerHTML = `<img src="${jsonData.Poster}" alt="">
            <div class="cardText">
                <h1>${jsonData.Title}</h1>

                <p class="rating">Rating : <span>${jsonData.Ratings[0].Value}</span></p>
                <a href="">${jsonData.Genre}</a>
                 <p> Actors : <span>${jsonData.Actors}</span></p>
                <p> Release : <span>${jsonData.Released}</span></p>
                <p>Duration : <span>${jsonData.Runtime}</span></p>
                <p> Discription : <span>${jsonData.Plot}</span></p>
                
                
            </div>
    `
        document.querySelector(".card").appendChild(div)

    } catch (error) {
        document.querySelector(".card").innerHTML = "<h1> Enter Valid Movie Name</h1>"
    }


}

searchBtn.addEventListener("click", function() {
    let movieName = serachInput.value;
    if (movieName != "") {
        getData(movieName);


    } else {
        document.querySelector(".card").innerHTML = "<h1>First Search Movie Name</h1>"
    }

})