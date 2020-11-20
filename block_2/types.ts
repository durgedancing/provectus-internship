export interface Todo {
    userId: number;
    id: number;
    title: string;
    complited: boolean;
  }

export interface Geo {
    lat: string;
    lng: string;
  }

export interface Addres {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string; 
  }

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    addres: Addres;
    phone: string;
    website: string;
    company: Company;
  }

export interface GroupingTodos {
    [userId: string]: Array<Todo>;
  }