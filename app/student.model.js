class Student {
    courses;
    school;
    age;
    moneyAmount;

    /**
     * TODO: Coder le constructeur. Il assigne les valeurs passées en paramètre aux attributs correspondants
     * et initialise l'attribut moneyAmount à 10000€.
     * @param {Number} age 
     * @param {String} school 
     * @param {Course[]} freeCourses 
     */
    constructor(age, school, freeCourses) {
        this.age = age;
        this.school = school;
        this.courses = freeCourses;
        this.moneyAmount = 10000;
    }

    /**
     * TODO: Coder la méthode buyCourse()
     * La méthode buyCourse() prend un objet de classe Course en paramètre et l'ajoute à la liste des cours du Student.
     * Le Student voit alors son moneyAmount diminuer du prix du Course acheté.
     * Si le Student n'a pas assez d'argent pour acheter le cours, la transaction ne doit pas avoir lieu.
     * @param {Course} course 
     */
    buyCourse(course) {
        if (this.moneyAmount > course.price) {
            this.courses.push(course);
            this.moneyAmount -= course.price;
        }
    }

    /**
     * TODO: Coder la méthode refundCourseByTitleContains()
     * La méthode refundCourseByTitleContains() prend en paramètre un extrait de titre.
     * Si le Student possède un cours dont le titre contient la string passée dans title
     * Alors le cours est retiré de l'attribut courses et son prix est rendu au Student.
     * Indice : Utiliser findIndex()
     * @param {String} title
     */
    refundCourseByTitleContains(title) {
        const courseIndex = this.courses.findIndex((course) => course.title.includes(title));
        if (courseIndex !== -1) {
            this.moneyAmount += this.courses[courseIndex].price;
            this.courses.splice(courseIndex, 1);
        }
    }

    /**
     * TODO: Coder la méthode displayAmount()
     */
    displayAmount() {
        console.log(`You have ${this.moneyAmount}€ left on your student account.`)
    }

    /**
     * TODO: Coder la méthode displayCourses
     * La méthode displayCourses() parcourt les cours du Student 
     * et appelle la méthode display() de chacun de ces cours.
     */
    displayCourses() {
        for (const course of this.courses){
            course.display();
        }
    }
}

module.exports = Student;