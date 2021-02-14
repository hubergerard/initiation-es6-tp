const Course = require("../../app/course.model")

describe('Course', () => {

    describe('#display()', () => {

        it('should display course attributes in a sentence', () => {
            const math = new Course('Mathematics', 'Algebra lecture', 1800);

            spyOn(console, 'log');
            math.display();
            expect(console.log).toHaveBeenCalledWith('Mathematics course (1800€): Algebra lecture');
        })

        it('should display invalid in a sentence', () => {
            const invalidCourse = new Course();

            spyOn(console, 'error');
            invalidCourse.display();
            expect(console.error).toHaveBeenCalledWith('INVALID COURSE');
        })

    })

    describe('#isValid()', () => {

        it('should return true when price and title are set', () => {
            const math = new Course('Mathematics', 'Algebra lecture', 1800);
            expect(math.isValid()).toBeTrue();
        })

        it('should return false when title is not set', () => {
            const untitledCourse = new Course(undefined, 'This class is untitled', 1800);
            expect(untitledCourse.isValid()).toBeFalse();
        })

        it('should return false when price is not set', () => {
            const unpricedCourse = new Course('Unpriced', 'This course is unpriced', undefined);
            expect(unpricedCourse.isValid()).toBeFalse();
        })

    })

})