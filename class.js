// class
// class Build {
//     constructor(name) {
//         this.name = name;
//     }
//     log() {
//         console.log(`display: ${this.name}`)
//     }
// }
// let build = new Build("sanni".toUpperCase())
// build.log()

// class Build {
//     constructor(name, age, score) {
//         this.name = name
//         this.age = age
//         this.score = score
//         this.score1 = score1
//     }
// }

// function add () {
//     const moji = {name: "sanni", age: 11, score: 101 }
//     const moji1 = {name: "sanni", age: 11, score: 102 }
//     const moji2 = {name: "sanni", age: 11, score: 105 }

//     let el = []

//     el.push(moji, moji1, moji2)

//     let sum = 0;
//     el.forEach((Element) => {
//         sum += Element.score;
//     })

//     console.log(sum);

// }
// add()


// let newarr = [1,2,3]
// let newarr1 =  {name: "peter", age: 20, score: 39}
// let newarr2 =  {name: "peter", age: 59, score: 10}

// for (let i in newarr1) {
//     console.log(newarr2[i]);
// }


// class NewBuild {
//     constructor (x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     sum() {
//         return this.x * this.y;
//     }
// }

// let newBuild = new NewBuild(5, 5)

// console.log(newBuild.sum());




// // asss
// function distance(point1, point2, x0, y0) {
//     return ((Math.abs((point2.y - point1.y) * x0 - 
//                      (point2.x - point1.x) * y0 + 
//                      point2.x * point1.y - 
//                      point2.y * point1.x)) /
//             (Math.pow((Math.pow(point2.y - point1.y, 2) + 
//                        Math.pow(point2.x - point1.x, 2)), 
//                       0.5)));
// }

// console.log(distance(point1));


function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

console.log(getDistance(34, 34, 22, 11));


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
 
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
 
let p1 = new Point(1, 3);
let p2 = new Point(5, -1);
 
 
console.log(p1);
console.log(p2);
console.log(Point.distance(p1, p2));