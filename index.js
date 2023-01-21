const input = document.getElementById('input');
const button = document.getElementById('newTask');
const parent = document.getElementById('parent');
let btnDelete = document.querySelector('.btnDelete');
let newDiv = document.querySelectorAll('.todo');
let arr = [];


input.addEventListener('change', e =>{
  let newValue = e.target.value; 
  arr.push(newValue)
  e.target.value = '';
  return arr; 
})

 button.addEventListener('click', e => {
  e.preventDefault();

  for (let i = 0; i < arr.length; i++) {
    let newP = document.createElement('p');
    newP.textContent = arr[i];
    let newDiv = document.createElement('div');
    let newBtn = document.createElement('button');
    newDiv.classList.add('todo');
    newBtn.classList.add('btnDelete');
    newBtn.textContent = '+';
    newDiv.appendChild(newP);
    newDiv.appendChild(newBtn);
    parent.appendChild(newDiv);
  }
  arr = [];
});



parent.addEventListener('click', (e) => {
  if (e.target.classList.contains('btnDelete')) {
    e.target.parentNode.remove();
  }
});