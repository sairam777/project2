$(document).ready(function(){

  $('form').on('submit',function(event){
    var item = $('form input');
    console.log(item);
    var todo = {item:item.val()};
console.log('event')
      $.ajax({
        type:'POST',
        url:'/todo',
        data: todo,
        success:function(data){
          location.reload();
        }

      });

  });

  $('li').on('click', function(){

    var item = $(this).text().replace(/ /g, "");
    console.log(item);
    $.ajax({
      type: 'DELETE',
      url:'/todo/' + item,
      success : function(data){

        location.reload();
      }
    });
  });
    return false;
});
