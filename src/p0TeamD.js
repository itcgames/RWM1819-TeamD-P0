/*! p0TeamD v0.0.0 - MIT license */
'use strict';

var p0TeamD = function (num) {
    var result = Cube(num);
    result = Modulo_3(result);
    result = xor_21(result);
    return result;
}
