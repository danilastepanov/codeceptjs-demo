Feature("demo");

Scenario("test two Todo creation", ({ I }) => {
    I.amOnPage("http://todomvc.com/examples/react/");
    I.fillField("What needs to be done?", "codeceptjs-demo1");
    I.pressKey("Enter");
    I.see("codeceptjs-demo1", ".todo-list");
    I.see("1 item left", ".todo-count");
    I.fillField("What needs to be done?", "codeceptjs-demo2");
    I.pressKey("Enter");
    I.see("codeceptjs-demo2", ".todo-list");
    I.see("2 items left", ".todo-count");
});
