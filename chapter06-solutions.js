// A Vector Type

class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    plus(vector) {
        this.x += vector.x
        this.y += vector.y
        return {x: this.x, y: this.y}
    }
    
    minus(vector) {
        this.x -= vector.x
        this.y -= vector.y  
        return {x: this.x, y: this.y}
    }

    get length() {
        return Math.sqrt( (this.x ** 2) + (this.y ** 2))
    }
}

// Your code here.

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// Groups

class Group {
    constructor() {
        this.array = []
    }

    add(item) {
        if (!this.has(item)) {
            this.array.push(item)
        }
    }

    delete(item) {
        if(this.array.includes(item)) {
            this.array = this.array.splice(item, 1)
        }
    }

    has(item) {
        return this.array.includes(item)
    }

    static from(collection) {
        // Create a new instance of the class
        let group = new Group;
        // Iterate over it and put it into the array
        collection.forEach(item => group.add(item))
        return group;    
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Group Iterator

class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  
    [Symbol.iterator]() {
      return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group
        this.position = 0
    }

    next() {
        if (this.position === this.group.members.length) {
            return { done: true }
        } else {
            let result = { value: this.group.members[this.position], done: false}
            this.position++
            return result
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c
  

// Borrowing a method

let map = {
    one: true, 
    two: true, 
    [hasOwnProperty](item) {
        return item ? true : false
}};

console.log(map.hasOwnProperty("one"));
// → true