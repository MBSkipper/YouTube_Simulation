function searchVideos(searchText) {

    //IMPORTANT KEEP API KEY ANONYMOUS REMOVE BEFORE GITHUB UPLOAD
    const API_KEY = 'AIzaSyB29kgNJO4VJkWo5-V6wyUn9YMOUA45riA'

    const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${searchText}&type=video`
    console.log(API_URL)

}

searchVideos('beaches')

