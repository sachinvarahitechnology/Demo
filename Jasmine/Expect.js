const { browser } = require("protractor")

describe("first demo" , function(){


    it("to be()", function(){
    //tobe()
                //let x=100;
                // expect(x).toBe(100);     //true
                // expect(x).not.toBe(101);   //true
    //to equal()
                // expect(x).toEqual(100);     //true
                // expect(x).not.toEqual(101);   //true
   
    // test3
        // let a=[100,200,300];
        // expect(a).toBe([100,200,300]);              // fails
        // expect(a).toEqual([100,200,300]);           //pass( bcz it is array)
 
    //test 4//tobe
    //     browser.waitForAngularEnabled(false);
    //     browser.get("https://dribbble.com/tags/login-page");
        
    //     //expect( browser.getTitle()).toBe("Login Page designs, themes, templates and downloadable graphic elements on Dribbble");
    //     // expect( browser.getTitle()).toEqual("Login Page designs, themes, templates and downloadable graphic elements on Dribbble");
    //     expect( browser.getTitle()).toContain("templates and downloadable graphic elements on Dribbble");  //pass 


    //test 5
        //       let a=[100,200,300];
        // expect(a).toContain(1000);              // fails
        // expect(a).not.toContain(1000);              // pass

    //test6 
        // let a=["sachin","gadekar ", "matnah"];
        // expect(a).toContain(   "sachin")       //passs
      
    
    //test7
        // let a=100;
        //     expect(a).toBeGreaterThan(80);      //pass  
        //     expect(a).toBeLessThan(180);        //pass
    
    
    
    })
    
     
     
})
