chrome.contextMenus.create({
    title: "Twitterで共有",
    onclick: open
});

function open(){
    chrome.tabs.getSelected(null, (tab) => {
        alert(tab.title);
    })
}