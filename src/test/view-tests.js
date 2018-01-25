import Model from '../model';
import View from '../view';
import Graph from '../graph';
    
const expect = require('chai').expect;

describe('View', () => {
    let model;
    let view;
    let graph;
    beforeEach(() => {
        model = new Model('revenue', '#59d026', '#056700');
        view = new View(model);
        graph = new Graph(model.type, model.smartPhonePercentage, model.total, model.tabletColor, model.smartPhoneColor);
    });
    describe('Constructor()', () => {
        it('should initialize a new view', () => {
            expect(view.model.type).to.equal('revenue');
        });
    });
    describe('Initialize graph', () => {
        it('should initiate graph', () => {
            expect(graph.modelName).to.equal('revenue');
        });
    });
});


