let homepage = function () {

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    // let operators = element(by.model('operator')).all(by.css('option'));

    this.selectOperation = function (operationSymbol) {
        element(by.cssContainingText('option', operationSymbol)).click();
        // operators.element(by.cssContainingText(operationSymbol)).click();
    }

    this.get = function (url) {
        browser.get(url);
    };

    this.enterFirstNumber = function (firstNumber) {
        firstNumber_input.sendKeys(firstNumber);
    };

    this.enterSecondNumber = function (secondNumber) {
        secondNumber_input.sendKeys(secondNumber);
    };

    this.clickGo = function () {
        goButton.click();
    };

    this.verifyResult = function (result) {
        var output = element.all(by.cssContainingText('.ng-binding', result)).first();
        expect(output.getText()).toEqual(result);
    };

};

module.exports = new homepage();