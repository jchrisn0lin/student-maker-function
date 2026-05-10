const studentMaker = (name, GPA) => {
    return {
        name: name,
        GPA: GPA,
        calculateHonors: function() {
            //Throw error for GPA if NaN
            const GPANum = Number(this.GPA);
            if (Number.isNaN(GPANum)) {
                throw new TypeError('Invalid GPA: GPA must be a number');
            }
            //Return honors by result
            if (GPANum < 3.5) {
                return 'no honors';
            } else if (GPANum >= 3.5 && GPANum < 3.8) {
                return 'cum laude';
            } else if (GPANum >= 3.8 && GPANum < 4.0) {
                return 'magna cum laude';
            } else {
                return 'summa cum laude';
            }

            /* 
            if (this.GPA < 3.5) {
                return 'no honors'.toUpperCase();
            } else if (this.GPA >= 3.5 && this.GPA < 3.8) {
                return 'cum laude'.toUpperCase();
            } else if (this.GPA >= 3.8 && this.GPA < 4.0) {
                return 'magna cum laude'.toUpperCase();
            } else {
                return 'summa cum laude'.toUpperCase();
            }
            */
        }
    };
}

const student1 = studentMaker('Joey', 3.6);
const student2 = studentMaker('Cassie', 4.0);
const student3 = studentMaker('Helena', 2.5);
const student4 = studentMaker('Raoul', 3.0);
const student5 = studentMaker('Jack', 2.9);
const student6 = studentMaker('Miran', 3.8);

//Log student list with object
/*
let studentsList = [];

const data1 = Object.values(student1);
const data2 = Object.values(student2);
const data3 = Object.values(student3);
const data4 = Object.values(student4);
const data5 = Object.values(student5);
const data6 = Object.values(student6);

const studentsObj = {
    students: [   
        data1,
        data2,
        data3,
        data4,
        data5,
        data6
        ],
    makeStudentsList() {
        for (let i = 0; i < this.students.length; i++) {
            studentsList += this.students[i];
        };
        console.log(studentsList);
     }
};   
studentsObj.makeStudentsList();


for (key in studentsObj) {
    studentsList += studentsObj[key];
    key++
};
console.log(studentsList);
*/

//Display honors' calculation per student
/*
const displayResults = (studentNum) => {
    console.log(`The student's result is: ${studentNum.calculateHonors()}`);
};

displayResults(student4);
*/