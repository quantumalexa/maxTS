// // // Exercise 1
// // function Car(name) {
// //     this.name = name;
// //     this.acceleration = 0;
// //
// //     this.honk = function() {
// //         console.log("Toooooooooot!");
// //     };
// //
// //     this.accelerate = function(speed) {
// //         this.acceleration = this.acceleration + speed;
// //     }
// // }
// // var car = new Car("BMW");
// // car.honk();
// // console.log(car.acceleration);
// // car.accelerate(10);
// // console.log(car.acceleration);
//
// class Car {
//     public acceleration = 0;
//     constructor(private name:string){};
//
//     honk():void {
//         console.log("Toooooooooot!");
//     };
//
//     accelerate(speed: number):void  {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(20);
// console.log(car.acceleration);
//
// // // Exercise 2
// // var baseObject = {
// //     width: 0,
// //     length: 0
// // };
// // var rectangle = Object.create(baseObject);
// // rectangle.width = 5;
// // rectangle.length = 2;
// // rectangle.calcSize = function() {
// //     return this.width * this.length;
// // };
// // console.log(rectangle.calcSize());
// //
//
// class baseObject {
//     width:number = 0;
//     length:number = 0;
//
//     calcSize():number {
//         return this.width * this.length;
//     }
// };
// var rectangle = new baseObject();
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());
//
//
//
// class BaseObject {
//     width = 0;
//     length = 0;
// }
//
// class Rectangle extends BaseObject{
//     calcSize() {
//         return this.width * this.length;
//     }
// }
//
// var rectangle = new Rectangle();
// rectangle.width = 5;
// rectangle.length = 10;
// console.log(rectangle.calcSize());
// // // Exercise 3
// // var person = {
// //     _firstName: ""
// // };
// // Object.defineProperty(person, "firstName", {
// //     get: function () {
// //         return this._firstName;
// //     },
// //     set: function (value) {
// //         if (value.length > 3) {
// //             this._firstName = value;
// //         }
// //         else {
// //             this._firstName = "";
// //         }
// //     },
// //     enumerable: true,
// //     configurable: true
// // });
// // console.log(person.firstName);
// // person.firstName = "Ma";
// // console.log(person.firstName);
// // person.firstName = "Maximilian";
// // console.log(person.firstName);
//
// class PersonExercise3  {
//     private _firstName:string = ""
//     get firstName():string{return this._firstName;}
//     set firstName(value:string){
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     }
// };
// let persone3 = new PersonExercise3();
// console.log(persone3.firstName);
// persone3.firstName = "Ma";
// console.log(persone3.firstName);
// persone3.firstName = "Maximilian";
// console.log(persone3.firstName);
//
