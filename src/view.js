import Graph from './graph';

class View {
        // initialize view class
    constructor(model) {
        this.model = model;
    }

        // render graphs and respective labels
    render() {
        const total = this.convertNumberFormat(this.model.total);
        const tabletValue = this.convertNumberFormat(this.model.tabletValue);
        const smartPhoneValue = this.convertNumberFormat(this.model.smartPhoneValue);

            // render graphic
        document.addEventListener("DOMContentLoaded", () => {
            const graph = new Graph(this.model.type, this.model.smartPhonePercentage, total, this.model.tabletColor, this.model.smartPhoneColor);
            graph.init();

            // build graph label wrapper div 
            const graphContainer = document.getElementById(`graph${this.model.type}`);
            const labelWrapper = document.createElement('div');
            labelWrapper.className = 'label-wrapper';
            graphContainer.appendChild(labelWrapper);

            // build graph tablet label title div
            const labelTablet = document.createElement('div');
            labelTablet.className = 'label-tablet';
            labelTablet.innerText = 'Tablet';
            labelTablet.setAttribute('style', `color:${this.model.tabletColor}`);
            labelWrapper.appendChild(labelTablet);

            // build graph tablet label percentage div
            const labelTabletPercentage = document.createElement('div');
            labelTabletPercentage.className = 'label-percentage';
            labelTabletPercentage.innerText = `${this.model.tabletPercentage}%`;
            labelTablet.appendChild(labelTabletPercentage);

            // build graph tablet label sub-total value span
            const labelTabletValue = document.createElement('span');
            labelTabletValue.className = 'label-tablet-value';
            labelTabletValue.innerText = tabletValue;
            labelTabletPercentage.appendChild(labelTabletValue);

            // build graph smartphone label title div
            const labelSmartPhone = document.createElement('div');
            labelSmartPhone.className = 'label-smartphone';
            labelSmartPhone.innerText = 'Smartphone';
            labelSmartPhone.setAttribute('style', `color:${this.model.smartPhoneColor}`);
            labelWrapper.appendChild(labelSmartPhone);

            // build graph smartphone label percentage div
            const labelSmartphonePercentage = document.createElement('div');
            labelSmartphonePercentage.className = 'label-percentage';
            labelSmartphonePercentage.innerText = `${this.model.smartPhonePercentage}%`;
            labelSmartPhone.appendChild(labelSmartphonePercentage);

            // build graph smartphone label sub-total value span
            const labelSmartphoneValue = document.createElement('span');
            labelSmartphoneValue.className = 'label-smartphone-value';
            labelSmartphoneValue.innerText = smartPhoneValue;
            labelSmartphonePercentage.appendChild(labelSmartphoneValue);
        });
    }

        // auxliary function for conver number on xx.xxx.xxx format
    convertNumberFormat(value) {
        const valueToReplace = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return this.model.type === 'revenue' ? `${valueToReplace}€` : valueToReplace;
    }
    }

module.exports = View;

