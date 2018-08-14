/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentList = document.querySelectorAll('.student-item');

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
function hideStudents() {
  for (let i = 0; i < studentList.length; i += 1) {
    studentList[i].style.display = 'none';
    }
  }
hideStudents();

function showStudents() {
  for (let i = 0; i < 10; i += 1) {
    studentList[i].style.display = 'block';
  }
}
// Create and append the pagination links - Creating a function that can do this is a good approach
function button() {
const pageSize = 10;
const countStudents = studentList.length;
const pageCount = Math.ceil(countStudents / pageSize);
for (let i = 1; i <= pageCount; i += 1) {
  const pagination = document.createElement('pagination');
  pagination.innerHTML = '<ul><li><a class="active" href ="#">' + i + '</a></li></ul>';
  const div = document.getElementsByTagName('div')[0];
  div.appendChild(pagination);
}
}
showStudents();
button();

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
