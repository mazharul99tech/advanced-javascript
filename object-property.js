const students = [
    {id: 21, name: "Mazharul"},
    {id: 23, name: "Omar Sunny"},
    {id: 34, name: "Moyori"},
    {id: 53, name: "Dipjol"}

];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 30);
const biggerOne = students.find(s => s.id > 30);
console.log(biggerOne);