$(document).ready(function(){
    $("ul").on("click","li",function(){
      $(this).toggleClass("completed");
    });

   //deleting spam when clicked on X

    $("ul").on("click","span",function(event){
      $(this).parent().fadeOut(500,function(){
        $(this).remove;
      });
      event.stopPropagation;
    });    
    $("input[type='text']").keypress(function(event){
      if(event.which === 13){
        //capture text from input text
        var todoText  = $(this).val();
        $(this).val("");
        //creating a new li and adding it to ul
        $("ul").append("<li><span><i class='fa fa-minus-circle' ></i></span> "+todoText+"</li>") 
        
      }
    });
    $(".fa-pencil-square").click(function(){
      $("input[type='text']").fadeToggle();

    });
});

