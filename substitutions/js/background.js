//replacement array

var replacement_array = [

 ['Omni-channel',  'Hella-channel'],

 ['CRM',  'Customer spying'],

 ['The Internet of Things',  'Robot Apocalypse'], 

 ['Internet of Things',  'Robot Apocalypse'], 

 ['Crowdsourced', 'Lazysourced'],

 ['crowdsourced', 'lazysourced'],

 ['Crowdsourcing', 'Lazysourcing'],

 ['crowdsourcing', 'lazysourcing'],

['Media Agnostic', 'Media Don’t Care'], 

['Paradigm shift', 'flip mode'],

 ['Leverage', 'whore-out'],

['Big data' , 'Math'],

['Challenge the status quo', 'fight the man'], 

['Disruptive', 'next-level'],
 
['Game-changing', 'super dope'],

['Game-changer', 'super dope'],
 
['Guru' , 'smart motherfucker'],
 
['Brand advocate' , 'fanboy'],

['Brand community',  'fanboys'],

['Mission' , 'goal'],

['Asset' , 'stuff'],

['Impression' ,  'Peep'], 
 
['Impressions' ,  'Peeps'], 
 
['Thought-leader', 'Smart motherfucker'],

['Offer' ,  'bribe'],
 
['Real-time' ,  'lickity-split'],
 
['Influencer' ,  'popular kid'],
 
['WOM' , 'Reco'],

['Real-time bidding' , 'ad-buying robots'],

['Programmatic buying' , 'ad-buying robots'],

['Rich Media',  'Moving banners'],

['Content',  'stuff'],

['Native Advertising' , 'Camouflaged Advertising'],

['Sponsored Content' , 'Camouflaged Advertising'],

['influence' , 'brainwash'],

["KPIs" , 'GOOOOOAAAAAALLLLLLS! '],

['curated' , 'stole'],

['curator' , 'stealer'],

['curate' , 'steal'],

['user-generated content' , "peoples stuff"],

['call to action' , 'propaganda'],

['respsonive design' , 'looks good on your phone'],

['Consumer Engagement', 'Consumer Jibber Jabber']
  
];

debug = true;

function inject(tabId, info, tab){

 	if(debug) console.log('injecting now');

	chrome.storage.sync.get(null, function(result) {
		if(result['status'] === 'enabled' ){
			chrome.tabs.executeScript(tabId, {

				file: 'js/inject.js',
				runAt: 'document_end'

			});
		}
	});
}

function addMessage(request, sender, sendResponse) {
    if (debug) console.log("message fire");
    chrome.storage.sync.get(null, function(result) {
        if (request === "config" && result["replacements"]) {
            sendResponse(result["replacements"]);
        }
    });
    return true;
}

function fixDataCorruption() {
    if (debug) console.log("updateStore");
    chrome.storage.sync.get(null, function(result) {
        if (!result["status"]) {
            chrome.storage.sync.set({
                "status": "enabled"
            });
        }
        if (!result["replacements"]) {
            chrome.storage.sync.set({
                "replacements": replacement_array
            });
        }
    });
}

function toggleActive() {
    if (debug) console.log("clickfire");
    chrome.storage.sync.get("status", function(result) {
        if (result["status"] === null) {
            status = "enabled";
        } else {
            status = result["status"];
        }
        if (status === "enabled") {
            icon = {
                "path": "icons/icon16_disabled.png"
            };
            message = {
                "title": "click to enable jargonizer"
            };
            status = "disabled";
        } else if (status === "disabled") {
            icon = {
                "path": "icons/icon16.png.jpg"
            };
            message = {
                "title": "click to disable jargonizer"
            };
            status = "enabled";
        }
        chrome.browserAction.setIcon(icon);
        chrome.browserAction.setTitle(message);
        chrome.storage.sync.set({
            "status": status
        });
    });
}

chrome.browserAction.onClicked.addListener(toggleActive);
chrome.runtime.onMessage.addListener(addMessage);
chrome.tabs.onUpdated.addListener(inject);
chrome.runtime.onInstalled.addListener(fixDataCorruption);
chrome.runtime.onStartup.addListener(fixDataCorruption);