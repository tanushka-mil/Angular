import {browser, by, element} from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('bp-root h1')).getText();
    }
}
