// -------------------------- Home work#7 --------------------------
// -------------------------- Vasilenko Max --------------------------

// Destruction properties.Tasks
// Task#1

function newObj() {
    let [a, ...rest] = arguments;
    let newObj = {
        first: a,
        othets: rest
    };
    return newObj
}

//Task#2

const organisation = {
    name: 'Google',
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};

function getInfo({name: org ='unknown',info:{partners: [a, b]}}) {
    return console.log(`Name: ${org}, Partners: ${a},${b}`)
}

// Arrow Func.Tasks
// Task#1

const sum = (...params) => {
    if (!params) return 0;
    return params.reduce((prev,next) => prev + next)
};



