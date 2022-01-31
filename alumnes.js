var dict = {
	"Alba": "1996-03-02",
	"Vicente": "1995-01-04",
	"Borja": "1997-09-13",
	  };
  
 

  var items = Object.keys(dict).map(function(key) {
	return [key, dict[key]];
  });
  
items.sort();
console.log(items);

var items2 = Object.keys(dict).map(function(key) {
	return [key, dict[key]];
  });
  
items2.sort();
console.log(items);




