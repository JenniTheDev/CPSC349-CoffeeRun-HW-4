(function (window) {
    'use strict';
    // can't read property FormHandler is undefined
    var App = window.App;
    var FormHandler = App.FormHandler;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var CheckList = App.CheckList;

    window.myTruck = myTruck;
    var CheckList = App.CheckList;
    var myTruck = new Truck('KITT', new DataStore());
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var formHandler = new FormHandler(FORM_SELECTOR);
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));


    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });


    console.log(formHandler);
})(window);