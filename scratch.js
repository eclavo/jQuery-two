   var $page = $('<div>')
      .appendTo('main');
    
    
    function createData(products) {
      
    }
    
    var $data = _.map(products, createData(products));
    // $($page).append($data);
  function createData(products){
     
     
    var $ul = $('<ul>')
      .addClass('products-list')
      .append(_.map(products, function(product){
        return $('<li>')
          .attr('id', product.id)
          .html(product.des)
          .append($('<div>')
            .append($('<li>').append(product.price))
            .append($("<img>")
            .attr('src', 'img/product/thumbs/' + product.image)));
      }));
   

    return $ul
//     ucts-row {
//     display: flex;
//     flex-direction: row;
//     margin-bottom: 10px;
//     word-wrap: break-word;
//     padding: 10px;
// }
  }