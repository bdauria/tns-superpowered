var Superpowered = require("nativescript-superpowered").Superpowered;
var superpowered = new Superpowered();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(superpowered.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(superpowered.functionname()).toEqual(jasmine.any(Promise));
  });
});