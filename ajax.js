$(function () {
    $('#search-form').submit(function (e) {
        e.preventDefault();
        var searchTerm = $('#search-input').val();
        getRequest(searchTerm);
    });

    function getRequest(input) {
        var url = `http://www.omdbapi.com/?`;
        var rules = {
            apiKey: `e4cbae2`,
            s: input,
            r: `json`
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: rules,
            dataType: 'json'

        })
            .done(function (done) {
                console.log(done);
                showResults(done.Search);
            })
            .fail(function (fail) {
                console.log(fail);
            });
    }

    function showResults(data) {
        $.each(data, function (i, value) {
            $('#search-results').append(`<p>${value.Title}</p>`);
        })
    
    }
});
