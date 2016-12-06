var jsVM = function() {
  
  var self = this;
  self.isvisible = ko.observable(false);
    
};

var vmjsVM = new jsVM();




var listHTML = '';
var listA = ['jsitem1', 'jsitem2', 'jsitem3'];
var listB = ['jsitem4'];

function jsItemClick(list,itemID){
    
    if(list == 'listA'){
        //add item to other list
        listB.push(itemID);
        //remove item from old list
        var index = listA.indexOf(itemID);
        listA.splice(index, 1);
        
        //recreate lists
        jsRecreateLists();
    }else{
        //add item to other list
        listA.push(itemID);
        
        //remove item from old list
        var index = listB.indexOf(itemID);
        listB.splice(index, 1);
        
        //recreate lists
        jsRecreateLists();
    }
}

function jsRecreateLists(){
    
    listHTML = '<div class="DemoContainer col-xs-2"><ul>';
    
    for(var i=0; i<listA.length; i++){
        listHTML = listHTML + '<li id="'+listA[i]+'" onclick="jsItemClick('+'\'listA\''+',this.id)">'+listA[i]+'</li>';
    }
    
    listHTML = listHTML + '</ul></div><div class="DemoContainer col-xs-2"><ul>';
 
    for(var i=0; i<listB.length; i++){
        listHTML = listHTML + '<li id="'+listB[i]+'" onclick="jsItemClick('+'\'listB\''+',this.id)">'+listB[i]+'</li>';
    }
    
    listHTML = listHTML + '</ul></div>';
   
    document.getElementById('jsDemo').innerHTML = listHTML;
}