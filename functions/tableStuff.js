'use strict';
/**
 * @module functions/ipsum
 * @desc Random text generator
 */
module.exports = {

  stuff: function(locator) {
    const locatorString = $(locator);

    // console.log(locatorString.$$('td')[5].getText());
    //console.log(locatorString.$$('tr').$('td')[5].getText());
    // console.log(locatorString.$$('tr').getText());

    // let celldata = locatorString.$$('td')[5];
    
    let celldata = locatorString.$$('td');
    let data = [];
    let i = 0;

    celldata.forEach(element => {
      //console.log(">>" + element.getText() + "<<\n");
      //data.push(celldata);

      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>" + i)
      if (i % 6 == 0) {
        console.log("IN LOOP")
        data.push(element.getText())
      }
      i++;
    });

    console.log(data.length)
    console.log(data);
    // console.log(">>>" + celldata)

    //console.log(locatorString);
  },
};