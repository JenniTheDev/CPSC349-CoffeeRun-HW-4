(function (window) {
    'use strict';
    // Singleton Pattern
    var App = window.App || {};

    // Constructor
    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    // Calls Datastore's add method to store coffee order
    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    };
    // Removes the order from the truck
    Truck.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    };

    // Prints array of orders
    Truck.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.db.getAll());

        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach(function (id) {
            console.log(this.db.get(id));
            // accepts object argument and returns new version of function
        }.bind(this));
    };

    App.Truck = Truck;
    window.App = App;

})(window);