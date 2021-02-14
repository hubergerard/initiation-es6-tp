const Student = require('../../app/student.model');
const Course = require('../../app/course.model');

describe('Student', () => {
    
    const math = new Course("Mathématiques", "Cours d'algèbre", 1800);
    const java = new Course("Java", "Apprenez les fondamentaux de Java", 2400);
    const angular = new Course("Angular", "Apprenez les fondamentaux d'Angular'", 1800);
    const codewiseSchool = "CodeWise";

    describe('#constructor()', () => {

        it("should initialize moneyAmount to 10000 and set attributes", () => {
            const student = new Student(20, codewiseSchool, [math, java]);

            expect(student.moneyAmount).toBe(10000);
            expect(student.school).toBe(codewiseSchool);
            expect(student.courses).toEqual([math, java]);
        });

    })

    describe('#buyCourse()', () => {

        it("should add course and remove money", () => {
            const student = new Student(20, codewiseSchool, [math, java]);
            student.buyCourse(angular);
            expect(student.moneyAmount).toBe(10000 - angular.price);
            expect(student.courses.length).toBe(3);
            expect(student.courses.filter(course => course.title === angular.title).length).toBe(1);
        });

        it("should not change anything if the student doesnt have enough money", () => {
            const student = new Student(20, codewiseSchool, [math, java]);
            student.moneyAmount = 1000;
            student.buyCourse(angular);
            expect(student.moneyAmount).toBe(1000);
            expect(student.courses.length).toBe(2);
            expect(student.courses.filter(course => course.title === angular.title).length).toBe(0);
        });

    })

    describe('#refundCourseByTitleContains()', () => {

        it("should remove course and refund money", () => {
            const student = new Student(20, codewiseSchool, [math, java]);
            student.refundCourseByTitleContains('Jav');
            expect(student.moneyAmount).toBe(10000 + java.price);
            expect(student.courses.length).toBe(1);
            expect(student.courses.filter(course => course.title === java.title).length).toBe(0);
        });

        it("should not change anything if the student doesnt have the course", () => {
            const student = new Student(20, codewiseSchool, [math, java]);
            student.refundCourseByTitleContains('Angular');
            expect(student.moneyAmount).toBe(10000);
            expect(student.courses.length).toBe(2);
        });

    })

    describe('#displayAmount()', () => {

        it('should display amount in a sentence', () => {
            const student = new Student(20, codewiseSchool, [math, java]);

            spyOn(console, 'log');
            student.displayAmount();
            expect(console.log).toHaveBeenCalledWith('You have 10000€ left on your student account.');
        })

    })

    describe('#displayCourses()', () => {

        it('should call display method for each course', () => {
            const student = new Student(20, codewiseSchool, [math, java]);

            spyOn(math, 'display');
            spyOn(java, 'display');
            student.displayCourses();
            expect(math.display).toHaveBeenCalledTimes(1);
            expect(java.display).toHaveBeenCalledTimes(1);
        })

        it('should output nothing if the Student has no course', () => {
            const student = new Student(20, codewiseSchool, []);

            spyOn(console, "log");
            student.displayCourses();
            expect(console.log).toHaveBeenCalledTimes(0);
        })

    })
})