const expect = require("chai/lib/chai/interface/expect");
const { browser, element } = require("protractor");

describe("login", function () {

    beforeAll( function() { 
        console.log('Before All Called');  // it is execute only one time beforeexecute all it Block
    });

    beforeEach(function() { 
       console.log("this is befor each" );
     });  
     


    it("user on log in pgae", function () {
        browser.get("https://jasmine.github.io/");
        browser.sleep(3000);
    });

    it("put id ", function () {
            var  search=$('input[name="search"][placeholder="search"][autocomplete="off"]');
            search.click();
            
    });

    it("equal to", function () {
         let x=100;
         expect(x).toB
});


    afterEach(function() { 
        console.log(" this is aftee each block")
     });  
     



});