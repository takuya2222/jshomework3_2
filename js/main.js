'use strict';

const inputTodo = document.getElementById('input-todo');
const addTaskTarget = document.getElementById('addTask-target');
const todos = [];
// const index = todoRow.rowIndex - 1;

const onClickAdd = () => {
  const todo = {todoComment: inputTodo.value, onProcessBtn: '作業中' };
  todos.push(todo);
  // todos.splice(index, 1);
  
  createTodo(inputTodo);
  inputTodo.value = '';
};

const createTodo = (text) => {
  addTaskTarget.textContent = '';
  
  todos.forEach((todo,number) => {
    const todoRow = document.createElement('tr');
    addTaskTarget.appendChild(todoRow);
    
    const todoId = document.createElement('td');
    const todoComment = document.createElement('td');
    const status = document.createElement('td');
    const todoAction= document.createElement('td');
    
    todoId.textContent = number;
    todoComment.textContent = todo.todoComment;
    todoRow.appendChild(todoId);
    todoRow.appendChild(todoComment);
    todoRow.appendChild(status);
    todoRow.appendChild(todoAction);

    const statusButton = document.createElement('button');
    statusButton.innerText = todo.onProcessBtn;
    status.appendChild(statusButton);
    
    todoAction.appendChild(createDeleteButton(todoRow));
    
    console.log(todoRow);
    
    
  });
};

document
.getElementById('add-btn')
.addEventListener('click', () => onClickAdd());


const createDeleteButton = (todoRow) => {
  const index = todoRow.rowIndex - 1;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', () => {
    todos.splice(index, 1);
    createTodo();
  });
  return deleteButton
};