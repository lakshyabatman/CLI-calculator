
const Stack = require('./stack')

const solve = (operator,op1,op2) => {
  switch(operator) {
      case("ADD"):
         return op1+op2
      case("SUB"):
          return op1-op2
      case("MUL"):
          return op1*op2
      case("DIV"):
          return op1/op2
      default:
        throw new Error("Operator is not defined")
  }
}


const SolveLine = (input) => {

  let callStack = new Stack()
  inputArray = input.trim().split(" ")

  inputArray.forEach((ch)=> {
    if(isNaN(ch)) {
      
      callStack.push(ch)
    }else {
      callStack.push(parseInt(ch))
    }
  })


  let operand1,operand2;
  while(!callStack.empty()) {
    
    let top = callStack.top();
    callStack.pop()
    if(isNaN(top)) {
      if(operand1 == undefined || operand2 == undefined) {
        throw new Error("Syntax Error")
      }
      let result = solve(top, operand2,operand1)
      callStack.push(result)
      
      operand1 = undefined
      operand2 = undefined
    }else {
      if(operand1 == undefined) {
        operand1 = top;
      }else {
        operand2 = top;
      }
    }
  }
  return operand1
}



module.exports = {
  SolveLine
}
