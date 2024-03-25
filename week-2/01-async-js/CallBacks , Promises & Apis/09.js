// fetch in js

// Method 1
const apiUrl = `kjsbbjkdsnkjcnsjdncjnsndnjnan`
async function fetchData() {
    let p = fetch(apiUrl)
    // after apiUrl,{Option which is response headers} can also be passed to it.

    p.then(function (response) {
        console.log(response.status)
        console.log(response.ok);
        console.log(response.headers);
        return response.json();
    })
        .then(function (value) {
        console.log(value);
    })
}


// Method 2
async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
}

