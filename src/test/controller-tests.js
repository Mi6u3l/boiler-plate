import Controller from '../controller';
import Model from '../model';
import View from '../view';

const expect = require('chai').expect;

describe('Controller', () => {
    let model;
    let view;
    let controller;
    beforeEach(() => {
        model = new Model('revenue', '#59d026', '#056700');
        view = new View(model);
        controller = new Controller(model, view);
    });
    describe('Constructor()', () => {
        it('should initialize a new controller', () => {
            expect(controller.model.type).to.equal('revenue');
            expect(controller.view.model.type).to.equal('revenue');
        });
    });
});

