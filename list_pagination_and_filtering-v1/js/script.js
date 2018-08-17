/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentAmount = document.querySelectorAll('.student-item');
const pageSize = 10;
// this will provide us with the correct amount of pages
const pageCount = Math.ceil(studentAmount.length / pageSize);
// created new elements to add to function later
const div = document.createElement('div');
// this gets current div from html
const getDiv = document.getElementsByClassName('page')[0];
// created new elements to add to function later
const newDiv = document.createElement('div');
const newUl = document.createElement('ul');
// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
const hideStudents = (studentList) => {
  studentList = studentAmount;
  for (let i = 0; i < studentList.length; i += 1) {
    studentList[i].style.display = 'none';
    }
  }
// this function will show the right amount of students corresponding with their page number
const showStudents = (pageNumber, studentList) => {
  hideStudents();
  for (let i = 0; i <= studentList.length; i += 1) {
   if (i >= pageSize * (pageNumber - 1) && i < pageSize * pageNumber) {
      studentList[i].style.display = 'block';
    }
  }
}
// Create and append the pagination links - Creating a function that can do this is a good approach
const appendLink = (studentList) => {
  newDiv.classList.add('pagination');
  getDiv.appendChild(newDiv);
  newDiv.appendChild(newUl);
  for (let i = 0; i < pageCount; i += 1) {
    const newLi = document.createElement('li');
    newUl.appendChild(newLi);
    const newAnchor = document.createElement('a');
    newAnchor.href = '#';
    newAnchor.textContent = i + 1;
    newLi.appendChild(newAnchor);
// selects all newly made anchor elements
    const activeAnchor = document.querySelectorAll('a');
//this will set the first name to a clas name active
    activeAnchor[0].className = 'active';
// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
    newDiv.addEventListener('click', (e) =>{
      const button = event.target.textContent;
      showStudents(button, studentList);
      for (let i = 0; i < activeAnchor.length; i += 1) {
        activeAnchor[i].classList.remove('active');
        e.target.classList.add('active');
      }
  });
}
};
showStudents(1, studentAmount);
appendLink(studentAmount);
