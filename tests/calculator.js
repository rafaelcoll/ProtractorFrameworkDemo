let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.selectOperation('+');
        homepage.clickGo();
        
        homepage.verifyResult('7');

        // browser.sleep(1000);
    });

    it('subtraction test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.selectOperation('-');
        homepage.clickGo();
        
        homepage.verifyResult('1');
        
        // browser.sleep(1000);
    });

});