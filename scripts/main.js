(function (window) {
    'use strict';
    // can't read property FormHandler is undefined
    var SERVER_URL = 'https://co.audstanley.com/coffeeorders';
    var App = window.App;
    var FormHandler = App.FormHandler;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var CheckList = App.CheckList;
    var Validation = App.Validation;
    var remoteDS = new RemoteDataStore(SERVER_URL);

    window.myTruck = myTruck;
    var CheckList = App.CheckList;
    var myTruck = new Truck('KITT', remoteDS);
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var formHandler = new FormHandler(FORM_SELECTOR);
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var RemoteDataStore = App.RemoteDataStore;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));


    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);


    console.log(formHandler);
})(window);