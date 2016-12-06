var IntroVM = function() {
  
  var self = this;
    
  self.show = ko.observable(true); 
  self.show.subscribe(function(invar){
      vmMenuVM.objWidget(invar);
  });

};

var vmIntroVM = new IntroVM();