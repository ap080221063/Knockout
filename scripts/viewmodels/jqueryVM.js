var jqueryVM = function() {
  
  var self = this;
  self.isvisible = ko.observable(false);
    
};

var vmjqueryVM = new jqueryVM();




var jQlistHTML = '';
var jQlist1 = ['jqitem1', 'jqitem2', 'jqitem3'];
var jQlist2 = ['jqitem4'];

function mapList(list, listName){
    //wipe items
    $('#ul'+listName).html("");
    //recreate each one
    _.each(list, function(invar){
        //add item
        $('#ul'+listName).append('<li id="'+invar+'">'+invar+'</li>');
        //map item with click function
        $("#"+invar).bind("click", function(){
            //adds item to new list
            (listName=='jQlist1'?jQlist2:jQlist1).push(invar);
            //removes item from old list
            list.splice(_.indexOf(list, this.id), 1);
            //recreate lists
            mapList(jQlist1, 'jQlist1');
            mapList(jQlist2, 'jQlist2');
        });
        
    });
}

$(function(){
    mapList(jQlist1, 'jQlist1');
    mapList(jQlist2, 'jQlist2');
})
