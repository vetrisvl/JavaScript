These two functions will not return the same thing.
gnarly is that foo2() returns undefined without any error being thrown.
console.log("foo1 returns:");
console.log(foo1);
console.log("foo2 returns:");
console.log(foo2());

foo1 returns:
object{bar:"hello"}
foo2 returns:
undefined