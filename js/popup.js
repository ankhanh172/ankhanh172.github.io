//Function to show and hide the popup
$(function(){
    $(".shape").click(function(){
        $( "#shape" ).show();
    });
    $(".abc-alphabet").click(function(){
        $( "#abc-alphabet" ).show();
    });
    $(".number").click(function(){
        $( "#number" ).show();
    });
    $(".table").click(function(){
        $( "#table" ).show();
    });
    $(".addition").click(function(){
        $( "#addition" ).show();
    });
    $(".subtraction").click(function(){
        $( "#subtraction" ).show();
    });
    $(".color").click(function(){
        $( "#color" ).show();
    });
    // ============animals==========
    $(".mammals").click(function(){
        $( "#mammals" ).show();
    });
    $(".birds").click(function(){
        $( "#birds" ).show();
    });
    $(".dino").click(function(){
        $( "#dino" ).show();
    });
    $(".fish").click(function(){
        $( "#fish" ).show();
    });
    $(".reptiles").click(function(){
        $( "#reptiles" ).show();
    });
    $(".amphibians").click(function(){
        $( "#amphibians" ).show();
    });
    $(".phylum").click(function(){
        $( "#phylum" ).show();
    });
    // =========Vegetable========
    $(".brassica").click(function(){
        $( "#brassica" ).show();
    });
    $(".phaseolus").click(function(){
        $( "#phaseolus" ).show();
    });
    $(".daucus").click(function(){
        $( "#daucus" ).show();
    });
    $(".solanum").click(function(){
        $( "#solanum" ).show();
    });
    $(".cucumis").click(function(){
        $( "#cucumis" ).show();
    });
    $(".allium").click(function(){
        $( "#allium" ).show();
    });

    // close popup
    $(".close").click(function(){
        $( ".popup" ).hide();
    });
});