var a = 10;
var a = 20;

// let b = 4;
//  b ="asad";
// if(true){
//     let b = 30;
//     let b = 20;

// }
// let,const
// const pi;
// pi=30;
// let b;
// b=20;


// arrow function
// es5
// /function test() {
// return "hello0";
// }

// const abc = () => "hello";
// alert(abc())

// let sum = (a, b) => {
//     a = a * 5
//     b = b * 5;
//     return a + b
// }

// let res = sum(4, 5)
// console.log(res)
// for  var i=0;i<arr.length
// if(){}
// ? :



// let array = [1, 2, 4, 6, 5, 7]
// array.map((value,index) => {
//     console.log("smit "+value)
//     return

// })

// let age =[20,4,56,89,90,45,50]

// let filterAge = age.filter((v)=>v>20 && v<50)
// console.log(filterAge)

// age greater then 20 or name : ali
// course : wma

// let button = document.getElementsByTagName("button")

// button[0].addEventListener("click", () => {
//     let array = [
//         { name: "ali omer", age: 60, course: "wma" },
//         { name: "omer", age: 20, course: "cco" },
//         { name: "saqib", age: 40, course: "ccna" },
//         { name: "baber", age: 10, course: "wma" },
//         { name: "ali khan", age: 15, course: "cco" },

//     ]

//     let newarr = array.filter((value) => (value.age > 20 && value.name == "ali") || value.course == "wma")
//     console.log(newarr)

//     const excelData = newarr.map((student, index) => ({
//         "S.NO": index + 1,
//         "Student name ":student.name,
//         "Age" : student.age,
//         "Course name": student.course 
//     }))

//     const worksheet = XLSX.utils.json_to_sheet(excelData)
//     worksheet["!cols"]=[
//         {wch :8},
//         {wch :25},
//         {wch :10},
//         {wch :25},


//     ]
//     const workbook = XLSX.utils.book_new()

//     XLSX.utils.book_append_sheet(workbook, worksheet, "Filter User")

//     XLSX.writeFile(workbook, "students.xlsx")





//     //function call
//     // functionname()
//     // functionname
// })


// destructing object and array 

// let marks = [20,30,40,50]
// let [,emp1,emp2,emp3,emp4,,emp6]= marks

// var [ENGLISH,MATH]= marks
// let ENGLISH=40;
// console.log(ENGLISH) //40
// console.log(MATH) //40
// console.log(marks[2])
// console.log(marks[3])

// let studentData = {
//     std: {
//         stdName: "Ali",
//         classNew: 12,
//         rollNo: 102,
//         course :["wma","cco"]

//     },
//       std2: {
//         stdName: "Ali",
//         classNew: 12,
//         rollNo: 102,
//         course :["wma","cco"]

//     },
// }

// let { std } = studentData
// let {stdName,rollNo,course}= std
// let [c1,c2]= course
// console.log(stdName,rollNo,course,c1,c2)

// let data1 =[10,20,30]
// let data2 =[10,20,70]
// let data3 =[40,60,80]

// let finaldata = [...data1,...data2,...data3]
// console.log(finaldata.length)

// let sum = (...numb) => {
//     console.log("***********************")
//     let sum = 0;
//     for (var index in numb) {
//         // sum = sum + numb[index]
//         console.log(index)
//     }
//     // for (var value of numb) {
//     //     sum = sum + value
//     // }
//     // console.log(sum)
// }

// sum(10)
// sum(10, 20)
// sum(5, 5, 5, 5, 5, 5, 5)

// let data2 =[10,20,70]
// let data3 =[40,60,80]

// let array =["ali","omer","asad","ali","omer","ali"]
// for(var value of array){
//     if(value=="ali"){
//          console.log(value)
//     }

// }
// for(var index in array){
//     if(array[index]=="ali"){
//         console.log(array[index])
//         console.log(index)
//     }
// }

// high Order Function
// function accept function as arrugmnets  or call function 

// let  applyDiscount=(price,discountFunction)=>{
//    return  discountFunction(price)    
// }

// let specialDiscountFunction=(price)=>{
//     return price* 0.9;

// }

// let regularFunction=(price)=>{
//     return price* 0.5;
// }

// let user1 = applyDiscount(50,specialDiscountFunction)
// let user2 = applyDiscount(50,regularFunction)

// console.log(user1)
// console.log(user2)


// Promise : reject ,resolve 
// async await 

// try,catch => create code safe zone
// then catch =>promise =>api (promise)

// try{}
// catch{}
try{
    let a = 10;
    console.log(a)
    console.log(b)
}
catch(e){
    console.log(e)
}

// let promise = new Promise((resolve, reject) => {
//     let success = false
//     if (success == true) {
//         let array =[1,1,2,3,4]
//         resolve(array)
//     }
//     else {
//         reject("New error")
//     }
// })


// promise
// .then((db)=>{
//     console.log(db)

// })
// .catch((e)=>{
//     console.log(e)

// })