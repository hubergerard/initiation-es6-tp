class Course {
    title;
    description;
    price;

    constructor(title, description, price) {
        this.description = description;
        this.title = title;
        this.price = price;
    }

    /**
     * TODO : Coder la méthode display()
     * La méthode display() affiche une phrase descriptive du cours dans les logs de la console si le cours est valide
     * Si le cours est invalide, elle affiche 'INVALID COURSE' dans les logs d'erreur de la console  
     */
    display() {
    }

    /**
     * TODO : Coder la méthode isValid()
     * La méthode isValid() renvoie true si le cours possède un titre et un prix.
     * Elle renvoie false dans le cas contraire.
     */
    isValid() {
    }
}

module.exports = Course;