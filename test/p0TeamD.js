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

  // Add more assertions here
});
