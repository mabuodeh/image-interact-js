(function () {
    "use strict";

    var server = require("./server.js");

/*    var server = require("./server.js");
    var http = require("http");

    describe("HttpServer", function() {

        before( function () {
            server.start(8080, function () {
                console.log("server started");
            });
            console.log("server starting");
        });

        after( function () {
            server.stop();
            console.log("Server stopped");
        });
        */
    var assert = require('chai').assert;

    describe('Server testing ', function () {
        it('Should return a value from an exported function', function () {
          assert.equal(server.three(), 3);
        });
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