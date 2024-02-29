const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {  
    // NOTE: elements collection
    get fieldUsername () { return $('#user-name');}
    get fieldPassword () { return $('#password');}
    get buttonLogin () { return $('#Login-button');}
    errorLockedOutUser = (dynamicMessage) => $(`//h3[text()="$(dynamicMessage)"]`)
   
    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldPassword.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError (message){
        await this.errorLockedOutUser(message).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorLockedOutUser(message)).toBeDisplayed()
    }

    async validateProblemUserError (message){
        await this.errorProblemUser(message).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorProblemUser(message)).toBeDisplayed()
    }

    async validatePerformanceGlitchUserError (message){
        await this.errorPerformanceGlitchUser(message).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorPerformanceGlitchUser(message)).toBeDisplayed()
    }

    async validateErrorUserError (message){
        await this.errorErrorUser(message).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorErrorUser(message)).toBeDisplayed()
    }

    async validateVisualUserError (message){
        await this.errorVisualUser(message).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorVisualUser(message)).toBeDisplayed()
    }

       open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();
