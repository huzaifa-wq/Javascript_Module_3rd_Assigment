'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


// Get the target <select> element
const target = document.getElementById('target');

// Loop through students and create <option> elements
for (let i = 0; i < students.length; i++) {
  const option = document.createElement('option');
  option.value = students[i].id;       // use id for value
  option.textContent = students[i].name; // use name for visible text
  target.appendChild(option);
}