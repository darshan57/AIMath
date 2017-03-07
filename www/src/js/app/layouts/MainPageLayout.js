define(["../MathApp", "text!../templates/MainPageTemplate.html", "marionette", "backbone", "../views/SideBarView"], function (MathApp, MainPageTemplate, Marionette, Backbone, SideBarView) {
    var MainPageLayout = Marionette.View.extend({
        template: _.template(MainPageTemplate)
        , model: new Backbone.Model()
        , regions: {
             contentRegion: "#content-region"
            , sidebarRegion: "#sidebar-region"
            , modalRegion: "#modal-region"
        }
        , onRender: function () {
            $("body").html(this.$el);
           // this.showChildView('sidebarRegion', new SideBarView());
            $(".mdl-layout__header").show()
        }
    });
    return MainPageLayout;
})