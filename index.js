 //IMPORTANT KEEP API KEY ANONYMOUS REMOVE BEFORE GITHUB UPLOAD
    const API_KEY = 'AIzaSyB29kgNJO4VJkWo5-V6wyUn9YMOUA45riA'


async function searchYTVideos() {
    const searchText = document.getElementById('search-text').value
    const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${searchText}&type=video`
    console.log(API_URL)

    try {
    const res = await fetch(API_URL)
    const data = await res.json()
    console.log(data)
    } catch (error) {
        console.log(error)
    }
}


/**
 Fetch via promise handling (as alternative to async try/catch await statements on lines 10-16)
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log('Something went wrong', error))

 */
