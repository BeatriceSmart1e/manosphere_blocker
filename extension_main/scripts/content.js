async function loadBadWords() {
    const response = await fetch(chrome.runtime.getURL("bad_words.json"));
    const badWords = await response.json();
    //console.log("Loaded bad words:", badWords);
    return badWords;
}

function isExcluded(url, siteList) {
    return siteList.some(pattern =>
        url.includes(pattern.toLowerCase())
    );
}

function isBadSite(url, siteList) {
    return siteList.some(pattern =>
        url.includes(pattern.toLowerCase())
    );
}

// check if extension should work on this site (if it's a simple google search for example, then the extension should now work)
Promise.all([
    fetch(chrome.runtime.getURL("good_sites.json")).then(res => res.json()),
    fetch(chrome.runtime.getURL("bad_sites.json")).then(res => res.json())
]).then(([excludedSites, badSites]) => {
    const currentURL = window.location.href.toLowerCase();

    console.log("loaded good sites: ", excludedSites);
    console.log("loaded bad sites: ", badSites);

    if (isExcluded(currentURL, excludedSites)) {
        console.log("extension disabled - good site!");
        return;
    }
    if (isBadSite(currentURL, badSites)) {
        console.log("extension disabled - bad site!");
    }
    else {
        console.log("no bad site found, still searching for keywords though.");
    }
    startExtension();
});

function findString(text) {
    if(window.find(text)) {
        window.location.href = chrome.runtime.getURL("blocked.html");
        return true;

    };
    return false;
}

// this runs once the site is definitely not something innocent or educational
function startExtension() {
    loadBadWords().then(result => {
        let found = false;
        for (let i = 0; i < result.length; i++) {
            found = findString(result[i]);
            if (found) {
                break;
            }
        }
        found=false;
    });
}
