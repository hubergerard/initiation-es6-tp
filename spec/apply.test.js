function sum(...numbers) {
    let sum = this.offset;
    for (i of numbers) {
        sum += i;
    }
    return sum;
}

// Exemple d'utilisation
var exemple = sum(10, 10, 20, 10); // returns 50

const context = { 
    offset: 100
};

describe("#sum()", () => {

    const numbers = [1,2,3,4,5,6,7,8,9,0];
    it("should return offset sum", () => {
        // TODO : Remplace le null par un appel à la fonction sum, en utilisant la méthode 
        // apply() pour lui passer le contexte et les paramètres sous forme de tableau
        const result = null;
        expect(result).toBe(1+2+3+4+5+6+7+8+9+100);
    });

});


