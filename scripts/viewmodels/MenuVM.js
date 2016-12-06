var MenuVM = function() {
  
  var self = this;
  
  self.chosenMenu = ko.observable();
    
  self.menuArray = ko.observableArray([
      {name:'js', presentation:'Javascript'},
      {name:'jquery', presentation:'JQuery & Co.'},
      {name:'ko', presentation:'Knockout.js'}
  ]);
    
  self.changeChosen = function(invar){ 
      self.chosenMenu(invar);
      
      _.each(self.menuArray(), function(i){
        var t = eval("vm"+i.name+"VM");
        t.isvisible(false);
      });
      
      var t = eval("vm"+invar+"VM");
      t.isvisible(true);
             
      vmIntroVM.show(false);
  };
    
  self.objWidget = ko.observable(true);
    
  self.initDependentVMs = function(){
      ko.applyBindings(vmIntroVM, document.getElementById("intro"));
      
      //dynamic vm bindings.. sleek :D
      _.each(self.menuArray(), function(i){
          return ko.applyBindings(eval("vm"+i.name+"VM"), document.getElementById(i.name));                   
      });
  };
    
};


var vmMenuVM = new MenuVM();

$(function(){
    ko.applyBindings(vmMenuVM, document.getElementById("titleAndMenu"));
    vmMenuVM.initDependentVMs();
});