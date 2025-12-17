 //IMPORTANT KEEP API KEY MUST BE PASTED BEFORE THIS CODE WILL WORK
    const API = ' '// Paste API key between the ' ' here


async function searchYTVideos() {
    const searchText = document.getElementById('search-text').value
    const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${searchText}&type=video&maxResults=22`
    console.log(API_URL)

    try {
    const res = await fetch(API_URL)
    const data = await res.json()
    displayVideos(data)
    } catch (error) {
        console.log(error)
    }
    // ** see note 1 below **
}

function displayVideos(data) {
    const videosList = document.getElementById('videos-list')
    videosList.innerHTML = '' // ** see note 4 below **

    data.items.forEach((video) => {
        const colDiv = document.createElement('div')
        colDiv.classList.add('col-xl-4', 'col-lg-6', 'col-md-12', 'text-center')

        const iframe = document.createElement('iframe')
        iframe.width = '400'
        iframe.height = '225'
        const { videoId } = video.id
        iframe.src = `https://www.youtube.com/embed/${videoId}`
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        iframe.setAttribute('allowfullscreen', 'true') // ** see note 3 below **
    
        colDiv.append(iframe)
        videosList.append(colDiv)

    }) 
    // ** see note 2 below **
}

/**
 NOTES 
1.  Alternative to try catch statements is to use promise handling thus:-
    Fetch via promise handling (as alternative to async try/catch await statements on lines 10-16)
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log('Something went wrong', error))



2. Element features for creating the video node - directly copied from the iframe originally pasted in the html document
    <div class = "col-xl-4 col-lg-6 col-md-12 text-center">
        <!-- embedded video from YouTube-->
        <iframe width="400" height="225" src="https://www.youtube.com/embed/BTMjD7_evjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
<!--  *** NOTE *** some of the attributes edited out of the iframe element because they are not required - compare the attributes used in create.Element in js.code (lines 28-34) to this to the original data shown immediately above -->
    
 
3. note the format for stand alone single attribute 'allowfullscreen' (disabled and required are similar) so use setAttribute with the attribute 'allowfullscreen' passed as as a parameter plus the additional attribute 'true' 

4.  This code ensures the video list is empty before the next search results are posted.  So if the searchYTVideos is called for the second or subsequent times any existing posted videos are cleared so that the results of the new search run by lines 27-37 are posted on a clear page

*/