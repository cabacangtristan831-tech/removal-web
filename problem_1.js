function isValidParentheses(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        // If opening bracket, push to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // If closing bracket, check match
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    // If stack is empty, all brackets matched
    return stack.length === 0;
}

// Test cases
console.log(isValidParentheses("()"));        // true
console.log(isValidParentheses("()[]{}"));    // true
console.log(isValidParentheses("(]"));        // false
console.log(isValidParentheses("([)]"));      // false
console.log(isValidParentheses("{[]}"));      // true
