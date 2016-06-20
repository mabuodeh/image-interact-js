(function () {
	"use strict";

	exports.three = function() {
		return 3;
	};
/*
	var classList = require("../vendor/classList.js");

	classList.shim();

	exports.initialize = function initialize (options) {
		var activeContent = options.activeContent;
		var content = options.content;
		var hiddenContentClass = options.hiddenContentClass;

		var activeTab = options.activeTab;
		var contentTab = options.contentTab;
		var activeTabClass = options.activeTabClass;

		if(activeContent === undefined) { throw new Error("Expected options.activeContent"); }
		if(content === undefined) { throw new Error("Expected options.content"); }
		if(hiddenContentClass === undefined) { throw new Error("Expected options.hiddenContentClass"); }
		if(activeTab === undefined) { throw new Error("Expected options.activeTab"); }
		if(contentTab === undefined) { throw new Error("Expected options.contentTab"); }
		if(activeTabClass === undefined) { throw new Error("Expected options.activeTabClass"); }


		content.forEach(function (element) {
			element.classList.add(hiddenContentClass);
		});
		// activeContent.classList.remove(hiddenContentClass);

		var index = getActiveIndex(contentTab, activeTab); 
		
		contentTab[index].classList.add(activeTabClass);
		content[index].classList.remove(hiddenContentClass);

	};

	function getActiveIndex(contentTab, activeTab) {
		for( var i = 0; i < contentTab.length; i++ ) {
			if(contentTab[i] === activeTab) {
				return i;
			}
		}

		throw new Error("Could not find activeTab in the list.");
	}

*/
}());