import Model from './model';
import View from './view';
import Controller from './controller';

// instantiate revenue model and view
const revenueModel = new Model('revenue', '#59d026', '#056700');
const revenueView = new View(revenueModel);

// instantiate impresions model and view
const impresionsModel = new Model('impresions', '#18c9e2', '#054e64');
const impresionsView = new View(impresionsModel);

// instantiate visits model and view
const visitsModel = new Model('visits', '#f9c300', '#d8571e');
const visitsView = new View(visitsModel);

// instantiate controllers
const revenueController = new Controller(revenueModel, revenueView);
const impresionsController = new Controller(impresionsModel, impresionsView);
const visitsController = new Controller(visitsModel, visitsView);

// initialize models and render views
revenueController.initModel();
revenueController.renderView();

impresionsController.initModel();
impresionsController.renderView();

visitsController.initModel();
visitsController.renderView();