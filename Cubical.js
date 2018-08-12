$( document ).ready(function() {

    var checkboxes = $("input[type='checkbox']"),
        pictures = $("#pictures"),
        soundtable = $("#soundtable"),
        game = $("#game");

    checkboxes.click(function() {
        pictures.attr("hidden", !checkboxes.is(":checked"));
        soundtable.attr("hidden", !checkboxes.is(":checked"));
        game.attr("hidden", !checkboxes.is(":checked"));
     });
      
});

/* EXAMPLE THAT I WANT TO STICK WITH _______________________________________________________________________________
<head>
<script src="//code.jquery.com/jquery-2.1.1.js"></script>
</head>

<h1>Button should be enabled if at least one checkbox is checked</h1>

<form>
    <div>
        <input type="checkbox" name="option-1" id="option-1"> <label for="option-1">Option 1</label>
    </div>
    <div>
        <input type="checkbox" name="option-2" id="option-2"> <label for="option-2">Option 2</label>
    </div>
    <div>
        <input type="checkbox" name="option-3" id="option-3"> <label for="option-3">Option 3</label>
    </div>
    <div>
        <input type="checkbox" name="option-4" id="option-4"> <label for="option-4">Option 4</label>
    </div>
    <div>
        <input type="checkbox" name="option-5" id="option-5"> <label for="option-5">Option 5</label>
    </div>
    
    <div>
        <input type="submit" id="actions" value="Do thing" hidden>
    </div>
</form>
$( document ).ready(function() {
    
    var checkboxes = $("input[type='checkbox']"),
    actions = $("#actions");

    checkboxes.click(function() {
    
       actions.attr("hidden", !checkboxes.is(":checked"));
      
    });
      
});
_____________________________________________________________________________________________*/





/*$('.anxiety').click(function() { 
    var anxiety = sounds;
    var sadness = pictures;
    var gstress = game;

    if ($("#anxiety:checked").show();
      
    if  ($("#sadness:checked").show();
      
     else ($("#gstress:checked").show();
        
}*/