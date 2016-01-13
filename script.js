$(document).ready(function() {
  var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];
  avengers.sort(function(a, b){
    
          if ( a > b) {
              return 1;
          } else if (a < b) {
              return -1;
          } else {
              return 0;
          }
  });
  // _.each(avengers, function(avenger){
  //   console.log(makeId(avenger));
  //});
  // Code goes here!
    function createList(avengers) {
        /**
         * Takes an array of avengers
         * returns an ul populated with avengers
        */
        var $ul = $('<ul>')
          .attr('id', 'avengers-list')
          .append(_.map(avengers, function(avenger) {
            return $('<li>')
            .addClass('avengers')
            .attr('id', makeId(avenger))
            .html(avenger);
          }));
            return $ul;
        }
  
        
  createList(avengers).appendTo('body');
  //console.log(findAvenger('iron-man'));
  removeAvenger(['Wasp', 'Ant Man']);
  //$('#avengers-list').append('<li>Captain America</li>');
  addAvenger(['Black Panther', 'Vision', 'Captain America', 'Spider-Man']);
  sortAvengers();
  //sort(avengers-list);
  // var $list = $('#avengers-list').find('li');
  // $list.sort(function(a, b){
  //   return $(a).text().localeCompare($(b).text);
  // });
  
 var $btn = $('<button>')
    .text('press here')
    .appendTo('body')
    .on('click', rotate);
    
  fade();

  var $bt2 = $('<button>')
    .text('click me so bad')
    .on('mouseover', function(event){
      console.log('fired');
    })
    //.appendTo('body');
});

  var $form = $('<form>')
    .append('<input type = text>')
    .appendTo('body');
  

function makeId(str){
    return str.toLowerCase().replace(' ', '-');
  }
  
function findAvenger(id) {
  return $('li#' + id);
}

function removeAvenger(avengers) {
  _.each(avengers, function(avenger){
    var $found = findAvenger(makeId(avenger));
    //console.log($found);
    if ($found[0]) $found.remove();
  });
}

function addAvenger(newAvengers) {
  _.map(newAvengers, function(avenger){
      return $('<li>')
        .appendTo('#avengers-list')
        .attr('id', makeId(avenger))
        .html(avenger)
        .on('blur', function(event){
          
        });
  });
}
function sortAvengers() {
    $('#avengers-list').find('li').sort(function(a,b) {
      if ($(a).html() > $(b).html()) {
        return 1;
      } else if($(a).html() < $(b).html()) {
        return -1;
      } else {
        return 0;
      }
     
    }).appendTo('#avengers-list');
    
    //$('#avengers-list').append($avengersLi);
  }
// function newSort(id){
//   $('')
// }

function rotate(){
  $('#avengers-list').find('li').first().appendTo('#avengers-list');
}

function fade(){
  $('#avengers-list').find('li').hide();
  var $listItems = $('#avengers-list').find('li');
  console.log($listItems);
  $listItems.each(function(i){
    $(this).delay(1000 * i).fadeIn(400);
  });
}

