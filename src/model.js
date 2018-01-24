const SERVICE_URL = 'http://localhost:3000';
class Model 
{
    // initialize model class
    constructor(type, tabletColor, smartPhoneColor) {
        this.tabletColor = tabletColor;
        this.smartPhoneColor = smartPhoneColor;
        this.type = type;
    }

    // get device values from db schema through service invocation
    getDeviceValues() {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', `${SERVICE_URL}/${this.type}`, false);
        xmlHttp.send(null);
        this.tabletValue = JSON.parse(xmlHttp.responseText).tablet;
        this.smartPhoneValue = JSON.parse(xmlHttp.responseText).smartPhone;
    }

    // calculate device totals
    getTotal() {
        this.total = this.tabletValue + this.smartPhoneValue;
    }

    // calculate device percentages
    getPercentages() {
        this.smartPhonePercentage = (this.smartPhoneValue * 100) / this.total;
        this.tabletPercentage = (this.tabletValue * 100) / this.total;
    }
}

module.exports = Model;


