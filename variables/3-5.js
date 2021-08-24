let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

//The console logs "bar" because a new variable was created within the block scope that cannot be accssed by the command outside of the block.