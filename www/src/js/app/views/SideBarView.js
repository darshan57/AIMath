define(["../MathApp","text!../templates/SideBarTemplate.html","marionette"],function(MathApp,SideBarTemplate,Marionette){
    var SideBarView = Marionette.View.extend({
  template: _.template(SideBarTemplate),
        className:"mdl-layout__drawer",
        onRender:function(){
            this.$el.html(this.template);
        }
});

    return SideBarView;
})