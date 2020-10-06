console.log('heelo form password generator -- content')





chrome.runtime.onMessage.addListener((request, sender, sendResponse)=> {
    console.log(request)
    if(request.message === "clicked_browser_action") {
        console.log('click')        
    }
})

