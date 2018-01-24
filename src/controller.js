class Controller {
        // initialize controller
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

        // initialize received model
    initModel() {
        this.model.getDeviceValues();
        this.model.getTotal();
        this.model.getPercentages();
    }

        // call render from attached view
    renderView() {
        this.view.render();
    }
}

module.exports = Controller;


