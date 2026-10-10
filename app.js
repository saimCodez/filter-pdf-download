// js :

// var a = 10;
// var a = 20;

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

let button = document.getElementsByTagName("button");

button[0].addEventListener("click", () => {
    let array = [
        { name: "ali omer", age: 60, course: "wma" },
        { name: "omer", age: 20, course: "cco" },
        { name: "saqib", age: 40, course: "ccna" },
        { name: "baber", age: 10, course: "wma" },
        { name: "ali khan", age: 15, course: "cco" },
    ];

    let newarr = array.filter((value) =>
        (value.age > 20 && value.name == "ali") || value.course == "wma"
    );

    console.log(newarr);

    const excelData = newarr.map((student, index) => ({
        "S.NO": index + 1,
        "Student name ": student.name,
        "Age": student.age,
        "Course name": student.course
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);

    worksheet["!cols"] = [
        { wch: 8 },
        { wch: 25 },
        { wch: 10 },
        { wch: 25 },
    ];

    // Styling
    const range = XLSX.utils.decode_range(worksheet["!ref"]);

    for (let row = range.s.r; row <= range.e.r; row++) {
        for (let col = range.s.c; col <= range.e.c; col++) {
            let cell = worksheet[XLSX.utils.encode_cell({ r: row, c: col })];

            if (!cell) continue;

            cell.s = {
                font: {
                    bold: row === 0,
                    color: { rgb: row === 0 ? "FFFFFF" : "222222" }
                },
                fill: {
                    fgColor: {
                        rgb: row === 0 ? "15803D" : (row % 2 === 0 ? "F0FDF4" : "FFFFFF")
                    }
                },
                alignment: {
                    vertical: "center",
                    horizontal: "left"
                },
                border: {
                    bottom: { style: "thin", color: { rgb: "DDDDDD" } }
                }
            };
        }
    }

    worksheet["!rows"] = [{ hpt: 25 }];

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Filter User");

    XLSX.writeFile(workbook, "students.xlsx");
});