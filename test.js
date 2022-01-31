
  
const Bascula = require('./main');

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();



describe("Test using ASSERT interface from CHAI module: con datos anotarPeso(73,1.66)-(63,1.36)-(83,1.86)", function() {
  describe("Check 1: ", function() {
  it("Chequeando PesoMaximo: assert.equal(value,'value'): debe ser valor 83", function() {
    
  result   = nota.obtenerPesoMaximo();
  assert.equal(result, "83");
  });
  });