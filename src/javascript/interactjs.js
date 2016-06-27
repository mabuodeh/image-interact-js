(function () {
	"use strict";

	var interact = require("../vendor/interact-1.2.6.js");

	exports.initialize = function initialize(options) {
		// options contains:
		// background element

        var background = options.background;
        background.style.background = "url(background.gif)";
	};

	exports.createDropzone = function createDropzone(svgCanvas) {
		var rect = new DropzoneRectangle(50, 100, 10, 40, svgCanvas);
		return rect;
	};

	function DropzoneRectangle (x, y, w, h, svgCanvas) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.stroke = 5;
		this.el = document.createElement('rect');

		// this.el.setAttribute('data-index', rectangles.length);
		this.el.setAttribute('id', 'inner-dropzone');
		this.el.classList.add('draggable');
		this.el.classList.add('dropzone');

		this.draw();

		// var div = document.createElement("div");
		svgCanvas.appendChild(this.el);
		// svgCanvas.appendChild(div);
	}

	DropzoneRectangle.prototype.draw = function () {
		this.el.setAttribute('x', this.x + this.stroke / 2);
		this.el.setAttribute('y', this.y + this.stroke / 2);
		this.el.setAttribute('width' , this.w - this.stroke);
		this.el.setAttribute('height', this.h - this.stroke);
		//this.el.setAttribute('stroke-width', this.stroke);
	};

}());