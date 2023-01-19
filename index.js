const input = document.getElementById('input');
const button = document.getElementById('newTask');
const parent = document.getElementById('parent');
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
    newDiv.classList.add('todo');
    newDiv.appendChild(newP);
    parent.appendChild(newDiv);
  }
  arr = [];
});
  


