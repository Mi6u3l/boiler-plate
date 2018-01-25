import Model from '../model';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

const SERVER = 'http://localhost:3000';
chai.use(chaiHttp);


describe('Model', () => {
    let model;
    beforeEach(() => {
        model = new Model('revenue', '#59d026', '#056700');
    });
    describe('Constructor()', () => {
        it('should initialize a new model', () => {
            expect(model.type).to.equal('revenue');
        });
    });
    describe('Get device values', () => {
        it('it should /GET the device values', (done) => {
            chai.request(SERVER)
                    .get(`/${model.type}`)
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.tablet).to.be.an('Number');
                        done();
                    });
        });
        it('it should calculate the device total value', () => {
            model.smartPhoneValue = 120000;
            model.tabletValue = 80000;
            model.getTotal();
            expect(model.total).to.equal(200000);
        });
        it('it should calculate the device percentages', () => {
            model.smartPhoneValue = 120000;
            model.tabletValue = 80000;
            model.total = 200000;
            model.getPercentages();
            expect(model.smartPhonePercentage).to.equal(60);
            expect(model.tabletPercentage).to.equal(40);
        });
    });
});


