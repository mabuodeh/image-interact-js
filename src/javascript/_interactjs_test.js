(function () {
    "use strict";

    var assert = require("./assert.js");
    var main = require("./interactjs.js");

    describe("Setting up canvas", function () {

        var container;

        beforeEach( function () {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach ( function () {
            removeElement(container);
        });

        // it('Checks to see whether image exists in svg', function () {
        //     var background = addElement("svg");
        //     main.initialize({background: background});
        //     assert.equal(background.style.background, 'url("background.gif")', "background url");
        // });

        it('Creates a dropzone rectangle', function () {
            var svgCanvas = addElement("div");
            var rect = new Rectangle(50, 100, 10, 40, svgCanvas);

            console.log(svgCanvas);
            var dropzone = main.createDropzone(svgCanvas);

            assert.equal(JSON.stringify(rect), JSON.stringify(dropzone), "dropzone not created");
        });

        it('Creates a droppable rectangle', function () {
            var svgCanvas = addElement("div");
            var rect = new Rectangle(50, 100, 10, 40, svgCanvas);

            var dropzone = main.createDropzone(svgCanvas);

            // assert.equal(JSON.stringify(rect), JSON.stringify(dropzone), "dropzone not created");

        });

        function addElement(tagName) {
            var element = document.createElement(tagName);
            container.appendChild(element);
            return element;
        }

        function removeElement(element) {
            element.parentNode.removeChild(element);
        }

        function Rectangle (x, y, w, h, svgCanvas) {
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

        Rectangle.prototype.draw = function () {
            this.el.setAttribute('x', this.x + this.stroke / 2);
            this.el.setAttribute('y', this.y + this.stroke / 2);
            this.el.setAttribute('width' , this.w - this.stroke);
            this.el.setAttribute('height', this.h - this.stroke);
            //this.el.setAttribute('stroke-width', this.stroke);
        };

    });

}());






/*    
    var assert = require("./assert.js");
    var tabs = require("./tabs");
    
    describe("Tabs", function () {

        var container;

        beforeEach( function () {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach ( function () {
            removeElement(container);
        });

        it("Hides all content elements except the default upon initialization", function () {

            var content1 = addElement("div");
            var activeContent = addElement("div");
            var content3 = addElement("div");

            var tab1 = addElement("div");
            var activeTab = addElement("div");
            var tab3 = addElement("div");

            tabs.initialize({
                activeContent: activeContent,
                content: [ content1, activeContent, content3],
                hiddenContentClass: "hiddenContentClass",
                activeTab: activeTab,
                contentTab: [tab1, activeTab, tab3],
                activeTabClass: "ignored"
            });

            assert.equal(getClasses(content1), "hiddenContentClass", "content1");
            assert.equal(getClasses(activeContent), "", "activeContent should not be hidden");
            assert.equal(getClasses(content3), "hiddenContentClass", "content3");

        });

        it("Preserves existing classes when hiding a content element", function () {

            var activeContent = addElement("div");
            var content3 = addElement("div");

            var hiddenContent = addElement("div");
            hiddenContent.setAttribute("class", "firstClass");

            var tab1 = addElement("div");
            var activeTab = addElement("div");
            var tab3 = addElement("div");

            tabs.initialize({
                activeContent: activeContent,
                content: [ hiddenContent, activeContent, content3],
                hiddenContentClass: "anotherClass",
                activeTab: activeTab,
                contentTab: [tab1, activeTab, tab3],
                activeTabClass: "ignored"
            });

            assert.equal(getClasses(hiddenContent), "firstClass anotherClass");
        });

        it("Styles the active tab with a class", function () {
            var tab1 = addElement("div");
            var activeTab = addElement("div");
            var tab3 = addElement("div");

            var content1 = addElement("div");
            var activeContent = addElement("div");
            var content3 = addElement("div");

            tabs.initialize({
                activeContent: activeContent,
                content: [  content1, activeContent, content3],
                hiddenContentClass: "hiddenContentClass",
                activeTab: activeTab,
                contentTab: [ tab1, activeTab, tab3 ],
                activeTabClass: "activeTabClass"
            });

            assert.equal(getClasses(tab1), null, "tab1 should not be styled");
            assert.equal(getClasses(activeTab), "activeTabClass", "activeTab should be styled");
            assert.equal(getClasses(tab3), null, "tab3 should not be styled");

            assert.equal(getClasses(content1), "hiddenContentClass", "content1");
            assert.equal(getClasses(activeContent), "", "activeContent should not be hidden");
            assert.equal(getClasses(content3), "hiddenContentClass", "content3");

        });

        function getClasses(element) {
            return element.getAttribute("class");
        }

        function addElement(tagName) {
            var element = document.createElement(tagName);
            container.appendChild(element);
            return element;
        }

        function removeElement(element) {
            element.parentNode.removeChild(element);
        }
        
    });
    */