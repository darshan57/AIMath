define(["underscore","backbone","marionette","./MathAppRouter"], function (_,Backbone,Marionette,AppRouter) {
    var app = Marionette.Application.extend({
        initialize: function (options) {
            console.log('initialised');
        },
        
        start:function (options) {
        if (Backbone.history) {
             var router = new AppRouter();
            Backbone.history.start();
            
        }
           
        }
    });
    
    return app;
});