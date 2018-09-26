/* global p0TeamD, describe, it, expect, should */

describe('p0TeamD()', function () {
    'use strict';

    it('Cube function exists', function () {
        expect(Cube).to.be.a('function');

    });
    it('Cube of 2 is 8', function () {
        expect(Cube(2)).to.equal(8);
    });

    it('Modulo First exists', function() {
      expect(Modulo_First).to.be.a('function');

    })

    it('Modulo First 3,9,5,2,6,1 of 0,0,2,2,0,1', function() {
      expect(Modulo_First([3,9,5,2,6,1])).to.eql([0,0,2,2,0,1]);

    })

    // Modulo_3 testing
    it("Modulo_3 function exists", function () {
        expect(Modulo_3).to.be.a("function");
    });
    it("Modulo_3 of 6 is 0", function () {
        expect(Modulo_3(6)).to.equal(0);
    });
    it("Modulo_3 of 0 is 0", function () {
        expect(Modulo_3(0)).to.equal(0);
    });
    it("Modulo_3 of -5 is -2", function() {
        expect(Modulo_3(-5)).to.equal(-2);
    });

    // Running total tests
    it("running_total exists?", function () {
        expect(running_total).to.be.a("function");
    });

    it("The running total of 1,2,3,4 & 5 should equal 15", function() {
        for(var val = 1; val < 5; val++)
          running_total(val);
        expect(running_total(5)).to.equal(15);
    });
    it("Add 30 to the running total, should equal 45", function() {
        expect(running_total(30)).to.equal(45);
    });
});
