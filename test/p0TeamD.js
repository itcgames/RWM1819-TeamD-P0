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
    it('Fizzbuzz function exists', function () {
        expect(fizzbuzz).to.be.a('function');

    });
    it('Fizzbuzz gives 3 when number can be divided by 3', function () {
        expect(fizzbuzz(6)).to.equal(3);
    });

    it('Fizzbuzz gives 5 when number can be divided by 5', function () {
        expect(fizzbuzz(10)).to.equal(5);
    });

    it('Fizzbuzz gives 0 when number can be divided by 3 AND 5', function () {
        expect(fizzbuzz(15)).to.equal(0);
    });

    it('Fizzbuzz gives the passed num when number cant be divided by both 3 or 5', function () {
        expect(fizzbuzz(-10)).to.equal(-10);
    });

    it('Collatz exists', function () {
        expect(collatz).to.be.a('function');
    
      });
    
      it('compute the collatz of 4', function () {
        expect(collatz(4)).to.equal(2);
      });
    
      it('compute the collatz of 0', function () {
        expect(collatz(0)).to.equal(0);
      });
    
      it('compute the collatz of 9', function () {
        expect(collatz(9)).to.equal(28);
      });
    
      it('compute the collatz of -5', function () {
        expect(collatz(-5)).to.equal(-14);
      });
});
