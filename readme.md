Understanding Scope - variable visibility
Depending on where you define your variable other pieces of code may or may not be able to access it.

Function Scope - a variable is visible inside the variable but not outside of it.
<code>
function helpMe() {
let msg = "I'm locked out"

msg; //works
}
mgs; //undefined
</code>

Block Scope - let and const are scoped to block. However var is scoped to functions and no block scoping, could be problematic.

Lexical Scope - occurs in nested functions. A variable declared in on function is available to nested functions within it, but their variables are not available to their parents
