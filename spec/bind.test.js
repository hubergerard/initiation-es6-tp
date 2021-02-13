function getX() {
    return this.x;
}

function getSurface() {
    return this.x * this.y;
}

const contexte = { 
    // TODO : Ajouter dans ce contexte les bons attributs pour rendre les tests passants
};

describe("getX()", () => {

    it("should return x", () => {
        const boundGetX = getX.bind(contexte);
        const x = boundGetX();
        expect(x).toBe(42);
    });

});

describe("getSurface()", () => {

    it("should return surface", () => {
        const boundGetSurface = getSurface.bind(contexte);
        const surface = boundGetSurface();
        expect(surface).toBe(43008);
    });

});


