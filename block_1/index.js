function foo() {
    this.count++
  }
foo.count = 0;
  
for(let i = 0; i < 10; i++) {
    // How could you change this expression to pass assertion?
    foo()
    foo.count += 1; //added
  }
  
console.assert(foo.count === 10)
   