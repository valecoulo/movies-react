const API = 'https://api.themoviedb.org/3'

function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGY4YjgwZDA4MjMzZmZlZjYyYzAyODhiOTQyYmRkMCIsInN1YiI6IjYxMTk3ZWQwNjY1NDA4MDA3NWY4NDdjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZDjryYpnw5FyO_LyyvSAIlN7pyVwhJ8LUuOIrV8tQ8A',
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(result => result.json())
}

export default get