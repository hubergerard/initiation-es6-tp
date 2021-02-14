/**
 * TODO : Coder l'intérieur de myFilter pour rendre les tests passants
 * myFilter() est ajoutée aux méthodes de la classe Array. Elle est donc utilisable depuis n'importe quelle instance de tableau JS.
 * La méthode myFilter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback. */ 
Array.prototype.myFilter = function(predicate) {
    const result = [];
    for (i of this) {
        if (predicate(i)) {
            result.push(i);
        }
    }
    return result;
}

describe("myFilter()", () => {

    const positivePredicate = number => number > 0;
    const negativePredicate = number => number < 0;
    const evenPredicate = number => number % 2 === 0;
    const oddPredicate = number => number % 2 !== 0;

    it("should return empty table", () => {
        const input = [];
        const result = input.myFilter(positivePredicate);
        expect(result).toEqual([]);
    });

    it("should return positive numbers", () => {
        const input = [-1, 5, 8, -9, -10, 3];
        const result = input.myFilter(positivePredicate)
        expect(result).toEqual([5, 8, 3]);
    });

    it("should return negative numbers", () => {
        const input = [-1, 5, 8, -9, -10, 3];
        const result = input.myFilter(negativePredicate);
        expect(result).toEqual([-1, -9, -10]);
    });

    it("should return even numbers", () => {
        const input = [-1, 5, 8, -9, -10, 3];
        const result = input.myFilter(evenPredicate);
        expect(result).toEqual([8, -10]);
    });

    it("should return odd numbers", () => {
        const input = [-1, 5, 8, -9, -10, 3];
        const result = input.myFilter(oddPredicate);
        expect(result).toEqual([-1, 5, -9, 3]);
    });
});


