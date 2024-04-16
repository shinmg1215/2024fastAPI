let MovieObject = {

    getall: function(){
        alert("장르 추천")
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/all/"

        }).done( function(responce){
            console.log(responce.result)
            movielist= responce.result
            console.log(movielist[0].title)

            //topdiv = document.createElement("div")
            //topdiv.style = 'column-count:5'
            //document.body.appendChild(topdiv)
            topdiv = document.getElementById("alldiv")

            movielist.forEach(movie=> {
                cmovie = document.createElement('div')
                cmovie.className = "card"

                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.onclick = function() {
                    window.location .href = movie.url
                }
                mimg.onmouseover = function(){
                    mimg.style.cursor = "pointer";
                }
                mimg.addEventListener("mouseover", function() {
                    mimg.style.cursor = "pointer";
                });


                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
        });
    }).fail();

},

getgenres: function(){
    alert("장르 추천")
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/genres/comedy/"

    }).done( function(responce){
        console.log(responce.result)
        movielist= responce.result
        console.log(movielist[0].title)

        //topdiv = document.createElement("div")
        //topdiv.style = 'column-count:5'
        //document.body.appendChild(topdiv)
        topdiv = document.getElementById("genrediv")
        //topdiv .innerHTML =""

        topdiv.removeChild();

        movielist.forEach(movie=> {
            cmovie = document.createElement('div')
            cmovie.className = "card"

            mimg = document.createElement("img")
            mimg.className = "card-img-top"
            mimg.src = movie.poster_path
            mimg.onclick = function() {
                window.location .href = movie.url
            }
            mimg.onmouseover = function(){
                mimg.style.cursor = "pointer";
            }
            mimg.addEventListener("mouseover", function() {
                mimg.style.cursor = "pointer";
            });


            cmovie.appendChild(mimg)
            topdiv.appendChild(cmovie)
    });
}).fail();
},

getgenres: function(){
    alert("장르 추천")

}
}



        

MovieObject.getall()