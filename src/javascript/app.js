(function () {
  "use strict";


  var interact = require("../vendor/interact-1.2.6.js");
  var myInteract = require("./interactjs.js");

  var svgCanvas = document.querySelector('canvas');

  // myInteract.initialize({background: svgCanvas});
  var rect = myInteract.createDropzone(svgCanvas);
  console.log(rect);
  rect.stroke();

//   var svgCanvas = document.querySelector('svg'),
//       svgNS = 'http://www.w3.org/2000/svg',
//       rectangles = [];

//   function addElement() {
//     var elem = document.createElement("BUTTON");
//     elem.addEventListener('click', function() {
//     var rect = elem.getBoundingClientRect();
//      new Rectangle(50, rect.bottom - 100, 10, 40, svgCanvas);
//     }, false); 
//     var t = document.createTextNode("CLICK!");
//     elem.appendChild(t);
//     document.body.appendChild(elem);
//   }

//   // var hardwareButton = document.getElementById("hardwareButton");

//   // hardwareButton.addEventListener('click', function() {
//   //   var rect = hardwareButton.getBoundingClientRect();
//   //    new Rectangle(50, rect.bottom - 100, 10, 40, svgCanvas);
//   // }, false);
    
//   function Rectangle (x, y, w, h, svgCanvas) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.stroke = 5;
//     this.el = document.createElementNS(svgNS, 'rect');
    
//     // this.el.setAttribute('data-index', rectangles.length);
//     this.el.setAttribute('id', 'inner-dropzone');
//     this.el.classList.add('draggable');
//     this.el.classList.add('dropzone');
//     rectangles.push(this);

//     this.draw();

//     // var div = document.createElement("div");
//     svgCanvas.appendChild(this.el);
//     // svgCanvas.appendChild(div);
//   }

//   Rectangle.prototype.draw = function () {
//     this.el.setAttribute('x', this.x + this.stroke / 2);
//     this.el.setAttribute('y', this.y + this.stroke / 2);
//     this.el.setAttribute('width' , this.w - this.stroke);
//     this.el.setAttribute('height', this.h - this.stroke);
//     //this.el.setAttribute('stroke-width', this.stroke);
//   }

//   // var hardwareButton = document.getElementById("hardwareButton");

//   // hardwareButton.addEventListener('click', function() {
//   //   var rect = hardwareButton.getBoundingClientRect();
//   //    new Rectangle(50, rect.bottom - 100, 40, 40, svgCanvas);
//   // }, false);
    
//   // function Rectangle (x, y, w, h, svgCanvas) {
//   //   this.x = x;
//   //   this.y = y;
//   //   this.w = w;
//   //   this.h = h;
//   //   this.stroke = 5;
//   //   this.el = document.createElementNS(svgNS, 'rect');
    
//   //   this.el.setAttribute('data-index', rectangles.length);
//   //   this.el.setAttribute('class', 'edit-rectangle');
//   //   rectangles.push(this);

//   //   this.draw();
//   //   svgCanvas.appendChild(this.el);
//   // }

//   // Rectangle.prototype.draw = function () {
//   //   this.el.setAttribute('x', this.x + this.stroke / 2);
//   //   this.el.setAttribute('y', this.y + this.stroke / 2);
//   //   this.el.setAttribute('width' , this.w - this.stroke);
//   //   this.el.setAttribute('height', this.h - this.stroke);
//   //   this.el.setAttribute('stroke-width', this.stroke);
//   // }

//   interact('.edit-rectangle')
//     // change how interact gets the
//     // dimensions of '.edit-rectangle' elements
//     .rectChecker(function (element) {
//       // find the Rectangle object that the element belongs to
//       var rectangle = rectangles[element.getAttribute('data-index')];

//       // return a suitable object for interact.js
//       return {
//         left  : rectangle.x,
//         top   : rectangle.y,
//         right : rectangle.x + rectangle.w,
//         bottom: rectangle.y + rectangle.h
//       };
//     })
//     .inertia({
//       // don't jump to the resume location
//       // https://github.com/taye/interact.js/issues/13
//       zeroResumeDelta: true
//     })
//     .restrict({
//       // restrict to a parent element that matches this CSS selector
//       drag: 'svg',
//       // only restrict before ending the drag
//       endOnly: true,
//       // consider the element's dimensions when restricting
//       elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
//     })
//     .draggable({
//       max: Infinity,
//       onmove: function (event) {
//         var rectangle = rectangles[event.target.getAttribute('data-index')];

//         rectangle.x += event.dx;
//         rectangle.y += event.dy;
//         rectangle.draw();
//       }
//     })
//     .resizable({
//       max: Infinity,
//       onmove: function (event) {
//         var rectangle = rectangles[event.target.getAttribute('data-index')];

//         rectangle.w = Math.max(rectangle.w + event.dx, 10);
//         rectangle.h = Math.max(rectangle.h + event.dy, 10);
//         rectangle.draw();
//       }
//     });

//   interact.maxInteractions(Infinity);

//   // target elements with the "draggable" class
// interact('.draggable')
//   .draggable({
//     // enable inertial throwing
//     inertia: true,
//     // keep the element within the area of it's parent
//     restrict: {
//       restriction: "parent",
//       endOnly: true,
//       elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
//     },
//     // enable autoScroll
//     autoScroll: true,

//     // call this function on every dragmove event
//     onmove: dragMoveListener,
//     // call this function on every dragend event
//     onend: function (event) {
//       var textEl = event.target.querySelector('p');

//       textEl && (textEl.textContent =
//         'moved a distance of '
//         + (Math.sqrt(event.dx * event.dx +
//                      event.dy * event.dy)|0) + 'px');
//     }
//   });

//   function dragMoveListener (event) {
//     var target = event.target,
//         // keep the dragged position in the data-x/data-y attributes
//         x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
//         y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

//     // translate the element
//     target.style.webkitTransform =
//     target.style.transform =
//       'translate(' + x + 'px, ' + y + 'px)';

//     // update the posiion attributes
//     target.setAttribute('data-x', x);
//     target.setAttribute('data-y', y);
//   }

//   // this is used later in the resizing and gesture demos
//   window.dragMoveListener = dragMoveListener;

//   // enable draggables to be dropped into this
// interact('.dropzone').dropzone({
//   // only accept elements matching this CSS selector
//   accept: '#yes-drop',
//   // Require a 75% element overlap for a drop to be possible
//   overlap: 0.75,

//   // listen for drop related events:

//   ondropactivate: function (event) {
//     // add active dropzone feedback
//     event.target.classList.add('drop-active');
//   },
//   ondragenter: function (event) {
//     var draggableElement = event.relatedTarget,
//         dropzoneElement = event.target;

//     // feedback the possibility of a drop
//     dropzoneElement.classList.add('drop-target');
//     draggableElement.classList.add('can-drop');
//     draggableElement.textContent = 'Dragged in';
//   },
//   ondragleave: function (event) {
//     // remove the drop feedback style
//     event.target.classList.remove('drop-target');
//     event.relatedTarget.classList.remove('can-drop');
//     event.relatedTarget.textContent = 'Dragged out';
//   },
//   ondrop: function (event) {
//     event.relatedTarget.textContent = 'Dropped';
//   },
//   ondropdeactivate: function (event) {
//     // remove active dropzone feedback
//     event.target.classList.remove('drop-active');
//     event.target.classList.remove('drop-target');
//   }
// });

// addElement();


}());