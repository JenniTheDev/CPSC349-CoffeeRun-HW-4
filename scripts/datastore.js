(function (window) {
    'use strict';
    // Local variable named App  || = logical or
    // This is a singleton pattern
    // If there's not one, create it, if there is one, use it
    var App = window.App || {};

    // Constructor
    function DataStore() {
        this.data = {};
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    };
    // returns specific key
    DataStore.prototype.get = function (key) {
        return this.data[key];
    };

    // returns reference to data property
    DataStore.prototype.getAll = function () {
        return this.data;
    };

    // removes key data pair
    DataStore.prototype.remove = function (key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;

})(window);