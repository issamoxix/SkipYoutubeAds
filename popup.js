document.getElementById('skip').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: 'hallo' }, function (response) {

        });
    });
});
