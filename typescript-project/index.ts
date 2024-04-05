import { add as suma } from "./math";

const world: string = 'world';

function hello(who: string = world): string {
  return `Hello, ${who}!`;
}

console.log(hello()); // Hello, world!
console.log(hello('TypeScript')); // Hello, TypeScript!

console.log(suma(1, 2)); // 3