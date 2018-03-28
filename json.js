$(function () {
    //Länka Form
    $("#search-form").submit(function (e) {
        e.preventDefault();
        var searchTerm = $("#search-input").val();
        getRequest(searchTerm);

    });
    //Hämta Data
    function getRequest(input) {
        var url = `https://www.omdbapi.com/?`;
        var rules = {
            apiKey : `e4cbae2`,
            s : input,
            r : `json`
        };
    $.getJSON(url,  rules, function(data) {
        console.log(data);
        showResults(data.Search);
    });
    }                                     
    // Visa data
    function showResults(data) {
        $("#search-results").html("");

        $.each(data, function (i, value){ 
        $("#search-results").append(`
                <li> 
                    <a class="">
                    <img class="film-banner" src=${value.Poster} alt="Det Finns Ingen Bild">
                    
                    </a>
                    <div class="right-box">
                        <span>${value.Title}</span>
                        <span>${value.Year}</span>
                        <span>${value.Type}</span>
                        <span>${value.imdbID}</span>
                    </div>
                </li>
        `);
        //$("#search-results").append(`<img src=${value.Poster}>`);
    // for(var i = 0; i < data.length;i++) {
        //   $("#search-results").append(`<p> ${data[i].Title}</p>`);  
        // $("#search-results").append(`<p> ${data[i].Year}</p>`);   
        });
    }
});