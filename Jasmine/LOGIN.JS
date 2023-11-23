const { browser, element } = require("protractor")

    describe('LOGIN' , function(){
    
                 it("lofgin first", function(){

                                    browser.waitForAngularEnabled(false);
                                    browser.get("https://dribbble.com/session/new")
                                    browser.sleep(4000);
                                    
                                    browser.manage().window().maximize();
                                    expect(browser.getTitle()).toBe("Sign In | Dribbble")
                                    element(by.id("login")).sendKeys("sachin@123");
                                    element(by.id("password")).sendKeys("1234");
                                    var signInButton = element(by.css('[data-cypress="submit-sign-in-btn"]'));
                                    signInButton.click();
    })
 
    describe("handle element" , function(){
            //i tried drop dpwn here
                it("login first and handle element", function(){
                    //dropwown action
                    browser.waitForAngularEnabled(false);
                    browser.get("https://semantic-ui.com/modules/dropdown.html")
                    browser.sleep(5000);
                    var selectElement = $('.ui.search.dropdown.selection select');
                   
        })

    fdescribe("add delete element" , function(){

            it("login first and handle element", function(){
                browser.waitForAngularEnabled(false);
                browser.get("https://dassdevarajan.github.io/demo-app/")
            
            })

            
        })



        
    })
})