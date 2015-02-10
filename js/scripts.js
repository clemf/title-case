var noCapsList = "a, an, the, at, by, for, in, of, on, to, up, and, as, but, it, or, nor";
function titleCase(string) {
  var results = "";
  string.split(" ").forEach(function(word) {
    if (noCapsList.indexOf(word) > -1) {
      results = results + (word.toLowerCase()) + " ";
    } else {
      results = results + (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) + " ";
    }
  });
  results = results.slice(0, -1)
  return results;
}
