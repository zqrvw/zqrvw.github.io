$(document).ready(function(){

    $("#navHome").on("click", function(){
        $(".HomePage").css("z-index", "2");
        $(".AboutPage").css("z-index", "1");
        $(".ArticleListsPage").css("z-index", "0");
      });

    $("#navAbout").on("click", function(){
      $(".AboutPage").css("z-index", "2");
      $(".HomePage").css("z-index", "1");
      $(".ArticleListsPage").css("z-index", "0");
    });

    $("#navArticleLists").on("click", function(){
      $(".ArticleListsPage").css("z-index", "2");
      $(".HomePage").css("z-index", "1");
      $(".AboutPage").css("z-index", "0");
    });

}); 