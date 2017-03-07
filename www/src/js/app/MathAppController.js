define(["marionette", "./layouts/MainPageLayout"], function (Marionette) {
    return Marionette.Object.extend({
        initialize: function () {
            console.log("controller");
        }
        , start: function () {
            console.log("app started");
            require(["./layouts/MainPageLayout"], function (MainPageLayout) {
                var mainPageLayout = new MainPageLayout();
                mainPageLayout.render();
                   // $(".mdl-layout__header").show();

            })
        }
    });
})