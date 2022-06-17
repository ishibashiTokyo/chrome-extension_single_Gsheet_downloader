function injectedFunction() {
    if (location.href.match(/docs\.google\.com\/spreadsheets/) === null) {
        alert('ここちゃうで。');
    }
    else {
        var id = location.href.match(/\/d\/(.*)\//);
        var sheetid = location.href.match(/gid=(\d+)/);
        alert('ダウンロードしたろか？');
        open('https://docs.google.com/spreadsheets/d/' + id[1] + '/export?format=xlsx&gid=' + sheetid[1]);
    }
}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: injectedFunction
        });
    }
});
