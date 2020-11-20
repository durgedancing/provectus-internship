import {Todo, Geo, Addres, Company, User, GroupingTodos} from './types';

console.clear();

const url = "https://jsonplaceholder.typicode.com/todos";
const loadData = async () => await fetch(url).then(response => response.json());

const data = loadData();

// select all data
const selectAll = async (): Promise<Array<Todo>> => await data;

selectAll().then(res => {
  console.assert(res.length === 200);
});

// select todo by id;
const selectById = async (id: number): Promise<Array<Todo>> => {
  return await data.then(todos => todos.filter(todo => todo.id === id));
};

selectById(1).then(res => {
  console.assert(res.length === 1);
  console.assert(res[0].id === 1);
});

selectById(100).then(res => {
  console.assert(res.length === 0);
});

/*

  Exercise 2.
  1. Implement all functions below;
  2. Convert this file to TypeScript, create interfaces for input data;
  
  Optional: 3. Write a helper function which acts like a wrapper and memoizes the result of any selector function
  Комментарий: этого задания я не делала.
*/



// 1. grouping todos by users:

const groupingTodosByUsers = async (): Promise<GroupingTodos> => {
  return await data.then(todos => todos.reduce((acc, todo) => {
    let key = todo['userId'];
     if (acc.hasOwnProperty(key)) {
       acc[key].push(todo)
       return acc;
     } 
     acc[key] = [todo];
     return acc;
    }, {}));
};

groupingTodosByUsers().then(todosMapByUserId => {
  console.assert(todosMapByUserId.hasOwnProperty(1) && todosMapByUserId[1].length === 20);
})

// 2. select all user's todos by userId:

const selectTodosByUserId = async(userId: number): Promise<Array<Todo>> => {
  return await data.then(todos => todos.filter((todo) => todo['userId'] === userId));
};

selectTodosByUserId(100).then(todos => {
  console.assert(todos.length === 0);
});

selectTodosByUserId(1).then(todos => {
  console.assert(todos.length === 20);
})

// 3. select todos by user name:

const newUrl = 'https://jsonplaceholder.typicode.com/users';

const aboutUsers = async () => await fetch(newUrl).then(response => response.json());

const users = aboutUsers();

const selectTodosByName = async(name: string): Promise<Array<Todo>> => {
  const user = await users.then(users => users.filter(user => user['name'] === name));
  const id = user[0]['id'];
  return selectTodosByUserId(id);
}

selectTodosByName("Ervin Howell").then(todosByName => {
  console.assert(todosByName.length === 20);
})


// 4. Use https://jsonplaceholder.typicode.com/users to load data about selected todos' authors and print result to console:

