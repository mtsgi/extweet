chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "sendOpen") {
        alert( sender );
    }
}); 