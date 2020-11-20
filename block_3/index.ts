/* Type guards */
class Bird {
    fly() {
      console.log("fly");
    }
  }
  
  class Fish {
    swim() {
      console.log("swim");
    }
  }
  
  type Pet = Bird | Fish;
  
  function action(pet: Pet): void {
    // Use type guard to choose the correct pet's method: pet.(swim | fly)
    if ((pet as Fish).swim) {
      (pet as Fish).swim();
    } else {
      (pet as Bird).fly();
    };
  
  }
  
  /* Interface */
  // Fill in the types for Employee interface
  // * `level` field must have one the following values: 'Junior' || 'Middle' || 'Senior';
  type Level = 'Junior' | 'Middle' | 'Senior';

  interface Employee {
    name: string;
    level: Level;
    age: number;
    skills: Array<string>;
  }
  
  // Create a type with fields from above being all read-only
  
  type ReadonlyEmployee = {
    readonly name: string;
    readonly level: Level;
    readonly age: number;
    readonly skills: Array<string>;
  };
  
  // Create a CompanyEmployee class that implements ReadonlyEmployee interface

  class CompanyEmployee implements ReadonlyEmployee {
    readonly name: string;
    readonly level: Level;
    readonly age: number;
    readonly skills: Array<string>;
    constructor(data: Employee) {
      this.name = data.name;
      this.level = data.level;
      this.age = data.age;
      this.skills = data.skills;
    };
  }
  
  // Say, we have an employee object of the `CompanyEmployee` class with a `level` of `Junior`:
  // const oldEmployee = new CompanyEmployee(..., 'Junior', ...);
  //
  // We want to update this employee and make his level "Senior". If we do this
  // const newEmployee = new CompanyEmployee(...)
  // newEmployee.level = 'Senior' // this doesn't work
  //
  // How do we get a `newEmployee` object with all fields from `oldEmployee`, but with `.level` set to 'Senior'?
  // hint: check how spread operator applies to objects
  const oldEmployee = new CompanyEmployee({ name: 'Marta', level: 'Junior', age: 27, skills: [] });
  const newEmployee: CompanyEmployee = {...oldEmployee, level: 'Senior'};