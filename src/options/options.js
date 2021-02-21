// options.js
// jeffehobbs@gmail.com

// get the user prefs
chrome.storage.sync.get('blockedUsers', function(data) {
	console.log("getting prefs...");
	//console.log(data);
	if (typeof data.blockedUsers !== 'undefined'){
		blockedUserNames = data.blockedUsers.replace(",", ", ");
		document.getElementById("blockedUserNames").value = blockedUserNames;
	} else {
		document.getElementById("blockedUserNames").value = "";
	};
});

// save the user prefs
document.getElementById("saveButton").addEventListener("click", function() {
  	console.log("saving prefs...");
	var blockedUserNames = document.getElementById("blockedUserNames").value;
	blockedUserNames = blockedUserNames.split(" ").join("");
	chrome.storage.sync.set({ blockedUsers: blockedUserNames });
	document.querySelector('#saveButton').innerText = "SAVED!";
	setTimeout(function(){ 
		document.querySelector('#saveButton').innerText = "SAVE";
	}, 3000);

});