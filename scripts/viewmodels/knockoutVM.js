var knockoutVM = function() {
  
  var vm = this;
  vm.isvisible = ko.observable(false);
    
  vm.ls1 = ko.observableArray(['item1','item2','item3']);
  vm.ls2 = ko.observableArray(['item4']);
    
  vm.itmClick = function(list, item){
      if(list()==vm.ls1()){
        vm.ls1.remove(item);
        vm.ls2.push(item);  
      }else{
        vm.ls2.remove(item);
        vm.ls1.push(item); 
      };               
  }
    
};

var vmkoVM = new knockoutVM();
