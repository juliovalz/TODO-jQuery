$(document).ready(function(){   
    var x = 0;
    $('.clear').hide(); 
    $('#input-todo').keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		 var todo = $('#input-todo').val();
         if(todo.length != 0){  
            $('#todo-list').append("<li class='list'> <input class='check css-checkbox' id='c+"+x+
            "'type='checkbox'><label class='check css-label ' for='c+"+x+"'></label> <label class='element'>"+
            todo+" </label><button class='delete'>X</button></li>")
            $('#input-todo').val('');
            items();
            x++;
             $(".css-checkbox").parent().show();
         } 
     }

    });

        $('.button').click(function(){

        if($('.check').prop( "checked")==false){ 
           $('.clear').show();
           $('.check').prop('checked', true);
            var style1 = {
            "text-decoration" : "line-through",
            "opacity": "0.33"
            };     
           $('.check').parent().find('.element').css(style1);
           items();
        }else{
            $('.check').prop('checked', false);
             var style2 = {
            "text-decoration" : "none",
            "opacity": "0.8"
            };   
            $('.check').parent().find('.element').css(style2); 
            items();  
        } 
        });

       $(document).on('click', 'button.delete', function() {
        $(this).parent().remove();
        items();
        
    });


     $(document).on('change', '.check', function() {
          $('.clear').show(); 
         if($(this).prop( "checked")==true){        
             var style1 = {
            "text-decoration" : "line-through",
            "opacity": "0.33"
            };     
            $(this).parent().find('.element').css(style1)
            items();
        }else{
            var style2 = {
            "text-decoration" : "none",
            "opacity": "0.8"
            };    
            $(this).parent().find('.element').css(style2);
            items();  
        }
         // $(this).parent().parent().remove();
        
    });

    $('.all').click(function(){
        $(".check").parent().show();
    })

     $('.active').click(function(){
        $(".css-checkbox").each(function(){
            if($(this).prop( "checked")==false){
                $(this).parent().show();
            }else{
                $(this).parent().hide();
            }
         });
    });

     $('.completed').click(function(){
         $(".css-checkbox").each(function(){
            if($(this).prop("checked")==true){
                $(this).parent().show();
            }else{
                $(this).parent().hide();
            }
         });
    });

     $('.clear').click(function(){
         $(".css-checkbox").each(function(){
            if($(this).prop( "checked")==true){
                $(this).parent().remove();
                items();
            }
         });
          $('.clear').hide();
          items();
    });

   function items(){
        var cont = 0;
        $(".css-checkbox").each(function(){
          if($(this).prop( "checked")==false){
            cont++;
          }
        });
         $('.items').text(cont+" items left");
   }

});




