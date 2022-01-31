
  
const alumnos = require('./main');

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();


describe(" Test ", function() {
  describe("Check 1: ", function() {
  it("Chequeando ", function() {
    
  result   = alumnos.OrdenaNom({'alumne': 'Pepe', 'data_naiximent': '2001-02-01'},  {'alumne': 'Rafa', 'data_naiximent': '2005-02-01'}, {'alumne': 'Pedro', 'data_naiximent': '2003-02-01'},  {'alumne': 'Manolo', 'data_naiximent': '2009-02-01'},   {'alumne': 'Juan', 'data_naiximent': '1999-02-01'},   {'alumne': 'Maria', 'data_naiximent': '2007-02-01'})
  assert.equal(result, "aaa");
  });
  });
});
