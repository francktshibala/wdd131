const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('----------')
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.ariaValueMax;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);