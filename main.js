var dict = [
	{'alumne': 'Pepe', 'data_naiximent': '2001-02-01'},
	{'alumne': 'Rafa', 'data_naiximent': '2005-02-01'},
	{'alumne': 'Pedro', 'data_naiximent': '2003-02-01'},
	{'alumne': 'Manolo', 'data_naiximent': '2009-02-01'},
	{'alumne': 'Juan', 'data_naiximent': '1999-02-01'},
	{'alumne': 'Maria', 'data_naiximent': '2007-02-01'}
  
  ]
  
 
var items3 = dict.sort((a, b) => a.alumne.localeCompare(b.alumne))

console.log("Ordenado por Nombre")
console.log(items3);

var items2 = dict.sort((a, b) => a.data_naiximent.localeCompare(b.data_naiximent))

console.log("Ordenado por Fecha")
console.log(items2);






