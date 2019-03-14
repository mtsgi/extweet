chrome.contextMenus.create({
    "id": "share",
    title: "Twitterで共有",
    onclick: openTwitter
});

chrome.browserAction.onClicked.addListener( openTwitter );

function openTwitter(){
    chrome.tabs.getSelected(null, (tab) => {
        prev = encodeURI(tab.url.split("#")[0]);
        var shareurl = "https://twitter.com/intent/tweet?url=" + prev + "&text=" + tab.title;
        window.open(shareurl, "_blank", "resizable=no,scrollbars=no,status=no,width=400,height=350,menubar=no,top=50,left=50");
    })
}

var prev = "";