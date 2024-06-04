for (let i = 0; i < 5; i++) {
    alert("Q7- " + i);
}

let a_list = [];

for (let i = 0; i < 5; i++) {
    a_list.push(i);
}

alert("Q8- " + a_list);


let b_list = [];

for (let i = 0; i < 20; i++) {
    if (i % 3 == 0) {
        b_list.push(i);
    }
}


alert("Q9- " + b_list);


let q10_num = prompt("Please enter a number between 0 and 100");

while (q10_num < 0 || q10_num > 100) {
    alert("Wrong Entery please try again");
    q10_num = prompt("Please enter a number between 0 and 100");
}

alert("Kfoooo");


let q11_num = Number(prompt("Enter a number"));
let q11_sum = 0;

for (let i = 0; i <= q11_num; i++) {
    q11_sum += i;
}

alert("Q11- the sum from 0 to " + q11_num + " is :" + q11_sum);
