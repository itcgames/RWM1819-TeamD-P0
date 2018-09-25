/* global p0TeamD, describe, it, expect, should */

describe('p0TeamD()', function () {
  'use strict';

  it('Cube function exists', function () {
    expect(Cube).to.be.a('function');

  });
    it('Cube of 2 is 8', function () {
        expect(Cube(2)).to.equal(8);
    });

  // Add more assertions here
});
