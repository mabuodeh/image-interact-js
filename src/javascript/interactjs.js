(function () {
	"use strict";

	var interact = require("interactjs");

	exports.initialize = function initialize(options) {
		
		// var canvas = document.getElementById('canvas');
		// var box = document.getElementById('box');

		var canvas = options.canvas;
		var box = options.box;


		if(canvas === undefined) { throw new Error("Expected options.canvas"); }
		if(box === undefined) { throw new Error("Expected options.box"); }

		var pixelSize = 16;

		interact('.rainbow-pixel-canvas')
		  .snap({
		    // snap to the corners of a grid
		    mode: 'grid',
		    // specify the grid dimensions
		    grid: { x: pixelSize, y: pixelSize }
		  })
		  .origin('self')
		  .draggable({
		    max: Infinity,
		    maxPerElement: Infinity
		  })
		  // draw colored squares on move
		  .on('dragmove', function (event) {
		    var context = event.target.getContext('2d'),
		        // calculate the angle of the drag direction
		        dragAngle = 180 * Math.atan2(event.dx, event.dy) / Math.PI;

		    // set color based on drag angle and speed
		    context.fillStyle = 'hsl(' + dragAngle + ', 86%, ' +
		     (30 + Math.min(event.speed / 1000, 1) * 50) + '%)';

		    // draw squares
		    context.fillRect(event.pageX - pixelSize / 2, event.pageY - pixelSize / 2,
		                     pixelSize, pixelSize);
		  })
		  // clear the canvas on doubletap
		  .on('doubletap', function (event) {
		    var context = event.target.getContext('2d');

		    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		  });

		  function resizeCanvases () {
		    [].forEach.call(document.querySelectorAll('.rainbow-pixel-canvas'), function (canvas) {
		      canvas.width = document.body.clientWidth;
		      canvas.height = window.innerHeight * 0.7;
		    });
		  }

		  // interact.js can also add DOM event listeners
		  interact(document).on('DOMContentLoaded', resizeCanvases);
		  interact(window).on('resize', resizeCanvases);

		interact.maxInteractions(Infinity);


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