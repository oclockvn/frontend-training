# Js Basic

### 1. Data types

Data type could be: string, number (number | bigInt), boolean, null, undefined, object (array, date, Map, Set), 

### 1.1. string
```js
var name = "Quang Phan"; // double quote
name = 'Tien Quang'; // single quote
name = `Phan Tien Quang`; // backtick

# common operators
"hello" + " world" ~= "hello".concat(" world") => "hello world"
"quang".includes('q') => true // check if given character included in the string
"quang".includes('s') => false
"quang".length => 5 // check length
"quang".chatAt(0) = "quang"[0] => 'q' // get char at index
"quang".split('') = ['q', 'u', 'a', 'n', 'g'] // split array
```

### 1.2. number

```js
var num = 1;
num += 1; // = num = num + 1 => 2
num /= 2 // num = num / 2 => 1

# convert (parse) from string to number
num = Number("1")
num = parseInt("1") // => 1
num = parseInt("1s") // => 1
num = parseFloat("1.1") // => 1.1
num = +"1" // 1
10 % 3 = 1 // Modulus
```

### 1.3. boolean

```js
var correct = true;
```

### 1.4. array

```js
var arr = [1, 2, 3]

arr.length // => 3: length of array (number of elements in array)
arr[0] // => 1: index of an element
arr[4] // => undefined
arr.slice(0, 1) // => [1] (slice from start index to end index exclusive)
arr.push(4) // => [1, 2, 3, 4]: add item to end of array
arr.pop()

arr.find(i => i % 2 == 0) // => 2: find first element satisfy the predicate
arr.filter(i => i % 2 == 0) // [2]: find all elements satisfy the predicate
arr.findIndex(i => i == 2) // 1: find index of element using predicate
arr.indexOf(2) // => 1: find index of element

# remove elements
arr = []
arr.length = 0
```
