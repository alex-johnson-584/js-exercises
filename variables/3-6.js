const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//The program does not throw an error because the block scoped variable is separate from the global variable.