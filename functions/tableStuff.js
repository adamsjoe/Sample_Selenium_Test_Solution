'use strict';

module.exports = {
  
  getHighestSalary: function(locator) {
    const locatorString = $(locator);
    
    let celldata = locatorString.$$('td');
    let data = [];
    let i = 0;

    celldata.forEach(element => {
      i++;
      if (i % 6 == 0) {
        // get the salary
        let tmp = element.getText();

        // extract the comma
        let result = tmp.match(/(\d+,?)+/);
        let noComma = tmp.replace(',','');

        // remove the leading $
        let noDollar = noComma.replace('$','');

        // remove the /y at the end
        let noEnd = noDollar.replace('/y','');

        // data.push(element.getText())
        data.push(parseInt(noEnd));
      }
    });

    return Math.max(...data);

  },

  getAllAges: function(locator) {
    const locatorString = $(locator);
    
    let celldata = locatorString.$$('td');
    let data = [];
    let i = 0;
    let runningAge = 0;

    celldata.forEach(element => {
      i++;
      if (i == 4 ) {
        // get the ages
        let tmp = element.getText();

        runningAge = runningAge + parseInt(tmp);
        data.push(tmp)     
      }
    
      if (i == 6) {

        i = 0;
      }   
    });

    return runningAge;
  },
};


