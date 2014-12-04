//replacement array

var replacement_array = [

["Asset" , "Stuff"],
["asset" , "stuff"],

["Assets" , "Stuff"],
["assets" , "stuff"],

["Big Data" , "Math"],
["Big data" , "Math"],
["big data" , "math"],

["Brand Advocate" , "Fanboy"],
["Brand advocate" , "Fanboy"],
["brand advocate" , "fanboy"],

["Brand Community" , "Fanboys"],
["Brand community" , "Fanboys"],
["brand community" , "fanboys"],

["Call-To-Action" , "Propaganda"],
["Call-to-action" , "Propaganda"],
["call-to-action" , "propaganda"], 
["CTA" , "propaganda"], 

["Challenge the Status Quo" , "Fight the Man"], 
["Challenge the status quo" , "Fight the man"], 
["challenge the status quo" , "fight the man"], 

["Consumer Engagement" , "Consumer Jibber Jabber"], 
["Consumer engagement" , "Consumer jibber jabber"], 
["consumer engagement" , "consumer jibber jabber"], 

["Content" , "Stuff"],
["content" , "stuff"],

["CRM" , "Customer spying"],
["crm" , "customer spying"],

["Crowd-sourced" , "Lazy-sourced"],
["crowd-sourced" , "lazy-sourced"],

["Crowdsourced" , "Lazysourced"],
["crowdsourced" , "lazysourced"],

["Crowd-sourcing" , "Lazy-sourcing"],
["crowd-sourcing" , "lazy-sourcing"],

["Crowdsourcing" , "Lazysourcing"],
["crowdsourcing" , "lazysourcing"],

["Curate" , "Steal"],
["curate" , "steal"],

["Curated" , "Stolen"], 
["curated" , "stolen"], 

["Curator" , "Stealer"],
["curator" , "stealer"],

["Disruptive" , "Next-level"],
["disruptive" , "next-level"],

["Game-changing" , "Super-dope"],
["game-changing" , "super-dope"],

["Game-changer" , "Super-dope"],
["game-changer" , "super-dope"],

["Gurus" , "Smart motherfuckers"],
["gurus" , "smart motherfuckers"],

["Guru" , "Smart motherfucker"],
["guru" , "smart motherfucker"],

["Impression" , "Peep"], 
["impression" , "peep"],

["Impressions" , "Peeps"], 
["impressions" , "peeps"], 

["Influence" , "Brainwash"],
["influence" , "brainwash"],

["Influencers" , "Popular kids"],
["influencers" , "popular kids"],

["Influencer" , "Popular kid"],
["influencer" , "popular kid"],

["KPI's" , "GOOOOOAAAAAALLLLLLS! "], 
["kpi's" , "goooooaaaaaalllllls! "], 

["KPI" , "GOOOOOAAAAAALLLLLL! "], 
["kpi" , "goooooaaaaaallllll! "], 

["KPI's" , "GOOOOOAAAAAALLLLLLs! "], 
["kpi's" , "goooooaaaaaalllllls! "], 

["Leverage" , "Whore-out"], 
["leverage" , "whore-out"], 

["Leveraging" , "Whoring-out"], 
["leveraging" , "whoring-out"], 

["Leverages" , "Whores-out"], 
["leverages" , "whores-out"], 

["Media Agnostic" , "Media Dont Care"], 
["Media agnostic" , "Media dont care"],
["media agnostic" , "media dont care"], 

["Mission" , "Goal"],
["mission" , "goal"],

["Native Advertising" , "Camouflaged Advertising"], 
["Native advertising" , "Camouflaged advertising"], 
["native advertising" , "camouflaged advertising"], 

["Native Advertisement" , "Camouflaged Advertisement"],
["Native advertisement" , "Camouflaged advertisement"],
["native advertisement" , "camouflaged advertisement"],

["Native Advertisements" , "Camouflaged Advertisements"],
["Native advertisements" , "Camouflaged advertisements"],
["native advertisements" , "camouflaged advertisements"],

["Offer" , "Bribe"],
["offer" , "bribe"],

["Offers" , "Bribes"],
["offers" , "bribes"],

["Omni-Channel" , "Hella-Channel"],
["Omni-channel" , "Hella-channel"],
["omni-channel" , "hella-channel"],

["Paradigm Shift" , "Flip Mode"],
["Paradigm shift" , "Flip mode"],
["paradigm shift" , "flip mode"],

["Programmatic Buying" , "Robotic Buying"], 
["Programmatic buying" , "Robotic buying"],
["programmatic buying" , "robotsic buying"], 

["Programmatic-Buying" , "Robotic-Buying"],
["Programmatic-buying" , "Robotic-buying"],
["Programmatic-buying" , "robotsic-buying"], 

["Real-Time" , "Lickity-Split"],
["Real-time" , "Lickity-split"],
["real-time" , "lickity-split"],

["Realtime" , "Lickity-Split"],
["realtime" , "lickity-split"],

["Reputation Management" , "Honor Defending"],
["Reputation management" , "Honor defending"],
["reputation management" , "honor defending"],

["Responsive Design" , "Looks-Good-On-Your-Phone Design"], 
["Responsive design" , "Looks-good-on-your-phone design"], 
["responsive design" , "looks-good-on-your-phone design"], 

["Rich Media" , "Moving Banners"],
["Rich media" , "Moving banners"],
["rich media" , "moving banners"],

["Sponsored Content" , "Camouflaged Advertisement"],
["Sponsored content" , "Camouflaged advertisement"],
["sponsored content" , "camouflaged advertisement"],

["The Internet of Things" , "Robot Apocalypse"], 
["The internet of things" , "Robot apocalypse"], 
["the internet of things" , "robot apocalypse"], 

["Thought-leader" , "Smart motherfucker"],
["thought-leader" , "smart motherfucker"],

["Thought-leaders" , "Smart motherfuckers"],
["thought-leaders" , "smart motherfuckers"],

["Thought Leader" , "Smart Motherfucker"],
["Thought leader" , "Smart motherfucker"],
["Thought leader" , "smart motherfucker"],

["Thought Leaders" , "Smart Motherfuckers"],
["Thought leaders" , "Smart motherfuckers"],
["Thought leaders" , "smart motherfuckers"],

["User-Generated content" , "Other People's Stuff"],
["User-generated content" , "Other people's stuff"],
["user-generated content" , "other people's stuff"],

["WOM" , "Reco"],
["wom" , "reco"],

["Word of mouth" , "Reco"],
["Word of Mouth" , "Reco"],
["word of mouth" , "reco"],

["Word-of-mouth" , "Reco"],
["Word-of-Mouth" , "reco"],
["word-of-mouth" , "reco"]

  
];

debug = false;

function inject(tabId, info, tab){

 	if(debug) console.log("injecting now");

	chrome.storage.sync.get(null, function(result) {
		if(result["status"] === "enabled" ){
			chrome.tabs.executeScript(tabId, {

				file: "js/inject.js",
				runAt: "document_end"

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
                "title": "click to enable Ad Jargon Filter"
            };
            status = "disabled";
        } else if (status === "disabled") {
            icon = {
                "path": "icons/icon16.png"
            };
            message = {
                "title": "click to disable Ad Jargon Filter"
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