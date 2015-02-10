var noCapsList = "a, an, the, at, by, for, in, of, on, to, up, and, as, but, it, or, nor";

function titleCase(string) {
  var results = "";
  string.split(" ").forEach(function(word) {
    if ((noCapsList.indexOf(word) > -1) && (results !== "")) {
      results = results + (word.toLowerCase()) + " ";
    } else {
      results = results + (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) + " ";
    }
  });
  results = results.slice(0, -1)
  if (results === "") {
  return "Error: no title found!"  
  } else {
  return results;
  }
}


$(document).ready(function(){
  $("#result").hide();
  $("form#title-case").submit(function(event) {
    var string = $("input#string").val();
    var result = titleCase(string);

    $(".result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
