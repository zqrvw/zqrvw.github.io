$(document).ready(function(){
    $("#aboutboxbutton").focusin(function(){
      $(this).css("background-color", "#FFFFCC");
      $("#aboutbox").css("visibility", "visible");
    });
    $("#aboutboxbutton").focusout(function(){
      $(this).css("background-color", "#FFFFFF");
      $("#aboutbox").css("visibility", "hidden");
    });

    $("#toolsboxbutton").focusin(function(){
        $(this).css("background-color", "#FFFFCC");
        $("#toolsbox").css("visibility", "visible");
      });

    $("#toolsboxbutton").focusout(function(){
        $(this).css("background-color", "#FFFFFF");
        $("#toolsbox").css("visibility", "hidden");
    });

    $("#limitationsboxbutton").focusin(function(){
        $(this).css("background-color", "#FFFFCC");
        $("#limitationsbox").css("visibility", "visible");
      });

    $("#limitationsboxbutton").focusout(function(){
        $(this).css("background-color", "#FFFFFF");
        $("#limitationsbox").css("visibility", "hidden");
    });

    $("#coolboxbutton").focusin(function(){
        $(this).css("background-color", "#FFFFCC");
        $("#coolbox").css("visibility", "visible");
      });

    $("#coolboxbutton").focusout(function(){
        $(this).css("background-color", "#FFFFFF");
        $("#coolbox").css("visibility", "hidden");
    });


}); 