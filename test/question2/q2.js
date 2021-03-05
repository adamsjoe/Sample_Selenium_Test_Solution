'use strict';

var helper = require('../../functions/helpers');
var q2Layout = require('../../layout/question2/tableSortPage');
var ts = require('../../functions/tableStuff');

const page = 'table-sort-search-demo.html';
describe('Scenario Two Test', function() {
    it('should return the average age of all San Fanciso based employees', function() {
        // grab the baseUrl from the browser oject
        let base = helper.getBaseUrl();

        // navigate to the page - append the page we want to visit
        helper.goToURL(base + page);

        // check page title - basic check to make sure that we are on the correct page
        helper.verifyPageTitle('Selenium Easy - Tabel Sort and Search Demo');

        // there is no "nice" selector for this element, if this were a project I would ask the devs to include a proper
        // selector as it would aid automation should a different input element be needed.
        // Enter "San Francisco" into the box
        helper.enterText(q2Layout.search, 'San Francisco');
        browser.pause(1000);

        // 
        helper.verifyElementPresent(q2Layout.table);

        ts.stuff(q2Layout.table);

        // console.log("No of rows : "+webTable.getRowCount())
        browser.pause(10000);
        
    });
      
});