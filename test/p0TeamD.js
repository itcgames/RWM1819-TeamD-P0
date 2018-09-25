/* global p0TeamD, describe, it, expect, should */

describe('p0TeamD()', function () {
    'use strict';

    it('Cube function exists', function () {
        expect(Cube).to.be.a('function');

    });
    it('Cube of 2 is 8', function () {
        expect(Cube(2)).to.equal(8);
    });

    // Modulo_3 testing
    it("Modulo_3 function exists", function () {
        expect(Modulo_3).to.be.a("function");
    });
    it("Modulo_3 of 6 is 0", function () {
        expect(Modulo_3(6).to.equal(0));
    });
    it("Modulo_3 of 0 is 0", function () {
        expect(Modulo_3(0)).to.equal(0);
    });
    it("Modulo_3 of -5 is 1", function() {
        expect(Modulo_3(-5).to.equal(1));
    });
});
