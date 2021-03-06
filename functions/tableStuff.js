'use strict';
/**
 * @module functions/ipsum
 * @desc Random text generator
 */
module.exports = {
  
  stuff: function(locator) {
    const locatorString = $(locator);
    
    let celldata = locatorString.$$('td');
    let data = [];
    let i = 0;
    let runningSalary = 0;

    celldata.forEach(element => {
      i++;
      if (i % 6 == 0) {
        // let re = /(\d+,?)+/;

        // get the salary
        let tmp = element.getText();

        // extract the comma
        let result = tmp.match(/(\d+,?)+/);
        let noComma = tmp.replace(',','');

        // remove the leading $
        let noDollar = noComma.replace('$','');

        // remove the /y at the end
        let noEnd = noDollar.replace('/y','');


        runningSalary = runningSalary + parseInt(noEnd);
        // data.push(element.getText())
        data.push(noEnd)
      }
    });

    console.log(data.length)
    console.log(data);
    console.log("total "  + runningSalary);
    console.log("ave :" + runningSalary / 6)

    return runningSalary / 6;

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


