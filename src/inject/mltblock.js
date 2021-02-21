// mltblock.js
// by jeffehobbs@gmail.com

chrome.extension.sendMessage({}, function(response) {
	console.log("MLTBLOCK LOADING...");
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var blockedUserList = []

		chrome.storage.sync.get('blockedUsers', function(data) {
			//console.log(data);
			if (typeof data.blockedUsers !== 'undefined'){
				blockedUserList = data.blockedUsers.split(',');

				console.log("BLOCKED USERS: " + blockedUserList);

				$(".image-poster").each(function(index){
					username = $(this).children('a').attr('title');

					if (blockedUserList.includes(username)){
						console.log("MLTBLOCKING: " + username);
						imageTitle = $(this).parent();
						imageContent = $(imageTitle).next();
						$(imageTitle).hide();
						$(imageContent).hide();
					};

				});

			} else {
				console.log("...NO BLOCKED USERS FOUND.")
			}
		});

		//show image content list
		$(".image-content-list").show();

	}
	}, 10);
});