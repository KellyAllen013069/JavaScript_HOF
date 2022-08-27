console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(num) {
    return (plusNumber) => {
        return num + plusNumber;

    }
}

let plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

 /*  function printName((user) => {
    console.log(user.name);
  } */

  users.forEach((user) => {
    console.log(`Hello ${user.name}`);
  });


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

/* function trimUser(user) {
    return {
        name: user.name,
        score: user.score,
    }
} */

let userScores = users.map((user) => {
    return {
        name: user.name,
        score: user.score,
    }

});

console.log(userScores);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let usersActive = users.filter((user) => {
    return user.isActive;
});

console.log(usersActive);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");


let usersSorted = users.sort((userA, userB) => {

    if (userA.score < userB.score) {
        return 1;
    }
    if (userA.score > userB.score) {
        return -1;
    }
    return 0;
});

console.log(usersSorted);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

/* function reduceSum(sum, user) {
    return sum + user.score;
}

let sumScores = users.reduce(reduceSum,0); */

let sumScores = users.reduce((sum, user) => {
    return sum + user.score;
},0); 

console.log(`Sum of scores: ${sumScores}`);
console.log(`Avg user score: ${sumScores / users.length}`);   