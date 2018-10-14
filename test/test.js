let assert = require("assert");
let sayHello = require("../app.js");

describe("sayHello", function(){
  it("should return 'Hello Amy'", function() {
    assert.equal("Hello Amy", sayHello("Amy"));
  });
});
