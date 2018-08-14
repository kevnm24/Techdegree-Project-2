/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentList = document.querySelectorAll('.student-item');
const mainDiv = document.getElementsByTagName('div')[0];
const pageSize = 10;
const countStudents = studentList.length;
const pageCount = Math.ceil(countStudents / pageSize);

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
function hideStudents() {
  for (let i = 0; i < studentList.length; i += 1) {
    studentList[i].style.display = 'none';
    }
  }
hideStudents();

function showStudents() {
  for (let i = 0; i < pageSize * pageCount; i += 1) {
    studentList[i].style.display = 'block';
  }
}
// Create and append the pagination links - Creating a function that can do this is a good approach
function button() {
for (let i = 1; i <= pageCount; i += 1) {

  const pagination = document.createElement('div');
  pagination.classList.add('pagination');
  mainDiv.appendChild(pagination);
  const ulList = document.createElement('ul');
  mainDiv.appendChild(pagination);
  pagination.appendChild(ulList);
  ulList.innerHTML = '<li><a class="active" href ="#">' + i + '</a></li>';
  showStudents();
}
}
// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here

ulList.addEventListener('click', (e) => {
  if (e.target.tagName === 'pagination'){
    button();
  }
});
