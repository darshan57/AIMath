define(["./MathAppController","marionette"],function(AppController,Marionette){
    return Marionette.AppRouter.extend({
  controller: new AppController(),
  appRoutes: {
    "": "start"
  }
});
})

