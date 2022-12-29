const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Bannana, kiwi, apple, orange, etc, Apple';

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
