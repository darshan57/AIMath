//document.addEventListener('deviceready',initialize, false);
initialize();

function initialize() {
    requirejs.config({
        //By default load any module IDs from js/lib
        baseUrl: './src/js/app', //except, if the module ID starts with "app",
        //load it from the js/app directory. paths
        //config is relative to the baseUrl, and
        //never includes a ".js" extension since
        //the paths config could be for a directory.
        paths: {
            "jquery": "../../jslib/jquery.min"
            , "underscore": "../../jslib/underscore-min"
            , "backbone": "../../jslib/backbone-min"
            , "backbone.radio": "../../jslib/backbone.radio.min"
            , "marionette": "../../jslib/backbone.marionette.min"
            ,"materialize":"../../jslib/materialize.min"
            , "text": "../../jslib/text"
        }
        , shim: {
            "jquery": {
                exports: "$"
            }
            , 
            'underscore': {
                exports: "_"
            }
            , 'backbone': {
                deps: ["jquery", 'underscore']
                , exports: "Backbone"
            }
            , "backbone.radio": {
                deps: ["backbone"]
            }
            , 'marionette': {
                deps: ['backbone.radio']
                , exports: "Marionette"
            }
        }
    });
    require(["./MathApp","materialize"], function (MathApp) {
        //        var MathApp = require('MathApp');
        var newApp = new MathApp();
        newApp.start();
        //startApp();
    });
}