
/**
 * TODO : Coder l'intérieur de myFilter pour rendre les tests passants
 * myMap() est ajoutée aux méthodes de la classe Array. Elle est donc utilisable depuis n'importe quelle instance de tableau JS.
 * La méthode myMap() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant. */ 
Array.prototype.myMap = function(mapper) {
    const result = [];
    for (i of this) {
        result.push(mapper(i));
    }
    return result;
}

describe("#myMap()", () => {

    const uppercaseMapper = word => word.toUpperCase();
    const lowercaseMapper = word => word.toLowerCase();
    const lengthMapper = word => word.length;

    it("should return empty table", () => {
        const input = [];
        const result = input.myMap(uppercaseMapper);
        expect(result).toEqual([]);
    });

    it("should return uppercase words", () => {
        const input = ['Bonjour', 'Jean', '23', 'Développeur web'];
        const result = input.myMap(uppercaseMapper);
        expect(result).toEqual(['BONJOUR', 'JEAN', '23', 'DÉVELOPPEUR WEB']);
    });

    it("should return lowercase words", () => {
        const input = ['Bonjour', 'Jean', '23', 'Développeur web'];
        const result = input.myMap(lowercaseMapper);
        expect(result).toEqual(['bonjour', 'jean', '23', 'développeur web']);
    });

    it("should return words length", () => {
        const input = ['Bonjour', 'Jean', '23', 'Développeur web'];
        const result = input.myMap(lengthMapper);
        expect(result).toEqual([7, 4, 2, 15]);
    });

});


