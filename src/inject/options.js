
// options.js
// jeffehobbs@gmail.com

function savePrefs(){
	console.log("saving prefs...");
	var blockedUserNames = document.getElementById(blockedUserNames);
	chrome.storage.sync.set({ blockedUsers: blockedUserNames.value });
};

function getPrefs(){
	console.log("getting prefs...");
	chrome.storage.sync.get('blockedUsers', function(data) {
		var blockedUserNames = document.getElementById(blockedUserNames);
    	blockedUserNames.value = data.blockedUsers;
	});
};