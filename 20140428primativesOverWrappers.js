//primatives over object wrappers 
// js has five primative types: booleans, numbers, strings, null and undefined 
> typeof null
'object'


// 
> var s = new String("hello");
> typeof s
'object'
// s is an object that holds string "hello" 
// how do we get the value from s after it was defined. 
> s
{ '0': 'h',
  '1': 'e',
  '2': 'l',
  '3': 'l',
  '4': 'o' }
// so s is a hash of array addresses and coressponding values 
> s [0]
'h'

> s + " world";
'hello world'

> s == "hello" // value equality 
true

> s === "hello" // type equality 
false

// we can use == with === to get value and then get type? 

var s1 = new String ("hello");

> s == s1
false
> s === s1
false

// however we can have 
> s1 [0] == s [0] // values are compared not objects
true

> s1 [0] === s [0] // values are compared and thier types 
true

var s2 = new String ("world");
> s2
{ '0': 'w',
  '1': 'o',
  '2': 'r',
  '3': 'l',
  '4': 'd' }
> s1 [0] == s2 [0] // values are different
false
> s1 [0] === s2 [0] // types same but values different
false

// String prototype object has methods that can be called on a primatice 
> "world".toUpperCase(); // 
'WORLD'

// if you accedentilty set primative values on an object, the interpretor will ignore it and keep going. 
