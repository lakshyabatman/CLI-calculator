class Stack {
  constructor() {
    this.stack = Array()
    this.index = -1
  }
  
  push(num) {
    this.stack.push(num)
    this.index++;
  }
  
  pop() {
    if(this.index>=0) {
       this.stack.splice(this.index,1)
       this.index--;
       return;
    }
    throw new Error("Stack is empty")
  }
  top() {
    if(this.index>=0) {
      return this.stack[this.index]
    }
    throw new Error("Stack is empty")
  }
  
  empty() {
    return this.index<0;
  }
  
  
  
};

module.exports = Stack