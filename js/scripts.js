function titleCase(string) {
  var results = "";
  string.split(" ").forEach(function(word) {
    results = results + (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) + " ";
  });
  results = results.slice(0, -1)
  return results;
}

//a, an, the, at, by, for, in, of, on, to, up, and, as, but, it, or, and nor
