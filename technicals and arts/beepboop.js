$(document).ready(function(){
    $("#aboutboxbutton").focusin(function(){
      $("#changeAbout").attr("src", "technicals and arts/activeaboutButton.png");
      $("#aboutbox").css("visibility", "visible");
    });
    $("#aboutboxbutton").focusout(function(){
      $("#changeAbout").attr("src", "technicals and arts/aboutButton.png");
      $("#aboutbox").css("visibility", "hidden");
    });

    $("#toolsboxbutton").focusin(function(){
      $("#changeTools").attr("src", "technicals and arts/activetoolsButton.png");
        $("#toolsbox").css("visibility", "visible");
      });

    $("#toolsboxbutton").focusout(function(){
      $("#changeTools").attr("src", "technicals and arts/toolsButton.png");
        $("#toolsbox").css("visibility", "hidden");
    });

    $("#limitationsboxbutton").focusin(function(){
      $("#changeLimitations").attr("src", "technicals and arts/activelimitationsButton.png");
        $("#limitationsbox").css("visibility", "visible");
      });

    $("#limitationsboxbutton").focusout(function(){
      $("#changeLimitations").attr("src", "technicals and arts/limitationsButton.png");
        $("#limitationsbox").css("visibility", "hidden");
    });

    $("#coolboxbutton").focusin(function(){
      $("#changeCool").attr("src", "technicals and arts/activecoolthingsButton.png");
        $("#coolbox").css("visibility", "visible");
      });

    $("#coolboxbutton").focusout(function(){
      $("#changeCool").attr("src", "technicals and arts/coolthingsButton.png");
        $("#coolbox").css("visibility", "hidden");
    });

}); 